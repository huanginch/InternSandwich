//封裝express後端路由
const { Router } = require('express');
const router = Router();
const {db} = require('./db/db.js');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userMiddleware = require('./middleware/users.js');
const companyMiddleware = require('./middleware/company.js');

//首頁貼文
router.get('/posts', (req, res, next) => {
  var sql = 'select * from intern_post';

  db(sql)
  .then(results =>{
    res.send(results);
  })
  .catch(err =>{
    res.status(500).send("err:",err)
  })
})

//取得實習生資訊
router.get('/resume', (req, res, next) => {
  var sql = 'select resume.ID, resume.u_id, name, id_card, birth, gender, phone, school, user_info.email, exp_position, exp_treatment, exp_location, edu_and_exp, skills, others from resume INNER JOIN user_info ON resume.u_id = user_info.ID';

  db(sql)
  .then(results =>{
    res.send(results);
  })
  .catch(err =>{
    res.status(500).send("err:",err)
  })
})

//更新觀看次數
router.post('/add-counter', (req, res, next) => {
  const sqlparams = [escape(req.body.counter), escape(req.body.p_id)];
  var sql = 'UPDATE intern_post set counter = ? WHERE id = ?';

  db(sql,sqlparams)
  .then(results =>{
    //res.send({msg:"完成觀看次數更新!"});
  })
  .catch(err =>{
    res.status(500).send("err:",err)
  })
})

//取得前五筆熱門貼文
router.get('/show-top5', (req, res, next) => {
  var sql = 'select * from intern_post ORDER BY counter DESC limit 5';

  db(sql)
  .then(results =>{
    res.send(results);
  })
  .catch(err =>{
    res.status(500).send("err:",err)
  })
})

//取得貼文評論
router.get('/show-comments', (req, res, next) => {
  var sqlparams = req.query.p_id;
  var sql = 'select * from comment WHERE P_ID = ?';

  db(sql,sqlparams)
  .then(results =>{
    res.send(results);
  })
  .catch(err =>{
    res.status(500).send("err:",err)
  })
})

//留下評論
router.post('/comment', (req, res, next) => {
  const sqlparams = [escape(req.body.p_id), escape(req.body.u_id), req.body.context];
  var sql = 'INSERT INTO comment (P_ID, U_ID, context) VALUES (?, ?, ?);';

  db(sql,sqlparams)
  .then(results =>{
    res.send({msg:"留言成功"});
  })
  .catch(err =>{
    res.status(500).send("err:",err)
  })
})

//修改留言
router.patch('/modify-comment', (req, res, next) => {
  const sqlparams = [req.body.context, escape(req.body.ID)];
  var sql = 'UPDATE comment set context = ? WHERE ID = ? ';

  db(sql,sqlparams)
  .then(results =>{
    res.send({msg:"修改留言成功"});
  })
  .catch(err =>{
    res.status(500).send("err:",err)
  })
})

//刪除留言
router.delete('/delete-comment', (req, res, next) => {
  const sqlparams = req.body.ID;
  var sql = 'DELETE FROM comment WHERE ID = ?';

  db(sql,sqlparams)
  .then(results =>{
    res.send({msg:"刪除留言成功"});
  })
  .catch(err =>{
    res.status(500).send("err:",err)
  })
})

//一般使用者登入
router.post('/user-login', (req, res, next) => {
  const params = escape(req.body.email);
  const sql = 'SELECT * FROM user_info WHERE email = ?'
  db(sql,params)
  .then(results =>{
    if(!results.length){
      res.status(401).send({msg:"email錯誤"})
    }

    bcrypt.compare(
      req.body.password,
      results[0]['password'],
      function (bErr, bResult) {
        if (bErr) {
         return res.status(401).send({msg:"密碼錯誤"});
        }
        if (bResult) {
          const token = jwt.sign({
              account: results[0]['email'],
              userId: results[0]['ID']
            },
            'SECRETKEY', {
              expiresIn: '7d'//token時效
            });

           return res.status(200).send({
              msg: '登入成功!',
              token,
              user: results[0]
            });
          }

        return res.status(401).send({msg:"密碼錯誤"});
        }
    );
  })
  .catch(err =>{
    res.status(400).send("err:",err)
  })
})

//一般使用者註冊
router.post('/user-register', userMiddleware.validateRegister, (req, res, next) => {
  const params = [escape(req.body.email), escape(req.body.email)];
  //var sql = "SELECT * FROM user_info WHERE Account = ?"
  var sql = "SELECT email FROM user_info WHERE user_info.email = ? UNION SELECT email FROM company_info WHERE company_info.email = ?"
  db(sql, params)
  .then(results =>{
    if (results.length) {
      res.status(409).send({msg:"此帳號已被使用"});
    }
    else{
      // email is available
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          res.status(500).send({msg: err}); 
        } 
        else {
          // has hashed pw => add to database
          const params = [escape(req.body.name), req.body.gender, escape(req.body.phone), escape(req.body.email), hash, escape(req.body.id_card), req.body.birth, req.body.school];
          sql = "INSERT INTO user_info (name, gender, phone, email, password, id_card, birth, school) VALUES (?, ?, ?, ?, ?, ?, ?, ?);"
          db(sql,params)
          .then(result => {
            res.status(201).send({msg:"註冊成功"})
          })
          .catch(err =>{
            res.status(400).send("err:",err)
          })
        }
      })
    }
  })
  .catch(err =>{
    res.status(400).send("err:",err)
  })
})

//企業登入
router.post('/company-login', (req, res, next) => {
  const params = escape(req.body.email);
  const sql = 'SELECT * FROM company_info WHERE email = ?'
  db(sql,params)
  .then(results =>{
    if(!results.length){
      res.status(401).send({msg:"email錯誤"})
    }

    bcrypt.compare(
      req.body.password,
      results[0]['password'],
      function (bErr, bResult) {
        if (bErr) {
         return res.status(401).send({msg:"密碼錯誤"});
        }
        if (bResult) {
          const token = jwt.sign({
              account: results[0]['email'],
              userId: results[0]['ID']
            },
            'SECRETKEY', {
              expiresIn: '7d'//token時效
            });

           return res.status(200).send({
              msg: '登入成功!',
              token,
              user: results[0]
            });
          }

        return res.status(401).send({msg:"密碼錯誤"});
        }
    );
  })
  .catch(err =>{
    res.status(400).send("err:",err)
  })
})

//企業註冊
router.post('/company-register', companyMiddleware.validateRegister, (req, res, next) => {
  const params = [escape(req.body.email), escape(req.body.email)];
  var sql = "SELECT email FROM company_info WHERE company_info.email = ? UNION SELECT email FROM user_info WHERE user_info.email = ?"
  db(sql, params)
  .then(results =>{
    if (results.length) {
      res.status(409).send({msg:"此帳號已被使用"});
    }
    else{
      // email is available
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          res.status(500).send({msg: err}); 
        } 
        else {
          // has hashed pw => add to database
          const params = [escape(req.body.name), req.body.address, escape(req.body.phone), escape(req.body.email), hash];
          sql = "INSERT INTO company_info (name, address, phone, email, password) VALUES (?, ?, ?, ?, ?);"
          db(sql,params)
          .then(result => {
            res.status(201).send({msg:"註冊成功"})
          })
          .catch(err =>{
            res.status(400).send("err:",err)
          })
        }
      })
    }
  })
  .catch(err =>{
    res.status(400).send("err:",err)
  })
})

//取得收藏貼文
router.get('/show-save', (req, res, next) => {
  const params = escape(req.query.u_id);
  var sql = "SELECT id, u_id, save.p_id, title, cp_name, job_desc FROM save INNER JOIN intern_post ON save.p_id = intern_post.id WHERE u_id = ?"
  db(sql, params)
  .then(results =>{
    res.send(results);
  })
  .catch(err =>{
    res.status(500).send("err:",err)
  })
});

//收藏貼文
router.post('/save', userMiddleware.isLoggedIn, (req, res, next) => {
  const params = [escape(req.body.p_id), escape(req.body.u_id)];
  var sql = "SELECT * FROM save WHERE p_id = ? AND u_id = ?"
  db(sql, params)
  .then(results =>{
    if (results.length) {
      res.status(409).send({msg:"已收藏"});
    }
    else{
      const sql = 'INSERT INTO save (p_id, u_id) VALUES (?, ?);'
      db(sql,params)
      .then(results =>{
        res.status(200).send({msg:"收藏成功"})      
      })
      .catch(error =>{
        res.status(400)
      })
    }
  })
  .catch(err =>{
    res.status(400).send("err:",err)
  })
});

//取消收藏
router.delete('/unsave', (req, res, next) => {
  const sqlparams = [req.body.u_id, req.body.p_id];
  var sql = 'DELETE FROM save WHERE u_id = ? AND p_id = ?';

  db(sql,sqlparams)
  .then(results =>{
    res.send({msg:"取消收藏成功"});
  })
  .catch(err =>{
    res.status(500).send("err:",err)
  })
})

router.get('/secret-route', userMiddleware.isLoggedIn, (req, res, next) => {
  console.log(req.userData);
  res.send('This is the secret content. Only logged in users can see that!');
});

module.exports = router
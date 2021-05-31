//封裝express後端路由
const { Router } = require('express');
const router = Router();
const {db} = require('./db/db.js');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userMiddleware = require('./middleware/users.js');
const companyMiddleware = require('./middleware/company.js');
const postMiddleware = require('./middleware/posts.js');
const e = require('express');

//首頁貼文(爬蟲貼文)
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

//首頁貼文(公司貼文)
router.get('/company_posts', (req, res, next) => {
  var sql = 'select company_post.id, name as cp_name, cp_id, type, title, job_desc, counter from company_post INNER JOIN company_info ON company_post.cp_id = company_info.ID AND company_post.is_del = 0';

  db(sql)
  .then(results =>{
    res.send(results);
  })
  .catch(err =>{
    res.status(500).send("err:",err)
  })
})

//取得企業資訊
router.get('/company/:cp_id', (req, res, next) => {
  var params = req.params.cp_id
  var sql = 'select ID, name, address, phone, email from company_info WHERE ID = ? AND is_del = 0 ';

  db(sql,params)
  .then(results =>{
    res.send(results);
  })
  .catch(err =>{
    res.status(500).send("err:",err)
  })
})

//取得單一企業發布過的所有貼文
router.get('/company/:cp_id/cp_posts', (req, res, next) => {
  var params = req.params.cp_id
  var sql = 'select * from company_post WHERE cp_id = ? AND is_del = 0';

  db(sql,params)
  .then(results =>{
    res.send(results);
  })
  .catch(err =>{
    res.status(500).send("err:",err)
  })
})

//取得單一企業單一貼文
router.get('/company/cp_posts/:post_id', (req, res, next) => {
  var params = req.params.post_id
  var sql = 'select * from company_post WHERE id = ? AND is_del = 0';

  db(sql,params)
  .then(results =>{
    res.send(results);
  })
  .catch(err =>{
    res.status(500).send("err:",err)
  })
})

//發布貼文
router.post('/company/:cp_id/cp_posts', postMiddleware.validatePost, (req, res, next) => {
  var params = [req.params.cp_id, req.body.type, req.body.title, req.body.requirement, req.body.benefits, req.body.job_desc, req.body.city, req.body.location, req.body.others]
  var sql = 'INSERT INTO company_post (cp_id, type, title, requirement, benefits, job_desc, city, location, others) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);';

  db(sql, params)
  .then(results =>{
    res.send({msg: "發文成功"});
  })
  .catch(err =>{
    res.status(500).send("err:",err)
  })
})

//刪除已發布貼文
router.delete('/company/:cp_id/cp_posts', (req, res, next) => {
  var params = req.body.id
  var sql = 'UPDATE company_post SET is_del = 1 WHERE id = ?';

  db(sql, params)
  .then(results =>{
    res.send({msg: "刪除成功"});
  })
  .catch(err =>{
    res.status(500).send("err:",err)
  })
})

//修改已發布貼文
router.patch('/company/:cp_id/cp_post/:p_id', (req, res, next) => {
  var sqlparams = [req.body.title, req.body.type, req.body.job_desc, req.body.benefits, req.body.requirement, req.body.city, req.body.location, req.body.others, req.params.p_id]
  var sql = 'UPDATE company_post SET title = ?, type = ?, job_desc = ?, benefits = ?, requirement = ?, city = ?, location = ?, others = ?  WHERE id = ?;'

  db(sql, sqlparams)
  .then(results =>{
    res.send({msg: "修改成功"});
  })
  .catch(err =>{
    res.status(500).send("err:",err)
  })
})

//取得履歷信箱信件
router.get('/company/:cp_id/mails', (req, res, next) => {
  var params = req.params.cp_id
  var sql = 'select user_info.ID, mailbox.p_id, mailbox.u_id, name, id_card, birth, gender, phone, school, email, exp_position, exp_treatment, exp_location, edu_and_exp, skills, others FROM mailbox INNER JOIN user_info ON mailbox.u_id = user_info.ID WHERE cp_id = ? AND mailbox.is_del = 0';

  db(sql, params)
  .then(results =>{
    for(let i=0; i<results.length; i++){
      //性別欄位在資料庫是bool，將bool轉成String
      results[i]["gender"] = results[i]["gender"] ? "女" : "男"
      //生日欄位在資料庫是UTC+0時間，將格式改成yyyy-mm-dd
      var utcbirth = results[i]["birth"]
      var month = Number(utcbirth.getMonth())
      month = (month + 1).toString()
      utcbirth = utcbirth.getFullYear()+"-" + month + "-" + utcbirth.getDate()
      results[i]["birth"] = utcbirth
    }
    res.send(results);
  })
  .catch(err =>{
    res.status(500).send("err:",err)
  })
})

//送出履歷信件
router.post('/company/:cp_id/mails', (req, res, next) => {
  var params = [req.body.p_id, req.body.u_id, req.params.cp_id,req.body.exp_position, req.body.exp_treatment, req.body.exp_location, req.body.edu_and_exp, req.body.skills, req.body.others]
  var sql = 'INSERT INTO mailbox (p_id, u_id, cp_id, exp_position, exp_treatment, exp_location, edu_and_exp, skills, others) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);';

  db(sql, params)
  .then(results =>{
    res.send({msg:"寄送成功"});
  })
  .catch(err =>{
    res.status(500).send({"err":err})
  })
})

//刪除履歷信箱信件
router.delete('/company/:cp_id/mails', (req, res, next) => {
  var params = [req.body.p_id, req.body.u_id]
  var sql = 'UPDATE mailbox SET is_del = 1 WHERE p_id = ? AND u_id = ?';

  db(sql, params)
  .then(results =>{
    res.send({msg:"刪除成功"});
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
    for(let i=0; i<results.length; i++){
      //性別欄位在資料庫是bool，將bool轉成String
      results[i]["gender"] = results[i]["gender"] ? "女" : "男"
      //生日欄位在資料庫是UTC+0時間，將格式改成yyyy-mm-dd
      var utcbirth = results[i]["birth"]
      var month = Number(utcbirth.getMonth())
      month = (month + 1).toString()
      utcbirth = utcbirth.getFullYear()+"-" + month + "-" + utcbirth.getDate()
      results[i]["birth"] = utcbirth
    }
    res.send(results);
  })
  .catch(err =>{
    res.status(500).send("err:",err)
  })
})

//取得單一實習生履歷
router.get('/intern/:u_id/resume', (req, res, next) => {
  var params = req.params.u_id
  var sql = 'select resume.ID, resume.u_id, name, id_card, birth, gender, phone, school, user_info.email, exp_position, exp_treatment, exp_location, edu_and_exp, skills, others from resume INNER JOIN user_info ON resume.u_id = user_info.ID WHERE resume.u_id = ?';

  db(sql, params)
  .then(results =>{
    for(let i=0; i<results.length; i++){
      //性別欄位在資料庫是bool，將bool轉成String
      results[i]["gender"] = results[i]["gender"] ? "女" : "男"
      //生日欄位在資料庫是UTC+0時間，將格式改成yyyy-mm-dd
      var utcbirth = results[i]["birth"]
      var month = Number(utcbirth.getMonth())
      month = (month + 1).toString()
      utcbirth = utcbirth.getFullYear()+"-" + month + "-" + utcbirth.getDate()
      results[i]["birth"] = utcbirth
    }
    res.send(results);
  })
  .catch(err =>{
    res.status(500).send("err:",err)
  })
})

//新增實習生履歷
router.post('/resume', (req, res, next) => {
  const sqlparams = [req.body.user_id, req.body.exp_position, req.body.exp_treatment, req.body.exp_location, req.body.edu_and_exp, req.body.skills, req.body.others];
  var sql = 'INSERT INTO resume (u_id, exp_position, exp_treatment, exp_location, edu_and_exp, skills, others) VALUES (?, ?, ?, ?, ?, ?, ?);';

  db(sql,sqlparams)
  .then(results =>{
    res.send({msg:"新增履歷成功"});
  })
  .catch(err =>{
    res.status(500).send("err:",err)
  })
})

//更新實習生履歷
router.patch('/resume', (req, res, next) => {
  const sqlparams = [req.body.exp_position, req.body.exp_treatment, req.body.exp_location, req.body.edu_and_exp, req.body.skills, req.body.others, req.body.user_id];
  var sql = 'UPDATE resume SET exp_position = ?, exp_treatment = ?, exp_location = ?, edu_and_exp = ?, skills = ?, others = ? WHERE u_id = ?;';

  db(sql,sqlparams)
  .then(results =>{
    res.send({msg:"更新履歷成功"});
  })
  .catch(err =>{
    res.status(500).send("err:",err)
  })
})

//更新觀看次數
router.patch('/add-counter', (req, res, next) => {
  const sqlparams = [escape(req.body.counter), escape(req.body.p_id)];
  //type用來判斷是company_post(type=1)還是intern_post(type=0)
  if(req.body.type === 0)
    var sql = 'UPDATE intern_post set counter = ? WHERE id = ?';
  else
    var sql = 'UPDATE company_post set counter = ? WHERE id = ?';

  db(sql,sqlparams)
  .then(results =>{
    //res.send({msg:"完成觀看次數更新!" + req.body.type});
  })
  .catch(err =>{
    res.status(500).send("err:",err)
  })
})

//取得前五筆熱門貼文
router.get('/show-top5', (req, res, next) => {
  var sql = 'select * from company_post ORDER BY counter DESC limit 5';

  db(sql)
  .then(results =>{
    res.send(results);
  })
  .catch(err =>{
    res.status(500).send("err:",err)
  })
})

//取得貼文評論
router.get('/company/:cp_id/show-comments', (req, res, next) => {
  var sqlparams = req.params.cp_id;
  var sql = 'select * from comment WHERE cp_id = ?';

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
  const sqlparams = [escape(req.body.cp_id), escape(req.body.u_id), req.body.context, req.body.intern_title];
  var sql = 'INSERT INTO comment (cp_id, U_ID, context, intern_title) VALUES (?, ?, ?, ?);';

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
          //將性別由數字(0,1)改成文字(女,男)
          results[0]["gender"] = results[0]["gender"] ? "女" : "男"
          //將生日轉換為當地時區與yyyy-mm-dd格式
          var utcbirth = results[0]["birth"]
          var month = Number(utcbirth.getMonth())
          month = (month + 1).toString()
          utcbirth = utcbirth.getFullYear() + "-" + month + "-" + utcbirth.getDate()
          results[0]["birth"] = utcbirth

          //發行token
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
          const params = [req.body.name, req.body.gender, escape(req.body.phone), escape(req.body.email), hash, escape(req.body.id_card), req.body.birth, req.body.school];
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
          const params = [req.body.name, req.body.address, escape(req.body.phone), escape(req.body.email), hash];
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

//取得收藏貼文(爬蟲)
router.get('/show-save', (req, res, next) => {
  const params = escape(req.query.u_id);
  var sql = "SELECT id, u_id, save.p_id, title, cp_name, job_desc, source, link FROM save INNER JOIN intern_post ON save.p_id = intern_post.id WHERE u_id = ?"
  db(sql, params)
  .then(results =>{
    res.send(results);
  })
  .catch(err =>{
    res.status(500).send("err:",err)
  })
});

//收藏貼文(爬蟲)
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

//取消收藏(爬蟲)
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

//取得收藏貼文(公司)
router.get('/show-cp_save', (req, res, next) => {
  const sqlparams = req.query.u_id;
  var sql = "SELECT company_post.id, company_post.cp_id, u_id, save_company_post.p_id, title, name as cp_name, job_desc FROM save_company_post INNER JOIN internsandwich.company_post ON save_company_post.p_id = company_post.id INNER JOIN company_info ON company_post.cp_id = company_info.id WHERE u_id = ?;"
  db(sql, sqlparams)
  .then(results =>{
    res.send(results);
  })
  .catch(err =>{
    res.status(500).send("err:",err)
  })
});

//收藏貼文(公司)
router.post('/company/save', userMiddleware.isLoggedIn, (req, res, next) => {
  const params = [escape(req.body.p_id), escape(req.body.u_id)];
  var sql = "SELECT * FROM save_company_post WHERE p_id = ? AND u_id = ?"
  db(sql, params)
  .then(results =>{
    if (results.length) {
      res.status(409).send({msg:"已收藏"});
    }
    else{
      const sql = 'INSERT INTO save_company_post (p_id, u_id) VALUES (?, ?);'
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

//取消收藏(公司)
router.delete('/company/unsave', (req, res, next) => {
  const sqlparams = [req.body.u_id, req.body.p_id];
  var sql = 'DELETE FROM save_company_post WHERE u_id = ? AND p_id = ?';

  db(sql,sqlparams)
  .then(results =>{
    res.send({msg:"取消收藏成功"});
  })
  .catch(err =>{
    res.status(500).send("err:",err)
  })
})

//取得期望技能
router.get('/skills', (req, res, next) => {
  const params = req.query.cp_id;
  var sql = "SELECT skill FROM recommend_keyword WHERE cp_id = ?"
  db(sql, params)
  .then(results =>{
    res.send(results);
  })
  .catch(err =>{
    res.status(500).send("err:",err)
  })
});

//新增期望技能
router.post('/skills', (req, res, next) => {
  const params = [req.body.cp_id, req.body.skill];
  var sql = "INSERT INTO recommend_keyword (cp_id, skill) VALUES (?, ?);"
  db(sql, params)
  .then(results =>{
    res.send(results);
  })
  .catch(err =>{
    res.status(500).send("err:",err)
  })
});

router.get('/secret-route', userMiddleware.isLoggedIn, (req, res, next) => {
  console.log(req.userData);
  res.send('This is the secret content. Only logged in users can see that!');
});

module.exports = router
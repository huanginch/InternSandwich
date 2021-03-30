//封裝express後端路由
const { Router } = require('express');
const router = Router();
const {db} = require('./db/db.js');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userMiddleware = require('./middleware/users.js');

//貼文
router.get('/posts', (req, res, next) => {
  const sql = 'select * from intern_post'
  db(sql)
  .then(results =>{
    res.send(results);
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
  const params = escape(req.body.email);
  //var sql = "SELECT * FROM user_info WHERE Account = ?"
  var sql = "SELECT * FROM user_info WHERE email = ?"
  db(sql, params)
  .then(results =>{
    if (results.length) {
      res.status(409).send({msg:"此帳號已被使用"});
    }
    else{
      // username is available
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          res.status(500).send({msg: err}); 
        } 
        else {
          // has hashed pw => add to database
          const params = [escape(req.body.name), req.body.gender, escape(req.body.phone), escape(req.body.email), hash, escape(req.body.id_card), escape(req.body.birth), escape(req.body.school)];
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

router.get('/secret-route', userMiddleware.isLoggedIn, (req, res, next) => {
  console.log(req.userData);
  res.send('This is the secret content. Only logged in users can see that!');
});

module.exports = router
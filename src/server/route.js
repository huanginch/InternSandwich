//express路由
const { Router } = require('express')
const router = Router()
const {db} = require('./db/db.js')


router.get('/posts', (req, res, next) => {
  /*const param = req.params.uAccount
  const user1 = await user.getUserbyAccount(param)
  res.send(user1)*/
  const sql = 'select * from fb_post'
  db(sql)
  .then(results =>{
    res.send(results);
  })
  .catch(err =>{
    res.status(500).send("err:",err)
  })
})

router.get('/users', (req, res, next) => {
  const sql = 'select * from users'
  db(sql)
  .then(results =>{
    res.send(results);
  })
  .catch(err =>{
    res.status(500).send("err:",err)
  })
})

router.post('/users', (req, res, next) => {
  const sql = 'insert values * from users'
  db(sql)
  .then(results =>{
    res.send(results);
  })
  .catch(err =>{
    res.status(500).send("err:",err)
  })
})

module.exports = router
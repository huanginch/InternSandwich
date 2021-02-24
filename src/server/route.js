//express路由
const { Router } = require('express')
const router = Router()
const user = require('./db/user')

router.get('/api/test', async (req, res, next) => {
  const user1 = await user.getUserbyAccount('test1')
  res.send(user1)
})

module.exports = router
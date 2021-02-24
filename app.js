//專案進入點
const express = require('express')
const path = require('path')
const app = express()
const route = require('./src/server/route')

//引入dist
app.use('/', express.static(path.join(__dirname,'dist')))

//引入route
app.use('/', route)
app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist/index.html'))
})

//listen on port 3000
app.listen(3000,() => { 
    console.log('app listening on port 3000.')
}) 
//專案進入點
const express = require('express')
const cookieParser = require('cookie-parser')
const path = require('path')
const app = express()
const route = require('./src/server/route')//匯入後端路由
const cors = require('cors')//跨域資源請求設定

app.use(cors({origin:"http://localhost:8080",credentials:true}))
app.use(express.urlencoded({extended:true}))
app.use(express.json())//body-parser
app.use(cookieParser())

//引入dist
app.use('/', express.static(path.join(__dirname,'dist')))

//引入route
app.use('/api', route)
app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist/index.html'))
})

//listen on port 3000
app.listen(3000,() => { 
    console.log('app listening on port 3000.')
}) 
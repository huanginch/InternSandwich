//封裝資料庫連線功能
const mysql = require('mysql2')

const config = {
    host:'140.123.173.109',
    port:'3307',
    database:'internsandwich',
    user : 'sandwich',
    password:'sandwich'
}

// (), {}, [{}, id] 
exports.db = (sql, sqlParams) =>{
    sqlParams = sqlParams || []
    return new Promise((resolve, reject) =>{
        const pool = mysql.createPool(config)
        pool.getConnection((err, conn) => {
            if(!err){
                conn.query(sql, sqlParams, (e, results) => {
                    if(!e){
                        console.log(results)
                        resolve(results)
                        conn.destroy()
                    }
                    else{
                        console.log("sql:",e)
                        reject(e)
                    }
                })
            }
            else{
                console.log("conn err:",err)
                reject(err)
            }
        })
    })
}

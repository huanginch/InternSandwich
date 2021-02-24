//封裝user的sql指令功能
const {db} = require('./db')

const user = {
    //依據帳號取得使用者資料
    getUserbyAccount: async (uAccount) => {
        const sql = 'select user_id, uAccount, uPassword from users where uAccount = ? and is_del = 0'
        return await db(sql, [uAccount])
    },
    //增加使用者資料
    addUser: async (user) => {
        //{uAccount:'', uPassword:''}
        const sql = 'insert into users set ?'
        return await db(sql, user)
    },
    //更新使用者資料
    update: async (arr) =>{
        //[user, user_id] ==> [{uAccount:'', uPassword:''}, user_id]
        const sql = 'update users set ? where user_id = ?'
        return await db(sql, arr)
    },
    //刪除使用者資料
    del:(user_id) =>{
        //一般情況刪除使用者不會真的刪除，都是假刪除
        //處理this指向問題
        return user.update([{is_del: 1},user_id])
    },
    //查詢所有使用者資料
    getAll: async () =>{
        const sql = 'select user_id, uAccount, uPassword from users where is_del = 0'
        return await db(sql)
    }
}

module.exports = user
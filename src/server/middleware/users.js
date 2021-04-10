const jwt = require("jsonwebtoken");
const rules ={
  email:/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/,
  birth:/^\d{4}-\d{2}-\d{2}$/,
  ID:/^[A-Z]\d{9}$/,
  phone:/^09\d{8}$/,
  password:/\w{8,20}$/
};
module.exports = {
  validateRegister: (req, res, next) => {
    //輸入欄位有空值
    if(!req.body.name || !req.body.gender || !req.body.school){
      return res.status(400).send({msg:"請填入正確資料"});
    }
    // email格式確認
    if (!rules.email.test(req.body.email)) {
      return res.status(400).send({
        msg: '請輸入正確Email格式'
      });
    }
    //生日格式確認
    if (!rules.birth.test(req.body.birth)) {
      return res.status(400).send({
        msg: '請輸入正確生日格式'
      });
    }
    //身分證格式確認
    if (!rules.ID.test(req.body.id_card)) {
      return res.status(400).send({
        msg: '請輸入正確身分證格式'
      });
    }
    //電話格式確認
    if (!rules.phone.test(req.body.phone)) {
      return res.status(400).send({
        msg: '請輸入正確電話格式'
      });
    }
    // password min 8 chars
    if (!rules.password.test(req.body.password)) {
      return res.status(400).send({
        msg: '請至少輸入8個字以上的密碼'
      });
    }
    // password (repeat) does not match
    if (
      !req.body.password_repeat ||
      req.body.password != req.body.password_repeat
    ) {
      return res.status(400).send({
        msg: '密碼與確認密碼不符'
      });
    }
    next();
  },
  isLoggedIn: (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(
        token,
        'SECRETKEY'
      );
      req.userData = decoded;
      next();
    } catch (err) {
      return res.status(401).send({
        msg: 'Your session is not valid!'
      });
    }
  }
};
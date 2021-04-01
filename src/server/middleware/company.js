const jwt = require("jsonwebtoken");
module.exports = {
  validateRegister: (req, res, next) => {
    //輸入欄位有空值
    if(!req.body.name || !req.body.address || !req.body.phone){
      return res.status(400).send({msg:"欄位不得為空"});
    }
    // username min length 3
    if (!req.body.email || req.body.email.length < 3) {
      return res.status(400).send({
        msg: '請至少輸3入個字以上的帳號'
      });
    }
    // password min 8 chars
    if (!req.body.password || req.body.password.length < 8) {
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
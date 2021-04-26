module.exports = {
  validatePost: (req, res, next) => {
    //輸入欄位有空值
    if(!req.body.title || !req.body.job_desc || !req.body.requirement || !req.body.location){
      return res.status(400).send({msg:"請填入正確資料"});
    }
    next();
  }
}
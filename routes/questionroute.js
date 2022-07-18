var express=require('express');
var router=express.Router();
const {getallquestions, createquestion, getquestion,updateQuestion, deleteQuestion}  =require('../controllers/question')

router.route('/getallquestions').get(getallquestions);
router.route('/getquestion/:id').get(getquestion);
router.route('/createquestion').post(createquestion);
router.route('/updatequestion/:id').put(updateQuestion);
router.route('/deletequestion/:id').delete(deleteQuestion);

module.exports=router;
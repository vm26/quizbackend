
const questionModel = require('../models/questionmodel');

const getallquestions=async(req,res)=>{
    try {
        let questions=await questionModel.find({});
        if(questions){
        res.json(questions); 
        }
    } catch (error) {
       console.log(error); 
    }
   


}
const getquestion=async(req,res)=>{
    try {
        let questions=await questionModel.findById(req.params.id);
        if(questions){
        res.json(questions); 
        }
    } catch (error) {
       console.log(error); 
    }
   


}
const createquestion=async(req,res)=>{
    try {
        let newquestion=new questionModel({
            question:req.body.question,
            option1:req.body.option1,
            option2:req.body.option2,
            option3:req.body.option3,
            answer:req.body.answer
        });
        
        let datacreated=await newquestion.save();
        if(datacreated){
            res.json({
                data:"DATA CREATED"
            })
        }

    
    } catch (error) {
       console.log(error); 
    }
   
}
const updateQuestion=async(req,res)=>{
    try {
        let question=await questionModel.findByIdAndUpdate(req.params.id,req.body);
    if(question){
        res.send("Data updated")
    }
    } catch (error) {
       console.log(error); 
    }
    
}

const deleteQuestion=async(req,res)=>{
    try {
        let question=await questionModel.findByIdAndDelete(req.params.id);
    if(question){
        res.send("Data deleted")
    }
    } catch (error) {
       console.log(error); 
    }
    
}

module.exports={getallquestions,createquestion,updateQuestion,deleteQuestion,getquestion};

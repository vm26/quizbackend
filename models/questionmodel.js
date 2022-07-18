var mongoose=require('mongoose');


var questionSchema=mongoose.Schema({
    question:String,
    option1:String,
    option2:String,
    option3:String,
    answer:String
    
})

var questionModel=mongoose.model('questions',questionSchema);

module.exports=questionModel;
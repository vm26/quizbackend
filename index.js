var express=require('express');
var mongoose=require('mongoose');
var cors=require('cors');
var app=express();
const router=require('./routes/questionroute');
//body parser
app.use(express.json());
//CORS
app.use(cors());
app.use('/',router);
var PORT= process.env.PORT || 5000;

mongoose.connect('mongodb+srv://varnisha26:varnisha26@cluster0.lca0p.mongodb.net/quizapp').then(()=>{
    app.listen(PORT,()=>console.log(`Server is listening to ${PORT}`) )
}).catch((error)=>{
    console.log(error);
});


module.exports=app;

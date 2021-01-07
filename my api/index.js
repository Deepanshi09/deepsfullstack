var mongoose = require('mongoose');
//mongoose will work as a connection with mongodb database and provide a model username,email
var express = require('express');
var app = express();
var bodyparser = require('body-parser');
router = express.Router();
var url ='mongodb://localhost:27017/test';
var port= 5000;
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("mongdob db connected"))
.catch((err)=>console.log(err));
app.use(bodyparser.json({limit:'5000mb'}));
var userdata= require("./routes/api.user")(router); 
app.use('/api',userdata);
app.use('/api',(req,res)=>{
    res.send("clever deepanshi")
})
app.listen(port)
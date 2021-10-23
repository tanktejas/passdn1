 
const mongoose = require('mongoose');
 
const validator=require('validator');
  
 
mongoose.connect("mongodb://localhost:27017/contactapp", {
    // useCreateIndex:true,                  
    // useNewUrlParser:true,                   
    // useUndefinedTopology:true,                     
}).then(() => {
    console.log("success....");
}); 
 
const port = process.env.PORT || 8000

const schema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        validator:{
            validate(){
                if(!validator.isEmail(email)){
                    throw new Error("ENter valid E-mail");
                }
            }
        }
    }, 
    message:{
        type:String,
    }
});

const collection = new mongoose.model("feedback", schema);

schema.pre("save",function(next){
     console.log(this.email);  
     this.email='1';          
    next();       
});
      ``
 module.exports=collection;
const { closeDelimiter } = require('ejs');
const express = require('express');
const exp = express();
const path = require('path');
require('./db/models');     
const collection=require('./db/models');
// console.log(__dirname); 
const path1 = path.join(__dirname, 'views/a.html');
// console.log(path1);         
// exp.use(express.static(path1));     
// exp.set('view engine', 'ejs');          
// exp.set('views', path.join(__dirname, 'views'));  
var bodyParser = require('body-parser');  
const { basicURLParse } = require('whatwg-url');
const port = process.env.PORT || 3000;   
exp.use(express.urlencoded({ extended: false }));
const path2 = path.join(__dirname, './views');
                            
exp.use(express.static(path2));
                
//ragistration form req. handle  
 
exp.post("/ragister",async(req,res)=>{
    // try{         
         
    // // const data= await collection.find({email:req.email});
    // const data=req.body;
      
    // data.password=await bcrypt.hash(data.password,10);
    // data.password1=null;
    // console.log(data);  
    //  const s=await collection.insertMany(data);
    //  console.log(s);    
    // }catch(err){
    //     res.send(`${err}`);
    // }
    });   
exp.post('/',(req,res)=>{
    console.log(1);
});
    
exp.get('/', (req, res) => {
    res.sendFile(path1);
});   
// exp.get('/b.html', (req, res) => {
//     res.sendFile(path2);
// });

exp.listen(port, () => {
    console.log("success..");
});

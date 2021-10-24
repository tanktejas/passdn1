const exp=require('express');
const express=exp();

express.get('/',(req,res)=>{
    res.send("d");
});
express.listen(3000,()=>{

});

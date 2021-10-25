const exp=require('express');

const express=exp();

express.get('/',(req,res)=>{
   res.send("kjkdjfkdjfk");
});

express.listen(process.env.PORT | 3000,()=>{});

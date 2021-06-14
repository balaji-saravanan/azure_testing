const express=require('express')
const app=express();
var port=process.env.PORT || 3000;
app.get('/',(req,res)=>res.send("Program is running on PORT: 3000 \n Hello buddy 😎"));
app.listen(port,()=> console.log('Server is running on PORT' +port));
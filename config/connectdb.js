const mongoose = require('mongoose');
require('dotenv').config({path:'./config/.env'})
const Mongo_url=process.env.Mongo_url
const connectedb=async()=>{
try{
    await mongoose.connect(Mongo_url,
         {useNewUrlParser: true, useUnifiedTopology: true});
         console.log('connected')
}
catch(error){
    console.log('cannot connect'+error)
}
}
module.exports=connectedb
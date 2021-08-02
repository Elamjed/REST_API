const express = require('express')
const User=require('../models/User')
router = express.Router();
//PostNewUser
router.post('/Users', async (req,res)=>{
    try {
            const newUser = new User(req.body);
            const  response = await newUser.save();
            res.send({res:response, msg:'User is saved :)'})
    } catch (error) {
        res.status(400).send("cannot save User :(")
        console.log(error)
    }

})
module.exports=router;
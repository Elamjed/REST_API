const express = require('express')
const User=require('../models/User')
    router = express.Router();
    //PostNewUser
    router.route('/addUser').post((req, res, next) => {
        User.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
        })
    });

    // READ Users
    router.route('/allusers').get((req, res) => {
        User.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
        })
    });
    // Update Users
    router.route('/update-user/:id').put((req, res, next) => {
        User.findByIdAndUpdate(req.params.id, {
        $set: req.body
        }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('User updated successfully !')
        }
        })
    });

    // Delete User
    router.route('/delete-user/:id').delete((req, res, next) => {
        User.findByIdAndDelete(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
            msg: data
            })
        }
        })
    })
    

    module.exports=router;
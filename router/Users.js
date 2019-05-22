const express= require('express');
const users =express.Router();
const cors= require('cors');
const jwt =require('jsonwebtoken');
const bcypt =require('bcrypt');

const User = require('../models/User');
users.use(cors())

process.env.SECRETE_KEY='secret';


users.post('/register',(req,res)=>{

    const userData ={
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email:req.body.email,
        password:req.body.password
    }

    User.findOne({
        where:{
            email:req.body.email
        }
    })
    .then(user=>{
        if(!user){
            bcypt.hash(req.body.password,10,(err,hash)=>{
                userData.password=hash
                User.create(userData)
                .then(user=>{
                    res.json({status:user.email+'registered'})
                })
                .catch(err=>{
                    res.send('error',err)
                })
            })
        }else{
            res.json({error:"user already exist"})
        }
    })
    .catch(err=>{
     res.send(err)
    })
})


users.post('/login',(req,res)=>{
    User.findOne({
        where:{
            email:req.body.email
        }
    })
    .then(user=>{
        if(user){
            if(bcypt.compareSync(req.body.password,user.password)){
                let token=jwt.sign(user.dataValues,process.env.SECRETE_KEY,{
                    expiresIn:1440
                })
                res.send(token)

            }
        }else{
            res.status(400).json({error:'User does not exist'})
        }
    })
    .catch(err=>{
        res.status(400).json({error:err})
    })
})
module.exports=users

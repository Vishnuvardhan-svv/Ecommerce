import userModel from '../models/userModel.js'
import validator from 'validator'
import jwt from 'jsonwebtoken'
import bycrypt from 'bcrypt'

//Route for user login
const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

const loginUser= async (req,res)=>{
    try {
        const {email,password}=req.body

        const user=await userModel.findOne({email})
        if(!user){
            res.json({success:false,message:"User doesn't exist"})
        }

        const isMatch=await bycrypt.compare(password,user.password);

        if(!isMatch){
            res.json({success:false,message:"Password Incorrect"})
        }

        const token=createToken(user._id)
        res.json({success:true,token})

    } catch (error) {
    
        res.json({success:false,message:error.message})
    }
}

//Route for user registration

const registerUser= async (req,res)=>{
    try {
        const {name,email,password}=req.body

        const exists=await userModel.findOne({email});
        if(exists){
            res.json({success: false, message:"User already exists"})
        }

        if(!validator.isEmail(email)){
            res.json({success: false, message:"Please Enter a Valid Email"})
        }
        if(password.length<8){
            res.json({success: false, message:"Please Enter a Strong Password"})
        }

        const salt=await bycrypt.genSalt(10)
        const hashedPassword=await bycrypt.hash(password,salt)

        const newUser= new userModel({
            name,
            email,
            password:hashedPassword
        })
        const user= await newUser.save()
        const token=createToken(user._id)

        res.json({success:true,token})

    } catch (error) {
        
        res.json({success:false,message:error.message})
    }
}


//Route for admin login

const adminLogin= async (req,res)=>{
    try {
        const {email,password}=req.body
        if(email === process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD){
            const token=jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true,token})
        }
        else{
            res.json({success:false,message:"Invalid Credentials"})
        }
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

export {loginUser,registerUser,adminLogin}
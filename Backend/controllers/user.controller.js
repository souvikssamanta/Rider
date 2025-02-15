
const userModel=require("../models/user.model");
const userService=require("../services/user.sevices")
const {validationResult}=require("express-validator")
//--registration---
module.exports.registerUser=async(req,res,next)=>{
const errors=validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
}
const{fullname,email,password}=req.body;
const hashedPassword=await userModel.hashPassword(password)

const user =await userService.createUser({
    firstname:fullname.firstname,
    lastname:fullname.lastname,
    email,
    password:hashedPassword

})
const token=user.generateAuthtoken();
res.status(201).json({token,user})

}
//---login---
module.exports .loginUser=async(req,res,next)=>{
const errors=validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
}
const{email,password}=req.body;
// only return password to user
const user=await userModel.findOne({email}).select("+password");

if(!user){
return res.status(401).json({errors:"invalid email or password"})
}
const isMatch=await user.comparePassword(password);
if(!isMatch){
    return res.status(401).json({errors:"invalid email or password"})
}
const token=user.generateAuthtoken();
 res.status(200).json({token,user})
}







const express=require("express")
const router=express.Router()
const {body}=require("express-validator");
const userController=require("../controllers/user.controller")
// ---REGISTER----
router.post('/register',[
body("email").isEmail().withMessage("Invalid Email"),
body("fullname.firstname").isLength({min:3}).withMessage("firstname must be 3 character"),
body("password").isLength({min:6}).withMessage("password must have 6 characters")
],
    userController.registerUser
)
 //----LOGIN----
 router.post('/login',[
    body("email").isEmail().withMessage("invalid email"),
    body("password").isLength({min:6}).withMessage("password must have 6 character")
 ],userController.loginUser
)
 



module.exports=router





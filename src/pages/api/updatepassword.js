import User from "../../../models/User";
var CryptoJS = require("crypto-js");
import connectDb from "@/middleware/mongoose";
import Jwt from "jsonwebtoken";
 const  handler= async(req, res)=> {
    if(req.method=="POST"){
        const token = req.body.token;
    const data = Jwt.verify(token,process.env.JWT_SECRET)
      let dbuser=await User.findOne({email:data.email});
      const bytes  = CryptoJS.AES.decrypt(dbuser.password, process.env.AES_SECRET);
      const decryptpass = bytes.toString(CryptoJS.enc.Utf8);
      if(decryptpass==req.body.password&&req.body.cpassword==req.body.npassword){
        await User.findOneAndUpdate({email:dbuser.email},{password: CryptoJS.AES.encrypt(req.body.cpassword, process.env.AES_SECRET).toString()});
        res.status(200).json({success:true})
      }
      else{
        res.status(400).json({success:false,error:"Invalid Password"});
      }
      
    }
    else{
        res.status(400).json({success:false})
    }
    
  }
  export default connectDb(handler)
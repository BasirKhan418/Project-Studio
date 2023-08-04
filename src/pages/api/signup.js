var CryptoJS = require("crypto-js");
import connectDb from "../../middleware/mongoose";
import User from "../../../models/User";
const handler = async (req, res) => {
if(req.method=="POST"){
    let auser= await User.find({email:req.body.email});
    let muser = await User.find({phone:req.body.number});
   if(auser.length>0){
    return res.status(400).json({success:false,message:"Email already exists ! Please try with another email."});
   }
   else if(muser.length>0){
    return res.status(400).json({success:false,message:"Mobile number already exists ! Please try with another mobile number."});
   }
   else{
    try{
    let newuser = new User({
        name:req.body.name,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password, process.env.AES_SECRET).toString(),
        phone:req.body.number,
    })
    let a = await newuser.save();
  
    res.status(200).json({success:true,id:a._id});
}
catch{
    res.status(400).json({success:false,message:"Some error occurs please try again after some time"});
}
    //signup with email verfication 
}
}
}
export default connectDb(handler);
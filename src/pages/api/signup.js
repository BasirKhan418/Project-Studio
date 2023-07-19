var CryptoJS = require("crypto-js");
import connectDb from "../../middleware/mongoose";
import User from "../../../models/User";
const handler = async (req, res) => {
if(req.method=="POST"){
    console.log(req.body)
if(req.body.password!=req.body.npassword){

    res.status(400).json({message:"Password and confirm password are not match",success:false})
}
else if(req.body.number.length!=10){
    res.status(400).json({message:"Please enter 10 digit mobile number",success:false})
}
}
else{
    let u= new User({ name:req.body.name,email:req.body.email,number:req.body.number,password: CryptoJS.AES.encrypt(req.body.password, process.env.AES_SECRET).toString()});
    await u.save();
    res.status(200).json({ success: true});
}

}
export default connectDb(handler);
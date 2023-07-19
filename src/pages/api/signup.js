var CryptoJS = require("crypto-js");
import connectDb from "../../middleware/mongoose";
import User from "../../../models/User";
const handler = async (req, res) => {
if(req.method=="POST"){
    try{
    let newuser = new User({
        name:req.body.name,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password, process.env.AES_SECRET).toString(),
        phone:req.body.number,
    })
    await newuser.save();
    res.status(200).json({success:true});
}
catch{
    res.status(400).json({success:false});
}
    //signup with email verfication 
}

}
export default connectDb(handler);
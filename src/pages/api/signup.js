var CryptoJS = require("crypto-js");
import connectDb from "../../middleware/mongoose";
import User from "../../../models/User";
const nodemailer = require("nodemailer");
const handler = async (req, res) => {
if(req.method=="POST"){
    const transporter = await nodemailer.createTransport({
        host: "smtp-relay.brevo.com",
        port: 587,
        secure: false,
        auth: {
            user: 'thebasirkhanofficial@gmail.com',
            pass: 'bOTLR5E0phXVM2qm'
        }
      });
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
    const info = await transporter.sendMail({
        from: '<support@Project-Studio.com>', // sender address
        to: `${req.body.email}`, // list of receivers
        subject: `🎉 Welcome to Project Studio! Your Account is Ready 🚀`, // Subject line
        text: "Account Created Successfully", // plain text body
        html: `
        <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#f4f4f4">
<tr>
    <td style="padding: 20px 0;">
        <table align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 5px; box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);">
            <tr>
                <td style="padding: 40px 20px; text-align: center;">
                    <img src="https://res.cloudinary.com/dawzncoau/image/upload/v1695498332/mfourzez3vwheixn36ql.png" alt="Project Studio Logo" width="150">
                    <h1 style="font-size: 24px; margin-top: 30px; color: #333;">Welcome to Project Studio</h1>
                    <p style="font-size: 16px; color: #666; margin-top: 20px;">You have successfully created your account on Project Studio.</p>
                    <p style="font-size: 16px; color: #666;">Start managing your projects more efficiently and collaboratively with our powerful tools.</p>
                    <a href="${process.env.NEXT_PUBLIC_HOST}/login" style="display: inline-block; margin-top: 30px; padding: 15px 30px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px; font-size: 16px;">Login to Project Studio</a>
                    <p style="font-size: 14px; color: #999; margin-top: 20px;">If you have any questions or need assistance, feel free to contact our support team at <a href="mailto:support@projectstudio.com" style="color: #007bff;">support@projectstudio.com</a>.</p>
                    <p style="font-size: 14px; color: #999;">Thank you for choosing Project Studio!</p>
                </td>
            </tr>
        </table>
    </td>
</tr>
</table>
        `, 
      });
}
catch(err){
    res.status(400).json({success:false,message:err});
}
    //signup with email verfication 
}
}
}
export default connectDb(handler);
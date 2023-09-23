import User from "../../../models/User";
import Forgot from "../../../models/Forgot";
var CryptoJS = require("crypto-js");
import connectDb from "../../middleware/mongoose";
import Jwt from "jsonwebtoken";
const nodemailer = require("nodemailer");
const handler = async (req, res) => {
  //check if the customer exists in the database or not
  if (req.body.sendMail == true) {
    const transporter = await nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: 'basirkhan4ukhanatoz@gmail.com',
        pass: 'O1aXMRNItUmjprkD'
      }
    });
    try{
      let token = `${Math.floor(Math.random()*1000000)}`;
      let f = await Forgot.findOne({ email: req.body.email });
      if (f != null) {
        if (f.email == req.body.email) {
          await Forgot.deleteOne({_id:f._id});
        }
      }
      let forgot = new Forgot({
        email: req.body.email,
        otp: token,
      });
      await forgot.save();
      const info = await transporter.sendMail({
        from: '<support@Project-Studio.com>', // sender address
        to: `${req.body.email}`, // list of receivers
        subject: `Otp For Password Reset`, // Subject line
        text: "Forgot Your Password", // plain text body
        html: `<h2>Verification code for forgot password</h2>
<br/>
        Please use the verification code below to reset your password.
        </br>
        <hr/>
        <strong style="font-size: 130%">${token}</strong>
        <hr/>
        <br/>
        <h4>
        We recommend that you keep your password secure and not share it with anyone.If you feel your password has been compromised, you can change it by going to your Project-Studio.com My Account Page and clicking on the "Change Address or Password"
        </h4>
        <br/>
       <h4>
        If you didn’t request this, you can ignore this email.
        Don't share this code with anyone. It will expire in 10 minutes.
        </h4>
        <br/>
        Thanks,
        <br/>
        Team PROJECT STUDIO
        `, 
      });
      // let email = `We have sent you this email in response to your request to reset your password on Techprint.in
      // <br/><br/>
      // To reset your password for, please follow the link below:
  
      // <a href="${`https://techprint.com/forgot?token=${token}`}</a>
  
      // <br/><br/>
  
      // We recommend that you keep your password secure and not share it with anyone.If you feel your password has been compromised, you can change it by going to your Techprint.in My Account Page and clicking on the "Change Address or Password" link.`;
      //reset password logic
      res.status(200).json({ success: true ,forgot});
    }
    catch(err){
      res.status(400).json({ success: false});
    }
    
  } 
 else {
  try{
    let tokenn = await Forgot.findOne({ otp: req.body.otp });
    if (tokenn != null) {
      await User.findOneAndUpdate(
        { email: tokenn.email },
        {
          password: CryptoJS.AES.encrypt(
            req.body.cpassword,
            process.env.AES_SECRET
          ).toString(),
        }
      );
      res.status(200).json({ success: true });
    }
    else {
      res.status(400).json({ success: false, message: "Invalid Otp" });
    }
  }
  catch{
    res.status(400).json({ success: false ,message:"Something went wrong please try again after some time !"});
  }
  
}
}
export default connectDb(handler);

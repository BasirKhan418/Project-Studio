import connectDb from "../../middleware/mongoose";
import User from "../../../models/User";
const nodemailer = require("nodemailer");
import  jwt  from "jsonwebtoken";
const handler = async (req, res) => {
    const transporter = await nodemailer.createTransport({
        host: "smtp-relay.brevo.com",
        port: 587,
        secure: false,
        auth: {
          user: 'basirkhan4ukhanatoz@gmail.com',
          pass: 'O1aXMRNItUmjprkD'
        }
      });
    if(req.method=="POST"){
            let user = await User.findByIdAndUpdate({_id:req.body.id},{bio:req.body.bio,img:req.body.url})
            const token = jwt.sign({email:user.email,name:user.name}, process.env.JWT_SECRET);
            console.log(token);
            const info = await transporter.sendMail({
                from: '<support@Project-Studio.com>', // sender address
                to: `${user.email}`, // list of receivers
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
                            <a href="https://${process.env.NEXT_PUBLIC_HOST}/login" style="display: inline-block; margin-top: 30px; padding: 15px 30px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px; font-size: 16px;">Login to Project Studio</a>
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

    else{
        res.status(200).json({ message: 'This method is not allowed' })
        return;
    }
}
export default connectDb(handler);
import connectDb from "../../middleware/mongoose";
const nodemailer = require("nodemailer");

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

        const info = await transporter.sendMail({
            from: '<support@Project-Studio.com>', // sender address
            to: `${req.body.email}`, // list of receivers
            subject: `Query Submitted Confirmation `, // Subject line
            text: "Query Submitted Confirmation", // plain text body
            html: `
            <table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#f4f4f4">
        <tr>
            <td align="center">
                <table cellpadding="0" cellspacing="0" border="0" width="600" style="background-color: #ffffff;">
                    <tr>
                        <td align="center" style="padding: 20px;">
                            <h1 style="color: #333;">Your Query Submitted Successfully</h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 20px;">
                            <p style="color: #666;">Thank you for submitting your query. Our team is working on it and will get back to you as soon as possible.</p>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding: 20px;">
                            <a href="${process.env.NEXT_PUBLIC_HOST}" style="display: inline-block; background-color: #007BFF; color: #fff; padding: 10px 20px; text-decoration: none;">Visit Our Website</a>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding: 20px;">
                            <p style="color: #666;">You are receiving this email because you contacted us. If you have any further questions, please don't hesitate to reply to this email projectstudiobyfivedevs@gmail.com.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
            `, 
          });
        
          const info1 = await transporter.sendMail({
            from: '<support@Project-Studio.com>', // sender address
            to: "khanbasir5555@gmail.com, smrutirupaparida@gmail.com, priyansh272003@gmail.com, prasadrudra279@gmail.com, nyayabrata09@gmail.com", // list of receivers
            subject: `Query Submitted Confirmation `, // Subject line
            text: "Query Submitted Confirmation", // plain text body
            html: `
            <table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#f4f4f4">
        <tr>
            <td align="center">
                <table cellpadding="0" cellspacing="0" border="0" width="600" style="background-color: #ffffff;">
                    <tr>
                        <td align="center" style="padding: 20px;">
                            <h1 style="color: #333;">PS User Query</h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 20px;">
                            <p style="color: #666;"><strong>Name:</strong> ${req.body.name}</p>
                            <p style="color: #666;"><strong>Email:</strong> ${req.body.email}</p>
                            <p style="color: #666;"><strong>Query Message: ${req.body.message} </strong></p>
                            <p style="color: #666; padding: 10px; background-color: #f9f9f9;">Hii,Team <br>I wanted to bring to your attention an issue that has been reported. It's crucial that we address this promptly to ensure a smooth customer experience. Please investigate the matter and take the necessary steps to resolve it as soon as possible</p>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding: 20px;">
                            <a href="mailto:${req.body.email}" style="display: inline-block; background-color: #007BFF; color: #fff; padding: 10px 20px; text-decoration: none;">Respond to User</a>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding: 20px;">
                            <p style="color: #666;">You are receiving this email because a user has submitted a query. Please respond promptly.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
            `, 
          });
          res.status(200).json({success:true,message:"Query Submitted Successfully"});
    }
    else{
        res.status(400).json({success:false,message:"Invalid Request"});
    }



}
export default connectDb(handler);
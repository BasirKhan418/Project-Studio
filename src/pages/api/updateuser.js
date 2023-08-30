import connectDb from "../../middleware/mongoose";
import User from "../../../models/User";
const handler = async (req, res) => {
if(req.method=="POST"){
    try{
        let data =await User.findOneAndUpdate({email:req.body.email},{name:req.body.name,username:req.body.username,country:req.body.country,college:req.body.college,bio:req.body.bio,phone:req.body.number,img:req.body.img,email:req.body.email});
        res.status(200).json({success:true});
    }
    catch(err){
        res.status(400).json({success:false,error:"Something went wrong please try again later. Internal server error"})
    }

}
else{
    res.status(200).json({ success:false,error: 'this method not allowed' })
}
}
export default connectDb(handler);
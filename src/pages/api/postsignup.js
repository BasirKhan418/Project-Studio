import connectDb from "../../middleware/mongoose";
import User from "../../../models/User";
const handler = async (req, res) => {
    if(req.method=="POST"){
     let user = await User.findByIdAndUpdate({_id:req.body.id},{bio:req.body.bio,img:req.body.url})
     res.status(200).json({success:true })
    }
    else{
        res.status(200).json({ message: 'This method is not allowed' })
    }
res.status(200).json({ name: 'John Doe' })
}
export default connectDb(handler);
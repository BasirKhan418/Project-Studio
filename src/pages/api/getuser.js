import connectDb from "../../middleware/mongoose";
import User from "../../../models/User";
import jwt from "jsonwebtoken";
const handler = async (req, res) => {
//res.status(200).json({ name: 'hello get user' })
if(req.method=="POST"){
    const token = req.body.token;
    const userdata = jwt.verify(token, process.env.JWT_SECRET);
    let user = await User.findOne({email:userdata.email});
    const {name,email,phone,bio,img}=user;
    res.status(200).json({name,email,phone,bio,img});

    console.log(user);
}

}
export default connectDb(handler);

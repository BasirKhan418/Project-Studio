import mongoose from 'mongoose';
const ForgotSchema = new mongoose.Schema({
email:{type:String,required:true},
otp:{type:String,required:true},
})
export default mongoose.models.Forgot || mongoose.model('Forgot',ForgotSchema);
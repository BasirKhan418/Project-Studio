var CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");
import connectDb from "../../middleware/mongoose";
import User from "../../../models/User";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(400).json({ success: false, message: "This method is not allowed" });
  }

  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(200).json({ success: false, message: "No user found" });
    }

    // Decrypt password safely
    let decryptedPassword;
    try {
      const bytes = CryptoJS.AES.decrypt(user.password, process.env.AES_SECRET);
      decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
      if (!decryptedPassword) throw new Error("Decryption failed");
    } catch (err) {
      return res.status(200).json({ success: false, message: "Invalid credentials" });
    }

    // Check credentials
    if (req.body.password === decryptedPassword) {
      const token = jwt.sign(
        { email: user.email, name: user.name },
        process.env.JWT_SECRET,
        { expiresIn: "7d" } // token expires in 7 days
      );
      return res.status(200).json({ success: true, token, email: user.email });
    } else {
      return res.status(200).json({ success: false, message: "Invalid credentials" });
    }
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

export default connectDb(handler);

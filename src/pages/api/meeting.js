import connectDb from "../../middleware/mongoose";
import { AccessToken } from "livekit-server-sdk";
const handler = async (req,res) => {
    const room = req.query.room;
    console.log(room)
    const username =req.query.username;
    if (!room) {
      return res.json(
        { error: 'Missing "room" query parameter' },
        { status: 400 }
      );
    } else if (!username) {
      return res.json(
        { error: 'Missing "username" query parameter' },
        { status: 400 }
      );
    }
  
    const apiKey = process.env.LIVEKIT_API_KEY;
    const apiSecret = process.env.LIVEKIT_API_SECRET;
    const wsUrl = process.env.NEXT_PUBLIC_LIVEKIT_URL;
  
    if (!apiKey || !apiSecret || !wsUrl) {
      return res.json(
        { error: "Server misconfigured" },
        { status: 500 }
      );
    }
  
    const at = new AccessToken(apiKey, apiSecret, { identity: username });
  
    at.addGrant({ room, roomJoin: true, canPublish: true, canSubscribe: true });
  
    return res.json({ token: at.toJwt() });
}
export default connectDb(handler);
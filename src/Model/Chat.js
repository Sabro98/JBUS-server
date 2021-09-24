import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  speaker: { type: mongoose.Schema.Types.ObjectId, requied: true, trim: true },
  contents: { type: String, required: true, trim: true },
  meta: {
    location: String,
    Time: { type: Date, required: true, default: Date.now },
  },
});

const Chat = mongoose.model("Chat", chatSchema);

export default Chat;

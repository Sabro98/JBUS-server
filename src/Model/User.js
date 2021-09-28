import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  playerID: { type: String, required: true, unique: true, trim: true },
  playerNickName: { type: String, required: true, trim: true },
  playerModel: { type: String, required: true },
  playerGroup: { type: Number },
  meta: {
    generatedAt: { type: Date, default: Date.now },
    latestChannel: { type: String, default: null },
  },
});

const User = mongoose.model("User", userSchema);

export default User;

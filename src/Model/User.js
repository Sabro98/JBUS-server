import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  playerID: { type: String, required: true, unique: true, trim: true },
  playerNickName: { type: String, required: true, trim: true },
  playerModel: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

export default User;

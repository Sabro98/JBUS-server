import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
  playerID: { type: String, requied: true, trim: true },
  roomName: { type: String, required: true, trim: true },
  isCorrect: { type: Boolean, required: true },
  Time: { type: Date, required: true, default: Date.now },
});

const Answer = mongoose.model("Answer", answerSchema);

export default Answer;

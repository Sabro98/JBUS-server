import mongoose from "mongoose";

const warpSchema = new mongoose.Schema({
  playerID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    trim: true,
  },

  move: {
    from: { type: String, required: true, trim: true },
    to: { type: String, required: true, trim: true },
  },
  meta: {
    Time: { type: Date, required: true, default: Date.now },
  },
});

const Warp = mongoose.model("Warp", warpSchema);

export default Warp;

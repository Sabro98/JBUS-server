import Chat from "../Model/Chat";
import User from "../Model/User";

export const postChat = async (req, res) => {
  const { speaker: playerID, contents, location } = req.body;
  const { _id: id } = await User.findOne({ playerID });

  try {
    await Chat.create({
      speaker: id,
      contents,
      meta: { location },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }
  return res.end();
};

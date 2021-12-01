import Warp from "../Model/Warp";
import User from "../Model/User";

export const postMove = async (req, res) => {
  const { playerID, from, to } = req.body;
  await User.findOneAndUpdate({ playerID }, { meta: { latestChannel: to } });

  try {
    await Warp.create({
      playerID,
      move: {
        from,
        to,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }

  return res.status(200).end();
};

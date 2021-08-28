import User from "../Model/User";

export const postJoin = async (req, res) => {
  const { playerID, playerNickName, playerModel } = req.body;
  console.log(playerID, playerNickName, playerModel);
  try {
    await User.create({ playerID, playerModel, playerNickName });
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }

  return res.send("Created");
};

export const postLogin = async (req, res) => {
  const { playerID } = req.body;
  const { playerNickName, playerModel } = await User.findOne({ playerID });
  const resUser = { playerNickName, playerModel };
  console.log(resUser);
  return res.send(JSON.stringify(resUser));
};

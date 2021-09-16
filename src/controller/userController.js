import User from "../Model/User";

export const getJoin = (req, res) => {
  return res.send("join");
};

export const postJoin = async (req, res) => {
  const { playerID, playerNickName, playerModel } = req.body;

  const user = await User.exists({ playerID });
  if (user) return res.status(400).send("duplicated userID");

  try {
    await User.create({ playerID, playerModel, playerNickName });
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }

  return res.send("Created");
};

export const getLogin = (req, res) => {
  return res.send("login");
};

export const postLogin = async (req, res) => {
  const { playerID } = req.body;
  const user = await User.findOne({ playerID });

  if (!user) {
    return res.status(400).send("not user in db");
  }

  const { playerNickName, playerModel } = user;
  const resUser = { playerID, playerNickName, playerModel };

  return res.send(JSON.stringify(resUser));
};

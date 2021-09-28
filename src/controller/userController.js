import User from "../Model/User";

export const getJoin = (req, res) => {
  return res.send("join");
};

export const postJoin = async (req, res) => {
  const { playerID, playerNickName, playerModel } = req.body;

  const user = await User.exists({ playerID });
  if (user) return res.status(400).send("duplicated userID");

  try {
    const playerGroup = 1; // 플레이어의 그룹 설정 -> 방탈출 그룹으로 사용
    await User.create({ playerID, playerModel, playerNickName, playerGroup });
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

  const { playerNickName, playerModel, playerGroup } = user;
  const resUser = { playerID, playerNickName, playerModel, playerGroup };

  return res.send(JSON.stringify(resUser));
};

import Answer from "../Model/Answer";

export const postSubmit = async (req, res) => {
  const { playerID, isCorrect, roomName } = req.body;
  const boolRoomName = JSON.parse(roomName);

  try {
    await Answer.create({
      playerID,
      isCorrect,
      roomName: boolRoomName,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }

  return res.end();
};

export const getSubmit = (req, res) => {
  res.send("SUBMIT GET!!");
};

import Answer from "../Model/Answer";

export const postSubmit = async (req, res) => {
  const { playerID, isCorrect, roomName } = req.body;

  try {
    await Answer.create({
      playerID,
      isCorrect,
      roomName,
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

const asyncHandler = require("express-async-handler");

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "my goals" });
});

const setGoals = asyncHandler(async (req, res) => {
  //error-handling
  if (!req.body.text) {
    res.status(400);
    // .json({ message: "form is empty" });
    throw new Error("please add a text field");
  }
  res.status(200).json({ message: "set goals" });
});

const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `update goal ${req.params.id}` });
});

const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `delete goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal,
};

const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

const getGoals = asyncHandler(async (req, res) => {
  //to get all goals
  const goals = await Goal.find();
  res.status(200).json(goals);
});

const setGoal = asyncHandler(async (req, res) => {
  //error-handling
  if (!req.body.text) {
    res.status(400);
    // .json({ message: "form is empty" });
    throw new Error("please add a text field");
  }

  //create new goal
  const goal = await Goal.create({
    text: req.body.text,
  });

  res.status(200).json(goal);
});

const updateGoal = asyncHandler(async (req, res) => {
  //save goal id
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  //use goal id and body data to update goal
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  await goal.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};

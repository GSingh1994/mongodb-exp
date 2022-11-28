const express = require("express");
const router = express.Router();

const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controller/goalController");

router.route("/").get(getGoals).post(setGoal);
router.route("/:id").put(updateGoal).delete(deleteGoal);

module.exports = router;

//read
// router.get("/", getGoals);

//create
// router.post("/", setGoals);

//update
// router.put("/:id", updateGoal);

//delete
// router.delete("/:id", deleteGoal);

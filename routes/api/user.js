const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const validator = require("../../Validations/validation");
const jwt = require("jsonwebtoken");
const tokenKey = require("../../config/keys").secretOrKey;
var store = require("store");
const Tasks = require("../../models/Task");
//View my Profile

router.get("/viewprofile/:idC", async (req, res) => {
  try {
    const user = await User.find({ _id: req.params.idC });
    if (user === undefined) return res.json("user does not exist");
    res.json(user.pop());
  } catch (error) {
    res.json({ error: error.message });
  }
});

//edit my Profile
router.put("/updateprofile/:idC", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.idC });
    if (user === undefined)
      return res.status(404).send({ error: "User does not exist" });

    const isValidated = validator.updateValidation(req.body);
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });

    const updatedprofile = await User.updateOne(
      { _id: req.params.idC },
      req.body,
      (err, doc) => {
        if (err) {
          console.log("Something wrong when updating data!");
        }

        console.log(doc);
      }
    );

    res.json({
      msg: "Profile was updated successfully",
      data: updatedprofile
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

//delete my profile
router.delete("/deleteAccount/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndRemove(id);
    res.json({ msg: "Account was deleted successfully", data: user });
  } catch (error) {
    // We will be handling the error later
    console.log(error);
  }
});

//viewed applied tasks
router.get("/appliedTasks/:idC=", async (req, res) => {
  try {
    const tasks = await User.find({ _id: req.params.idC });
    if (tasks === undefined || tasks.length == 0)
      return res.json("No applied tasks");
    res.json(tasks.pop().appliedInTasks);
  } catch (error) {
    res.json({ error: error.message });
  }
});

// router.get("/allTasks/:categories", async (req, res) => {
//   try {
//     const tasks = await Tasks.find();
//     if (tasks === undefined) return res.json("No tasks found");
//     res.json(tasks);
//   } catch (error) {
//     res.json({ error: error.message });
//   }
// });

module.exports = router;

const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const validator = require("../../Validations/validation");
const jwt = require("jsonwebtoken");
const tokenKey = require("../../config/keys").secretOrKey;
var store = require("store");
const Tasks = require("../../models/Task");
var ObjectId = require("mongodb").ObjectID;

//Create a new task

router.post("/createTask", async (req, res) => {    
      
    const {
      title,
      ownerID,
      description,
      field
        
    } = req.body;
    const isValidated = validator.createTaskValidation(req.body);

      if (isValidated.error)
       return res
         .status(400)
   
         .send({ error: isValidated.error.details[0].message });
      const applicants = [];
     
     // res.json("test1");  
      const user= await User.findOne({'_id':ObjectId(ownerID)});
      if(user === null)
      {res.json("User id is not correct")}
    else{
      const newtask = new Task({
        title,
        description,
        ownerID,
        applicants,
        field
      });      
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      const uploadedTask = {
        id: newtask._id,
        name: newtask.title,
        date: date
      }
    user.uploadedTasks.push(uploadedTask);

    User.updateOne({ _id: ObjectId(ownerID)}, { $set: { uploadedTasks: user.uploadedTasks } }, function(
      err,
      model
    ) {});
    return res.json({data:"You task was created successfully", user});
  }

});  

//Create new user account
router.post("/createNewUserAccount", async (req, res) => {
    const {
      memberFullName,
      password,
      email,
      dateOfBirth,
      memberPhoneNumber,
      experienceLevel,
      qualification,
      university,
      major,
      yearOfGraduation
        
    } = req.body;
    const isValidated = validator.createUserValidation(req.body);
  
    if (isValidated.error)
      return res
        .status(400)
        .send({ error: isValidated.error.details[0].message });
  
    const user = await User.findOne({ email });
  
    if (user) return res.status(400).json({ error: "Email already exists" });
  
    const salt = bcrypt.genSaltSync(10);
  
    const hashedPassword = bcrypt.hashSync(password, salt);
    const newUser = new User({
        memberFullName,
        password: hashedPassword,
        email,
        dateOfBirth,
        memberPhoneNumber,
        completedTasks: [],
        acceptedTasks: [],
        appliedInTasks: [],
        uploadedTasks: [],
        experienceLevel,
        qualification,
        university,
        major,
        yearOfGraduation
        
    });
  
    newUser
  
      .save()
  
      .then(user => res.json({ data: user }))
  
      .catch(err => res.json(err.message));
  });



//View my Profile

<<<<<<< Updated upstream
router.get("/viewprofile", async (req, res) => {
  jwt.verify(store.get("token"), tokenKey, async (err, authorizedData) => {
    if (err) {
      res.json({ tasks: "you are not authorized to view this page" });
      console.log(err);
    } else {
      try {
        console.log("view profile");
        const user = await User.find({ _id: authorizedData.id });
        if (user === undefined) return res.json("user does not exist");
        res.json(user.pop());
      } catch (error) {
        res.json({ error: error.message });
      }
    }
  });
});

router.get("/getUserInfo/:idC", async (req, res) => {
=======
router.get("/viewprofile/:idC", async (req, res) => {
>>>>>>> Stashed changes
  try {
    const user = await User.find({ _id: req.params.idC });
    if (user === undefined) return res.json("user does not exist");
    res.json(user.pop());
  } catch (error) {
    res.json({ error: error.message });
  }
});

//edit my Profile
router.put("/updateprofile", async (req, res) => {
  jwt.verify(store.get("token"), tokenKey, async (err, authorizedData) => {
    if (err) {
      res.json({ tasks: "you are not authorized to view this page" });
      console.log(err);
    } else {
      try {
        const user = await User.findOne({ _id: authorizedData.id });
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
    }
  });
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

//////////////////////////not tested///////////////////////////
//view accepted tasks
router.get("/acceptedInTasks/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user === null )
      return res.json("User not found");
    else if( user.acceptedInTasks.length == 0 || user.acceptedInTasks === undefined)
      return res.json("You Are not aceepted in any task yet");
    res.json(user.acceptedInTasks);
  } catch (error) {
    res.json({ error: error.message });
  }
});

//get all uploaded tasks
router.get("/viewUploadedTasks/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user === null )
      return res.json("User not found");
    else if(user.uploadedTasks.length == 0 || user.uploadedTask === undefined)
      return res.json("No Tasks on the system");
    res.json(user.uploadedTasks);
  } catch (error) {
    res.json({ error: error.message });
  }
});


router.delete("/deleteTask/:taskId/:id", async (req, res) => {
  try {
    const task = await Tasks.findById( req.params.taskId);
    if (task === null) return res.json("task does not exist");
    res.json({ msg: "Task was deleted ", data: task });
  } catch (error) {
    res.json({ error: error.message });
  }
});

//get specific task
router.get("/viewTask/:taskId", async (req, res) => {
  try {
    const task = await Tasks.findById(req.params.taskId);
    if (task === null) return res.json("task does not exist");
    res.json(task);
  } catch (error) {
    res.json({ error: error.message });
  }
});

//get user for specific task
router.get("/viewApplicants/:taskId", async (req, res) => {
  try {
    const task = await Tasks.findById(req.params.taskId);
    if (task === null) return res.json("task does not exist");
    res.json(task.applicants);
  } catch (error) {
    res.json({ error: error.message });
  }
});
module.exports = router;

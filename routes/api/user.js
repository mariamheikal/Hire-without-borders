const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const validator = require("../../Validations/validation");
const jwt = require("jsonwebtoken");
const tokenKey = require("../../config/keys").secretOrKey;
var store = require("store");
const Task = require("../../models/Task");
var ObjectId = require("mongodb").ObjectID;

//Create a new task --Tested--
router.post("/createTask/:ownerId", async (req, res) => {    
  //return 
  const ownerID = req.params.ownerId;
 //res.json(ownerID);
   const isClosed = false;
    const {
      title,
      description,
      field,
      requiredSkills
        
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
       return res.json("User id is not correct")
    
      const newtask = new Task({
        title,
        description,
        ownerID,
        applicants,
        field,
        requiredSkills,
        isClosed
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
    newtask
  
    .save()

    .then(user => res.json({ data: newtask }))

    .catch(err => res.json(err.message));
  

});  


//Create new user account --Tested--
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
      yearOfGraduation,
      skills
        
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
        yearOfGraduation,
        skills
        
    });
  
    newUser
  
      .save()
  
      .then(user => res.json({ data: user }))
  
      .catch(err => res.json(err.message));
  });

  //Apply for a task --Tested--
  router.put("/applyForTask/:taskId/:applicantId", async(req, res) => {
    try{
      const taskID = req.params.taskId;
      const applID = req.params.applicantId;
      const task = await Task.findById(taskID);
      const user = await  User.findById(applID);
      if (task === null) return res.json("This task does not exist");
      else if (user === null) return res.json("This user does not exist");
      if(task.isClosed===false){
      task.applicants.push( {applicantID: ObjectId(applID),status: "Pending"});
      
      Task.updateOne({ _id: ObjectId(taskID)}, { $set: { applicants: task.applicants } }, function(
      err,
      model
      ) {});
  
      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    
      const appliedInTask = {
        id: ObjectId(taskID),
        name: task.title,
        date: date
      }
  
      user.appliedInTasks.push(appliedInTask);
      User.updateOne({ _id: ObjectId(applID)}, { $set: { appliedInTasks: user.appliedInTasks } }, function(
        err,
        model
      ) {});
      return res.json({data:"You applied in task successfully", user});
      }
      else return res.json("Sorry this task does not accept applicants anymore.");
    }
    catch (error) {
      res.json({ error: error.message });
    }
  });

  //Close task --Tested--
  router.put("/closeTask/:taskId", async (req, res) =>{
   try{
    const taskID = req.params.taskId;
    const task = await Task.findById(taskID);
    if (task === null) return res.json("This task does not exist");
    if(task.isClosed===false){
     task= Task.findOneAndUpdate({ _id: ObjectId(taskID)}, { $set: { isClosed: true } }, function(
        err,
        model
        ) {});
        return res.json({data:"Task is successfully closed.", task});
    }
    else return res.json("Task is already closed.");

   }
   catch (error){
    res.json({ error: error.message });
   }
  });

  //Accept user for a task --Tested--
  router.put("/acceptApplicant/:taskId/:applicantId", async (req, res) => {
    try {
      const taskID = req.params.taskId;
      const applID = req.params.applicantId;
      const task = await Task.findById(taskID);
      const user = await  User.findById(applID);
      if (task === null) return res.json("This task does not exist");
      else if (user === null) return res.json("This user does not exist");
      //3ayza ashof law fe3lan el user da one of the applicants of this task
      
      var updatedTask = await Task.findOneAndUpdate(
      { _id: ObjectId(taskID)},
      {  $set: { "applicants.$[i].status": "Accepted" } },
      {  arrayFilters: [{ "i.applicantID": (applID) }]}
    );
     updatedTask= await Task.findOneAndUpdate({ _id: ObjectId(taskID)}, { $set: { isClosed: true } }, function(
      err,
      model
      ) {});
    res.json({msg:"Applicant accepted successfully",data:updatedTask})
    }
    catch (error){
      res.json({ error: error.message });
    }
  });

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

//view all open tasks to apply for
router.get("/viewTask", async (req, res) => {
  try {
    const tasks = await Tasks.find({ isClosed: false });
    if (tasks.length == 0 || tasks == null) return res.json("no tasks found");
    res.json({ data: tasks });
  } catch (error) {
    res.json({ error: error.message });
  }
});
//filter task by category
router.get("/Task/:category", async (req, res) => {
  try {
    const tasks = await Tasks.find({ field: req.params.category });
    if (tasks.length == 0 || tasks == null) return res.json("no tasks found");
    console.log(tasks);
    res.json(tasks);
  } catch (error) {
    res.json({ error: error.message });
  }
});

//////////////////////////not tested///////////////////////////
//view accepted tasks
router.get("/acceptedInTasks/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user === null) return res.json("User not found");
    else if (
      user.acceptedInTasks.length == 0 ||
      user.acceptedInTasks === undefined
    )
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
    if (user === null) return res.json("User not found");
    else if (user.uploadedTasks.length == 0 || user.uploadedTask === undefined)
      return res.json("No Tasks on the system");
    res.json(user.uploadedTasks);
  } catch (error) {
    res.json({ error: error.message });
  }
});

router.delete("/deleteTask/:taskId/:id", async (req, res) => {
  try {
    const task = await Tasks.findById(req.params.taskId);
    if (task === null) return res.json("task does not exist");
    res.json({ msg: "Task was deleted ", data: task });
  } catch (error) {
    res.json({ error: error.message });
  }
});

//get specific task
router.get("/viewTask/:taskId", async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId);
    if (task === null) return res.json("task does not exist");
    res.json(task);
  } catch (error) {
    res.json({ error: error.message });
  }
});

//get users who applied for a specific task
router.get("/viewApplicants/:taskId", async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId);
    if (task === null) return res.json("task does not exist");
    res.json(task.applicants);
  } catch (error) {
    res.json({ error: error.message });
  }
});

//--------------login---------------------//
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ email: "Email does not exist" });
    if (password == null) return res.send("wrong password");
    const match = bcrypt.compareSync(password, user.password);
    if (match) {
      const payload = {
        id: user._id,
        name: user.memberFullName,
        email: user.email
      };
      const token = jwt.sign(payload, tokenKey, { expiresIn: "1h" });
      console.log(token);
      store.set("token", token);
      console.log("added");
      //console.log(jwt_payload.name);
      res.json({ token: `Bearer ${token}` });
    } else return res.status(400).send({ password: "Wrong password" });
  } catch (e) {}
});

router.get("/logout", async (req, res) => {
  console.log("logout");
  store.remove("token");
  res.send("logged out");
});

const checkToken = (req, res, next) => {
  const header = store.get("token");
  if (typeof header !== "undefined") {
    req.token = header;
    //next middleware
    next();
  } else {
    //If header is undefined return Forbidden (403)
    res.sendStatus(403);
  }
};

//This is a protected route
router.get("/user/auth", checkToken, (req, res) => {
  //verify the JWT token generated for the user
  jwt.verify(store.get("token"), tokenKey, (err, authorizedData) => {
    if (err) {
      //If error send Forbidden (403)
      console.log("ERROR: Could not connect to the protected route");
      res.sendStatus(403);
    } else {
      //If token is successfully verified, we can send the autorized data
      res.json({
        message: "Successful log in",
        authorizedData
      });
      console.log("SUCCESS: Connected to protected route");
    }
  });
});
module.exports = router;

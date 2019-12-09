//--------------------express-----------------------------------------------
var express = require("express"),
  app = express(),
  server = require("http").createServer(app);
 server.listen(process.env.PORT || 8081);


//--------------------cors--------------------------------------------------
const cors = require("cors");
const path = require("path");

//--------------------api---------------------------------------------------
const user = require("./routes/api/user");
//--------------------Mongoose + DB configuration---------------------------
var mongoose = require("mongoose");
const db = require("./config/keys_dev").mongoURI;
console.log(db);
mongoose
  .connect(db)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));


//--------------------Init middleware---------------------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//--------------------Direct routes to appropriate files--------------------
app.use("/api/user", user);

//--------------------Handling Error 404------------------------------------
app.use((req, res) => {
  res.status(404).send({ err: "We can not find what you are looking for" });
});

//--------------------Server------------------------------------------------
const port = process.env.PORT || 3333;
app.listen(port, () => console.log(`Server up and running on port ${port}`));

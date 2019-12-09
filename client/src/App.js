import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import home from "./pages/home";
import signup from "./pages/signup";
import uploadedtasks from "./pages/uploadedtask";
import createtask from "./pages/createtask";
import myprofile from "./pages/myprofile";
import appliedtasks from "./pages/appliedtasks";
import viewtask from "./pages/viewtask";
import viewmytask from "./pages/viewmytask";
import googleLogin from "./pages/googleLogin";
import applyInAtask from "./pages/applyInAtask";
// import applicantProfile from "./pages/applicantProfile";
import viewapplicants from "./pages/viewapplicants";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Route exact path="/" component={Login} />
          <Route exact path="/googleLogin" component={googleLogin} />
          <Route exact path="/home/:userID" component={home} />
          <Route exact path="/signup" component={signup} />
          <Route exact path="/uploadedtasks/:userID" component={uploadedtasks} />
          <Route exact path="/createtask/:userID" component={createtask} />
          <Route exact path="/appliedtasks/:userID" component={appliedtasks} />
          <Route exact path="/myprofile/:userID" component={myprofile} />
          <Route exact path="/viewtask/:userID/:taskID" component={viewtask} />
          <Route exact path="/viewmytask/:userID/:taskID" component={viewmytask} />
          <Route exact path="/applyInAtask/:userID/:taskID" component={applyInAtask} />
          <Route exact path="/viewapplicants/:taskID" component={viewapplicants} />
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import home from "./pages/home";
import signup from "./pages/signup";
import uploadedtasks from "./pages/uploadedtask";
import createtask from "./pages/createtask";
import myprofile from "./pages/myprofile";
import appliedtasks from "./pages/appliedtask";
import viewtask from "./pages/viewtask";
import viewmytask from "./pages/viewmytask";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={home} />
          <Route exact path="/signup" component={signup} />
          <Route exact path="/uploadedtasks" component={uploadedtasks} />
          <Route exact path="/createtask" component={createtask} />
          <Route exact path="/myprofile" component={myprofile} />
          <Route exact path="/appliedtasks" component={appliedtasks} />
          <Route
            exact
            path="/uploadedtasks/:userID"
            component={uploadedtasks}
          />
          <Route exact path="/createtask/:userID" component={createtask} />
          <Route exact path="/myprofile/:userID" component={myprofile} />
          <Route exact path="/viewtask/:userID/:taskID" component={viewtask} />
          <Route exact path="/viewmytask/:userID/:taskID" component={viewmytask} />
        </div>
      </Router>
    );
  }
}

export default App;

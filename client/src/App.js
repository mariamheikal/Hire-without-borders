import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import home from "./pages/home";
import signup from "./pages/signup";
import uploadedtasks from "./pages/uploadedtask";
import createtask from "./pages/createtask";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route exact path="/home/:userID" component={home} />
          <Route exact path="/signup" component={signup} />
          <Route exact path="/uploadedtasks" component={uploadedtasks} />
          <Route exact path="/createtask" component={createtask} />
        </div>
      </Router>
    );
  }
}

export default App;

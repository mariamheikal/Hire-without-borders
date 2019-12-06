import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import home from "./pages/home";
import signup from "./pages/signup";
import uploadedtasks from "./pages/uploadedtask";
import appliedtasks from "./pages/appliedtask";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={home} />
          <Route exact path="/signup" component={signup} />
          <Route exact path="/uploadedtasks" component={uploadedtasks} />
          <Route exact path="/appliedtasks" component={appliedtasks} />
        </div>
      </Router>
    );
  }
}

export default App;

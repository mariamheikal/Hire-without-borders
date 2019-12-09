import NavbarPage from "../components/Navbar";
//import SideNav from "../components/SideNav";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class applyInAtask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      taskID: window.location.pathname.split("/").pop(),
      userID: this.props.match.params.userID,
      name: ""
   
    };
  }
  componentDidMount() {
    this.apply(this.state.taskID);
    this.getUser();
  }


  async apply(a) {
    const taskID = a;
const userID = this.state.userID;  
//e.preventDefault();
let databody = [taskID];
console.log(databody);

fetch(`http://localhost:3333/api/user/applyForTask/${userID}/${taskID}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  }
})
  .then(res => res.json())
  .then(json => this.setState({ res: json })
  );
// this.getList()
};

  async getUser() {
    await fetch(`http://localhost:3333/api/user/viewprofile`)
      .then(res => res.json())
      .then(info => this.setState({ info }));
    this.setState({
      name: this.state.info.memberFullName
    });
  }
  render() {
    console.log("Apply ");
    const userID = this.props.match.params.userID;
    console.log(userID)
    const name = this.state.name;
    console.log(name);

    return (
      <div>
        <NavbarPage userID={this.props.match.params.userID} />

        <div className="App">
          <div class="card">
            <div class="b">
              <h3
                style={{ "font-family": "Century Gothic" }}
                class="card-header"
              >
             {name}, You successfully applied to the task. Wait for an email or a phone call from the task's owner. 
              </h3>
              <div class="card-body">
              <h5 style={{ "font-family": "Century Gothic" }}> Always dig for tasks and contionously apply! Tune up for more tasks to be posted everyday. </h5>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default applyInAtask;

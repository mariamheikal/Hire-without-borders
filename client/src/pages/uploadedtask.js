import NavbarPage from "../components/Navbar";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";

class uploadedtasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      tasks: [],
      coID: window.location.pathname.split("/").pop(),
      message: ""
    };
  }
  // Fetch the list on first mount

  componentDidMount() {
    this.gettasks();
    // this.getUser();
  }
  // async getUser() {
  //   const userID = this.state.userID;
  //   console.log(userID);
  //   await fetch(`http://localhost:3333/api/user/viewprofile/${userID}`)
  //     .then(res => res.json())
  //     .then(info => this.setState({ info }));
  //     console.log(this.state.info);
  //     this.setState({
  //       name: this.state.info.data.memberFullName,
  //       email: this.state.info.data.email
  //     });
  // }
  gettasks = async () => {
    const userID = this.state.userID;

    // const coID = this.props.coID;
    // console.log("test " + coID);
    await fetch(`http://localhost:3333/api/user/viewUploadedTasks`)
      .then(res => res.json())
      .then(tasks => this.setState({ tasks }));
    console.log(this.state.tasks);
  };
  closetask = (e, taskid) => {
    // const coID = this.props.coID;
    // console.log("test " + coID);
    e.preventDefault();
    fetch(`http://localhost:3333/api/user/closeTask/` + taskid, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      }
    });
  };
  deletetask = (e, taskid) => {
    e.preventDefault();
    // const coID = this.props.coID;
    // console.log("test " + coID);
    fetch(`http://localhost:3333/api/user/deleteTask/` + taskid, {
      method: "DELETE"
    });
  };

  render() {
    const userID = this.state.userID;
    console.log(userID);
    console.log("UPLOADED TASKS");
    const { tasks } = this.state;
    console.log(tasks);
    return (
      <div>
        <NavbarPage userID={this.props.match.params.userID} />
        {tasks.length ? (
          <div>
            {tasks.map(el => {
              return (
                <div key={el.id} class="card">
                  <h5 class="card-header" class="btn btn-outline-dark">
                    {el.name}
                  </h5>
                  <div class="card-body" class="btn btn-outline-dark">
                    <p class="card-text">{"date: " + el.date}</p>

                    {/* <button
                      type="button"
                      class="btn btn-outline-dark"
                      onClick={e => {
                        this.closetask(el.id);
                        window.location.reload();
                      }}
                    >
                      change to close
                    </button> */}

                    <button
                      type="button"
                      class="btn btn-outline-dark"
                      onClick={e => {
                        this.deletetask(e, el.id);
                        window.location.reload();
                      }}
                    >
                      Delete task
                    </button>
                  </div>
                  <Link to={`/viewtask/${userID}/${el.id}`}>
                    <button type="button" class="btn btn-outline-dark">
                      View task details
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>loading or No task is found.</h2>
          </div>
        )}
      </div>
    );
  }
}

export default uploadedtasks;

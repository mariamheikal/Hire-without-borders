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
      tasks: [],
      coID: window.location.pathname.split("/").pop(),
      message: ""
    };
  }
  // Fetch the list on first mount

  componentDidMount() {
    this.gettasks();
  }
  gettasks = async () => {
    // const coID = this.props.coID;
    // console.log("test " + coID);
    await fetch(`http://localhost:3333/api/user/viewUploadedTasks`)
      .then(res => res.json())
      .then(tasks => this.setState({ tasks }));
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
    const { tasks } = this.state;
    console.log(this.state.tasks);
    return (
      <div>
        <NavbarPage />

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
                      delete task
                    </button>
                  </div>
                  <Link to={`/viewTask/${el.id}`}>
                    <button type="button" class="btn btn-outline-dark">
                      View this task
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

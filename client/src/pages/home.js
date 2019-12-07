import NavbarPage from "../components/Navbar";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";

import { Route, NavLink, BrowserRouter } from "react-router-dom";
import { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
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
    await fetch(`http://localhost:3333/api/user/viewTask`)
      .then(res => res.json())
      .then(tasks => this.setState({ tasks }));
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
                    {el.title}
                  </h5>
                  <div class="card-body" class="btn btn-outline-dark">
                    <p class="card-text">{"description: " + el.description}</p>
                    <p class="card-text">
                      {"skills required: " + el.requiredSkills}
                    </p>
                  </div>
                  <Link to={`/viewTask/${el._id}`}>
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
            <h2>No task is found.</h2>
          </div>
        )}
      </div>
    );
  }
}

export default home;

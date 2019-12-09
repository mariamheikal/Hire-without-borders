
import NavbarPage from "../components/Navbar";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


class uploadedtasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      tasks: [],
      userID: window.location.pathname.split("/").pop(),
      message: ""
    };
  }
  // Fetch the list on first mount

  componentDidMount() {
    this.gettasks();
   // this.getUser();
  }

  gettasks = async () => {
        const userID = this.state.userID;

    // const coID = this.props.coID;
    // console.log("test " + coID);
    await fetch(`http://localhost:3333/api/user/viewUploadedTasks`)
      .then(res => res.json())
      .then(tasks => this.setState({ tasks }));
    console.log(this.state.tasks);
  };

  closetask(taskid) {
    // const coID = this.props.coID;
    // console.log("test " + coID);
    fetch(`http://localhost:3333/api/user/closeTask/${taskid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  
  deletetask(taskid) {
        const userID = this.state.userID;

    // const coID = this.props.coID;
    // console.log("test " + coID);
    fetch(`http://localhost:3333/api/user/deleteTask/${taskid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  render() {
        const userID = this.state.userID;
    console.log(userID);
    console.log("UPLOADED TASKS");
    const { tasks } = this.state;
    console.log(tasks);
    return (
      <div>
      <NavbarPage userID={this.props.match.params.userID}/>
        {tasks.length ? (
          <div>
            {tasks.map(el => {
              return (
                <div key={el.id} class="card" containerStyle={{padding: 0}}>
                  <h4 style={{ "font-family": "Century Gothic" }}  class="card-header">
                    {el.name}
                  </h4>
                  <div class="card-body" >
                    <h5 style={{ "font-family": "Century Gothic" }}  class="card-text">{"Uploaded at: " + el.date}</h5>

               
                  <Link to={`/viewmytask/${userID}/${el.id}`}>
                    <button type="button" style={{ "font-family": "Century Gothic" }}  class="btn btn-outline-dark">
                      View task details
                    </button>
                  </Link>
                </div>   </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2 style={{ "font-family": "Century Gothic" }} >You did not upload any tasks yet! Go ahead and start uploading.</h2>
          </div>
        )}
      </div>
    );
  }
}

export default uploadedtasks;

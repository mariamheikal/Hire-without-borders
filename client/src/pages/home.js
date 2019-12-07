// import NavbarPage from "../components/Navbar";
// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";

// import { Route, NavLink, BrowserRouter } from "react-router-dom";
// import { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";

// class home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tasks: {},
//       userID: window.location.pathname.split("/").pop(),
//       message: ""
//     };
//   }
//   // Fetch the list on first mount

//   componentDidMount() {
//     this.gettasks();
//   }
//   gettasks = async () => {
//     // const coID = this.props.coID;
//     // console.log("test " + coID);
//     await fetch(`http://localhost:3333/api/user/viewTasks`)
//       .then(res => res.json())
//       .then(tasks => this.setState({ tasks }));
//   };

//   render() {
//     const { tasks } = this.state;
//         const userID = this.state.userID;
//     console.log(userID);
//     console.log(tasks);
//     return (
//       <div>
//    <NavbarPage userID={this.props.match.params.userID}/>
//         {tasks.length ? (
//           <div>
//             {tasks.map(el => {
//               return (
//                 <div key={el.id} class="card">
//                   <h4 class="card"style={{ "font-family": "Century Gothic" }} >
//                     {el.title}
//                   </h4>
//                   <div class="card-body" >
//                     <h5 style={{ "font-family": "Century Gothic" }} class="card-text">{"Description: " + el.description}</h5>
//                     <h5 style={{ "font-family": "Century Gothic" }} class="card-text">
//                       {"Required Skills: " + el.requiredSkills}
//                     </h5>
//                   </div>
//                 <Link to={`/viewtask/${userID}/${el.id}`} >
//                     <button type="button" class="btn btn-outline-dark" style={{ "font-family": "Century Gothic" }}>
//                       View this task
//                     </button>
//                   </Link>
//                 </div>
//               );
//             })}
//           </div>
//         ) : (
//           <div>
//             <h2>No tasks are out yet. Tune up for some time!</h2>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default home;

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
      info: {},
      tasks: [],
      userID: window.location.pathname.split("/").pop(),
      message: ""
    };
  }
  //Fetch the list on first mount
  componentDidMount() {
    this.gettasks();
  }
  gettasks = async () => {
    // const coID = this.props.coID;
    // console.log("test " + coID);
    await fetch(`http://localhost:3333/api/user/viewTasks`)
      .then(res => res.json())
      .then(tasks => this.setState({ tasks }));
      console.log(this.state.tasks);
  };

  applyForTask(taskid, userID) {

    // const coID = this.props.coID;
     console.log("test " + taskid);
    fetch(`http://localhost:3333/api/user/applyForTask/${userID}/${taskid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      }
         
    })
    .then(function(response) {
          console.log("apply is successful");
          alert(
            "You successfully applied in the task."
          );
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
              console.log(el.id)
              return (
                <div key={el._id} class="card">
                  <h5 class="card-header" class="btn btn-outline-dark">
                    {el.title}
                  </h5>
                  <div class="card-body" class="btn btn-outline-dark">
                      <h5 style={{ "font-family": "Century Gothic" }} class="card-text">{"Description: " + el.description}</h5>
                     <h5 style={{ "font-family": "Century Gothic" }} class="card-text">  {"Required Skills: " + el.requiredSkills}</h5>
                    <button
                      type="button"
                      class="btn btn-outline-dark"
                      onClick={this.applyForTask.bind(el.id,userID)}
                    >
                     Apply
                    </button>

  
                  </div>
                  <Link to={`/viewtask/${userID}/${el._id}`}>
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
            <h2>No task is found.</h2>
          </div>
        )}
      </div>
    );
  }
}

export default home;

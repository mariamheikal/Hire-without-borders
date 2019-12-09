// import NavbarPage from "../components/Navbar";
// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";


// class viewtask extends Component {
// constructor(props) {
//   super(props);
//   this.state = {
//     flag:-1,
//     task: {},
//     taskID: window.location.pathname.split("/").pop(),
//     userID:null,
//     title:"",
//     description:"",
//     field:"",
//     isClosed:false,
//     requiredSkills:[],
//     message: ""
//   };
// }
// // Fetch the list on first mount

// componentDidMount() {
//   this.gettask();
// }

// gettask = async () => {
//       const userID = this.props.match.params.userID;
//       const taskID = this.state.taskID;
//   // const coID = this.props.coID;
//   // console.log("test " + coID);
//   await fetch(`http://localhost:3333/api/user/viewTask/${taskID}`)
//     .then(res => res.json())
//     .then(task => this.setState({ task }));
//   console.log(this.state.task);
//         this.setState({
//       title: this.state.task.data.title,
//       description: this.state.task.data.description,
//       field: this.state.task.data.field,
//         isClosed: this.state.task.data.isClosed,
//         requiredSkills: this.state.task.data.requiredSkills
//     });
// };

// closetask(taskid) {
//   // const coID = this.props.coID;
//   // console.log("test " + coID);
//   fetch(`http://localhost:3333/api/user/closeTask/${taskid}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json"
//     }
//   });
// }
// deletetask(taskid) {
//       const userID = this.state.userID;

//   // const coID = this.props.coID;
//   // console.log("test " + coID);
//   fetch(`http://localhost:3333/api/user/deleteTask/${taskid}`, {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json"
//     }
//   });
// }

// render() {
  
      
//       const userID = this.props.match.params.userID;
//       const taskID = this.state.taskID;
//       var Availability = "O";
//   console.log(userID);
//   console.log(taskID)
//   console.log("VIEW TASK");
//   if(this.state.isClosed==false)
//       Availability="Opened";
//   else Availability="Closed";
//   const { task } = this.state;
//   console.log(task);  
//   return (
//     <div>
//         <NavbarPage userID={this.props.match.params.userID} />
// <div class="b">
//                 <h2  style={{ "font-family": "Century Gothic" }} class="card-header">{this.state.title}</h2>
//                 <div class="card-body">
//                   <p  style={{ "font-family": "Century Gothic" }} class="card-text" >{"Description: "+this.state.description}</p>
//                   <p  style={{ "font-family": "Century Gothic" }} class="card-text">{"Experience field: "+this.state.field}</p>
//                   <p  style={{ "font-family": "Century Gothic" }} class="card-text">{"Required Skills: "+this.state.requiredSkills}</p>
//                   <p  style={{ "font-family": "Century Gothic" }} class="card-text">{"Availability Status: "+Availability}</p>
                  
//                       </div>
//                   </div>
//                 </div>
//   );
// }
// }

// export default viewtask;
import NavbarPage from "../components/Navbar";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


class viewtask extends Component {
constructor(props) {
  super(props);
  this.state = {
    flag:-1,
    task: {},
    taskID: window.location.pathname.split("/").pop(),
    userID:null,
    title:"",
    description:"",
    field:"",
    isClosed:false,
    requiredSkills:[],
    message: ""
  };
}
// Fetch the list on first mount

componentDidMount() {
  this.gettask();
}

gettask = async () => {
      const userID = this.props.match.params.userID;
      const taskID = this.state.taskID;
  // const coID = this.props.coID;
  console.log("test " + taskID);
  await fetch(`http://localhost:3333/api/user/viewTask/${taskID}`)
    .then(res => res.json())
    .then(task => this.setState({ task }));
  console.log(this.state.task);
        this.setState({
      title: this.state.task.data.title,
      description: this.state.task.data.description,
      field: this.state.task.data.field,
        isClosed: this.state.task.data.isClosed,
        requiredSkills: this.state.task.data.requiredSkills
    });
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
  
      
      const userID = this.props.match.params.userID;
      const taskID = this.state.taskID;
      var Availability = "O";
  console.log(userID);
  console.log(taskID)
  console.log("VIEW TASK");
  if(this.state.isClosed==false)
      Availability="Opened";
  else Availability="Closed";
  const { task } = this.state;
  console.log(task);  
  return (
    <div>
        <NavbarPage userID={this.props.match.params.userID} />
<div class="b">
                <h2  style={{ "font-family": "Century Gothic" }} class="card-header">{this.state.title}</h2>
                <div class="card-body">
                <p  style={{ "font-family": "Century Gothic" }} class="a" >{"Description: "+this.state.description}</p>
                <p  style={{ "font-family": "Century Gothic" }} class="a">{"Experience field: "+this.state.field}</p>
                <p  style={{ "font-family": "Century Gothic" }} class="a">{"Required Skills: "+this.state.requiredSkills}</p>
                <p  style={{ "font-family": "Century Gothic" }} class="a">{"Availability Status: "+Availability}</p>

                      </div>
                  </div>
                </div>
  );
}
}

export default viewtask;

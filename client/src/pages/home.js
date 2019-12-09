
// import NavbarPage from "../components/Navbar";
// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";


// class home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       show:false,
//       info: {},
//       tasks: [],
//       userID: window.location.pathname.split("/").pop(),
//       message: ""
//     };
//   }
//   //Fetch the list on first mount
//   componentDidMount() {
//     this.gettasks();
//   }
//   gettasks = async () => {
//     // const coID = this.props.coID;
//     // console.log("test " + coID);
//     await fetch(`http://localhost:3333/api/user/viewTasks`)
//       .then(res => res.json())
//       .then(tasks => this.setState({ tasks }));
//       console.log(this.state.tasks);
//   };

//   applyForTask(taskid) {
//    const userID=window.location.pathname.split("/").pop()
//     // const coID = this.props.coID;
//     console.log(taskid)
//      console.log("userID.................. "+userID);
//    //  console.log("user"+userID)
//     fetch(`http://localhost:3333/api/user/applyForTask/${userID}/${taskid}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json"
//       }
         
//     })
//     .then(function(response) {
//           console.log("apply is successful");
//           alert(
//             "You successfully applied in the task."
//           );
//         });

//   }


//   apply = (e, a) => {
//         const taskID = a;
//     const userID = this.state.userID;  
//     e.preventDefault();
//     let databody = [taskID];
//     console.log(databody);
  
//     fetch(`http://localhost:3333/api/user/applyForTask/${userID}/${taskID}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json"
//       }
//     })
//       .then(res => res.json())
//       .then(json => this.setState({ res: json })
//       );
//     // this.getList()
//   };


//   render() {
//         const userID = this.state.userID;
//     console.log("USER"+userID);
//     console.log("UPLOADED TASKS");
//     const { tasks } = this.state;
//     console.log(tasks);
//     return (
//       <div>
//       <NavbarPage userID={this.props.match.params.userID}/>
//         {tasks.length ? (
//           <div>
//             {tasks.map(el => {
//               const taskid = el._id;
//               console.log("task .............. "+taskid)
//               return (
//                 <div key={el._id} class="card">
//                   <h5  style={{ "font-family": "Century Gothic" }} class="card-header" >
//                     {el.title}
//                   </h5>
//                   <div class="card-body" >
//                       <h5 style={{ "font-family": "Century Gothic" }} class="card-text">{"Description: " + el.description}</h5>
//                      <h5 style={{ "font-family": "Century Gothic" }} class="card-text">  {"Required Skills: " + el.requiredSkills}</h5>
                  
// <Link to={`/applyInAtask/${userID}/${el._id}`}>
// <button
//                       type="button"
//                       // onClick={e => {
//                       //   this.apply(e, el._id);
//                       //   //window.location.reload();
//                       // }}
//                       class="btn btn-outline-dark"
//                     >
//                      Apply
//                     </button>

//                   </Link>
//                   </div>
//                   <Link to={`/viewtask/${userID}/${el._id}`}>
//                     <button type="button" class="btn btn-outline-dark">
//                       View task details
//                     </button>
//                   </Link>
//                 </div>
//               );
//             })}
//           </div>
//         ) : (
//           <div>
//             <h2>No task is found.</h2>
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


class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show:false,
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

  applyForTask(taskid) {
   const userID=window.location.pathname.split("/").pop()
    // const coID = this.props.coID;
    console.log(taskid)
     console.log("userID.................. "+userID);
   //  console.log("user"+userID)
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


  apply = (e, a) => {
        const taskID = a;
    const userID = this.state.userID;  
    e.preventDefault();
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


  render() {
        const userID = this.state.userID;
    console.log("USER"+userID);
    console.log("UPLOADED TASKS");
    const { tasks } = this.state;
    console.log(tasks);
    return (
      <div>
      <NavbarPage userID={this.props.match.params.userID}/>
        {tasks.length ? (
          <div>
            {tasks.map(el => {
              const taskid = el._id;
              console.log("task .............. "+taskid)
              return (
                <div key={el._id} class="card">
                  <h5  style={{ "font-family": "Century Gothic" }} class="card-header" >
                    {el.title}
                  </h5>
                  <div class="card-body" >
                      <h5 style={{ "font-family": "Century Gothic" }} class="card-text">{"Description: " + el.description}</h5>
                     <h5 style={{ "font-family": "Century Gothic" }} class="card-text">  {"Required Skills: " + el.requiredSkills}</h5>
                  
<Link to={`/applyInAtask/${userID}/${el._id}`}>
                    <button type="button" style={{ "font-family": "Century Gothic" , "color":"grey"}}  class="btn btn-outline-dark">

                     Apply
                    </button>
                  </Link>
                  <Link to={`/viewtask/${userID}/${el._id}`}>
                    <button type="button" style={{ "font-family": "Century Gothic" , "color":"grey"}}  class="btn btn-outline-dark">
                      View task details
                    </button>
                  </Link>
                </div> 
                 </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No tasks are posted yet! Tune up for some time.</h2>
          </div>
        )}
      </div>
    );
  }
}

export default home;

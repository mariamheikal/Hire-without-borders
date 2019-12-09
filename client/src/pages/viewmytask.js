import NavbarPage from "../components/Navbar";
import React, { Component } from "react";
import { Link } from "react-router-dom";


class viewmytask extends Component {
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
applicants:[],
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
// console.log("test " + coID);
await fetch(`http://localhost:3333/api/user/viewTask/${taskID}`)
.then(res => res.json())
.then(task => this.setState({ task }));
console.log(this.state.task);
    this.setState({
    title: this.state.task.data.title,
    description: this.state.task.data.description,
    field: this.state.task.data.field,
    isClosed: this.state.task.data.isClosed,
    requiredSkills: this.state.task.data.requiredSkills,
    applicants:this.state.task.data.applicants


});
};


  closeTask= async () =>{
 const taskID = this.state.taskID;
 const userID = this.state.userID;  
//e.preventDefault();
 console.log(taskID);

await fetch(`http://localhost:3333/api/user/closeTask/${taskID}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  }
})
  .then(res => res.json())

// this.getList()
};


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
<NavbarPage userID={this.props.match.params.userID}/>
<div class="b">
            <h2  style={{ "font-family": "Century Gothic" }} class="card-header">{this.state.title}</h2>
            <div class="card-body">
                <p  style={{ "font-family": "Century Gothic" }} class="a" >{"Description: "+this.state.description}</p>
                <p  style={{ "font-family": "Century Gothic" }} class="a">{"Experience field: "+this.state.field}</p>
                <p  style={{ "font-family": "Century Gothic" }} class="a">{"Required Skills: "+this.state.requiredSkills}</p>
                <p  style={{ "font-family": "Century Gothic" }} class="a">{"Availability Status: "+Availability}</p>

                <Link to={`/viewapplicants/${taskID}`}>
                    <button type="button" style={{ "font-family": "Century Gothic" , "color":"#D3D3D3"}}  class="btn btn-outline-dark">
                      View task applicants
                    </button>
                  </Link>

<button  type="button" style={{ "font-family": "Century Gothic" , "color":"#D3D3D3"}}   class="btn btn-outline-dark" onClick={e=>{this.closeTask();
 window.location.reload();}}>
                Close task
                </button>
                
                    </div>
                </div>
            </div>
);
}
}

export default viewmytask;

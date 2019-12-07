import NavbarPage from "../components/Navbar";
//import SideNav from "../components/SideNav";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";

//import { Route, NavLink, BrowserRouter } from "react-router-dom";
//import { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";

class myprofile extends Component {
   constructor(props){
    super(props);
    this.state = {
      info: {},
      userID: window.location.pathname.split("/").pop(),
      name: "",
      email: "",
      password: "",
      field: "",
      major: "",
      qualification: "",
      dateOfBirth: "",
      university: "",
      phoneNumber: "",
      experienceLevel: 0,
      yearOfGraduation: ""
    }
  }
  componentDidMount() {
    this.getUser();
  }
  async getUser() {
    const userID = this.state.userID;
    await fetch(`http://localhost:3333/api/user/viewprofile/${userID}`)
      .then(res => res.json())
      .then(info => this.setState({ info }));
      this.setState({
        name: this.state.info.data.memberFullName,
        email: this.state.info.data.email,
        field: this.state.info.data.field,
        major: this.state.info.data.major,
        qualification: this.state.info.data.qualification,
        dateOfBirth: this.state.info.data.dateOfBirth,
        university: this.state.info.data.university,
        phoneNumber: this.state.info.data.phoneNumber,
        experienceLevel: this.state.info.data.experienceLevel,
        yearOfGraduation: this.state.info.data.yearOfGraduation
      });
  }
  render() {
      console.log("MY PROFILE");
    const { info } = this.state;
    const userID = this.state.userID;
       console.log(info)
       console.log(userID);
    
       
    return (
      <div>
              <NavbarPage userID={this.props.match.params.userID}/>

             <div className="App">
              <div  class="card">
                <div class="b">
                 <h3  style={{ "font-family": "Century Gothic" }} class="card-header">Your personal information</h3>
                 <div class="card-body">
                    <h5  style={{ "font-family": "Century Gothic" }} class="card-text" >{this.state.name}</h5>
                    <p  style={{ "font-family": "Century Gothic" }} class="card-text">{"Majored in: "+this.state.major}</p>
                    <p  style={{ "font-family": "Century Gothic" }} class="card-text">{"Email: "+this.state.email}</p>
                    <p  style={{ "font-family": "Century Gothic" }} class="card-text">{"Mobile Number: "+this.state.phoneNumber}</p>
                    <p  style={{ "font-family": "Century Gothic" }} class="card-text">{"Date of birth: "+this.state.dateOfBirth}</p>
                    <p  style={{ "font-family": "Century Gothic" }} class="card-text">{"Field of experience: "+this.state.field}</p>
                    <p  style={{ "font-family": "Century Gothic" }} class="card-text">{"Experience level: "+this.state.experienceLevel}</p>
                    <p  style={{ "font-family": "Century Gothic" }} class="card-text">{"University: "+this.state.university}</p>
                    <p  style={{ "font-family": "Century Gothic" }} class="card-text">{"Graduation year: "+this.state.yearOfGraduation}</p>
                     <p  style={{ "font-family": "Century Gothic" }} class="card-text">{"Qualifications: "+this.state.qualification}</p>
                    
                       </div>
                   </div>
                 </div>
           </div>
      </div>
    );
  }
}

export default myprofile;

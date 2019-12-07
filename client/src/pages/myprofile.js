import NavbarPage from "../components/Navbar";
import SideNav from "../components/SideNav";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";

import { Route, NavLink, BrowserRouter } from "react-router-dom";
import { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";

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
      experienceLevel: "",
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
        dateOfBirth: this.state.info.datadateOfBirth,
        university: this.state.info.data.university,
        phoneNumber: this.state.info.data.phoneNumber,
        experienceLevel: this.state.info.data.experienceLevel,
        yearOfGraduation: this.state.info.data.yearOfGraduation
      });
  }
  render() {
    const { info } = this.state;
    const userID = this.state.userID;
       console.log(info)
       console.log(userID);
    
       
    return (
      <div>
              <NavbarPage/>

             <div className="App">
         <h1>Your Info</h1>            
              
               {'Name:'}
               <span>{this.state.name}</span> <br/>
               {'Email: '}
               <span>{this.state.email}</span><br/>
              {'Major:'}
               <span>{this.state.major}</span> <br/>
               {'Field: '}
               <span>{this.state.field}</span><br/>
            {'Field: '}
               <span>{this.state.field}</span><br/>
                      {'Field: '}
               <span>{this.state.field}</span><br/>
           </div>
      </div>
    );
  }
}

export default myprofile;

import NavbarPage from "../components/Navbar";
import SideNav from "../components/SideNav";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";

import { Route, NavLink, BrowserRouter } from "react-router-dom";
import { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";

class home extends Component {
   constructor(props){
    super(props);
    this.state = {
      info: {},
      userID: window.location.pathname.split("/").pop(),
      // name: "",
      // email: "",
      // password: "",
      // field: "",
      // major: "",
      // qualification: "",
      // dateOfBirth: "",
      // university: "",
      // phoneNumber: "",
      // experienceLevel: "",
      // yearOfGraduation: ""
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
        email: this.state.info.data.email
      });
  }
  render() {
    const { info } = this.state;
    const userID = this.state.userID;
       console.log(info)
       console.log(userID);
    
       
    return (
      <div>
              <NavbarPage userID={this.props.match.params.userID}/>

             <div className="App">
         <h1>Home Page</h1>            
              
           </div>
      </div>
    );
  }
}

export default home;


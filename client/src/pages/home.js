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
    }
  }
  render() {
         const { info } = this.state;
     const coID = this.props.match.params.id;

    return (
      <div>
            <SideNav/>
            <NavbarPage/>

             <div className="App">
         <h1>Your Info</h1>            
              
               {'name:'}
               <span>{this.state.name}</span> <br/>
               {'email: '}
               <span>{this.state.email}</span><br/>
              
           </div>
      </div>
    );
  }
}

export default home;

import NavbarPage from "../components/Navbar";
import SideNav from "../components/SideNav";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";

import { Route, NavLink, BrowserRouter } from "react-router-dom";
import { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";

class home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
            <NavbarPage/>
      
    );
  }
}

export default home;

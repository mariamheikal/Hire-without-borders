import React, { Component } from "react";
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  NavItem
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
class NavbarPage extends Component {
  state = {
    whichPage: this.props.whichPage
  };
  render() {
    return (
      <Navbar style={{ backgroundColor: "//#endregion" }}>
        <Nav className="mr-auto">
          <text> </text>
          <Nav.Link style={{"color":"#FAFAFA","font-family":"Century Gothic"}} href="/">Home</Nav.Link>
          <NavItem>
            <Nav.Link style={{"color":"#FAFAFA","font-family":"Century Gothic"}} href="/login" >My uploaded tasks</Nav.Link>
          </NavItem>
        </Nav>

        <Form inline>
          <FormControl  type="text" placeholder="Search" className="mr-sm-2" />
          <Button style={{"color":"#FAFAFA","font-family":"Century Gothic"}} variant="outline-info">Search</Button>
        </Form>
        <Nav.Link style={{"color":"#FAFAFA","font-family":"Century Gothic"}} href="#home">SignOut</Nav.Link>
      </Navbar>
    );
  }
}

export default NavbarPage;

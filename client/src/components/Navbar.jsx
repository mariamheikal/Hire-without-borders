import React, { Component } from "react";
import {
  Nav,
  Navbar
} from "react-bootstrap";
import ContactUs from "../components/ContactUs";
class NavbarPage extends Component {
  state = {
    whichPage: this.props.whichPage
  };
  render() {
    return (
      <Navbar style={{ backgroundColor: "//#endregion" }}>
        <Nav className="mr-auto">
          <text> </text>
          <Nav.Link
            style={{ color: "#FAFAFA", "font-family": "Century Gothic" }}
            href="/profile"
          >
            my profile
          </Nav.Link>
          <Nav.Link
            style={{ color: "#FAFAFA", "font-family": "Century Gothic" }}
            href="/home"
          >
            Home
          </Nav.Link>
          <Nav.Link
            style={{ color: "#FAFAFA", "font-family": "Century Gothic" }}
            href="/createtask"
          >
            Create a task
          </Nav.Link>
          <Nav.Link
            style={{ color: "#FAFAFA", "font-family": "Century Gothic" }}
            href="/uploadedtasks"
          >
            My uploaded tasks
          </Nav.Link>

          <Nav.Link
            style={{ color: "#FAFAFA", "font-family": "Century Gothic" }}
            href="/appliedtasks"
          >
            Applied tasks
          </Nav.Link>
        </Nav>

        <Nav.Link
          style={{ color: "#FAFAFA", "font-family": "Century Gothic" }}
          href="#home"
        >
          SignOut
        </Nav.Link>
      </Navbar>
    );
  }
}

export default NavbarPage;

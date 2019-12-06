import React, { Component } from "react";
import { Jumbotron, Button, Form, ButtonToolbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import validator from "../validations/validation";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Redirect } from "react-router";
import { BrowserHistory } from "react-router-dom";
import SideNav from "../components/SideNav";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.state = {
      isLoading: false,
      email: "",
      password: "",
      coID: window.location.pathname.split("/").pop(),
      name: "",
      major: "",

      login: false
    };
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleSignIn = event => {
    console.log("handled");
    const info = {
      email: this.state.email,
      password: this.state.password
    };
    const isValidated = validator.loginValidation(info);
    if (isValidated.error) alert(isValidated.error.details[0].message);
    else
      axios
        .post("http://localhost:3333/api/user/login", info)
        .then(response => {
          axios
            .get("/api/user/auth", {
              headers: { Authorization: response.data }
            })
            .then(response => {
              this.setState({
                id: response.data.authorizedData.id,
                name: response.data.authorizedData.name,
                email: response.data.authorizedData.email,
                login: true
              });
            })
            .catch(error => {
              console.log(error);
            });
          // console.log(response.data);
          /*event.preventDefault();
          window.location = "/";*/
        })
        .catch(function(error) {
          alert("Wrong Password");
          console.log(error);
        });
  };
  async handleGoogle() {
    const profile = await axios.get("http://localhost:3333/auth/google");
    console.log("using google");
  }

  handleSelect(eventKey) {
    alert(`selected ${eventKey}`);
    this.setState({ value: eventKey });
  }

  updatePassword(evt) {
    this.setState({
      password: evt.target.value
    });
  }
  updateEmail(evt) {
    this.setState({
      email: evt.target.value
    });
  }

  render() {
    if (this.state.login === false) {
      const divStyle = {
        width: "100%",

        height: "1000px",

        backgroundSize: "cover"
      };
      return (
        <div>
          <style type="text/css">
            {`
    .btn-flat {
      background-color: orange;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    .btn-google{
      background-color: red;
      color: white;}
    center: {
    marginLeft: "auto",
    marginRight: "auto"
  }

    `}
          </style>

          <Jumbotron>
            <h1
              style={{ "font-family": "Century Gothic", "font-weight": "bold" }}
            >
              {" "}
              Hire without borders
            </h1>
            <h4 style={{ "font-family": "Century Gothic" }}>
              A platform to hire or get hired.
            </h4>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  onChange={evt => this.updateEmail(evt)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={evt => this.updatePassword(evt)}
                />
              </Form.Group>

              <Button
                variant="flat"
                style={{ "font-family": "Century Gothic" }}
                size="xxl"
                block
                onClick={e => this.handleSignIn(e)}
              >
                SIGN IN
              </Button>
              <Link to={`/signup`}>
                <NavLink
                  style={{ "font-family": "Century Gothic" }}
                  to="/signup"
                >
                  Don't have an account yet? SIGN UP
                </NavLink>
              </Link>
            </Form>
            <br />
            <ButtonToolbar>
              <Button
                style={{ "font-family": "Century Gothic" }}
                variant="google"
                onClick={this.handleGoogle}
              >
                Sign in with Google+
              </Button>
            </ButtonToolbar>
          </Jumbotron>
        </div>
      );
    } else {
      this.props.history.push(`/home`);
    }

    return <div />;
  }
}

export default Login;

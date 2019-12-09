import React, { Component } from "react";
import { Jumbotron, Button, Form, ButtonToolbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import validator from "../validations/validation";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: null,
      name: "",
      email: "",
      password: "",
      field: "",
      major: "",
      qualification: [],
      dateOfBirth: "",
      university: "",
      phoneNumber: "",
      experienceLevel: 0,
      yearOfGraduation: "",
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
          console.log(response);
          axios
            .get("http://localhost:3333/api/user/auth", {
              headers: { Authorization: response.data }
            })

            .then(response => {
              console.log(response.data.authorizedData.id);
              console.log(response.data.authorizedData.email);
              console.log(response.data.authorizedData.experienceLevel);

              this.setState({
                userID: response.data.authorizedData.id,
                email: response.data.authorizedData.email,
                password: response.data.authorizedData.password,
                name: response.data.authorizedData.name,
                field: response.data.authorizedData.field,
                major: response.data.authorizedData.major,
                qualification: response.data.authorizedData.qualification,
                dateOfBirth: response.data.authorizedData.dateOfBirth,
                university: response.data.authorizedData.university,
                phoneNumber: response.data.authorizedData.phoneNumber,
                experienceLevel: response.data.authorizedData.experienceLevel,
                yearOfGraduation: response.data.authorizedData.yearOfGraduation,
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
          alert(error);
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
    const userID = this.state.userID;
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

          <Jumbotron buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}>
            <h1
              style={{ "font-family": "Century Gothic", "font-weight": "bold" }}
            >
              {" "}
              Hire without borders
            </h1>
            <h4 style={{ "font-family": "Century Gothic" }}>
              Get any task done.
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
              {/* <Button
                
              > */}
                <Link to={`/googleLogin`}>
                  <button style={{ "font-family": "Century Gothic", "background-color":"red" }}
                variant="google"
                onClick={this.handleGoogle} type="button" class="btn btn-outline-light">
                    Sign in with Google+
                  </button>
                </Link>
              {/* </Button> */}
            </ButtonToolbar>
          </Jumbotron>
        </div>
      );
    } else {
      this.props.history.push(`/home/${userID}`);
    }

    return <div />;
  }
}

export default Login;

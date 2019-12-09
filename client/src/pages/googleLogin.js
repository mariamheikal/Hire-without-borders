import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import NavbarPage from "../components/Navbar";
import firebase from "firebase";
import axios from "axios";

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
// require("dotenv");
firebase.initializeApp({
  apiKey: require("../config/keys_dev").apikey,
  authDomain: require("../config/keys_dev").authdomain

});

class googleLogin extends Component {
  state = { 
    info:{},
    name:"",
    isSignedIn: false,
    email:"",
    userID: null
   };
    uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID

    ],
    callbacks: {
      signInSuccess: () => false
    }
  };


  componentDidMount = () => {

    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user, email:user.email });
      console.log(user.email);
      this.getUser();
     
    })

 
  };


  async getUser() {
    const email= this.state.email;
    console.log(email);
    await fetch(`http://localhost:3333/api/user/googlelogin/${email}`)
    .then(response => {
      console.log(response);
      axios
        .get("http://localhost:3333/api/user/auth", {
          headers: { Authorization: response.data }
        }).then(response => {
          console.log(response.data.authorizedData.id);
          console.log(response.data.authorizedData.email);
          console.log(response.data.authorizedData.experienceLevel);

          this.setState({
            userID: response.data.authorizedData.id,
            email: response.data.authorizedData.email,
            name: response.data.authorizedData.name
          });
        })
        .catch(error => {
          console.log(error);
        });
 
    })
    .catch(function(error) {
      alert(error);
      console.log(error);
    });
  }



  render() {
    const userID =  this.state.userID;       console.log(userID)

    return (
      <div className="App">
        {this.state.isSignedIn ? (
               
          <span> 
                  <NavbarPage userID={this.state.userID}/>
            <button  type="button" style={{ "font-family": "Century Gothic" , "color":"#D3D3D3"}}   class="btn btn-outline-dark" onClick={() => firebase.auth().signOut()}>Sign out</button>
            <h1   style={{ "font-family": "Century Gothic", "color":"#D3D3D3" }}>Welcome {firebase.auth().currentUser.displayName}</h1>
                <NavLink
                  style={{ "font-family": "Century Gothic" }}
                  to={`/home/${userID}`}
                >
               Visit your homepage
                </NavLink>
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    );
  }
}

export default googleLogin;

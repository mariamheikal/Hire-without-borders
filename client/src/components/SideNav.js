// import React from 'react';
import { bubble as Menu } from "react-burger-menu";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
//import BellIcon from "react-bell-icon";
import { Icon, Modal } from "semantic-ui-react";
import About from "../components/About";
import ContactUs from "../components/ContactUs";


import React, { Component } from "react";

class SideNav extends Component {
  state = { type: null, coID: null, data: null };

  componentDidMount() {
    this.getList();
  }
  // Retrieves the list of items from the Express app
  getList = async () => {
    //const coID = this.props.match.params.coID;
    await fetch(`/api/user/getUserData/`).then(data => {
      this.setState({ data });
    });

    this.setState({
      type: this.state.data.type,
      coID: this.state.data.id
    });
    // console.log(this.state.data.id);
    // console.log(this.state.data.type); /api/CreateAccount
  };

  logout = async e => {
    e.preventDefault();
    //const coID = this.props.match.params.coID;
    await fetch(`/api/user/logout`).then(res => res.json());
  };
  render() {
    // const type = this.state.data.type;

    // console.log(coID + " " + this.state.type);

      var styles = {
        bmBurgerButton: {
          position: "fixed",
          width: "30px",
          height: "20px",
          left: "26px",
          top: "56px"
        },
        bmBurgerBars: {
          background: "#373a47"
        },
        bmBurgerBarsHover: {
          background: "#a90000"
        },
        bmCrossButton: {
          height: "14px",
          width: "14px"
        },
        bmCross: {
          background: "black"
        },
        bmMenuWrap: {
          position: "fixed",
          height: "100%"
        },
        bmMenu: {
          background: "black",
          padding: "2.5em 1.5em 0",
          fontSize: "1.15em"
        },
        bmMorphShape: {
          fill: "black"
        },
        bmItemList: {
          color: "black",
          padding: "0em"
        },
        bmItem: {
          display: "inline-block"
        },
        bmOverlay: {
          background: "rgba(0, 0, 0, 0.3)"
        }
      };
      return (
        <div>
          <Menu styles={styles} disableAutoFocus>
        
            <br />
            <br />
            <br />
            <a className="menu-item" href="/">
              <h3>
                <Icon style={{"font-family":"Century Gothic"}} name="user outline" size="small" /> My Profile
              </h3>
            </a>
            <br />
            <a className="menu-item" href={`/`}>
              <h3>
                <Icon style={{"font-family":"Century Gothic"}}  size="small" />
                My Tasks
              </h3>
            </a>
            <br />
            <a className="menu-item" href={`/`}>
              <h3>
                <Icon style={{"font-family":"Century Gothic"}}  size="small" />
                Create a task
              </h3>
            </a>
            <br />

            <a>
              <Modal
                style={{
                  position: "absolute",

                  left: "20%",

                  top: "20%",

                  transform: "translate(-50%, -50%)"
                }}
                trigger={
                  <div>
                    <h3>
                      <Icon name="info circle" size="large" />
                      About
                    </h3>
                  </div>
                }
                basic
                size="large"
              >
                <Modal.Content>
                  <About />
                </Modal.Content>
              </Modal>
            </a>
            <br />

            <a>
              <Modal
                style={{
                  position: "absolute",

                  left: "20%",

                  top: "20%",

                  transform: "translate(-50%, -50%)"
                }}
                trigger={
                  <div>
                    <h3>
                      {" "}
                      <Icon name="mail" size="large" /> Contact Us
                    </h3>
                  </div>
                }
                basic
                size="large"
              >
                <Modal.Content>
                  <ContactUs />
                </Modal.Content>
              </Modal>
            </a>
            <br />

            <a
              onClick={e => {
                this.logout(e);
                window.location = "/";
              }}
            >
              <h3>
                <Icon name="sign-out" size="large" /> Logout
              </h3>
            </a>
          </Menu>
        </div>
      );
    } 
}

export default SideNav;
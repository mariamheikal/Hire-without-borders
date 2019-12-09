// import React, { Component } from "react";
// import { Nav, Navbar } from "react-bootstrap";
// import ContactUs from "../components/ContactUs";
// class NavbarPage extends Component {
//   state = {
//     userID: this.props.userID
//   };
//   logout = async e => {
//     e.preventDefault();
//     //const coID = this.props.match.params.coID;
//     await fetch(`http://localhost:3333/api/user/logout`).then(res =>
//       res.json()
//     );
//   };
//   render() {
//     const userID = this.state.userID;
//     console.log(userID);
//     console.log("NAVBAR");
//     console.log(userID);
//     return (
//       <Navbar style={{ backgroundColor: "//#endregion" }}>
//         <Nav className="mr-auto">
//           <text> </text>
//           <Nav.Link
//             style={{ color: "#FAFAFA", "font-family": "Century Gothic" }}
//             href={`/myprofile/${userID}`}
//             //href="/myprofile//${userID}"
//           >
//             My profile
//           </Nav.Link>
//           <Nav.Link
//             style={{ color: "#FAFAFA", "font-family": "Century Gothic" }}
//             href={`/home/${userID}`}
//           >
//             Home
//           </Nav.Link>
//           <Nav.Link
//             style={{ color: "#FAFAFA", "font-family": "Century Gothic" }}
//             href={`/createtask/${userID}`}
//           >
//             Create a task
//           </Nav.Link>
//           <Nav.Link
//             style={{ color: "#FAFAFA", "font-family": "Century Gothic" }}
//             href={`/uploadedtasks/${userID}`}
//           >
//             My uploaded tasks
//           </Nav.Link>

//           <Nav.Link
//             style={{ color: "#FAFAFA", "font-family": "Century Gothic" }}
//             href="/appliedtasks/:userID"
//           >
//             Applied tasks
//           </Nav.Link>
//         </Nav>

//         <Nav.Link
//           style={{ color: "#FAFAFA", "font-family": "Century Gothic" }}
//           href="/"
//         >
//           SignOut
//         </Nav.Link>
//       </Navbar>
//     );
//   }
// }

// export default NavbarPage;// import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import ContactUs from "../components/ContactUs";
import React, { Component } from "react";
class NavbarPage extends Component {
  state = {
    userID: this.props.userID
  };
  logout = async e => {
    e.preventDefault();
    //const coID = this.props.match.params.coID;
    await fetch(`http://localhost:3333/api/user/logout`).then(res =>
      res.json()
    );
  };
  render() {
    const userID = this.state.userID;
    console.log(userID);
    console.log("NAVBAR");
    console.log(userID);
    return (
      <Navbar style={{ backgroundColor: "//#endregion" }}>
        <Nav className="mr-auto">
          <text> </text>
          <Nav.Link
            style={{ color: "#FAFAFA", "font-family": "Century Gothic" }}
            href={`/myprofile/${userID}`}
            //href="/myprofile//${userID}"
          >
            My profile
          </Nav.Link>
          <Nav.Link
            style={{ color: "#FAFAFA", "font-family": "Century Gothic" }}
            href={`/home/${userID}`}
          >
            Home
          </Nav.Link>
          <Nav.Link
            style={{ color: "#FAFAFA", "font-family": "Century Gothic" }}
            href={`/createtask/${userID}`}
          >
            Create a task
          </Nav.Link>
          <Nav.Link
            style={{ color: "#FAFAFA", "font-family": "Century Gothic" }}
            href={`/uploadedtasks/${userID}`}
          >
            My uploaded tasks
          </Nav.Link>

          <Nav.Link
            style={{ color: "#FAFAFA", "font-family": "Century Gothic" }}
            href={`/appliedtasks/${userID}`}
          >
            My applied in tasks
          </Nav.Link>
        </Nav>

        <Nav.Link
          style={{ color: "#FAFAFA", "font-family": "Century Gothic" }}
          href="/"
        >
          SignOut
        </Nav.Link>
      </Navbar>
    );
  }
}

export default NavbarPage;

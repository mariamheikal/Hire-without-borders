// import NavbarPage from "../components/Navbar";
// //import SideNav from "../components/SideNav";
// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// class applicantProfile extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       info: {},
//       userID: window.location.pathname.split("/").pop(),
//       name: "",
//       email: "",
//       password: "",
//       field: "",
//       major: "",
//       qualification: "",
//       dateOfBirth: "",
//       university: "",
//       phoneNumber: "",
//       experienceLevel: 0,
//       yearOfGraduation: ""
//     };
//   }
//   componentDidMount() {
//     this.getUser();
//   }
//   async getUser() {
//     const userID = this.state.userID;
//     console.log(userID)
//     await fetch(`http://localhost:3333/api/user/getUserInfo/:userID`)
//       .then(res => res.json())
//       .then(info => this.setState({ info }));
     
//       name: this.state.info.memberFullName,
//       email: this.state.info.email,
//       field: this.state.info.field,
//       major: this.state.info.major,
//       qualification: this.state.info.qualification,
//       dateOfBirth: this.state.info.dateOfBirth,
//       university: this.state.info.university,
//       phoneNumber: this.state.info.phoneNumber,
//       experienceLevel: this.state.info.experienceLevel,
//       yearOfGraduation: this.state.info.yearOfGraduation
//     });
//   }
//   render() {
//     console.log("Applicant PROFILE");
//     const { info } = this.state;
//     const userID = this.state.userID;
//     console.log(info);
//     console.log(userID);

//     return (
//       <div>
//         <NavbarPage userID={this.props.match.params.userID} />

//         <div className="App">
//           <div class="card">
//             <div class="b">
//               <h3
//                 style={{ "font-family": "Century Gothic" }}
//                 class="card-header"
//               >
//                Applicant's profile
//               </h3>
//               <div class="card-body">
//                 <h5
//                   style={{ "font-family": "Century Gothic" }}
//                   class="card-text"
//                 >
//                   {this.state.name}
//                 </h5>
//                 <h5
//                   style={{ "font-family": "Century Gothic" }}
//                   class="card-text"
//                 >
//                   {"Majored in: " + this.state.major}
//                 </h5>
//                 <h5
//                   style={{ "font-family": "Century Gothic" }}
//                   class="card-text"
//                 >
//                   {"Email: " + this.state.email}
//                 </h5>
//                 <h5
//                   style={{ "font-family": "Century Gothic" }}
//                   class="card-text"
//                 >
//                   {"Mobile Number: " + this.state.phoneNumber}
//                 </h5>
//                 <h5
//                   style={{ "font-family": "Century Gothic" }}
//                   class="card-text"
//                 >
//                   {"Date of birth: " + this.state.dateOfBirth}
//                 </h5>
//                 <h5
//                   style={{ "font-family": "Century Gothic" }}
//                   class="card-text"
//                 >
//                   {"Field of experience: " + this.state.field}
//                 </h5>
//                 <h5
//                   style={{ "font-family": "Century Gothic" }}
//                   class="card-text"
//                 >
//                   {"Experience level: " + this.state.experienceLevel}
//                 </h5>
//                 <h5
//                   style={{ "font-family": "Century Gothic" }}
//                   class="card-text"
//                 >
//                   {"University: " + this.state.university}
//                 </h5>
//                 <h5
//                   style={{ "font-family": "Century Gothic" }}
//                   class="card-text"
//                 >
//                   {"Graduation year: " + this.state.yearOfGraduation}
//                 </h5>
//                 <h5
//                   style={{ "font-family": "Century Gothic" }}
//                   class="card-text"
//                 >
//                   {"Qualifications: " + this.state.qualification}
//                 </h5>
//                 {/* <Link to={`/editprofile`}>
//                   <button type="button" class="btn btn-outline-dark">
//                     edit
//                   </button>
//                 </Link> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default applicantProfile;

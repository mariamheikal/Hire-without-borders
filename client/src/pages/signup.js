// import React, { Component } from "react";
// import { Button, Col, Form } from "react-bootstrap";
// import axios from "axios";
// import validator from "../validations/validation";

// function simulateNetworkRequest() {
//   return new Promise(resolve => setTimeout(resolve, 2000));
// }
// function getValue(item) {
//   var value = item.name;
//   return value;
// }

// class signup extends Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//     this.state = {
//       isLoading: false,
//       inputList: [],
//       memberFullName:"",
//       email: "",
//       password: "",
//       dateOfBirth:"",
//       memberPhoneNumber:"",
//       experienceLevel:"",
//       qualification:[{ name: "" }],
//       university: "",
//       major:"",
//       yearOfGraduation:"",
//       field:"",
//       city: "Egypt"
//     };
//   }

//   updateName(evt) {
//     this.setState({
//       memberFullName: evt.target.value
//     });
//   }

//   updateYearOfGraduation(evt) {
//     this.setState({
//       yearOfGraduation: evt.target.value
//     });
//   }

//   updateSkill1(evt) {
//     this.setState({
//       skill1: evt.target.value
//     });
//   }
//   updateSkill2(evt) {
//     this.setState({
//       skill2: evt.target.value
//     });
//   }
//   updateSkill3(evt) {
//     this.setState({
//       skill3: evt.target.value
//     });
//   }
//   updateSkill4(evt) {
//     this.setState({
//       skill4: evt.target.value
//     });
//   }

//   updateField(evt) {
//     this.setState({
//       field: evt.target.value
//     });
//   }
//   updatePassword(evt) {
//     this.setState({
//       password: evt.target.value
//     });
//   }
  
//   updateExperienceLevel(evt) {
//     this.setState({
//       experienceLevel: evt.target.value
//     });
//   }
  
//   updateBirthday(evt) {
//     this.setState({
//       dateOfBirth: evt.target.value
//     });
//   }
//   updateEmail(evt) {
//     this.setState({
//       email: evt.target.value
//     });
//   }
//   updatePhoneNumber(evt) {
//     this.setState({
//       memberPhoneNumber: evt.target.value
//     });
//   }

//   updateUniversity(evt) {
//     this.setState({
//       university: evt.target.value
//     });
//   }

//   updateMajor(evt) {
//     this.setState({
//       major: evt.target.value
//     });
//   }



//   handleClick() {
//     this.setState({ isLoading: true }, () => {
//       simulateNetworkRequest().then(() => {
//         this.setState({ isLoading: false });
//       });
//     });
//   }


//   async handleSubmit(event) {
//     console.log("handled");
//     const info = {
//       memberFullName: this.state.memberFullName,
//       password: this.state.password,
//       email: this.state.email,
//       dateOfBirth: this.state.dateOfBirth,
//       memberPhoneNumber: this.state.memberPhoneNumber,
//       experienceLevel: this.state.experienceLevel,
//       qualification: this.state.qualification.map(getValue),
//       university: this.state.university,
//       major: this.state.major,
//       yearOfGraduation: this.state.yearOfGraduation,
//       field: this.state.field
//     };
//     const isValidated = validator.createUserValidation(info);
//     if (isValidated.error) alert(isValidated.error.details[0].message);
//     else{
//       await axios
//         .post("http://localhost:3333/api/user/createNewUserAccount", info)
//         .then(function(response) {
//           console.log("user create is successful");
//           alert(
//             "Congratulations! Your account has been created successfully. You can now login"
//           );
//           console.log(info);
//           event.preventDefault();
//           window.location = "/";
//         })
//         .catch(function(error) {
//           console.log(error);
//           alert(error.message);
//         });
//   }
//   }
//   handleSelect(eventKey) {
//     alert(`selected ${eventKey}`);
//     this.setState({ value: eventKey });
//   }

//     handleAddSkill = () => {
//     this.setState({
//       qualification: this.state.qualification.concat([{ name: "" }])
//     });
//   };

//   handleSkillNameChange = idx => evt => {
//     const newSkill = this.state.qualification.map((skill, sidx) => {
//       if (idx !== sidx) return skill;
//       return { ...skill, name: evt.target.value };
//     });

//     this.setState({ qualification: newSkill });
//   };



//   handleRemoveSkill = idx => () => {
//     this.setState({
//       qualification: this.state.qualification.filter((s, sidx) => idx !== sidx)
//     });
//   };

//   render() {
//     console.log("SIGN UP");
//     return (
      
//       <div>
//         <style type="text/css">
//           {`
//     .btn-flat {
//       background-color: orange;
//       color: white;
//     }

//     .btn-xxl {
//       padding: 1rem 1.5rem;
//       font-size: 1.5rem;
//     }
//     `}
//         </style>
//         <br />
//         <h2 style={{ "font-family":"Century Gothic","font-weight": "bold"}}>Create an account</h2>
//         <br />
        
//         <h3 style={{"font-family":"Century Gothic"}}> Fill in your details </h3>
//         <Form>
//           <Form.Group controlId="formGridName">
//             <Form.Label style={{"font-family":"Century Gothic"}}>Name  </Form.Label>
//             <Form.Control
//               placeholder="Enter Name"
//               onChange={evt => this.updateName(evt)}
//             />
//           </Form.Group>
//           <Form.Row>
//             <Form.Group as={Col} controlId="formGridEmail">
//               <Form.Label style={{"font-family":"Century Gothic"}}>Email  </Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="e.g. hirewithoutborders@email.com"
//                 onChange={evt => this.updateEmail(evt)}
//               />
//             </Form.Group>

//             <Form.Group as={Col} controlId="formGridPassword">
//               <Form.Label style={{"font-family":"Century Gothic"}}>Password </Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Password"
//                 onChange={evt => this.updatePassword(evt)}
//               />
//             </Form.Group>

//           </Form.Row>
//                  <Form.Group controlId="formGridPhoneNumber">
//             <Form.Label style={{"font-family":"Century Gothic"}}>Phone Number </Form.Label>
//             <Form.Control onChange={evt => this.updatePhoneNumber(evt)} />
//           </Form.Group>
      
//           <Form.Group controlId="formGridBirthday">
//             <Form.Label style={{"font-family":"Century Gothic"}}>Birthday</Form.Label>
//             <Form.Control
//               type="string"
//               onChange={evt => this.updateBirthday(evt)}
//             />
//           </Form.Group>

//           <Form.Group controlId="formGridField">
//             <Form.Label style={{"font-family":"Century Gothic"}}>Field</Form.Label>
//             <Form.Control
//               placeholder="e.g. Front end design"
//               onChange={evt => this.updateField(evt)}
//             />
//           </Form.Group>

//           <Form.Group controlId="formGridMajor">
//             <Form.Label style={{"font-family":"Century Gothic"}} >Major</Form.Label>
//             <Form.Control
//               placeholder="e.g. Software Engineering"
//               onChange={evt => this.updateMajor(evt)}
//             />
//           </Form.Group>


//           <Form.Group controlId="formGridUniversity">
//             <Form.Label style={{"font-family":"Century Gothic"}} >University</Form.Label>
//             <Form.Control
//               placeholder="e.g. GUC"
//               onChange={evt => this.updateUniversity(evt)}
//             />
//           </Form.Group>


//           <Form.Group controlId="formGridExperienceLevel">
//             <Form.Label style={{"font-family":"Century Gothic"}}>Experience Level </Form.Label>
//             <Form.Control
//                typr="Number"
//               placeholder="0-5"
//               onChange={evt => this.updateExperienceLevel(evt)}
//             />
//           </Form.Group>

//           <Form.Group controlId="formGridGraduationYear">
//             <Form.Label style={{"font-family":"Century Gothic"}}>Graduation Year  </Form.Label>
//             <Form.Control
//                typr="Number"
//               onChange={evt => this.updateYearOfGraduation(evt)}
//             />
//           </Form.Group>

//           <Form.Row>

//             <Form.Group as={Col} controlId="formGridSkill">
//               <Form.Label style={{"font-family":"Century Gothic"}}>Qualifications</Form.Label>
//               {this.state.qualification.map((skill, idx) => (
//                 <div className="skill">
//                   <input
//                     type="text"
//                     placeholder={`Qualification ${idx + 1} `}
//                     value={skill.name}
//                     onChange={this.handleSkillNameChange(idx)}
//                   />
//                   <button
//                     type="button"
//                     onClick={this.handleRemoveSkill(idx)}
//                     className="small"
//                   >
//                     -
//                   </button>
//                 </div>
//               ))}
//               <button
//                 type="button"
//                 onClick={this.handleAddSkill}
//                 style={{"font-family":"Century Gothic"}}
//                 className="small"
//               >
//                 Add
//               </button>
//             </Form.Group>
 
//           </Form.Row>
//           <Button
//             variant="flat"
            
//             size="xl"
//             style={{"font-family":"Century Gothic", position: "center", top: "5", right: "5" }}
//             type="button"
//             onClick={event => this.handleSubmit(event)}
//           >
//             Submit
//           </Button>
//         </Form>
//       </div>
//     );
//   }
// }

// export default signup;
import React, { Component } from "react";
import { Button, Col, Form } from "react-bootstrap";
import axios from "axios";
import validator from "../validations/validation";

function simulateNetworkRequest() {
  return new Promise(resolve => setTimeout(resolve, 2000));
}
function getValue(item) {
  var value = item.name;
  return value;
}

class signup extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isLoading: false,
      inputList: [],
      memberFullName:"",
      email: "",
      password: "",
      dateOfBirth:"",
      memberPhoneNumber:"",
      experienceLevel:"",
      qualification:[{ name: "" }],
      university: "",
      major:"",
      yearOfGraduation:"",
      field:"",
      city: "Egypt"
    };
  }

  updateName(evt) {
    this.setState({
      memberFullName: evt.target.value
    });
  }

  updateYearOfGraduation(evt) {
    this.setState({
      yearOfGraduation: evt.target.value
    });
  }

  updateSkill1(evt) {
    this.setState({
      skill1: evt.target.value
    });
  }
  updateSkill2(evt) {
    this.setState({
      skill2: evt.target.value
    });
  }
  updateSkill3(evt) {
    this.setState({
      skill3: evt.target.value
    });
  }
  updateSkill4(evt) {
    this.setState({
      skill4: evt.target.value
    });
  }

  updateField(evt) {
    this.setState({
      field: evt.target.value
    });
  }
  updatePassword(evt) {
    this.setState({
      password: evt.target.value
    });
  }
  
  updateExperienceLevel(evt) {
    this.setState({
      experienceLevel: evt.target.value
    });
  }
  
  updateBirthday(evt) {
    this.setState({
      dateOfBirth: evt.target.value
    });
  }
  updateEmail(evt) {
    this.setState({
      email: evt.target.value
    });
  }
  updatePhoneNumber(evt) {
    this.setState({
      memberPhoneNumber: evt.target.value
    });
  }

  updateUniversity(evt) {
    this.setState({
      university: evt.target.value
    });
  }

  updateMajor(evt) {
    this.setState({
      major: evt.target.value
    });
  }



  handleClick() {
    this.setState({ isLoading: true }, () => {
      simulateNetworkRequest().then(() => {
        this.setState({ isLoading: false });
      });
    });
  }


  async handleSubmit(event) {
    console.log("handled");
    const info = {
      memberFullName: this.state.memberFullName,
      password: this.state.password,
      email: this.state.email,
      dateOfBirth: this.state.dateOfBirth,
      memberPhoneNumber: this.state.memberPhoneNumber,
      experienceLevel: this.state.experienceLevel,
      qualification: this.state.qualification.map(getValue),
      university: this.state.university,
      major: this.state.major,
      yearOfGraduation: this.state.yearOfGraduation,
      field: this.state.field
    };
    const isValidated = validator.createUserValidation(info);
    if (isValidated.error) alert(isValidated.error.details[0].message);
    else{
      await axios
        .post("http://localhost:3333/api/user/createNewUserAccount", info)
        .then(function(response) {
          console.log("user create is successful");
          alert(
            "Congratulations! Your account has been created successfully. You can now login"
          );
          console.log(info);
          event.preventDefault();
          window.location = "/";
        })
        .catch(function(error) {
          console.log(error);
          alert("Wrong email or password");
        });
  }
  }
  handleSelect(eventKey) {
    alert(`selected ${eventKey}`);
    this.setState({ value: eventKey });
  }

    handleAddSkill = () => {
    this.setState({
      qualification: this.state.qualification.concat([{ name: "" }])
    });
  };

  handleSkillNameChange = idx => evt => {
    const newSkill = this.state.qualification.map((skill, sidx) => {
      if (idx !== sidx) return skill;
      return { ...skill, name: evt.target.value };
    });

    this.setState({ qualification: newSkill });
  };



  handleRemoveSkill = idx => () => {
    this.setState({
      qualification: this.state.qualification.filter((s, sidx) => idx !== sidx)
    });
  };

  render() {
    console.log("SIGN UP");
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
    `}
        </style>
        <br />
        <h2 style={{ "font-family":"Century Gothic","font-weight": "bold"}}>Create an account</h2>
        <br />
        
        <h3 style={{"font-family":"Century Gothic"}}> Fill in your details </h3>
        <Form>
          <Form.Group controlId="formGridName">
            <Form.Label style={{"font-family":"Century Gothic"}}>Name  </Form.Label>
            <Form.Control
              placeholder="Enter Name"
              onChange={evt => this.updateName(evt)}
            />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label style={{"font-family":"Century Gothic"}}>Email  </Form.Label>
              <Form.Control
                type="email"
                placeholder="e.g. hirewithoutborders@email.com"
                onChange={evt => this.updateEmail(evt)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label style={{"font-family":"Century Gothic"}}>Password </Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={evt => this.updatePassword(evt)}
              />
            </Form.Group>

          </Form.Row>
                 <Form.Group controlId="formGridPhoneNumber">
            <Form.Label style={{"font-family":"Century Gothic"}}>Phone Number </Form.Label>
            <Form.Control onChange={evt => this.updatePhoneNumber(evt)} />
          </Form.Group>
      
          <Form.Group controlId="formGridBirthday">
            <Form.Label style={{"font-family":"Century Gothic"}}>Birthday</Form.Label>
            <Form.Control
              type="string"
              onChange={evt => this.updateBirthday(evt)}
            />
          </Form.Group>

          <Form.Group controlId="formGridField">
            <Form.Label style={{"font-family":"Century Gothic"}}>Field</Form.Label>
            <Form.Control
              placeholder="e.g. Front end design"
              onChange={evt => this.updateField(evt)}
            />
          </Form.Group>

          <Form.Group controlId="formGridMajor">
            <Form.Label style={{"font-family":"Century Gothic"}} >Major</Form.Label>
            <Form.Control
              placeholder="e.g. Software Engineering"
              onChange={evt => this.updateMajor(evt)}
            />
          </Form.Group>


          <Form.Group controlId="formGridUniversity">
            <Form.Label style={{"font-family":"Century Gothic"}} >University</Form.Label>
            <Form.Control
              placeholder="e.g. GUC"
              onChange={evt => this.updateUniversity(evt)}
            />
          </Form.Group>


          <Form.Group controlId="formGridExperienceLevel">
            <Form.Label style={{"font-family":"Century Gothic"}}>Experience Level </Form.Label>
            <Form.Control
               typr="Number"
              placeholder="0-5"
              onChange={evt => this.updateExperienceLevel(evt)}
            />
          </Form.Group>

          <Form.Group controlId="formGridGraduationYear">
            <Form.Label style={{"font-family":"Century Gothic"}}>Graduation Year  </Form.Label>
            <Form.Control
               typr="Number"
              onChange={evt => this.updateYearOfGraduation(evt)}
            />
          </Form.Group>

          <Form.Row>

            <Form.Group as={Col} controlId="formGridSkill">
              <Form.Label style={{"font-family":"Century Gothic"}}>Qualifications</Form.Label>
              {this.state.qualification.map((skill, idx) => (
                <div className="skill">
                  <input
                    type="text"
                    placeholder={`Qualification ${idx + 1} `}
                    value={skill.name}
                    onChange={this.handleSkillNameChange(idx)}
                  />
                  <button
                    type="button"
                    onClick={this.handleRemoveSkill(idx)}
                    className="small"
                  >
                    -
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={this.handleAddSkill}
                style={{"font-family":"Century Gothic"}}
                className="small"
              >
                Add
              </button>
            </Form.Group>
 
          </Form.Row>
          <Button
            variant="flat"
            
            size="xl"
            style={{"font-family":"Century Gothic", position: "center", top: "5", right: "5" }}
            type="button"
            onClick={event => this.handleSubmit(event)}
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default signup;

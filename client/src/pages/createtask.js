// import React, { Component } from "react";
// import { Button, Col, Form } from "react-bootstrap";
// import axios from "axios";
// import validator from "../validations/validation";
// import NavbarPage from "../components/Navbar";
// function simulateNetworkRequest() {
//   return new Promise(resolve => setTimeout(resolve, 2000));
// }
// function getValue(item) {
//   var value = item.name;
//   return value;
// }

// class createtask extends Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//     this.state = {
//       isLoading:false,
//       inputList: [],
//       userID: window.location.pathname.split("/").pop(),
//       title:"",
//       description: "",
//       field:"",
//       requiredSkills:[{ name: "" }]     
//     };
//   }

//   updateTitle(evt) {
//     this.setState({
//       title: evt.target.value
//     });
//   }

//   updateDescription(evt) {
//     this.setState({
//       description: evt.target.value
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


//   handleClick() {
//     this.setState({ isLoading: true }, () => {
//       simulateNetworkRequest().then(() => {
//         this.setState({ isLoading: false });
//       });
//     });
//   }


//   async handleSubmit(event) {
//     const info = {
//       title: this.state.title,
//       description: this.state.description,
//       field: this.state.field,
//       requiredSkills: this.state.requiredSkills.map(getValue),
//     };
//     const isValidated = validator.createTaskValidation(info);
//     if (isValidated.error) alert(isValidated.error.details[0].message);
//     else{
//       const userID = this.state.userID;
//       await axios
//         .post("http://localhost:3333/api/user/createTask", info)
//         .then(function(response) {
//           console.log("task create is successful");
//           alert(
//             "Congratulations! Your task has been created successfully."
//           );
//           event.preventDefault();
//           window.location = `/createtask/${userID}`;
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

//   handleAddSkill = () => {
//     this.setState({
//       requiredSkills: this.state.requiredSkills.concat([{ name: "" }])
//     });
//   };

//   handleSkillNameChange = idx => evt => {
//     const newSkill = this.state.requiredSkills.map((skill, sidx) => {
//       if (idx !== sidx) return skill;
//       return { ...skill, name: evt.target.value };
//     });

//     this.setState({ requiredSkills: newSkill });
//   };



//   handleRemoveSkill = idx => () => {
//     this.setState({
//       requiredSkills: this.state.requiredSkills.filter((s, sidx) => idx !== sidx)
//     });
//   };


  
//   render() {
//               const userID = this.state.userID;
// console.log(userID);
// console.log("CREATE TASK");
//     return (
//       <div>
//       <NavbarPage userID={this.props.match.params.userID}/>
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
//         <h2 style={{ "font-family":"Century Gothic","font-weight": "bold"}}>Create a task</h2>
//         <br />
        
//         <h3 style={{"font-family":"Century Gothic"}}> Fill in task's details </h3>
//         <Form>
//           <Form.Group controlId="formGridTitle">
//             <Form.Label style={{"font-family":"Century Gothic"}}>Title  </Form.Label>
//             <Form.Control
//               onChange={evt => this.updateTitle(evt)}
//             />
//           </Form.Group>
         
//             <Form.Group  controlId="formGridDesc">
//               <Form.Label style={{"font-family":"Century Gothic"}}>Description </Form.Label>
//               <Form.Control
//                 type="string"
//                 onChange={evt => this.updateDescription(evt)}
//               />
//             </Form.Group>


//           <Form.Group controlId="formGridField">
//             <Form.Label style={{"font-family":"Century Gothic"}}>Field</Form.Label>
//             <Form.Control
//               placeholder="e.g. Web development"
//               onChange={evt => this.updateField(evt)}
//             />
//           </Form.Group>

//           <Form.Row>

//             <Form.Group as={Col} controlId="formGridSkill">
//               <Form.Label style={{"font-family":"Century Gothic"}}>Required Skills</Form.Label>
//               {this.state.requiredSkills.map((skill, idx) => (
//                 <div className="skill">
//                   <input
//                     type="text"
//                     placeholder={`Skill ${idx + 1} `}
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

// export default createtask;

import React, { Component } from "react";
import { Button, Col, Form } from "react-bootstrap";
import axios from "axios";
import validator from "../validations/validation";
import NavbarPage from "../components/Navbar";
function simulateNetworkRequest() {
  return new Promise(resolve => setTimeout(resolve, 2000));
}
function getValue(item) {
  var value = item.name;
  return value;
}

class createtask extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isLoading:false,
      inputList: [],
      userID: window.location.pathname.split("/").pop(),
      title:"",
      description: "",
      field:"",
      requiredSkills:[{ name: "" }]     
    };
  }

  updateTitle(evt) {
    this.setState({
      title: evt.target.value
    });
  }

  updateDescription(evt) {
    this.setState({
      description: evt.target.value
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


  handleClick() {
    this.setState({ isLoading: true }, () => {
      simulateNetworkRequest().then(() => {
        this.setState({ isLoading: false });
      });
    });
  }


  async handleSubmit(event) {
    const info = {
      title: this.state.title,
      description: this.state.description,
      field: this.state.field,
      requiredSkills: this.state.requiredSkills.map(getValue),
    };
    const isValidated = validator.createTaskValidation(info);
    if (isValidated.error) alert(isValidated.error.details[0].message);
    else{
      const userID = this.state.userID;
      await axios
        .post("http://localhost:3333/api/user/createTask", info)
        .then(function(response) {
          console.log("task create is successful");
          alert(
            "Congratulations! Your task has been created successfully."
          );
          event.preventDefault();
          window.location = `/createtask/${userID}`;
        })
        .catch(function(error) {
          console.log(error);
          alert(error.message);
        });
  }
  }
  handleSelect(eventKey) {
    alert(`selected ${eventKey}`);
    this.setState({ value: eventKey });
  }

  handleAddSkill = () => {
    this.setState({
      requiredSkills: this.state.requiredSkills.concat([{ name: "" }])
    });
  };

  handleSkillNameChange = idx => evt => {
    const newSkill = this.state.requiredSkills.map((skill, sidx) => {
      if (idx !== sidx) return skill;
      return { ...skill, name: evt.target.value };
    });

    this.setState({ requiredSkills: newSkill });
  };



  handleRemoveSkill = idx => () => {
    this.setState({
      requiredSkills: this.state.requiredSkills.filter((s, sidx) => idx !== sidx)
    });
  };


  
  render() {
              const userID = this.state.userID;
console.log(userID);
console.log("CREATE TASK");
    return (
      <div>
      <NavbarPage userID={this.props.match.params.userID}/>
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
        <h2 style={{ "font-family":"Century Gothic","font-weight": "bold"}}>Create a task</h2>
        <br />
        
        <h3 style={{"font-family":"Century Gothic", "color":"grey" }}> Fill in task's details </h3>
        <Form>
          <Form.Group controlId="formGridTitle">
            <Form.Label style={{"font-family":"Century Gothic"}}>Title  </Form.Label>
            <Form.Control
              onChange={evt => this.updateTitle(evt)}
            />
          </Form.Group>
         
            <Form.Group  controlId="formGridDesc">
              <Form.Label style={{"font-family":"Century Gothic"}}>Description </Form.Label>
              <Form.Control
                type="string"
                onChange={evt => this.updateDescription(evt)}
              />
            </Form.Group>


          <Form.Group controlId="formGridField">
            <Form.Label style={{"font-family":"Century Gothic"}}>Field</Form.Label>
            <Form.Control
              placeholder="e.g. Web development"
              onChange={evt => this.updateField(evt)}
            />
          </Form.Group>

          <Form.Row>

            <Form.Group as={Col} controlId="formGridSkill">
              <Form.Label style={{"font-family":"Century Gothic"}}>Required Skills</Form.Label>
              {this.state.requiredSkills.map((skill, idx) => (
                <div className="skill">
                  <input
                    type="text"
                    placeholder={`Skill ${idx + 1} `}
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

export default createtask;

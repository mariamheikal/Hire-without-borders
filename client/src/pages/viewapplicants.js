import NavbarPage from "../components/Navbar";
import React, { Component } from "react";
import { Link } from "react-router-dom";


class viewapplicants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      applicants: [],
      taskID: window.location.pathname.split("/").pop(),
      message: ""
    };
  }
  // Fetch the list on first mount

  componentDidMount() {
    this.getApplicants();
  }

  gettasks = async () => {
        const taskID = this.state.taskID;

    await fetch(`http://localhost:3333/api/user/viewApplicants/${taskID}`)
      .then(res => res.json())
      .then(applicants => this.setState({ applicants }));
    console.log(this.state.applicants);
  };

  render() {
        const userID = this.state.userID;
    console.log(userID);
    console.log("View Applicants");
    const { applicants } = this.state;
    console.log(applicants);
    return (
      <div>
      <NavbarPage userID={this.props.match.params.userID}/>
        {applicants.length ? (
          <div>
            {applicants.map(el => {
              return (
                <div key={el.applicantID} class="card">
                  <h5 class="card-header" >
                    {el.name}
                  </h5>
                  <div class="card-body" >
                    <p class="card-text">{"Field of experience: " + el.field}</p>
                    <p class="card-text">{"Major: " + el.major}</p>
                    <p class="card-text">{"Experience Level: " + el.experienceLevel}</p>
                    <NavLink
                  style={{ "font-family": "Century Gothic" }}
                   to={`/viewapplicants/${taskID}`}
                >
                    View applicant profile
                </NavLink>

                  </div>
                  <Link to={`/viewmytask/${userID}/${el.id}`}>
                    <button type="button" class="btn btn-outline-dark">
                      View task details
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No task is found.</h2>
          </div>
        )}
      </div>
    );
  }
}

export default viewapplicants;

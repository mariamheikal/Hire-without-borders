import React, { Component } from "react";
import {
  faPhone,
  faAt,
  faMapMarkerAlt,
  faCheck,
  faGlobe,
  faPencilAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Jumbotron,
  Button,
  Badge,
  Card,
  Row,
  Container,
  Col,
  ButtonGroup
} from "react-bootstrap";
class editprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      //   coID: window.location.pathname.split("/").pop(),
      flag1: false,
      flag2: false,
      flag3: false,
      flag4: false,
      namee: "",
      closearr: [],
      closebtns: []
      // rID: this.props.match.params.rID
    };
    this.handleChange = this.handleChange.bind(this);
  }
  toggleEditing1() {
    this.setState({
      flag1: !this.state.flag
    });
  }
  toggleEditing2() {
    this.setState({
      flag2: !this.state.flag
    });
  }
  toggleEditing3() {
    this.setState({
      flag3: !this.state.flag
    });
  }
  toggleEditing4() {
    this.setState({
      flag4: !this.state.flag
    });
  }
  handleChange(e) {
    this.setState({ namee: e.target.value });
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = async () => {
    const coID = this.props.coID;
    await fetch(`http://localhost:3333/api/user/viewprofile`)
      .then(res => res.json())
      .then(info => this.setState({ info }));
  };

  getUser = (e, a) => {
    e.preventDefault();
    const c = this.state.namee;

    // console.log("hiii");
    let databody = {
      [a]: c
    };
    console.log(databody);
    const coID = this.state._id;
    fetch(`http://localhost:3333/api/user/updateprofile`, {
      method: "PUT",
      body: JSON.stringify(databody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(json => this.setState({ res: json }));
  };

  render() {
    console.log(info);
    const coID = this.state.info._id;
    const { info } = this.state;

    //console.log(this.state.namee)

    //      }
    return (
      <div>
        <Row>
          <FontAwesomeIcon icon={faPhone} />
          <p id="phone"> memberFullname:</p>
          {info.memberFullname}
        </Row>
        <Row>
          <FontAwesomeIcon icon={faAt} />
          <p id="email"> Email:</p>
          {info.email}
        </Row>
        <Row>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <p id="address"> Address:</p>
          {info.address}
        </Row>
        <Row>
          <FontAwesomeIcon icon={faGlobe} />
          <p id="website"> univeristy:</p>
          {info.univeristy}
        </Row>
        <Row>
          <FontAwesomeIcon icon={faGlobe} />
          <p id="website"> field:</p>
          {info.field}
        </Row>
        <Row>
          <FontAwesomeIcon icon={faGlobe} />
          <p id="website"> major:</p>
          {info.major}
        </Row>
      </div>
    );
  }
}
export default editprofile;

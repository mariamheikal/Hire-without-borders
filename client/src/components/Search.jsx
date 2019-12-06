import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
        <div class="dropdown">
          <a id = "resume" href="#" class="dropbtn"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"><button class="btn btn-secondary dropdown-toggle" type="button">
              <span class="no_hover"> What do you want to search for?</span>
              <span class="hover"> What do you want to search for?</span>
          </button></a>
          <div class="dropdown-content">
            <a id = "coworkingSpace" href="/">Coworking spaces</a>
            <a id = "partners" href="/">Partners</a>
            <a id = "members" href="/">Members</a>
          </div> 
        </div> 

    );
  }
}

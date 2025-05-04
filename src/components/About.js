import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        name: "",
        location: "",
        avatar_url: "",
      },
    };
  }

  render() {
    return (
      <div className="m-10 flex flex-col justify-center items-center">
        <h2 className="font-gilroy items-center font-bold text-xl">About Us</h2>
        <UserClass />
        {/* <h3>Developed By  Madhu Priya</h3> */}
      </div>
    );
  }
}

export default About;

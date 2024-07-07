import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(){
        super();
        this.state={
            userInfo:{
                name: "",
                location:"",
                avatar_url:""
            }
        }
    }

    render(){
        return ( <div>
            <h2>About Us</h2>
            <UserClass />
            {/* <h3>Developed By  Madhu Priya</h3> */}
        </div>
       )
    }
   
}

export default About;
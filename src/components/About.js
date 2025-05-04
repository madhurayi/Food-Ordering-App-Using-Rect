import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

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
            <div>
            <UserContext.Consumer>
                {({loggedInUser})=>(
                    <h1 className="text-lg font-bold">{loggedInUser} </h1>
                )}
            </UserContext.Consumer>
            </div>
            <UserClass />
            {/* <h3>Developed By  Madhu Priya</h3> */}
        </div>
       )
    }
   
}

export default About;
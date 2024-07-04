import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count: 0,
            count2: 0
        }
    }
    

    render(){
        const {name,location}=this.props;
        const {count}= this.state;
        return (
            <div className="user-card">
             <h1>Name: {name}</h1>
            <h2>Location: {location}</h2>
            <h2>Count: {count}</h2>
            <h3>contact: rayi.madhupriya@gmail.com</h3>
        </div>
        )       
    }
}

export default UserClass;
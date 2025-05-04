import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name: "",
                location:"",
                avatar_url:""
            }
        }
    }
    
    async componentDidMount(){
        const data= await fetch("https://api.github.com/users/madhurayi");
        const jsonData= await data.json();
        this.setState({
            userInfo:jsonData
        })
    }

    render(){
        const {name, location, avatar_url}=this.state.userInfo;

        return (
            <div className="user-card">
             <h1>Name: {name}</h1>
             <img src={avatar_url} />
            <h2>Location: {location}</h2>
            <h3>contact: rayi.madhupriya@gmail.com</h3>
        </div>
        )       
    }
}

export default UserClass;
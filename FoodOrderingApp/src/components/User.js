import { useState } from "react";

const User= ()=>{
    const [count,setCount]=useState(0);
    return (
        <div className="user-card">
            <h1>Name: Madhu Priya</h1>
            <h2>Location: Nellore , Andhra</h2>
            <h3>count: {count}</h3>
            <h3>contact: rayi.madhupriya@gmail.com</h3>
        </div>
    )
}

export default User;
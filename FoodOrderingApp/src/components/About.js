import User from "./User";
import UserClass from "./UserClass";

const About=()=>{
   return ( <div>
        <h2>About Us</h2>
        <User/>
        <UserClass name={"Madhu Priya"} location={"Nellore Andhra Pradesh"}/>
        {/* <h3>Developed By  Madhu Priya</h3> */}
    </div>
   )
}

export default About;
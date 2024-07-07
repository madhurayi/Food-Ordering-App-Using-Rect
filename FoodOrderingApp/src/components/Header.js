import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {

    // console.log("header renered");
    const [btnNameReact,setBtnNameReact]=useState("Login");
    const onlineStatus=useOnlineStatus();
    console.log(onlineStatus);
    //If there is no dependency array ==> use effect is called on every render
    //If the dependency array is empty ==> use effect is called on initial render(just once)

    return (

        <div className="header">
            <div className="header-logo">
                <img alt="res-logo" className="image" 
                // src="https://img.freepik.com/premium-vector/burger-fast-food-restaurant-mascot-logo-design-template-vector_498048-779.jpg?ga=GA1.1.157519005.1709380715&semt=ais_user"
                src={LOGO_URL}
                 />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About Us</Link></li>
                    <li> <Link to={"/contact"}>Contact Us</Link></li>
                    <li> <Link to={"/grocery"}>Grocery</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=>{
                       btnNameReact==="Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                    }}> {btnNameReact}</button>  
                </ul>  
            </div>
        </div>
       
    )
}

export default Header;
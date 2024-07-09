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

        <div className="flex justify-between shadow-md bg-pink-50">
            <div className="header-logo">
                <img alt="res-logo" className="w-36"
                // src="https://img.freepik.com/premium-vector/burger-fast-food-restaurant-mascot-logo-design-template-vector_498048-779.jpg?ga=GA1.1.157519005.1709380715&semt=ais_user"
                src={LOGO_URL}
                 />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-4"><Link to={"/"}>Home</Link></li>
                    <li className="px-4"><Link to={"/about"}>About Us</Link></li>
                    <li className="px-4"> <Link to={"/contact"}>Contact Us</Link></li>
                    <li className="px-4"> <Link to={"/grocery"}>Grocery</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="login-btn" onClick={()=>{
                       btnNameReact==="Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                    }}> {btnNameReact}</button>  
                </ul>  
            </div>
        </div>
       
    )
}

export default Header;
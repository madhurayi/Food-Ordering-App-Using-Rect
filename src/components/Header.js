import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { FiUser } from "react-icons/fi";
import EMPTY_CART from "../assets/EMPTY_CART.png";
const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  return (
    <div className="flex justify-between h-20 shadow-md bg-white ">
      <div className="flex items-center ml-4">
        <img
          alt="res-logo"
          className="w-24 h-16 rounded-md"
          // src="https://img.freepik.com/premium-vector/burger-fast-food-restaurant-mascot-logo-design-template-vector_498048-779.jpg?ga=GA1.1.157519005.1709380715&semt=ais_user"
          src={LOGO_URL}
        />
      </div>
      <div className="flex justify-between items-center  font-semibold">
        <div className="px-4 hover:text-[#ff5200]">
          Online Status: {onlineStatus ? "✅" : "🔴"}
        </div>
        <div className="px-4 hover:text-[#ff5200]">
          <Link to={"/"}>Home</Link>
        </div>
        <div className="px-4 hover:text-[#ff5200]">
          <Link to={"/about"}>About Us</Link>
        </div>
        <div className="px-4 hover:text-[#ff5200]">
          {" "}
          <Link to={"/contact"}>Contact Us</Link>
        </div>
        <div className="px-4 hover:text-[#ff5200]">
          {" "}
          <Link to={"/grocery"}>Grocery</Link>
        </div>
        <div className="px-4 font-bold hover:text-[#ff5200]">
          <Link to={"/cart"}>
            <div className="flex flex-row items-center relative">
              <img src={EMPTY_CART} className="w-10 h-10 font-bold"></img>
              <span
                className={`absolute pb-3 ${
                  cartItems.length <= 10 ? "pl-[17px]" : "pl-[14px]"
                }`}
              >
                {cartItems.length}
              </span>
              <span>cart</span>
            </div>
          </Link>
        </div>
        {/* <button
            className="login-btn"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {" "}
            {btnNameReact}
          </button> */}
        <div className="px-4 font-bold flex flex-row gap-2 items-center hover:text-[#ff5200]">
          <FiUser />
          {loggedInUser}
        </div>
      </div>
    </div>
  );
};

export default Header;

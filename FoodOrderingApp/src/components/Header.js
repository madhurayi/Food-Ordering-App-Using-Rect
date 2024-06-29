import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>    
            </div>
        </div>
       
    )
}

export default Header;
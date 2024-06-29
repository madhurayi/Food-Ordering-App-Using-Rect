import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";

/**
 * Header
 *    - Logo
 *    - Nav Items
 *  
 * Body
 *  - Search
 *  - Restaraunt Container
 *     - Restaurant card
 * 
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Link
 */





const AppLayout=()=>{
    return (
            <div className="app-container">
                <Header/>
                <Body/>
            </div>

        )
    
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>); // Render the h1 element
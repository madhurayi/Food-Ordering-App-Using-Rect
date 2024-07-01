import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestarauntMenu from "./components/RestaurantMenu.js";

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
                <Outlet/>
            </div>

        )
    
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body />,
            },
            {
                path:"/about",
                element:<About />,
            },
            {
                path:"/Contact",
                element: <Contact/>
            }
            ,
            {
                path:"/restaurants/:resId",
                element: <RestarauntMenu/>
            }
        ],
        errorElement: <Error/>
    },
    
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>); // Render the h1 element
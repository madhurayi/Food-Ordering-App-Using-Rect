import React,{lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestarauntMenu from "./components/RestaurantMenu.js";
import UserContext from "./utils/UserContext.js";
// import Grocery from "./components/Grocery.js"

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

const Grocery= lazy(()=>import("./components/Grocery.js"));

const AppLayout=()=>{
    const [useName,setUserName]=useState();
    useEffect(()=>{
        const data={
            name: "Madhu"
        }
        setUserName(data.name);
    },[])
    return (
            <UserContext.Provider value={{loggedInUser: useName, setUserName}} >
                <div className="app-container">
                    {/* <UserContext.Provider value={{loggedInUser: "Nikhi"}}> */}
                        <Header/>
                    {/* </UserContext.Provider> */}
                    <Outlet/>
                </div>
            </UserContext.Provider>

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
            ,
            {
                path:"/grocery",
                element: <Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
            }
        ],
        errorElement: <Error/>
    },
    
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>); // Render the h1 element
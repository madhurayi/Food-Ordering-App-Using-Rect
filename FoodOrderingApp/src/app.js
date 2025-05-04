import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestarauntMenu from "./components/RestaurantMenu.js";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import { Cart } from "./components/Cart.js";
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

const Grocery = lazy(() => import("./components/Grocery.js"));

const AppLayout = () => {
  const [useName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Madhu",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: useName, setUserName }}>
        <div className="app-container flex flex-col h-screen">
          <div className="sticky top-0 z-30">
            <Header />
          </div>
          <div className="">
            <Outlet />
          </div>
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestarauntMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); // Render the h1 element

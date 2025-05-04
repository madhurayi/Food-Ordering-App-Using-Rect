import React from "react";
import RestarauntCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link, NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setUserName } = useContext(UserContext);
  //Whenever state variables update, react triggers a reconciliation cycle(re rennders the component.)
  console.log("hii");

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (searchText) {
      const filtered = listOfRestaurants.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredRestaurants(filtered);
    } else {
      setFilteredRestaurants(listOfRestaurants); // Optional fallback
    }
  }, [searchText, listOfRestaurants]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5462927&lng=78.2128113&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (onlineStatus === false)
    return <h1>Looks Like You are Offline. Check the Internet Connection</h1>;

  // conditional Rendering
  if (filteredRestaurants?.length == 0 || listOfRestaurants?.length == 0) {
    console.log("shimmer");

    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter flex flex-row justify-end m-5 gap-4 mr-20">
        <div className="search ">
          <input
            type="text"
            className="border border-gray-600 shadow-sm py-2 rounded-full pl-4 "
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search for Restaurants"
          />
        </div>
        <div className="search flex items-center">
          <button
            className="bg-red-200 px-4 py-2 rounded-full"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter(
                (data) => data.info.avgRating > 4.5
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Top Rated Restaraunts
          </button>
        </div>
        <div className="search  flex items-center gap-2">
          <label className="text-black">UserName: </label>
          <input
            className="border border-black py-1 rounded-md pl-2"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRestaurants?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestarauntCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

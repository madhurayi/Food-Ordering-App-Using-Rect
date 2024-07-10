import React from "react";
import RestarauntCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link, NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body=()=>{

    const [listOfRestaurants,setListOfRestaurants]= useState([]);

    const [filteredRestaurants,setFilteredRestaurants]= useState([]);


    const [searchText,setSearchText]= useState("");

    const onlineStatus=useOnlineStatus();
    //Whenever state variables update, react triggers a reconciliation cycle(re rennders the component.)
    console.log("hii");
    
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
      
      const data= await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5462927&lng=78.2128113&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
     );
     const json=await data.json();
     console.log(json);
     console.log("hii"+json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     
     
    }

    if(onlineStatus===false) return <h1>Looks Like You are Offline. Check the Internet Connection</h1>

    // conditional Rendering
    if(filteredRestaurants===null || listOfRestaurants==null){
      return <Shimmer/>;
    }

    return (
        <div className="body">
            <div className="filter flex">
              <div className="search m-4 p-4">
                <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{
                  setSearchText(e.target.value);
                }} />
                <button className="px-4 py-2 bg-green-100 m-2 rounded-lg" onClick={()=>{
                    const filteredRestaurants= listOfRestaurants.filter((res)=>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    )
                    setFilteredRestaurants(filteredRestaurants);
                }}>Search</button>
              </div>
              <div className="search m-4 p-4 flex items-center">
              <button className="bg-gray-100 px-4 py-2 rounded-lg" onClick={()=>{
             const filteredRestaurants=listOfRestaurants.filter((data)=>data.info.avgRating>4.5);
              setFilteredRestaurants(filteredRestaurants);
              // console.log(listOfRestaurants); 
            }}>
                Top Rated Restaraunts
              </button>
              </div>
              
            </div>
            <div className="flex flex-wrap justify-normal">
               {filteredRestaurants.map(restaurant =>
               <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                  <RestarauntCard  resData={restaurant}/>
                </Link> )}
            </div>
        </div>
    )
}


export default Body;
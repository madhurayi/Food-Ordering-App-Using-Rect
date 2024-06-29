import React from "react";
import RestarauntCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body=()=>{
    const [listOfRestaurants,setListOfRestaurants]= useState(resList);

    return (
        <div className="body">
            <div className="filter">
              <button className="filter-btn" onClick={()=>{
              filteredRestaurants=listOfRestaurants.filter((data)=>data.info.avgRating>4.5);
              setListOfRestaurants(filteredRestaurants);
              // console.log(listOfRe staurants);
            }}>
                Top Rated Restaraunts
              </button>
            </div>
            <div className="res-container">
               {listOfRestaurants.map(restaurant => <RestarauntCard key={restaurant.info.id} resData={restaurant}/>)}
            </div>
        </div>
    )
}


export default Body;
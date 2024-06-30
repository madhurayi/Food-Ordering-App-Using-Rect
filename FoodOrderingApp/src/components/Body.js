import React from "react";
import RestarauntCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body=()=>{

    const [listOfRestaurants,setListOfRestaurants]= useState([]);

    const [filteredRestaurants,setFilteredRestaurants]= useState([]);


    const [searchText,setSearchText]= useState("");


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
     setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     
     
    }

    //conditional Rendering
    // if(listOfRestaurants.length===0){
    //   return <Shimmer/>;
    // }

    return listOfRestaurants.length===0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
              <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                  setSearchText(e.target.value);
                }} />
                <button onClick={()=>{
                    const filteredRestaurants= listOfRestaurants.filter((res)=>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    )
                    setFilteredRestaurants(filteredRestaurants);
                }}>Search</button>
              </div>
              <button className="filter-btn" onClick={()=>{
             const filteredRestaurants=listOfRestaurants.filter((data)=>data.info.avgRating>4.5);
              setFilteredRestaurants(filteredRestaurants);
              // console.log(listOfRestaurants); 
            }}>
                Top Rated Restaraunts
              </button>
            </div>
            <div className="res-container">
               {filteredRestaurants.map(restaurant => <RestarauntCard key={restaurant.info.id} resData={restaurant}/>)}
            </div>
        </div>
    )
}


export default Body;
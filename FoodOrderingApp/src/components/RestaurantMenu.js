import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestarauntMenu= ()=>{

    const [resMenu,setResMenu]=useState(null);
    const [resId] = useParams();
    console.log(resId);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async ()=>{
        const data=await fetch( MENU_API+resId);
        const jsonData= await data.json();
        console.log(jsonData);
        console.log(jsonData?.data.cards[0]?.card?.card?.text);
        setResMenu(jsonData);
        // .data.cards[4].groupedCard?.cardGroupMap?.REGULAR.cards[2]
        
    };
    if(resMenu===null ) return (<Shimmer/> )

        // console.log("name",resMenu.data.cards[4].groupedCard?.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info.name);

    const {name,cuisines,costForTwoMessage}=resMenu?.data?.cards[2]?.card?.card?.info;

    console.log(resMenu?.data?.cards[2].groupedCard?.cardGroupMap.REGULAR.cards[2].card.card);

    const { itemCards }= resMenu?.data?.cards[4].groupedCard?.cardGroupMap.REGULAR.cards[2].card.card;
    console.log(itemCards);
    return  (
        <div className="menu">
                <h1>{name}</h1>
                <h3>{cuisines.join(',')}  - {costForTwoMessage}</h3>
                <h4>{resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0].card.info.name}</h4>
                <h4>Menu</h4>
                <ul>
                {itemCards.map(itm => <li key={itm.card.info.id}> {itm.card.info.name} -  {itm.card.info.price} </li>  )}
                </ul>
        </div>
    )
}

export default RestarauntMenu;
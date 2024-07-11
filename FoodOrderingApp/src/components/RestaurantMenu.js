import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu"
import Restaurantategory from "./RestaurantCategory";
import { useState } from "react";

const RestarauntMenu= ()=>{

    const {resId} = useParams();
    const resMenu= useRestaurantMenu(resId);
    const [showIndex, setShowIndex]=useState(false);

    if(resMenu===null ) return (<Shimmer/> )

        // console.log("name",resMenu.data.cards[4].groupedCard?.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info.name);
    // console.log("hii"+resMenu);
    const {name,cuisines,costForTwoMessage}=resMenu?.data?.cards[2]?.card?.card?.info;

    // console.log(resMenu?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR);

    const { itemCards }= resMenu?.data?.cards[4].groupedCard?.cardGroupMap.REGULAR.cards[2].card.card;
    const categories= resMenu?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR.cards.filter(itm=>itm?.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(categories);

    // console.log(itemCards);
    return  (
        <div className="text-center my-5">
                <h1 className="font-serif font-bold text-2xl">{name}</h1>
                <h3 className="font-bold text-sm">{cuisines.join(',')}  - {costForTwoMessage}</h3>
                {/* <h4>{resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0].card.info.name}</h4>
                <h4>Menu</h4>
                <ul>
                {itemCards.map(itm => <li key={itm?.card?.info?.id}> {itm?.card?.info?.name} -  {itm?.card?.info?.price} </li>  )}
                </ul> */}
                {categories.map((category,index)=>
                    (<Restaurantategory 
                        data={category.card.card} 
                        key={category.card.card.name}
                        showItems={index===showIndex ? true : false}
                        setShowIndex={(val)=>{
                            setShowIndex(index)
                        }}
                        
                    />

                    ))}
        </div>
    )
}

export default RestarauntMenu;
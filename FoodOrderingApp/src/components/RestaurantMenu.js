import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu"

const RestarauntMenu= ()=>{

    const {resId} = useParams();
    const resMenu= useRestaurantMenu(resId);


    if(resMenu===null ) return (<Shimmer/> )

        // console.log("name",resMenu.data.cards[4].groupedCard?.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info.name);
    console.log("hii"+resMenu);
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
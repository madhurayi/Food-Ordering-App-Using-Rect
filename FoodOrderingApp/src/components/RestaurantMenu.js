import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";
import { ShimmerMenu } from "./ShimmerMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestarauntMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(false);
  const [showItems, setShowItems] = useState(false);
  if (resMenu === null) return <ShimmerMenu />;

  const { name, cuisines, costForTwoMessage } =
    resMenu?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resMenu?.data?.cards[4].groupedCard?.cardGroupMap.REGULAR.cards[2].card
      .card;
  const categories =
    resMenu?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (itm) =>
        itm?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center my-5">
      <h1 className="font-serif font-bold text-2xl">{name}</h1>
      <h3 className="font-bold text-sm">
        {cuisines.join(",")} - {costForTwoMessage}
      </h3>
      {/* <h4>{resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0].card.info.name}</h4>
                <h4>Menu</h4>
                <ul>
                {itemCards.map(itm => <li key={itm?.card?.info?.id}> {itm?.card?.info?.name} -  {itm?.card?.info?.price} </li>  )}
                </ul> */}
      {categories.map((category, index) => (
        <RestaurantCategory
          data={category.card.card}
          key={index}
          showItems={index === showIndex}
          setShowItems={setShowItems}
          setShowIndex={() => {
            setShowIndex(index === showIndex ? null : index);
          }}
        />
      ))}
    </div>
  );
};

export default RestarauntMenu;

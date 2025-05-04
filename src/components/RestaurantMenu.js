import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";
import { ShimmerMenu } from "./ShimmerMenu";
import RestaurantCategory from "./RestaurantCategory";
import { FaStar } from "react-icons/fa";

const RestarauntMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(false);
  const [showItems, setShowItems] = useState(false);
  if (resMenu === null) return <ShimmerMenu />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    sla,
    areaName,
  } = resMenu?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resMenu?.data?.cards[4].groupedCard?.cardGroupMap.REGULAR.cards[2].card
      .card;
  const categories =
    resMenu?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (itm) =>
        itm?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(" resMenu?.data?", resMenu?.data, sla.slaString);

  return (
    <div className="my-5">
      <h1 className="w-7/12 my-6 font-gilroy  text-start mx-auto font-bold text-2xl">
        {name}
      </h1>
      <div className="w-7/12 h-44 rounded-xl bg-white mx-auto border-[1px] border-gray-300 shadow-xl">
        <div className="flex flex-row gap-1 items-center m-4 ">
          <div className="bg-green-600 w-5 h-5 rounded-full relative">
            <FaStar className="text-white absolute inset-0 m-auto text-[12px]" />
          </div>
          <span className=" text-base font-gilroy font-semibold">
            {avgRating}
            {" (" + totalRatingsString + ")"}
          </span>
          <span className="text-gray-400 text-xl">•</span>
          <span className=" text-base text-black font-semibold">
            {costForTwoMessage}
          </span>
        </div>
        <div>
          <span className="text-[#ff5200] text-base m-4 font-semibold font-gilroy">
            {cuisines.join(", ")}
          </span>
        </div>
        <div className="flex flex-row gap-1 items-center m-4 ">
          <div className="flex flex-col items-center">
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <div className="w-[2px] h-8 bg-gray-300"></div>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="mx-4 mb-2">
              <span className="font-bold font-gilroy">Outlet </span>
              <span>{areaName}</span>
            </div>
            <div className="mx-4">
              <span className="font-bold font-gilroy">{sla.slaString} </span>
            </div>
          </div>
        </div>
      </div>
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

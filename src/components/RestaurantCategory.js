import { useState } from "react";
import ItemList from "./ItemList";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const RestaurantCategory = ({
  data,
  showItems,
  setShowItems,
  setShowIndex,
}) => {
  const handleClick = () => {
    setShowIndex();
  };

  console.log("showItems", showItems);

  return (
    <div>
      <div className="w-7/12 mx-auto my-6 bg-gray-100 rounded-sm h-5 "></div>
      <div className="w-7/12 mx-auto pb-4 my-4 bg-white">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg  pt-3 pl-3 font-gilroy">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="pt-3 font-gilroy">
            {!showItems ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;

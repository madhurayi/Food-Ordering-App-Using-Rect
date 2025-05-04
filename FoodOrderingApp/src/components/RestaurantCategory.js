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
      <div className="w-8/12 mx-auto pb-4 my-4 bg-white">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold pt-3 pl-3">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="pt-3">
            {!showItems ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;

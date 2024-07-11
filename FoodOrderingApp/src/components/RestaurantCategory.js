import { useState } from "react";
import ItemList from "./ItemList";

const Restaurantategory=({data,showItems,setShowIndex})=>{
        
    const handleClick=()=>{
        console.log("item no"+showItems);
       showItems===true ? showItems=false : setShowIndex() ;
        console.log("clicked");
    }

    return (
        <div>
            <div className="w-7/12 mx-auto pb-4 my-4 bg-gray-50  shadow-lg">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    {/* Header */}
                    <span className="font-bold pt-3 pl-3">{data.title} ({data.itemCards.length})</span>
                    <span className="pt-3">🔽</span>
                </div>
                {showItems && <ItemList items={data.itemCards} />}
            </div>
                {/* Body Accordian */}
                
            </div>
        
    )
}

export default Restaurantategory;
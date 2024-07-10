import { CDN_URL } from "../utils/constants";

const RestarauntCard=(props)=>{
    const {resData}=props;
    const {name,
         cuisines,
         avgRating,
         sla,
         cloudinaryImageId
    }= resData.info
    // console.log(resData.info);
    return (
        <div className="p-2">  
            <div className="w-[200px] h-[350px] rounded  shadow-lg hover:bg-white hover:drop-shadow-2xl">
                <img className="w-[200px] h-[150px]  rounded-lg"  src={CDN_URL+cloudinaryImageId}/>
                <div className="text-overlay absolute left-0 top-0 pt-20 ">
                <p className="text-center text-white font-bold text-2xl items-center font-serif ">{props?.resData?.info?.aggregatedDiscountInfoV3?.header + "  "+props?.resData?.info?.aggregatedDiscountInfoV3?.subHeader}</p>
                </div>
                <div className="px-3 py-3">
                    <div className="font-bold text-2xl mb-2 ">{name}</div>
                    <p className="text-gray-700 text-base">{cuisines.join(', ')}</p>
                    <p>{avgRating+"star "}    {sla.slaString}</p>
                </div>
            </div>
        </div>
    )
}


// Higher Order Component

// input - RestaurantCard ==> RestaurantCardOffer

export const withOfferLabel=(RestarauntCard)=>{
    return(props)=>{
        return (
            <div>
                {console.log(props.resData.info.aggregatedDiscountInfoV3.header)}
                <label>{props.resData.info.aggregatedDiscountInfoV3.header + "  "+props.resData.info.aggregatedDiscountInfoV3.subHeader}</label>
                <RestarauntCard {...props}/>
            </div>
        )
    }
}


export default RestarauntCard;
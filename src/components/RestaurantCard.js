import { CDN_URL } from "../utils/constants";
import { FaStar } from "react-icons/fa";

const RestarauntCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, cloudinaryImageId, locality } =
    resData.info;
  console.log(resData.info);
  return (
    <div className="px-5 py-3">
      <div className="relative  w-[286px] rounded transition-transform duration-300 hover:scale-90 hover:translate-y-1 hover:drop-shadow-2xl">
        <img
          className=" w-[286px] h-[191px]  rounded-lg"
          src={CDN_URL + cloudinaryImageId}
        />{" "}
        <div className=" absolute w-[286px] h-[191px] -bottom-9 ">
          <p className="text-center text-white font-bold text-2xl items-center font-gilroy bg-gradient-to-t from-black to-transparent rounded-lg ">
            {props?.resData?.info?.aggregatedDiscountInfoV3?.header
              ? props?.resData?.info?.aggregatedDiscountInfoV3?.header +
                "  " +
                props?.resData?.info?.aggregatedDiscountInfoV3?.subHeader
              : ""}
          </p>
        </div>
        <div className="px-3 py-3">
          <div className="font-bold text-lg truncate">{name}</div>
          <div className="flex flex-row gap-1 items-center">
            <div className="bg-green-600 w-5 h-5 rounded-full relative">
              <FaStar className="text-white absolute inset-0 m-auto text-[12px]" />
            </div>
            <span className=" text-base font-gilroy font-semibold">
              {avgRating} {" • "}
              {sla.slaString}
            </span>
          </div>
          <p className="text-gray-700 text-base truncate font-gilroy">
            {cuisines.join(", ")}
          </p>
          <p className="text-gray-700 text-base truncate font-gilroy">
            {locality}
          </p>
        </div>
      </div>
    </div>
  );
};

export const withOfferLabel = (RestarauntCard) => {
  return (props) => {
    return (
      <div>
        {console.log(props.resData.info.aggregatedDiscountInfoV3.header)}
        <label>
          {props.resData.info.aggregatedDiscountInfoV3.header +
            "  " +
            props.resData.info.aggregatedDiscountInfoV3.subHeader}
        </label>
        <RestarauntCard {...props} />
      </div>
    );
  };
};

export default RestarauntCard;

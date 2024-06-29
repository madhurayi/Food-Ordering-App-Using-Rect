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
        <div className="res-card">
            <img className="img" src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating+"star "}    {sla.slaString}</h4>
        </div>
    )
}


export default RestarauntCard;
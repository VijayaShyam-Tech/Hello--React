import { RES_LOGO } from "../util/constants";

const RestuarantCard=(props)=>{
    const {resData} =props;
    const {name,cuisines,avgRating,cloudinaryImageId,costForTwo}= resData?.info;
    return(
        <div className="res-card">
            <img 
            className="res-logo"
            alt="res-logo"
            src={RES_LOGO+cloudinaryImageId
            }
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime}</h4>
        </div>
    );
};

export default RestuarantCard;
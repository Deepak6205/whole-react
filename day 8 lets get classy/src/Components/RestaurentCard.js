import { CDN_URl } from "../utils/constants";

const RestaurentCard = (props) => {
    const {resData} = props;
    
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
    } = resData?.data;
    
    return(
        <div className="res-card">
            <img className = "res-logo" src={CDN_URl + cloudinaryImageId} alt="biryani"/>
            <h3>{name}</h3>
            <h4>{cuisines.join(" ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo/100}rs cost for two</h4>  
            <h4>{deliveryTime} minutes</h4>          
        </div>      
    );
};
export default RestaurentCard;
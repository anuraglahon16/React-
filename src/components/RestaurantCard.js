import { CON_URL } from "../utils/constants";

const styleCard = {
    backgroundColor : "lightblue"
};
const RestaurantCard =(props) =>{
    const {resData} = props;
    const{cloudinaryImageId,name,avgRating,cuisines,locality,deliveryTime} = resData?.info;
    return (
    <div className="res-card" style={styleCard}>
        <img 
        className="res-logo"
        alt="res-logo"
        src={CON_URL  + cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating}</h4>
        <h4>{deliveryTime}</h4>
       
    </div>
    );
};

export default RestaurantCard;
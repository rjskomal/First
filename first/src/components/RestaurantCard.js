import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    //console.log(props);
    const {resdata} = props;
    const {name,cuisines,avgRating,costForTwo} = resdata?.info;
    const {deliveryTime} = resdata?.info.sla;
        return(
        
        <div className='res-card'>
            <img className='res-logo' src={CDN_URL+ resdata.info.cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
}

export default RestaurantCard;
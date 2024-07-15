import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";




const Body = () =>{
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                {
                    resList.map(Restro => <RestaurantCard key={Restro.info.id}  resdata = {Restro}/>)
                }
                
            </div>
        </div>
    );
}

export default Body;
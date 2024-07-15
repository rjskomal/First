import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState} from "react";



const Body = () =>{

   const [Restro , setRestro] = useState(resList);


    return (
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn" onClick = {()=>{
                    const filtered = Restro.filter(
                        (res) => res.info.avgRating > 4.2
                    );
                    console.log(filtered);
                    setRestro(filtered);
                }}>Top Rated Restaurant</button>
            </div>
            <div className='res-container'>
                {
                    Restro.map(Restro => <RestaurantCard key={Restro.info.id}  resdata = {Restro}/>)
                }
                
            </div>
        </div>
    );
}

export default Body;
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState , useEffect} from "react";



const Body = () =>{

   const [Restro , setRestro] = useState(resList);

   useEffect(()=>{
    fetchData();
   },[]);

   const fetchData = async () =>{
    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4523764&lng=78.5335018&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();

        console.log(json);

        setRestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   };

  

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
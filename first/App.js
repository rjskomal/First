import React from 'react';
import  ReactDOM  from 'react-dom/client';

/* Components
 Header
   - Logo
   - Nav Items 
 Body
   - Search
   - Restaurant Container
       # RestaurantCards
 Footer
   - Copyright
   - Links
   - Info... etc.


*/
const Header = () =>{
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src='https://png.pngtree.com/png-clipart/20220628/original/pngtree-food-logo-png-image_8239850.png'/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

const RestaurantCard = (props) =>{
    return(
        <div className='res-card'>
            <img className='res-logo' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ne98mz09ikwfpz3ndws6'/>
            <h3>{props.resname}</h3>
            <h4>{props.cusuine}</h4>
            <h4>{props.rating}</h4>
            <h4>{props.time}</h4>
        </div>
    );
}

const Body = () =>{
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                <RestaurantCard  resname = "Meghna Foods" cusuine="Indian" rating="5" time="38mins"/>
                <RestaurantCard resname = "KFC" cusuine="American" rating="4.4" time="38mins"/>
            
            </div>
        </div>
    );
}

const Applayout = () =>{
    return (
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    );
};





const root  = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout/>);



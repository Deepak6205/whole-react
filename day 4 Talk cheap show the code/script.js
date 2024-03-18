import React from "react";
import  ReactDOM  from "react-dom/client";

/*  what all component my aap will have
 Header
    logo
    NAv Items
Body
   Search 
   RestaurantContainer 
   RestaurantCard
        img
        name of restaurant
        star rating
        cuisine 
        delivery time,etc.
Footer
    CopyRight
    Links
    Address
    contact
*/
const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
            </div>
            <div className="nav-items">
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

const RestaurentCard = (props) => {
    const {resName,cuisine} = props;
    // for live data
        //const {resData} = props;
    return(
        <div className="res-card">
            <img className = "res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e4wujbtpzue93pz3fnrm" alt="biryani"/>
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
            
        </div>

      //  for live server 
        // <div className="res-card">
        //     <img className = "res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e4wujbtpzue93pz3fnrm" alt="biryani"/>
        //     <h3>{resData.data.name}</h3>
        //     <h4>{resData.data.cuisines.join(", ")}</h4>
        //     <h4>{resData.data.avgRating} star</h4>
        //     <h4>{resData.data.costForTwo / 100}</h4>
        //     <h4>{resData.data.deliveryTime / minutes}</h4>
        // </div>
    );
};

//for live data
     //const resObj = {
         //yaha par apna live server ka data or json put karna hai.
         //and suppose aapne bahot sare object ke list ke json data ko daal rakha hai.
    // }
const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurentCard
                // for jo hum khud se code likh rahe hai

                    resName = "Meghna Foods"
                    cuisine = "Biryani, North Indian, Asian"

                />
                
                <RestaurentCard 
                resName = "KFC"
                cuisine = "Burger, French fries, Fried Chicken "
                />     
                
            </div>
        
            
        </div>

        /*
        for the dynamic code or for live data
        <div className="res-container">
                <RestaurentCard resData = {resObj[0]}/> 
                <RestaurentCard resData = {resObj[1]}/>
                <RestaurentCard resData = {resObj[2]}/> 
                <RestaurentCard resData = {resObj[3]}/>
                 <RestaurentCard resData = {resObj[4]}/> 
                <RestaurentCard resData = {resObj[5]}/>    
                <RestaurentCard resData = {resObj[6]}/> 
                <RestaurentCard resData = {resObj[7]}/>
            </div> 

            ..to aisa karke aap multiple card create kar sakte ho using live data of any website jisne apne json ko public rakha hai.
        */
    );
};
const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)
import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
   

const Body = () => {
    //state variable - Super powerful variable. and how we create it.
    const [ListofRestsurants, setListOfRestaurants] = useState([]);
    const [filteredList,setFillteredRestaurant] = useState([]);
    const [searchText,setSearchText] = useState("");


    useEffect(() => {
        fetchData();
    },[]); 

    const fetchData = async () =>{
        const data = fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667");
        const json = await data.json();
        console.log(json);
        // ye jo question marks hum diye hai use optional chaining kahte hai read oc concept.
        setListOfRestaurants(json.data.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFillteredRestaurant(json.data.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    };
      
    return ListofRestsurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-btn" value= {searchText} onChange={(e)=>{
                       setSearchText(e.target.value);
                    }}/>
                    <button onClick={()=>{
                      const filteredRestaurant =  ListofRestsurants.filter((res) => res.data.name.toLowerCase().includes(searchText.toLowerCase())
                    );

                      setFillteredRestaurant(filteredRestaurant);

                    }}>Search</button>
                </div>
                <button 
                    className="filter-btn"
                    onClick={() =>{
                      const filteredList = ListofRestsurants.filter(
                            (res)=>res.data.avgRating > 4
                        );
                        setListOfRestaurants(filteredList);
                    }} 
                >
                    Top Rated Restaurent
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((restaurant) =>(
              <Link key={"restaurant.data.id"} to={"/restaurants/"+restaurant.data.id}>
                <RestaurentCard resData={restaurant} />
              </Link>      
                ))}                             
            </div>
        </div>        
    );
};
export default Body;
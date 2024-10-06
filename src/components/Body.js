import RestaurantCard from "./RestaurantCard";
import Reslist from "../utils/mockData";
import { useState } from "react";

const Body =() =>{
    const[listofRestaurants,setListofRestaurents] = useState(Reslist);
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                onClick={()=>{
                    const filteredlist = listofRestaurants.filter(
                        (res)=>res.info.avgRating>4.2
                    );
                    setListofRestaurents(filteredlist);
                  
                }}
                >Top Rated Restaurent</button>
                </div>
            <div className="res-container">
            {
                listofRestaurants.map((restaurent) => (<RestaurantCard key = {restaurent.info.id} resData = {restaurent}/>
            )
        )
            }
           

            </div>
        </div>
    )
}

export default Body;
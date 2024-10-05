import RestaurantCard from "./RestaurantCard";
import Reslist from "../utils/mockData";
const Body =() =>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
            {
                Reslist.map((restaurent) => (<RestaurantCard key = {restaurent.info.id} resData = {restaurent}/>
            )
        )
            }
           

            </div>
        </div>
    )
}

export default Body;
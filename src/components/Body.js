import resList from "../util/MockData";
import RestuarantCard from "./RestuarantCard";
import {useState} from "react";
const Body=()=>{
    const [listOfRestuarants,setlistOfRestuarants]=useState(resList);
    return(
        <div className="body">
            <div className="filter">
                <button 
                className="filter-btn"
                onClick={()=>{
                    const filteredList=listOfRestuarants.filter(
                        (res)=>res.info.avgRating>4
                    );
                    setlistOfRestuarants(filteredList)
                }}
                >Top Rated Restuarants</button>
            </div>
            <div className="res-container">
                {
                    listOfRestuarants.map((restaurant)=>(
                    <RestuarantCard key={restaurant.info.id} resData={restaurant}/>
                ))}
                
            </div>
        </div>

    );
}

export default Body;
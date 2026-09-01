import resList from "../util/MockData";
import RestuarantCard from "./RestuarantCard";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
const Body=()=>{
    const [listOfRestuarants,setListOfRestuarants]=useState([]);
    const [filteredRestuarants,setFilteredRestuarants]=useState([]);
    const [searchText,setSearchText]=useState("");
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData=async ()=>{
        const data=await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.61840&lng=80.19590&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json=await data.json();
        console.log(json);
        setListOfRestuarants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestuarants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return listOfRestuarants.length===0?<Shimmer/>:(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                    <button className="search-btn" onClick={()=>{
                        //filter logic
                        const filteredRestuarants= listOfRestuarants.filter(
                            (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestuarants(filteredRestuarants);
                    }}>Search</button>
                </div>
                <button 
                className="filter-btn"
                onClick={()=>{
                    const filteredList=listOfRestuarants.filter(
                        (res)=>res.info.avgRating>4
                    );
                    setListOfRestuarants(filteredList)
                }}
                >Top Rated Restuarants</button>
            </div>
            <div className="res-container">
                {
                    filteredRestuarants.map((restaurant)=>(
                    <RestuarantCard key={restaurant.info.id} resData={restaurant}/>
                ))}
                
            </div>
        </div>

    );
}

export default Body;
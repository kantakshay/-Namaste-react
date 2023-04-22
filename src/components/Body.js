import CafeCards from "./CafeCard";
import { cardContent } from "../Config";
import { useState } from "react";


const fliterData = (searchInput,restaurants)=>{
  const filteredData = restaurants.filter((restaurant) => 
     restaurant.data.name.includes(searchInput) );
  return filteredData;
}


const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurants,setRestaurant] = useState(cardContent)
  
  return (
    <>
      <div>
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button onClick={()=>{
           const data =    fliterData(searchInput,restaurants);

           setRestaurant(data);
        }
     
        }>search</button>
      </div>
      <div className="cafelist">
        {restaurants.map((cardContent) => {
          return <CafeCards {...cardContent.data} key={cardContent.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;

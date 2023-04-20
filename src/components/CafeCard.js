import { IMG_CDN_URL } from "../Config";

const CafeCards = ({name,cuisines,totalRatingsString,cloudinaryImageId}) => {
  
    return (
      <div className="cards">
        <div>
          <img
            src={IMG_CDN_URL + cloudinaryImageId}
            alt="burger king"
          />
        </div>
        <div>
          <h1>{name}</h1>
          <h2>{cuisines.join(", ")}</h2>
          <h3>{totalRatingsString}</h3>
        </div>
      </div>
    );
  };

  export default CafeCards;
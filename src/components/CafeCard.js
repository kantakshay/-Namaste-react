

const CafeCards = ({name,cuisines,totalRatingsString,cloudinaryImageId}) => {
  
    return (
      <div className="cards">
        <div>
          <img
            src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
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
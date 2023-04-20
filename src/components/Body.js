import CafeCards from "./CafeCard";
import { cardContent } from "../Config";

const Body = () => (
    <div className="cafelist">
       {cardContent.map((cardContent)=>{
      return  <CafeCards {...cardContent.data} key={cardContent.data.id}/>
       })}
    </div>
  );

  export default Body;
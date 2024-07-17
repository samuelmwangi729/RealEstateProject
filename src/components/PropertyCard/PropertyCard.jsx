import React from "react";
import './PropertyCard.css'
import {AiFillHeart} from 'react-icons/ai'
import {truncate} from 'lodash'
import { useNavigate } from "react-router-dom";
import Heart from "../Heart/Heart";
const PropertyCard = ({card}) => {

  const navigate = useNavigate();
  return (
    <div className="flexColStart r-card"
    onClick={()=>navigate(`../properties/${card.id}`)}
    >
      <Heart id={card?.id}/>
      <img src={card.image} alt="home" />
      <span className="secondaryText r-price">
        <span style={{ color: "orange" }}>KES </span>
        <span>{card.price}</span>
      </span>
      <span className="primaryText">{truncate(card.title, {length: 15})}</span>
      <span className="secondaryText">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit praesentium distinctio 
        <a href="" className="refButton">Read More</a>
        {/* repellat officia modi quaerat, ad ullam fugiat maiores omnis explicabo asperiores nisi dolorum, 
        vel, consequuntur dolores commodi corrupti porro. */}
      </span>
    </div>
  );
};

export default PropertyCard;

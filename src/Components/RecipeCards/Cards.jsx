// import React from 'react';
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import SingleCard from "../SingleCard/SingleCard";

const Cards = ({ handleWantToCook }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/itemData.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
      {cards.map((card, idx) => (
        <SingleCard
          handleWantToCook={handleWantToCook}
          card={card}
          key={idx}
        ></SingleCard>
      ))}
    </div>
  );
};

Cards.propTypes = { 
  handleWantToCook:PropTypes.func,
}
export default Cards;

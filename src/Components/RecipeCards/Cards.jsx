// import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import SingleCard from "../SingleCard/SingleCard";

const Cards = ({ handleWantToCook }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/public/itemData.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="grid grid-cols-2 gap-16">
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

export default Cards;

// import React from 'react';
import PropTypes from "prop-types";
import Ingredients from "./Ingredients";

const SingleCard = ({ card, handleWantToCook }) => {
    // console.log(handleWantToCook);
  const {
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = card;
//   console.log(recipe_name);

  return (
    <div className="border-2 border-gray-200 mx-5 lg:mx-0 p-5 space-y-5 rounded-3xl  text-gray-500">
      <img className="w-[350px] rounded-3xl" src={recipe_image} alt="" />
      <h1 className="text-2xl font-semibold text-gray-700">{recipe_name}</h1>
      <p>{short_description}</p>
      <hr />
      <div>
      <h1 className="text-xl font-medium pb-4 text-gray-700">Ingredients: {ingredients.length}</h1>
        {ingredients.map((item, idx) => (
          <Ingredients item={item} key={idx}></Ingredients>
        ))}
      </div>
      <hr />
      <div className="flex gap-10 items-center">
        <div className="flex gap-3">
          <img className="w-5 h-5" src="/public/icon/clock.png" alt="" />
          <p>{preparing_time} min</p>
        </div>
        <div className="flex gap-3">
          <img className="w-5 h-5" src="/public/icon/fire.png" alt="" />
          <p>{calories} Calories</p>
        </div>
      </div>

      <button
        onClick={() => handleWantToCook(card)}
        className="btn rounded-full px-5 border-0 mx-4 font-semibold text-xl bg-[#0BE58A]"
      >
        Want to Cook
      </button>
    </div>
  );
};

SingleCard.propTypes = {
  card: PropTypes.object,
  item: PropTypes.string,
  handleWantToCook: PropTypes.func,
};

export default SingleCard;

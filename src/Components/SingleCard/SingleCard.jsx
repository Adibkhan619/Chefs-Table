// import React from 'react';
import PropTypes from "prop-types";

const SingleCard = ({card}) => {
    const {recipe_name, recipe_image, recipe_id, short_description, ingredients, preparing_time, calories} = card;
    console.log(recipe_name);
    return (
        <div>
            <img className="w-[350px] rounded-3xl" src={recipe_image} alt="" />

        </div>
    );
};

SingleCard.propTypes = {
    card: PropTypes.object,
  };

export default SingleCard;

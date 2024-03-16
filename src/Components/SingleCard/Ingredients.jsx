// import React from 'react';
import PropTypes from "prop-types";

const Ingredients = ({item}) => {
    console.log(item);
    return (
        <div>
            <li>{item}</li>
        </div>
    );
};

export default Ingredients;

Ingredients.propTypes = {
    item: PropTypes.array,
  };
  
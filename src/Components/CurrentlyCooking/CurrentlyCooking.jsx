// import React from 'react';
import PropTypes from "prop-types";

const CurrentlyCooking = ({currentlyCook, item}) => {
    // console.log(currentlyCook);
    const {recipe_name,       
        recipe_id,       
        preparing_time,
        calories} = item;
    return (
        
<tr className="bg-gray-100">
      <td>{recipe_id}</td>
      <td>{recipe_name}</td>
      <td>{preparing_time} min</td>
      <td>{calories}</td>     
    </tr>
       
    );
};
CurrentlyCooking.propTypes = {
    currentlyCook: PropTypes.array,
    item:PropTypes.object,
  };


export default CurrentlyCooking;
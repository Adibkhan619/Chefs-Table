// import React from "react";
import PropTypes from "prop-types";
const Cook = ({food}) => {
    // console.log(cookCard);
    const {recipe_name, calories, preparing_time} = food;
    console.log(recipe_name);
  return (
    // <div className="text-center border rounded-3xl">
    //   <h1>Want to Cook: </h1>
    //   <hr />
    //   <table className="table-auto table-">
    //     <thead>
    //       <tr>
    //         <th>Name</th>
    //         <th>Time</th>
    //         <th>Calories</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {<tr>
    //         <td>{recipe_name}</td>
    //         <td>{preparing_time}</td>
    //         <td>{calories}</td>
    //         </tr>}
    //       <tr></tr>
    //       <tr></tr>
    //     </tbody>
    //   </table>
    // </div>
    <tr>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
        </tr>
  );
};

export default Cook;

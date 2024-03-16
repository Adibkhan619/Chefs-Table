import { useState } from "react";
import "./App.css";
import Cook from "./Components/Cook/Cook";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Cards from "./Components/RecipeCards/Cards";

function App() {
  const [cookCard, setCookCard] = useState([]);

  const handleWantToCook = (p) => {
    // setCookCard(...cookCard, p);
    // console.log([p]);
    const newCard = [...cookCard, p];
    setCookCard(newCard);
  };
// console.log(cookCard);

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>

      {/* Our recipe  */}
      <div className="text-center lg:mx-40 mt-24 mb-16 space-y-5">
        <h1 className="font-semibold text-[40px]">Our Recipe</h1>
        <p className="text-gray-500">
          Dive into the heart of flavor with our signature recipes. Crafted with
          care and perfected over time, each dish tells a story of tradition,
          innovation, and passion. Join us in exploring the art of cooking with
          our unique culinary creations.
        </p>
      </div>

      {/* Recipe Cards */}
      <div className="flex gap-10">
        <Cards handleWantToCook={handleWantToCook}></Cards>

{/* Cook table */}
        
        <div className="text-center border rounded-3xl space-y-5 p-10 mx-20">
      <h1>Want to Cook:{cookCard.length} </h1>
      <hr />
      <table className="table-auto table ">
        <thead>
          <tr>
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
          </tr>
        </thead>
       
        <tbody>
          {cookCard.map(food =><Cook food={food} ></Cook>)}
          <tr></tr>
          <tr></tr>
        </tbody>
      </table>
    </div>
        
        
      </div>
    </>
  );
}

export default App;

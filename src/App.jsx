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

    const isExist = cookCard.find(item => item.recipe_id == p.recipe_id);
    if(isExist){
      console.log('ache');
    }else{
      
      const newCard = [...cookCard, p];
    setCookCard(newCard);
    }
    
  };
  // console.log(cookCard);

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>

      {/* Our recipe  */}
      <div className="text-center lg:mx-40 mt-16 mb-16 space-y-5">
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
        <div className="text-center border rounded-3xl space-y-5 py-10 mx-20 text-gray-400">
          <h1 className="font-semibold text-black text-2xl">Want to Cook: 0{cookCard.length} </h1>
          <hr />
          <table className=" table fira-sans">
            <thead className="font-medium text-[20px]">
              <tr className=" ">
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cookCard.map((food, idx) => (
                <Cook key={idx}  food={food}></Cook>
              ))}             
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;

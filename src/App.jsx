/* eslint-disable react/jsx-key */
// import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Cards from "./Components/RecipeCards/Cards";
import CurrentlyCooking from "./Components/CurrentlyCooking/CurrentlyCooking";


function App() {
  const [cookCard, setCookCard] = useState([]);
  const [currentlyCook, setCurrentlyCook] = useState([]);
  const [time, setTime] = useState(0);
  const [calories, setCalories] = useState(0);

  const handleWantToCook = (p) => {
    const isExist = cookCard.find((item) => item.recipe_id == p.recipe_id);
    if (isExist) {
      alert("Already Exists");
      toast("Hello World!");
      <ToastContainer/>;
    } else {
      const newCard = [...cookCard, p];
      setCookCard(newCard);
    }
  };

  const handlePreparing = (i) => {
    totalTime(i);
    totalCalories(i);
    setCurrentlyCook([...currentlyCook, i]);
    const isExist = cookCard.filter((item) => item.recipe_id !== i.recipe_id);
    if (isExist) {
      setCookCard(isExist);
    }
  };

  const totalTime = (i) => {
    const sum = i.preparing_time;
    const sumValue = parseInt(sum);
    const totalTime = time + sumValue;
    setTime(totalTime);
  };

  const totalCalories = (i) => {
    const sum = i.calories;
    const sumValue = parseInt(sum);
    const totalCalories = calories + sumValue;
    setCalories(totalCalories);
  };
  // console.log(time);
  // console.log(calories);

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>

      {/* Our recipe  */}
      <div className="text-center lg:mx-40 lg:my-16 my-5 space-y-5">
        <h1 className="font-semibold text-[40px]">Our Recipe</h1>
        <p className="text-gray-500 px-5">
          Dive into the heart of flavor with our signature recipes. Crafted with
          care and perfected over time, each dish tells a story of tradition,
          innovation, and passion. Join us in exploring the art of cooking with
          our unique culinary creations.
        </p>
      </div>

      {/* Recipe Cards and Cook table*/}
      <div className="lg:flex lg:flex-row flex-col gap-10 justify-center">
        {/* Recipe Cards */}
        <Cards handleWantToCook={handleWantToCook}></Cards>

        {/* Cook table */}
        <div className="text-center border rounded-3xl space-y-5 py-10  text-gray-400">
          <h1 className="font-semibold text-gray-800 text-2xl">
            Want to Cook: {cookCard.length}
          </h1>
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
              {cookCard.map((food, index) => (
                <tr className="bg-gray-100">
                  <td>{index + 1}</td>
                  <td>{food.recipe_name}</td>
                  <td>{food.preparing_time} min</td>
                  <td>{food.calories} Calories</td>
                  <td>
                    <button
                      onClick={() => handlePreparing(food)}
                      className="btn bg-green-400 rounded-full">Preparing
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h1 className="font-semibold text-gray-800 text-2xl mt-24">
            Currently Cooking: {currentlyCook.length}
          </h1>
          <hr />
          <table className=" table fira-sans">
            <thead className="font-medium text-[20px]">
              <tr className=" ">
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {currentlyCook.map((item, idx) => (
                <CurrentlyCooking
                  key={idx}
                  item={item}
                  currentlyCook={currentlyCook}
                ></CurrentlyCooking>
              ))}
            </tbody>
          </table>
          <div className="space-y-4">
            <p>
              Total Time:{" "}
              <span className="bg-gray-500 text-white px-2 rounded-xl">
                {time}
              </span>
            </p>
            <p>
              Total Calories:{" "}
              <span className="bg-gray-500 text-white px-2 rounded-xl">
                {calories}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

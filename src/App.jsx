import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Cards from "./Components/RecipeCards/Cards";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>

      {/* Our recipe  */}
      <div className="text-center lg:mx-40 my-32 space-y-8">
        <h1 className="font-semibold text-4xl">Our Recipe</h1>
        <p className="text-gray-500">
          Dive into the heart of flavor with our signature recipes. Crafted with
          care and perfected over time, each dish tells a story of tradition,
          innovation, and passion. Join us in exploring the art of cooking with
          our unique culinary creations.
        </p>
      </div>

      {/* Recipe Cards */}
      <div className="flex ">
        <Cards></Cards>
        <div><h1>give me other half </h1></div>
      </div>
      
    </>
  );
}

export default App;

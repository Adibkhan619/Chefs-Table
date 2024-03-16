import "./App.css";
import Cook from "./Components/Cook/Cook";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Cards from "./Components/RecipeCards/Cards";

function App() {

  // const [card, setCard] = useState([])

  const handleWantToCook = (p) => {
  console.log(p);
  }
  









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
        <Cook></Cook>
      </div>
      
    </>
  );
}

export default App;

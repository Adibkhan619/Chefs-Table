// import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div role="button" className="btn bg-gray-300 lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"></svg>
      </div>
      <ul className="menu text-gray-500 text-base menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li><a>Recipes</a></li>
        <li><a>About</a></li>
        <li><a>Search</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl font-bold">Recipe Calories</a>
  </div>
  <div className="navbar-center text-gray-500 text-base hidden lg:flex">
    <ul className="menu lg:menu-horizontal text-base px-1">
      <li><a>Home</a></li>
      <li><a>Recipes</a></li>
      <li><a>About</a></li>
      <li><a>Search</a></li>
    </ul>
  </div>
  <div className="navbar-end hidden lg:flex">
  <img className=" bg-gray-100 p-5 rounded-l-full" src="/icon/Frame.png" alt="" />
    <input className="lg:flex hidden py-5 border-0  bg-gray-100 rounded-r-full mr-5" type="text" placeholder="Search" />
    <img className="" src="/icon/Frame 5.png" alt="" />
  </div>
</div>
        </div>
    );
};

export default Navbar;
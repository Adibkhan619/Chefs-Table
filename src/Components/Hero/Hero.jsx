// import React from 'react';

const Hero = () => {
  return (
    <div className="my-5 space-x-5">
      <div className="hero">
        <img className="lg:max-w-full px-5" src="/img/Rectangle.png" alt="" />
        <div className=" "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="lg:max-w-4xl">
            <h1 className="mb-5 lg:text-5xl text-black lg:text-white text-2xl font-bold">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-5 px-10">
              Embark on a culinary journey with our immersive cooking classes!
              From mastering the art of pasta-making to perfecting the flavors
              of international cuisines, our expert chefs will guide you through
              every step. Unleash your inner chef and join us today!
            </p>
            <div className="lg:flex justify-center">
              <button className="btn rounded-full py-5 pb-12 mt-5 px-10 border-0 mx-4 font-semibold text-2xl bg-[#0BE58A]">
              Explore Now
            </button>
            <button className="btn btn-outline hidden lg:block text-black lg:text-white mx-4 font-semibold text-2xl rounded-full py-5 pb-12 mt-5 px-10">
              Our Feedback
            </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";

const Hero = () => {
  return (
    <div className="h-screen w-full max-w-[1400px] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-1">
        <img
          className="top-0 left-0 object-cover h-full w-full"
          src="https://images.unsplash.com/photo-1618324766504-4a94f694309d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxiZWFjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt="bg"
        />
      </div>
      <div className="absolute h-full w-full top-0 left-0 bg-black/10 z-2"></div>
      <div className="absolute z-3 w-full h-full flex items-center p-4 md:ml-[10%]">
        <div className="text-white">
          <p className="flex items-center gap-x-1">
            <span className="w-10 h-1 bg-white inline-block"></span>{" "}
            <span className="uppercase">All Inclusive</span>
          </p>
          <h1 className="text-4xl py-2 font-medium md:text-5xl lg:text-7xl">
            Private Beaches & Getaways
          </h1>
          <p className="pb-4 max-w-[500px]">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut quis
            est, id consequuntur sequi ipsum vitae sit non exercitationem.
          </p>
          <button className="bg-white text-black">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

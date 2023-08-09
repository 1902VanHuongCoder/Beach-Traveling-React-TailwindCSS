import React from "react";

const Plan = () => {
  return (
    <div className="px-4 pb-20 max-w-[1400px] flex flex-col gap-y-4 gap-x-4 md:flex-row">
      <div className="w-full grid grid-cols-2 grid-rows-6 gap-2 h-[90vh]">
        <img
          className="row-span-4 object-cover h-full w-full"
          src="https://images.unsplash.com/photo-1520454974749-611b7248ffdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
          alt="img1"
        />
        <img
          className="row-span-2 object-cover h-full w-full"
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60"
          alt="img2"
        />
        <img
          className="row-span-2 object-cover h-full w-full"
          src="https://images.unsplash.com/photo-1525183995014-bd94c0750cd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60"
          alt="img3"
        />
        <img
          className="col-span-2 row-span-3 object-cover h-full w-full"
          src="https://images.unsplash.com/photo-1598732450227-251ce3128e76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60"
          alt="img4"
        />
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col gap-y-2 justify-center">
          <h3 className="font-bold">Plan Your Next Trip</h3>
          <p className="font-medium">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            nam?
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptates nostrum dolorum reprehenderit error! Doloribus est illo
            eius saepe? Molestias sapiente perspiciatis doloribus consectetur
            nihil facilis aliquid eaque vel quisquam.
          </p>
          <div className="flex gap-x-2">
            <button className="bg-black/80 text-white">Learn More</button>
            <button className="border-black/30">Book Your Trip</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;

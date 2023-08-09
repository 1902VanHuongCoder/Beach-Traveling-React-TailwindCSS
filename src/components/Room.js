import React from "react";

const Room = () => {
  return (
    <div className="max-w-[1400px] h-[500px] bg-[#73b1e3] p-4 flex flex-col md:flex-row justify-center gap-x-[2%] pt-20">
      <div className="md:basis-[30%] bg-transparent">
        <h1 className="font-bold text-lg text-white">Room List</h1>
        <p className="font-semibold max-w-[500px] py-4 text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ipsam
          rerum iusto excepturi similique minus?
        </p>
      </div>
      <div className="h-fit grid grid-col-2 p-4 bg-white rounded-sm shadow-lg md:basis-[68%] lg:basis-[50%] gap-1 md:shadow-lg">
        <img
          className="col-span-2 object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          alt="/"
        />
        <img
          className="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          alt="/"
        />
        <img
          className="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Room;

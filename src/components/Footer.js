import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { BiLogoGoogle } from "react-icons/bi";
const Footer = () => {
  return (
    <div className="mt-16 md:mt-48 lg:mt-72 h-fit w-full bg-slate-900 p-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-4">
        <div className="text-white">
          <h6 className="font-bold uppercare pt-2">Solutions</h6>
          <ul>
            <li className="py-1">Travel</li>
            <li className="py-1">Booking</li>
            <li className="py-1">Flights</li>
            <li className="py-1">Cruises</li>
            <li className="py-1">Ground</li>
          </ul>
        </div>
        <div className="text-white">
          <h6 className="font-bold uppercare pt-2">Support</h6>
          <ul>
            <li className="py-1">Pricing</li>
            <li className="py-1">Documentation</li>
            <li className="py-1">Tours</li>
            <li className="py-1">Refunds</li>
          </ul>
        </div>
        <div className="text-white">
          <h6 className="font-bold uppercare pt-2">Company</h6>
          <ul>
            <li className="py-1">About</li>
            <li className="py-1">Blog</li>
            <li className="py-1">Jobs</li>
            <li className="py-1">Press</li>
            <li className="py-1">Partners</li>
          </ul>
        </div>
        <div className="text-white">
          <h6 className="font-bold uppercare pt-2">Legal</h6>
          <ul>
            <li className="py-1">Claims</li>
            <li className="py-1">Privacy</li>
            <li className="py-1">Terms</li>
            <li className="py-1">Policies</li>
            <li className="py-1">Conditions</li>
          </ul>
        </div>
      </div>
      <div className="flex py-2 gap-x-4 mt-4 text-white">
        <AiOutlineTwitter />
        <BsFacebook />
        <BsInstagram />
        <BiLogoGoogle />
      </div>
      <div className="text-white w-full text-center mt-4">
        All already reserved. Copyright &copy; PaulTo
      </div>
    </div>
  );
};

export default Footer;

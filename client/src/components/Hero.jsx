import { Link } from "react-router-dom";
import Image from "./Image";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";


const Hero = () => {


  return (
       <div  className=" bg-cover bg-center h-[85vh] w-full flex flex-col  mt-0 
       text-white  overflow-y-auto"
    style={{ backgroundImage: "url('/church.gif')" }}>

      <div className="flex flex-col p-3 lg:flex-row gap-[100px]">
        {/* Left Section */}
        <div className="max-w-[500px] flex flex-col mt-4 md:mt-[50px] gap-1 md:gap-4 rounded-md ml-[3px] md:ml-[100px]">
        <h1 className="text-4xl lg:text-7xl font-bold text-white ">
            For God
          </h1>
          <h1 className="text-4xl lg:text-7xl font-bold text-white ">
            For People
          </h1>
          <h1 className="text-4xl lg:text-7xl font-bold text-white ">
            For the City
          </h1>
          <h1 className="text-4xl lg:text-7xl font-bold text-white ">
            For The World
          </h1>
         
          <p className="text-md md:text-xl text-white ">
          Welcome to a place where the gospel is central and Jesus is always the lead story.
           We are a Jesus church and want to gather in worship and scatter to shine His light and love throughout the city and beyond.
          </p>
          <Link
            to="/about"
            className=" text-center mt-3 md:mt-0 sm:w-auto px-4 md:px-12 py-3 md:py-3 bg-[#0062e3]   text-white font-semibold
             rounded-full hover:bg-[#0053bf]   "
          >
            Learn More
          </Link>
        </div>
      
      
      </div>


    </div>
  );
};

export default Hero;

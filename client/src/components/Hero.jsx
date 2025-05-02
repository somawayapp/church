import { Link } from "react-router-dom";
import Image from "./Image";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";


const Hero = () => {


  return (
       <div  className=" bg-cover bg-center h-screen w-full flex flex-col  mt-0 md:mt-4
      items-center justify-center text-white text-center overflow-y-auto"
    style={{ backgroundImage: "url('/church.gif')" }}>

      <div className="flex flex-col lg:flex-row lg:h-[60vh] gap-[100px] mt-4">
        {/* Left Section */}
        <div className="max-w-sm flex flex-col  mt-0 md:mt-9 items-start gap-1 md:gap-4 rounded-md">
          <h1 className="text-4xl lg:text-6xl font-bold text-[var(--textColor)]">
            For God
          </h1>
          <h1 className="text-4xl lg:text-6xl font-bold text-[var(--textColor)]">
            For People
          </h1>
          <h1 className="text-4xl lg:text-6xl font-bold text-[var(--textColor)]">
            For the City
          </h1>
          <h1 className="text-4xl lg:text-6xl font-bold text-[var(--textColor)]">
            For The World
          </h1>
         
          <p className="text-md md:text-xl text-[var(--textColor)]">
          Welcome to a place where the gospel is central and Jesus is always the lead story.
           We are a Jesus church and want to gather in worship and scatter to shine His light and love throughout the city and beyond.
          </p>
          <Link
            to="/about"
            className="w-full text-center mt-3 md:mt-0 sm:w-auto px-4 md:px-12 py-3 md:py-3 bg-[#0062e3]   text-white font-semibold
             rounded-md hover:bg-[#0053bf]   "
          >
            Learn More
          </Link>
        </div>
        <div className="lg:w-1/9 flex mt-[-53px] md:mt-[-40px] flex-col">
          </div>
        {/* Right Section */}
        <div className="lg:w-4/9 flex mt-[-53px] md:mt-[-40px] flex-col">
          {/* First Featured Post */}
    
        </div>
      </div>


    </div>
  );
};

export default Hero;

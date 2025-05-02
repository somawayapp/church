import { Link } from "react-router-dom";
import Image from "./Image";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";


const Hero = () => {


  return (
    <div>

       <div  className=" bg-cover bg-center h-[80vh] w-full flex flex-col  mt-0 
       text-white  overflow-y-auto"
    style={{ backgroundImage: "url('/church.gif')" }}>

      <div className="flex flex-col p-3 lg:flex-row gap-[100px]">
        {/* Left Section */}
        <div className="max-w-[500px] flex flex-col mt-[50px] gap-1 md:gap-4 rounded-md ml-[3px] md:ml-[100px]">
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
           className="mt-3 md:mt-0 px-6 md:px-12 py-3 md:py-3 bg-[#0062e3] text-white font-semibold
           rounded-full hover:bg-[#0053bf] inline-block w-fit"
             >
           Learn More
           </Link>


        </div>
      
      
      </div>


    </div>


<div className="overflow-hidden relative w-full h-[40px] md:h-[50px] 
whitespace-nowrap p-5 md:p-9  ">
 <div className="flex  gap-9  md:gap-[80px] animate-scroll">
   <h1 className="text-xl md:text-3xl">Everyone is welcome to the house of the lord Everyone is welcome to the house of the lord</h1>

   <h1 className="text-xl md:text-3xl">Everyone is welcome to the house of the lord Everyone is welcome to the house of the lord</h1>

 </div>
 </div>

</div>
  );
};

export default Hero;

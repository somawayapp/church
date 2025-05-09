import { Link } from "react-router-dom";
import Image from "./Image";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";


const Hero = () => {


  return (
    <div >

       <div  className=" bg-cover bg-center h-[77vh] md:h-[79vh] w-full flex flex-col 
       text-white  overflow-y-auto"
    style={{ backgroundImage: "url('/church.gif')" }}>

      <div className="flex flex-col p-3 lg:flex-row gap-[100px]">
        {/* Left Section */}
        <div className="max-w-[500px] flex flex-col mt-[50px]  md:mt-[20px] gap-1 md:gap-4 rounded-md ml-[3px] md:ml-[100px]">
        <h1 className="text-4xl lg:text-6xl font-bold text-white ">
            For God
          </h1>
          <h1 className="text-4xl lg:text-6xl font-bold text-white ">
            For People
          </h1>
          <h1 className="text-4xl lg:text-6xl font-bold text-white ">
            For the City
          </h1>
          <h1 className="text-4xl lg:text-6xl font-bold text-white ">
            For The World
          </h1>
         
          <p className="text-md md:text-xl text-white ">
          Welcome to a place where the gospel is central and Jesus is always the lead story.
           We are a Jesus church and want to gather in worship and scatter to shine His light and love throughout the city and beyond.
          </p>
         
          <Link
  to="/about"
  className="gradient-border mt-2 mt:t-0 rounded-full px-6 md:px-12 py-3 md:py-3 text-lg md:text-xl text-white font-semibold transition-all duration-300 inline-block w-fit"
>
  New to Praise church?
</Link>




           


        </div>
      
      
      </div>


    </div>


<div className="overflow-hidden relative w-full p-6 border-b border-b-[var(--softBg4)]
whitespace-nowrap  ">
 <div className="flex  gap-9  md:gap-[80px] animate-scroll ">
   <h1 className="text-xl md:text-2xl"> John 3:16 "For God so loved the world that He gave us His only begotten Son." </h1>

   <h1 className="text-xl md:text-2xl"> John 3:16 "For God so loved the world that He gave us His only begotten Son." </h1>

 </div>
 </div>

</div>
  );
};

export default Hero;

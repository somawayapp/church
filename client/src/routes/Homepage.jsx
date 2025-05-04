import { useEffect, useState, useRef } from "react";
import { ThemeProvider } from "../../themecontext";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StoryLine from "../components/StoryLine";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import MobileControls from "../components/MobileControls";
import { Helmet } from "react-helmet";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when this component mounts
  }, []);

  return (
      <div>
        <Helmet>
        <title>The #1 Free App to Unlock the Best Ideas from Top Books! - Somaway Best Book Summaries</title>

        <meta name="description" content="Somaway is the #1 award-winning book summary app and website, trusted by 40M+ users worldwide and 100K+ daily readers. Get smarter in just 15 minutes with our free, concise summaries of best-selling books. Join us today—learn and grow, one book summary at a time! " />

        <meta name="keywords" content="book summaries, knowledge empowerment, bestselling books, transformative ideas, thought leadership, business books, self-help summaries, industry insights, personal growth, productivity hacks, motivation, innovation strategies, creative thinking, mind mastery, leadership skills, financial wisdom, success mindset, breakthrough thinking, wisdom for life, practical knowledge, learning shortcuts, brain boost, rapid reading, book digest, quick reads, success stories, entrepreneurial mindset, modern wisdom, elite knowledge, mastery techniques, global perspectives, future readiness, book analysis, idea extraction, in-depth reviews, concise knowledge, summary breakdowns, book wisdom, mental expansion, critical thinking, intellectual growth, top books, influential reads, advanced thinking, ultimate book digest, life hacks, professional growth, career mastery, mindset shift, paradigm transformation, unconventional wisdom, practical insights, top nonfiction books, skill enhancement, brain optimization, cognitive skills, mind enhancement, top book reviews, wisdom harvesting, fast knowledge, core ideas, rapid insights, strategic intelligence, innovation fuel, personal development, growth mindset, self-mastery, breakthrough books, smart reading, fast tracking wisdom, peak performance, visionary thinking, knowledge domination, unbeatable learning" />

 
  <meta property="og:title" content="Somaway - Elevate Your Mind" />
  <meta property="og:description" content="Achieve greatness with Somaway. Explore groundbreaking book summaries that transform your life." />
  <meta property="og:image" content="/images/somaway-og.jpg" />
  <meta property="og:url" content={`${window.location.href}`} />
  <meta property="og:type" content="website" />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Somaway - Elevate Your Mind" />
  <meta name="twitter:description" content="Revolutionize your thinking with powerful book insights on Somaway." />
  <meta name="twitter:image" content="/images/somaway-twitter.jpg" />
  
  <script type="application/ld+json">
    {`{
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Somaway",
      "url": "${window.location.href}",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "${window.location.href}/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }`}
  </script>
  
  <link rel="canonical" href={`${window.location.href}`} />
  
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
</Helmet>


            <Navbar/>

    <div className="mb-9  flex flex-col gap-0">

         

      {/* Floating Section 
      
      <div
  className={` flex items-center hidden sm:block  mx-auto justify-between px-5 py-3 transition-opacity 
    duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"} sm:opacity-100 sm:pointer-events-auto  `}
 
>


        <Link to="/" className="flex items-center mt-[10px] gap-1 text-lg font-bold md:text-2xl">
        <img src="/x.png"  className="w-50 h-20 lg:w-50 lg:h-20" />

<span className="text-[var(--textLogo)] text-[30px] lg:text-[90px]"></span>

</Link>  

      

 
      </div>
      */}

   {/*

      <div  style={{ zIndex: 100004 }} className="mb-[45px] md:mb-[30px] mt-[15px] md:mt-[20px] sticky top-0.5 md:top-2 ">
  <Maincategories />
</div>
     */}
     
        <Hero />













        
        <div className=" animate-fadeIn flex flex-col  items-center justify-center" >
  
       <div className="flex bg-[#4c1d95] text-white flex-col max-w-full  gap-2 md:gap-4  px-3 md:px-[100px] py-[70px] md:py-[100px] md:flex-row">

<div className="md:w-1/2 items-start justify-start md:text-left">
  <p className="text-3xl md:text-5xl md:pt-9  font-bold ">Join US this Sunday
  </p>

  <p className="text-3xl md:text-5xl  :text-2xl font-semibold"> for un uplifting service
  </p>
  <p className="text-sm  mt-1 md:mt-2 md:text-lg">
  Join us every Sunday at 9:30a and 11:45a for our
   Atlanta Gatherings or 9:30a and 11:30a for our
   Washington DC Gatherings at passioncity.online.
  </p>


    <Link
    to="/about"
    className="gradient-border mt-4 mb-4 mt:t-0 rounded-full px-6 md:px-12 py-3 md:py-3 text-lg md:text-xl font-semibold 
    transition-all duration-300 inline-block w-fit"
  >
    Watch Online
  </Link>
</div>


<img
  src="/pics44.jpg"
  className="w-[400px] rounded-lg md:rounded-[20px] md:w-1/2 mx-auto md:mx-0"
/>
</div>

       
       </div>





<div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" class="absolute top-0 left-0 w-full h-24 z-10">
  <path fill="#4c1d95" d="M0,26 C 480,130 960,-40 1440,32 L1440,0 L0,0 Z"></path>
  <path fill="#4c1d95" d="M0,26 C 480,210 960,0 1440,96 L1440,0 L0,0 Z"></path>
</svg>






  <div className="px-3 md:px-[100px] py-[50px] md:py-[75px] ">

  <p className="text-3xl md:text-5xl mt-4 md:mt-2 :text-2xl font-semibold">
  Become A Member of Deliverance International Church
  </p>
  <p className="text-sm  mt-1 md:mt-2 md:text-lg">
  Embark on a meaningful journey with us! Join our vibrant ministry and be a
   catalyst for positive change in our community.
   Together, we can create a lasting impact and bring hope to those in need..
  </p>



  </div>

  
</div>


      




    <div className=" ">
  {/* Background Section */}
  <div
  className="relative sticky top-0 bg-cover bg-center h-screen w-full flex flex-col 
    items-center justify-center text-white text-center overflow-y-auto"
  style={{ backgroundImage: "url('/bg.jpg')" }}
>
  {/* Wavy Top SVG */}
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" class="absolute top-0 left-0 w-full h-24 z-10">
  <path fill="#4c1d95" d="M0,0 C 480,200 960,-40 1440,32 L1440,0 L0,0 Z"></path>
  <path fill="#4c1d95" d="M0,0 C 480,280 960,0 1440,126 L1440,0 L0,0 Z"></path>
</svg>



  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

  {/* Content here */}
  {/* ... */}

</div>

 


<div className="items-center justify-center text-white  top-[-800px] text-center ">

<div className="h-full px-2 py-[100px] md:py-[200px]   max-w-[800px] mx-auto mr-[20%] box-border">
      <h1 className="text-3xl md:text-6xl  font-bold">
      God is using your generosity to make a difference
      </h1>
   
    </div>
</div>

  {/* Scrolling Content */}
  <div className=" animate-fadeIn flex flex-col items-center mt-[-800px] justify-center"
       >
  
       <div className="flex bg-purple-900 text-white flex-col max-w-full  gap-2 md:gap-4   px-3 md:px-[100px]   py-[70px] md:py-[100px] md:flex-row">



       <img
  src="/pics59.jpg"
  className="w-[400px] rounded-lg md:rounded-[20px] md:w-1/2 mx-auto md:mx-0"
/>



<div className="md:w-1/2 items-start justify-start md:text-left">
  <p className="text-3xl md:text-5xl mt-4 md:mt-2 :text-2xl font-semibold">
  Become A Member of Deliverance International Church
  </p>
  <p className="text-sm  mt-1 md:mt-2 md:text-lg">
  Embark on a meaningful journey with us! Join our vibrant ministry and be a
   catalyst for positive change in our community.
   Together, we can create a lasting impact and bring hope to those in need..
  </p>


    <Link
    to="/about"
    className="gradient-border mt-4 mb-4 mt:t-0 rounded-full px-6 md:px-12 py-3 md:py-3 text-lg md:text-xl font-semibold 
    transition-all duration-300 inline-block w-fit"
  >
    Watch Online
  </Link>
</div>



</div>

       
       </div>


</div>





















<div className=" ">
  {/* Background Section */}
  <div
    className="sticky top-0  bg-cover bg-center h-screen w-full flex flex-col 
      items-center justify-center text-white text-center overflow-y-auto"
    style={{ backgroundImage: "url('/pics48.jpg') " }}
  >
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

 
  </div>
 


<div className="items-center justify-center text-white mt-[-500px] md:mt-[-650px] mb-[250px] md:mb-[550px] text-center ">

<div className="h-full p-1 box-border">
      <h1 className="text-3xl md:text-6xl  font-bold">
        Enjoy summarized nonfiction
      </h1>
      <h1 className="text-3xl md:text-6xl font-bold">bestsellers</h1>
      <p className="mt-2 text-md md:text-xl">
        Grasp the book’s key ideas in less than 5 minutes
      </p>
      <button className="mt-9 bg-white text-black py-4 text-bold px-8 cursor-pointer hover:bg-gray-200
       text-2xl md:text-5xl rounded-[40px]   "
        >
        Get Started
      </button>
    </div>
</div>

  {/* Scrolling Content */}
  <div className="p-2 md:p-[30px] md:mb-[20px] mt-[120px]">
    <div
      className="relative text-[var(--textColor)] w-full rounded-3xl md:rounded-[30px] shadow-md 
        bg-[var(--bg)] text-center animate-fadeIn flex flex-col items-center justify-center"
    >
      <div className="h-full p-2  box-border">
        <h1 className="text-3xl md:text-6xl mt-[20px] md:mt-[70px] font-bold">
          Service Times
         </h1>
        <p className="mt-2 text-md md:text-xl">
          Let’s check how many titles you can finish in a month with  Somaway! Tell us how
        </p>
        <p className="mt-2 text-md md:text-xl">
          much time you’d like to spend on reading:
        </p>
        <button
          className="mt-9 text-[var(--bg)] bg-[var(--textColor)] py-4 text-extrabold text-2xl md:text-5xl 
            px-8 rounded-[40px] cursor-pointer hover:bg-[var(--bd)]  "
        >
          30 titles/month
        </button>
      </div>

      




    <div className="flex flex-col mb-[75px]  items-center justify-center">
      <div className="grid grid-cols-1 mx-auto md:grid-cols-3 gap-6 mt-[75px] w-full px-4">
        {[
        {
          service: "First Service (every sunday) ",
          time: "9:00 AM - 10:30 AM",
          icon: "service2.png",
        },
        {
          service: "Second Service (every sunday) ",
          time: "11:00 AM - 12:30 PM",
          icon: "service3.png",
        },
        {
          service: "Third Service (every sunday) ",
          time: "2:00 PM - 3:30 PM",
          icon: "service4.png",
        }
        
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[var(--bodyBg)] shadow-2xl rounded-2xl md:rounded-[20px] p-4  flex flex-col items-start text-left relative"
          >
            {/* Icon */}
            <img
              src={item.icon}
              className="absolute top-4 left-4 w-12 h-18 md:w-20 md;h-30"
            />
            {/* Text */}
            <p className="text-lg md:text-2xl font-bold text-[var(--textColor)] mt-[50px] md:mt-[100px] ">
              {item.service}
            </p>
             <p className="text-lg md:text-2xl font-bold text-[var(--textColor)] mt-[10px] ">
              {item.time}
            </p>
          </div>
        ))}
      </div>
    </div>
    </div>



  </div>

</div>





    <div className=" animate-fadeIn flex flex-col items-center px-3 md:px-[100px] justify-center"
       >



  
       <div className="flex   flex-col max-w-full  m gap-2 md:gap-4 rounded-lg md:rounded-[20px] p-2 md:p-6 md:flex-row">
       <img
  src="/sunday.jpg"
  className="w-[400px] rounded-lg md:rounded-[20px] md:w-1/2 mx-auto md:mx-0"
/>

<div className="md:w-1/2 items-start justify-start md:text-left">
  <p className="text-6xl md:text-9xl mt-5 md:mt-9   md:text-md">Join US</p>
  <p className="text-3xl md:text-6xl mt-4 md:mt-2 :text-2xl font-semibold">
    this Sunday
  </p>
  <p className="text-sm  mt-1 md:mt-2 md:text-lg">
  Join us every Sunday at 9:30a and 11:45a for our
   Atlanta Gatherings or 9:30a and 11:30a for our
   Washington DC Gatherings at passioncity.online.
  </p>


    <Link
    to="/about"
    className="gradient-border mt-4 mb-4 mt:t-0 rounded-full px-6 md:px-12 py-3 md:py-3 text-lg md:text-xl
    font-semibold transition-all duration-300 inline-block w-fit"
  >
    Watch Online
  </Link>
</div>



</div>

       
       </div>








   <div className=" animate-fadeIn flex flex-col items-center px-3 md:px-[100px] justify-center"
       >
  
       <div className="flex   flex-col max-w-full  m gap-2 md:gap-4 rounded-lg md:rounded-[20px] p-2 md:p-6 md:flex-row">

<div className="md:w-1/2 items-start justify-start md:text-left">
  <p className="text-6xl md:text-9xl mt-5 md:mt-9   md:text-md">Join US</p>
  <p className="text-3xl md:text-6xl mt-4 md:mt-2 :text-2xl font-semibold">
    this Sunday
  </p>
  <p className="text-sm  mt-1 md:mt-2 md:text-lg">
  Join us every Sunday at 9:30a and 11:45a for our
   Atlanta Gatherings or 9:30a and 11:30a for our
   Washington DC Gatherings at passioncity.online.
  </p>


    <Link
    to="/about"
    className="gradient-border mt-4 mb-4 mt:t-0 rounded-full px-6 md:px-12 py-3 md:py-3 text-lg md:text-xl
    font-semibold transition-all duration-300 inline-block w-fit"
  >
    Watch Online
  </Link>
</div>


<img
  src="/sunday.jpg"
  className="w-[400px] rounded-lg md:rounded-[20px] md:w-1/2 mx-auto md:mx-0"
/>
</div>

       
       </div>








      <div
         className="bg-[var(--bodyBg)] p-4 md:p-9 mt-[10px] mx-3 md:mx-[100px] rounded-lg md:rounded-[30px]
           text-white text-center animate-fadeIn flex flex-col items-center justify-center"
       >
         <div className="h-full max-w-full md:max-w-[700px] mx-auto box-border">
         <h1 className="text-2xl md:text-5xl mt-[15px] text-[var(--softTextColor)] px-2 md:mt-[50px] font-bold">
         Join our church ministries
                   </h1>
                   <div className="flex gap-2 items-center justify-center md:gap-4 flex-row">
  <button
    className="mt-5 mb-5 flex items-center border border-[var(--softTextColor)] bg-[var(--bd2)] text-[var(--bg)] 
    font-semibold text-xs md:text-sm  py-2 px-2 md:px-6 md:py-3 gap-2 rounded-[10px] cursor-pointer hover:bg-blue-500"
  >
    <img
      src="/fiction.webp"
      className="w-5 h-5 md:w-8 md:h-8 object-cover rounded-full"
    />
    <span>Log In</span>
  </button>

  <button
    className="mt-5 mb-5 flex items-center border border-[var(--textColore)] bg-[var(--bd2)] text-[var(--textColor)]
     font-semibold text-xs md:text-sm  py-2 px-2 md:px-6 md:py-3 gap-2 rounded-[10px] cursor-pointer hover:bg-blue-500"
  >
    <img
      src="/self-growth.webp"
      className="w-5 h-5 md:w-8 md:h-8 object-cover rounded-full"
    />
    <span> Summaries</span>
  </button>

  <button
    className="mt-5 mb-5 flex items-center border border-[var(--softTextColor)] bg-[var(--bd)] text-[var(--bg)] py-2 px-2 md:px-6 md:py-3
     font-semibold text-xs md:text-sm  gap-2 rounded-[10px] cursor-pointer hover:bg-blue-500"
  >
    <img
      src="/negotiation.webp"
      className="w-5 h-5 md:w-8 md:h-8 object-cover rounded-full"
    />
    <span className=" " >Start</span>

  </button>
</div>

                 
         
         </div >

         <div className="flex bg-[var(--bd)] flex-col max-w-full md:max-w-[900px] m gap-2 md:gap-4 rounded-lg md:rounded-[20px] p-2 md:p-6 md:flex-row">
  <img
    src="/heropic.jpg"
    className="w-[200px] rounded-lg md:rounded-[20px] md:w-2/5 mx-auto md:mx-0"
  />
  <div className="md:w-3/5 items-start justify-start md:text-left">
    <p className="text-xs mt-5 md:mt-9 text-[var(--softTextColor)] md:text-md">ABOUT US</p>
    <p className="text-md mt-1 md:mt-2 text-[var(--softTextColor)] md:text-2xl font-semibold">
      Still wondering what is Somaway app?
    </p>
    <p className="text-sm text-[var(--softTextColor)] mt-1 md:mt-2 md:text-lg">
      Somaway is a global EdTech startup with Kenyan roots. Somaway app offers
      15-minute bite-sized non-fiction book summaries catered to your everyday
      needs. We are mission-driven and passionate about self-improvement.
    </p>
  </div>
</div>

       
       </div>

      <Footer />


    
    </div>
    </div>

  );
};

export default Homepage;

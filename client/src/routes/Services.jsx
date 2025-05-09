import { useEffect, useState, useRef } from "react";
import { ThemeProvider } from "../../themecontext";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Images from "../components/Images";
import { Helmet } from "react-helmet";
import { FaChurch, FaPrayingHands, FaClock, FaBible, FaCross, FaMoon } from "react-icons/fa";
import { FaChild, FaPeopleArrows, FaMale, FaFemale } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';



const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when this component mounts
  }, []);

  const [selected, setSelected] = useState('discipleship');


  const cardVariants = {
    offscreen: {
      opacity: 0,
      scale: 0.8,
      y: 100,
    },
    onscreen: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.8,
      },
    },
  };

  return (
      <div>
      <Helmet>
  <title>About Us - Praise Church.</title>

  <meta name="description" content="Praise Church is a welcoming community where faith comes alive. Join us for worship, uplifting sermons, Bible study, events, and spiritual growth. Discover your purpose in Christ with us today." />

  <meta name="keywords" content="Praise Church, Christian church, worship service, Bible study, church sermons, spiritual growth, Sunday service, Christian community, Jesus Christ, faith community, online church, gospel teaching, church events, prayer meetings, live sermons, Christian worship, discipleship, church outreach, church mission, youth ministry, faith journey, family church, praise and worship, Christian fellowship, church near me, Bible-based church, non-denominational church, Holy Spirit, grace, salvation, church teachings, grow in Christ, community support, God’s word" />

  <meta property="og:title" content="Praise Church - A Home for Worship & Faith" />
  <meta property="og:description" content="Join Praise Church for Christ-centered worship, sermons, and community. Everyone is welcome—experience a deeper walk with God today." />
  <meta property="og:image" content="/images/praisechurch-og.jpg" />
  <meta property="og:url" content="https://praisechurch.org" />
  <meta property="og:type" content="website" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Praise Church - Worship, Grow, Connect" />
  <meta name="twitter:description" content="Experience faith, fellowship, and spiritual growth at Praise Church. Join our loving Christian community today." />
  <meta name="twitter:image" content="/images/praisechurch-twitter.jpg" />

  <script type="application/ld+json">
    {`{
      "@context": "https://schema.org",
      "@type": "Church",
      "name": "Praise Church",
      "url": "https://praisechurch.org",
      "logo": "https://praisechurch.org/images/logo.png",
      "sameAs": [
        "https://facebook.com/praisechurch",
        "https://instagram.com/praisechurch"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Worship Way",
        "addressLocality": "YourCity",
        "addressRegion": "YourState",
        "postalCode": "12345",
        "addressCountry": "US"
      },
      "description": "Praise Church is a vibrant Christian church focused on worship, biblical teaching, and building a strong community of faith.",
      "founder": "Pastor John Doe",
      "foundingDate": "2005"
    }`}
  </script>

  <link rel="canonical" href="https://praisechurch.org" />
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
</Helmet>



            <Navbar/>

            <div  className=" bg-cover bg-center h-[60vh] w-full flex  
              text-white  overflow-y-auto"
            style={{ backgroundImage: "url('/pics38.jpg')" }}>

            <div className="flex flex-col p-3 lg:flex-row gap-[100px]">
             {/* Left Section */}
           <div className="max-w-[500px] flex flex-col mt-[50px]  md:mt-[20px] gap-1 md:gap-4 rounded-md ml-[3px] md:ml-[100px]">
      
           <h1 className="text-4xl mt-[100px] lg:text-6xl font-bold text-white ">
            About Us
           </h1>
       
         
         
           </div>
            </div>



              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              className="absolute bottom-0 left-0 w-full h-24 z-10"
              style={{ transform: "rotate(180deg)" }}
               >

              <path fill="var(--bg)" d="M0,0 C 480,225 975,-180 1440,32 L1440,0 L0,0 Z" />
              <path fill="var(--bg)" d="M0,0 C 480,305 975,-180 1440,96 L1440,0 L0,0 Z" />
              </svg>
              </div>

      <div className="mb-9  flex flex-col gap-0" >
        <div className=" animate-fadeIn flex flex-col  items-center justify-center" >
  
       <div className="flex  flex-col max-w-full  gap-2 md:gap-4  px-3 md:px-[100px] py-[70px] md:py-[100px] md:flex-row">

   <div className=" order-3 md:order-1 md:w-1/2 items-start justify-start md:text-left">
  <p className="text-3xl md:text-5xl md:pt-9  py-2  font-bold " data-aos="fade-up">About
  </p>

  <p className="text-3xl md:text-5xl  :text-2xl font-semibold" data-aos="fade-up" data-aos-delay="100"> 
  </p>
  <p className="text-sm  mt-1  md:text-lg" >
    <span className="hidden md:flex">    Praise Church is a Spirit-filled, Bible-based church in Nairobi, Kenya.
    Founded in 2023 by Pastor saviour, we exist to see people passionately devoted to God.
     <br /> </span> 

  </p>





  <div className="pb-[50px]">
 

 <div className="flex flex-col items-center mt-[50px] mb-6 justify-center">
   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-8xl">
     {[
       {
         title: "LIVE SERVICE",
         description:
           ' Every Sunday at 6:00am and 8:00am for our morning services or 11:00am and 2:00pm for our mid-day services ',
         icon: <FaChurch size={24} />,
         img: "/pics46.jpg",
       },
       {
         title: "MORNING GLORY",
         description:
           '  Every day at 6:00am for morning glory. Welcome friends & Followers, to join us for our morning glory serivice.',
         icon: <FaClock size={24} />,
         img: "/pics43.jpg",
       },
       {
         title: "DEVOTION",
         description:
         '  Every thursday at 6:00pm for devotion service. Welcome friends & Followers, to join us for our devotion service.',
         icon: <FaCross size={24} />,
         img: "/pics59.jpg",
       },
     ].map((item, index) => (
      
       <div data-aos="fade-up">

       <div
       key={index}
       className="group relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500"

     >
         {/* Image */}
         <img
           src={item.img}
           alt={item.title}
           className="w-full h-80 object-cover"
         />

         {/* Text Box Overlay */}
         <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-6 pt-10 text-center rounded-b-2xl">
           {/* Floating Icon */}
           <div className="absolute -top-7 left-1/2 transform -translate-x-1/2">
             <div className="w-14 h-14 rounded-full bg-[#4c1d95] flex items-center justify-center border-2 border-transparent group-hover:bg-white group-hover:border-[#4c1d95] transition-all duration-500">
               <div className="text-white group-hover:text-[#4c1d95] transition-colors duration-500">
                 {item.icon}
               </div>
             </div>
           </div>

           <h3 className="text-xl md:text-2xl font-bold mb-2 text-black group-hover:text-[#4c1d95] transition-colors duration-500">
             {item.title}
           </h3>
           <p className="text-sm md:text-base text-gray-700 leading-snug">
             {item.description}
           </p>
         </div>
         </div>
       </div>
     ))}
   </div>
 </div>
</div>
 </div>




  </div>
</div>

       
       </div>






      <Footer />


    
    </div>

  );
};


export default Services;


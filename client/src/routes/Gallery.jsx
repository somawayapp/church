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



const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when this component mounts
  }, []);

  const images = Array.from({ length: 48 }, (_, i) => `/pics${i + 1}.jpg`);


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
            Give
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
        



      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 w-full">
  {images.map((src, index) => {
    const isSquare = index % 2 === 0;
    return (
      <div
        key={index}
        className={`rounded-lg overflow-hidden relative ${
          isSquare ? "aspect-[3/4]" : "aspect-[3/4]"
        }`}
      >
        <div
          className={`w-full h-full ${
            isSquare ? "" : "flex items-center justify-center"
          }`}
        >
          <img
            src={src}
            alt={`Image ${index + 1}`}
            className={`object-cover rounded-lg w-full h-full`}
          />
        </div>
      </div>
    );
  })}
</div>



      <Footer />


    
    </div>
    </div>

  );
};

export default Gallery;


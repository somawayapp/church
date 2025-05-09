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



const Ministries = () => {
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
  <title>Praise Church - A Home for Worship, Community & Spiritual Growth</title>

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
            Ministries
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
  
       <div className="flex  text-white flex-col max-w-full  gap-2 md:gap-4  px-3 md:px-[100px] py-[70px] md:py-[100px] md:flex-row">

   <div className="md:w-1/2 items-start justify-start md:text-left">
  <p className="text-3xl md:text-5xl md:pt-9  font-bold " data-aos="fade-up">Discipleship
  </p>

  <p className="text-3xl md:text-5xl  :text-2xl font-semibold" data-aos="fade-up" data-aos-delay="100"> 
  </p>
  <p className="text-sm  mt-1 md:mt-2 md:text-lg" data-aos="fade-up" data-aos-delay="200">
  You were created to grow in Christ through fellowship with others, and one of the best ways to do that at Praise Church is 
  by joining a discipleship group! 
  <br />
  <br />
  No matter your stage of life, we want you to be part of a Christ-centered community where 
  people come to know Jesus, grow in their faith through Bible reading, experience the joy of baptism, and walk together in 
  spiritual growth and encouragement.

  </p>
 </div>


 <div className="block w-full  rounded-lg md:rounded-[20px] md:w-1/2 mx-auto md:mx-0"  data-aos="fade-up"
  data-aos-delay="300"> 

  <img
  src="/pics48.jpg"
  className=" rounded-lg md:rounded-[20px] transform hover:scale-105 transition-all duration-300"
 
/>

  </div>
</div>

       
       </div>








<div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" class="absolute top-0 left-0 w-full h-24 z-10">
  <path fill="var(--bg)" d="M0,0 C 480,225 975,-180 1440,32 L1440,0 L0,0 Z"></path>
  <path fill="var(--bg)" d="M0,0 C 480,305 975,-180 1440,96 L1440,0 L0,0 Z"></path>
</svg>

<div className=" animate-fadeIn flex flex-col  items-center justify-center" >
  
  <div className="flex bg-[#4c1d95] text-white flex-col max-w-full  gap-2 md:gap-4  px-3 md:px-[100px] py-[70px] md:py-[100px] md:flex-row">


  <div className="block w-full  rounded-lg md:rounded-[20px] md:w-1/2 mx-auto md:mx-0"  data-aos="fade-up"
data-aos-delay="300"> 

<img
src="/pics38.jpg"
className=" rounded-lg md:rounded-[20px] transform hover:scale-105 transition-all duration-300"

/>

</div>


<div className="md:w-1/2 items-start justify-start md:text-left">
<p className="text-3xl md:text-5xl md:pt-9  font-bold " data-aos="fade-up">Merygoround
</p>

<p className="text-3xl md:text-5xl  :text-2xl font-semibold" data-aos="fade-up" data-aos-delay="100"> 
</p>
<p className="text-sm  mt-1 md:mt-2 md:text-lg" data-aos="fade-up" data-aos-delay="200">
The merigoround is special group that offers compassionate support and  finacial assistance to those in need within the church group.

<br />
<br />
Whether individuals are facing illness, grief, financial struggles, or other life challenges, we want to provide encouragement through
prayer, counseling, and a variety of resources. No one has to face difficult times alone.

</p>
</div>



</div>

  
  </div>

  
</div>










   







<div>
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

<div className="  flex flex-col " >

<div className="flex  flex-col max-w-full gap-2 md:gap-4 px-3 md:px-[100px] py-[70px] md:py-[100px] md:flex-row">
  <div className="md:w-1/2 items-start justify-start md:text-left">
    <p className="text-3xl md:text-5xl md:pt-9 font-bold" data-aos="fade-up">
      Kids
    </p>

  
    <p className="text-sm mt-1 md:mt-2 md:text-lg" data-aos="fade-up" data-aos-delay="200">
    Praise Church Kids school is a vibrant ministry designed to help children learn about Gods love in a fun and engaging way. 
    Through age-appropriate lessons, interactive activities, and exciting events, children are introduced to biblical truths,
     encouraged to grow in their faith, and build a foundation for a lifelong relationship with Jesus.
     <br />
     <br />

     The ministry provides a safe and welcoming environment where kids can explore, discover, and experience the joy of following Christ.
    </p>

 
 </div>


 <div className="block w-full  rounded-lg md:rounded-[20px] md:w-1/2 mx-auto md:mx-0"  data-aos="fade-up"
  data-aos-delay="300"> 

  <img
  src="/pics31.jpg"
  className=" rounded-lg md:rounded-[20px] transform hover:scale-105 transition-all duration-300"
 
/>

  </div>

  
</div>



  </div>









  <div>
<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
    className="absolute top-0 left-0 w-full h-24 z-10"
    style={{ transform: "rotate(180deg)" }}
    
  >
    <path fill="#4c1d95"  d="M0,0 C 480,225 975,-180 1440,32 L1440,0 L0,0 Z" />
    <path fill="#4c1d95"  d="M0,0 C 480,305 975,-180 1440,96 L1440,0 L0,0 Z" />
  </svg>
</div>

<div className="  flex flex-col bg-[#4c1d95] " >

<div className="flex text-white flex-col max-w-full gap-2 md:gap-4 px-3 md:px-[100px] py-[70px] md:py-[100px] md:flex-row">
  <div className="md:w-1/2 items-start justify-start md:text-left">
    <p className="text-3xl md:text-5xl md:pt-9 font-bold" data-aos="fade-up">
      Youth
    </p>

  
    <p className="text-sm mt-1 md:mt-2 md:text-lg" data-aos="fade-up" data-aos-delay="200">
    Our Youth Ministry is focused on guiding them through their spiritual journey during these formative years. With a mix of monthly gatherings,
     worship nights, and fun outings, Praise Church youth creates a space where the youth can deepen their relationship with God, 
     form strong friendships, and discover their unique purpose. 
     <br />
     <br />

     Our desire is to equip and empower the youth to have a personal relationship with God.    </p>

 
 </div>


 <div className="block w-full  rounded-lg md:rounded-[20px] md:w-1/2 mx-auto md:mx-0"  data-aos="fade-up"
  data-aos-delay="300"> 

  <img
  src="/pics51.jpg"
  className=" rounded-lg md:rounded-[20px] transform hover:scale-105 transition-all duration-300"
 
/>

  </div>

  
</div>



  </div>










 

  <div>
<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
    className="absolute bottom-0 left-0 w-full h-24 z-10"
    style={{ transform: "rotate(180deg)" }}
  >
    <path fill="var(--bg)"  d="M0,0 C 480,225 975,-180 1440,32 L1440,0 L0,0 Z" />
    <path fill="var(--bg)"  d="M0,0 C 480,305 975,-180 1440,96 L1440,0 L0,0 Z" />
  </svg>
</div>

<div className="  flex flex-col " >

<div className="flex flex-col max-w-full gap-2 md:gap-4 px-3 md:px-[100px] py-[70px] md:py-[100px] md:flex-row">
  <div className="md:w-1/2 items-start justify-start md:text-left">
    <p className="text-3xl md:text-5xl md:pt-9 font-bold" data-aos="fade-up">
        Men 
   </p>

  
    <p className="text-sm mt-1 md:mt-2 md:text-lg" data-aos="fade-up" data-aos-delay="200">
    Our Mens Ministry is here to help men grow in their God-given calling as a husband, son, brother, father, and leader.
     Our desire is for each man to be strengthened, loved, challenged, and encouraged by other men.
     <br />
     <br />

     We offer mens groups, outdoor activities, one-on-one coffees, and larger gathers for men to connect.  </p>

 
 </div>


 <div className="block w-full  rounded-lg md:rounded-[20px] md:w-1/2 mx-auto md:mx-0"  data-aos="fade-up"
  data-aos-delay="300"> 

  <img
  src="/pics35.jpg"
  className=" rounded-lg md:rounded-[20px] transform hover:scale-105 transition-all duration-300"
 
/>

  </div>

  
</div>



  </div>








  <div>
<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
    className="absolute bottom-0 left-0 w-full h-24 z-10"
    style={{ transform: "rotate(180deg)" }}
  >
    <path fill="#4c1d95"  d="M0,0 C 480,225 975,-180 1440,32 L1440,0 L0,0 Z" />
    <path fill="#4c1d95"  d="M0,0 C 480,305 975,-180 1440,96 L1440,0 L0,0 Z" />
  </svg>
</div>

<div className="  flex flex-col bg-[#4c1d95] " >

<div className="flex flex-col max-w-full gap-2 md:gap-4 px-3 md:px-[100px] py-[70px] md:py-[100px] md:flex-row">
  <div className="md:w-1/2 items-start justify-start md:text-left">
    <p className="text-3xl md:text-5xl md:pt-9 font-bold" data-aos="fade-up">
        Women 
   </p>

  
    <p className="text-sm mt-1 md:mt-2 md:text-lg" data-aos="fade-up" data-aos-delay="200">
    Our Womens Ministry provides a nurturing space for women to connect, encourage one another, and grow in their walk with Christ.
     By engaging in Bible studies, social gatherings, and outreach activities,
     women of all ages are empowered to strengthen their faith, build meaningful relationships, and serve the church and the wider community.
     <br />
     <br />
 </p>

 
 </div>


 <div className="block w-full  rounded-lg md:rounded-[20px] md:w-1/2 mx-auto md:mx-0"  data-aos="fade-up"
  data-aos-delay="300"> 

  <img
  src="/pics33.jpg"
  className=" rounded-lg md:rounded-[20px] transform hover:scale-105 transition-all duration-300"
 
/>

  </div>

  
</div>



  </div>









<div className="mt-[50px] max-w-[100vw] overflow-x-hidden  mb-[50px] bg-[var(--bg2)] px-3  md:px-[100px] border-t  border-t-[var(--softBg)] ">
  {/* Left: Map - 2/3 Width */}
  <p className="text-2xl md:text-4xl text--[var(--softTextColor)] mt-[50px] font-bold " data-aos="fade-up" > GET IN TOUCH WITH US </p>


<div className="flex flex-col md:flex-row gap-6">

  {/* Right: Contact Info - 1/3 Width */}
  <div className="w-full md:w-1/2 mx-auto flex mt-[50px] flex-col justify-between gap-6" data-aos="fade-left" data-aos-delay="200">
  {/* Address Box */}
  <div className="border border-[#4c1d95] rounded-lg p-6 md:p-9 flex flex-col items-center text-center space-y-2 group">
    <div className="transition-all duration-500 bg-[#4c1d95] group-hover:bg-[var(--bg2)] border border-[#4c1d95] p-3 rounded-full transform group-hover:scale-105">
      <FaMapMarkerAlt size={30} className="text-white transition-all group-hover:text-[#4c1d95] duration-500" />
    </div>
    <h3 className="text-lg font-semibold text-[var(--softTextColor)]">Address</h3>
    <p className="text-md text-[var(--softTextColor)]">
      123 Valley Avenue, Nairobi City, Kenya.
    </p>
  </div>

  {/* Call and Email Side by Side (stack on small screens) */}
  <div className="flex flex-col md:flex-row gap-4">
    {/* Call Box */}
    <div className="w-full md:w-1/2 border border-[#4c1d95] rounded-lg p-6 md:p-9 flex flex-col items-center text-center space-y-2 group">
      <div className="transition-all duration-500 bg-[#4c1d95] group-hover:bg-[var(--bg2)] border border-[#4c1d95] p-3 rounded-full transform group-hover:scale-105">
        <FaPhoneAlt size={24} className="text-white transition-all group-hover:text-[#4c1d95] duration-500" />
      </div>
      <h3 className="text-md font-semibold text-[var(--softTextColor)]">Call Us</h3>
      <p className="text-sm text-[var(--softTextColor)]">+(254) 756 789 010</p>
    </div>

    {/* Email Box */}
    <div className="w-full md:w-1/2 border border-[#4c1d95] rounded-lg p-6 md:p-9 flex flex-col items-center text-center space-y-2 group">
      <div className="transition-all duration-500 bg-[#4c1d95] group-hover:bg-[var(--bg2)] border border-[#4c1d95] p-3 rounded-full transform group-hover:scale-105">
        <FaEnvelope size={24} className="text-white transition-all group-hover:text-[#4c1d95] duration-500" />
      </div>
      <h3 className="text-md font-semibold text-[var(--softTextColor)]">Email</h3>
      <p className="text-sm text-[var(--softTextColor)]">praisechurch@gmail.com</p>
    </div>
  </div>
</div>


  <div className="md:w-1/2 rounded-lg mt-[50px] overflow-hidden" data-aos="fade-right" data-aos-delay="100">
    <iframe
      title="Church Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086140975459!2d-122.41941508468365!3d37.77492927975939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5eaf7d89%3A0xf4b0eb25c2e1c82f!2sGrace%20Cathedral!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
      className="w-full h-full min-h-[400px] border-0"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>

</div>


      <Footer />


    
    </div>
    </div>

  );
};

export default Ministries;

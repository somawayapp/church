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



const Homepage = () => {
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

    <div className="mb-9  flex flex-col gap-0">

     
        <Hero />


 
        <div className=" animate-fadeIn flex flex-col  items-center justify-center" >
  
       <div className="flex bg-[#4c1d95] text-white flex-col max-w-full  gap-2 md:gap-4  px-3 md:px-[100px] py-[70px] md:py-[100px] md:flex-row">

   <div className="md:w-1/2 items-start justify-start md:text-left">
  <p className="text-3xl md:text-5xl md:pt-9  font-bold " data-aos="fade-up">Join US this Sunday
  </p>

  <p className="text-3xl md:text-5xl  :text-2xl font-semibold" data-aos="fade-up" data-aos-delay="100"> for un uplifting service
  </p>
  <p className="text-sm  mt-1 md:mt-2 md:text-lg" data-aos="fade-up" data-aos-delay="200">
  Join us every Sunday at 6:00am and 8:00am for our
   morning Gatherings or 11:00am and 2:00pm for our 
  mid-day Gatherings at Praise Church or online.
  </p>


  <Link
  to="/about"
  className="inline-block gradient-border mt-4 mb-4 rounded-full px-6 md:px-12 py-3 md:py-3 text-lg md:text-xl font-semibold transition-all duration-300 transform hover:scale-110"
  data-aos="fade-up"
  data-aos-delay="300"
>
<span className="transform hover:scale-110 block">  Watch Online</span>
</Link>
 </div>


 <div className="block w-full  rounded-lg md:rounded-[20px] md:w-1/2 mx-auto md:mx-0"  data-aos="fade-up"
  data-aos-delay="300"> 

  <img
  src="/pics44.jpg"
  className=" rounded-lg md:rounded-[20px] transform hover:scale-105 transition-all duration-300"
 
/>

  </div>
</div>

       
       </div>





<div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" class="absolute top-0 left-0 w-full h-24 z-10">
  <path fill="#4c1d95" d="M0,0 C 480,225 975,-180 1440,32 L1440,0 L0,0 Z"></path>
  <path fill="#4c1d95" d="M0,0 C 480,305 975,-180 1440,96 L1440,0 L0,0 Z"></path>
</svg>





  <div className="px-3 md:px-[100px] py-[50px] md:py-[75px] ">
    <div className="max-w-[900px] mx-auto ">
    <p className="text-2xl md:text-3xl mt-4 md:mt-2   " data-aos="fade-up">
  OUR VISION </p>

  <p className="text-3xl md:text-5xl py-4 font-semibold" data-aos="fade-up" data-aos-delay="100">
  To see people passionately <br />
   devoted to God.
  </p>
  <p className="text-sm  mt-1 md:mt-2 md:text-lg" data-aos="fade-up" data-aos-delay="200">
  Praise Church is a Spirit-filled, Bible-based church in Nairobi, Kenya.
   Founded in 2023 by Pastor saviour, we exist to see people passionately devoted to God.
 <br />
<br />
We value the presence of God. Our worship, preaching and teaching, and Children's Ministry are centered
 around each person encountering the Holy Spirit. We want to help you discover truth, find hope, 
 and become all who God has created you to be.
  </p>
    </div>
 
<div  className="py-9">
<Images/>

</div>

  </div>

  
</div>




<div className="">
  <div
    className="relative sticky top-0 bg-cover bg-center h-[40vh] w-full flex flex-col items-center justify-center text-white text-center overflow-y-auto"
    style={{ backgroundImage: "url('/bg.jpg')" }}
  >
    <h1 className="text-5xl md:text-7xl text-gray-100  drop-shadow-lg">
      Sharing is
      the way
    </h1>




    
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



</div>




<div className="bg-[var(--bg)] ">


  <div className="px-3 md:px-[100px] py-[50px] md:py-[75px] mt-9">
    <div className="max-w-[900px] mx-auto">
      <p className="text-2xl md:text-3xl mt-4 md:mt-2" data-aos="fade-up">OUR VISION</p>

      <p className="text-3xl md:text-5xl py-4 font-semibold" data-aos="fade-up" data-aos-delay="100">
        To see people passionately <br />
        devoted to God.
      </p>

      <p className="text-sm mt-1 md:mt-2 md:text-lg" data-aos="fade-up" data-aos-delay="200">
      Our mission is to make disciples of Jesus Christ who love God deeply, grow in faith, serve with purpose, and reach the world with the gospel.
       
        <br />
        <br />
        We are committed to building a Christ-centered community where everyone can encounter God, be transformed by His Word,
        and empowered to live out their calling. Everyone is welcome to join us at Praise church here in Nairobi Kenya for our
        uplifting service as we all grow together closer to christ.
      </p>
    </div>


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
            '  Every day at 6:00am for morning glory. Welcome friends & Followers, to join us for our morning glory.',
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



   




<div>
<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
    className="absolute bottom-0 left-0 w-full h-24 z-10"
    style={{ transform: "rotate(180deg)" }}
  >
    <path fill="#4c1d95" d="M0,0 C 480,225 975,-180 1440,32 L1440,0 L0,0 Z" />
    <path fill="#4c1d95" d="M0,0 C 480,305 975,-180 1440,96 L1440,0 L0,0 Z" />
  </svg>
</div>

<div className="  flex flex-col bg-[#4c1d95] " >

<div className="flex text-white flex-col max-w-full gap-2 md:gap-4 px-3 md:px-[100px] py-[70px] md:py-[100px] md:flex-row">
  <div className="md:w-1/2 items-start justify-start md:text-left">
    <p className="text-3xl md:text-5xl md:pt-9 font-bold" data-aos="fade-up">
      Become a member
    </p>

    <p className="text-3xl md:text-5xl :text-2xl font-semibold" data-aos="fade-up" data-aos-delay="100">
      of Praise Church
    </p>
    <p className="text-sm mt-1 md:mt-2 md:text-lg" data-aos="fade-up" data-aos-delay="200">
     Embark on a meaningful journey with us! Join our vibrant church and be a catalyst for positive change in our community.
     Together, we can create a lasting impact and bring hope to those in need.
     <br />
     <br />

    Visit our church anytime and meet our graceful team that will onboard you to becoming a full member of our church
    </p>

    <Link
  to="/about"
  className="inline-block gradient-border mt-4 mb-4 rounded-full px-6 md:px-12 py-3 md:py-3 text-lg md:text-xl font-semibold transition-all duration-300 transform hover:scale-110"
  data-aos="fade-up"
  data-aos-delay="300"
>
<span className="transform hover:scale-110 block">  Get Started</span>
</Link>
 </div>


 <div className="block w-full  rounded-lg md:rounded-[20px] md:w-1/2 mx-auto md:mx-0"  data-aos="fade-up"
  data-aos-delay="300"> 

  <img
  src="/pics44.jpg"
  className=" rounded-lg md:rounded-[20px] transform hover:scale-105 transition-all duration-300"
 
/>

  </div>

  
</div>






<div className=" px-3 md:px-[100px] pb-[50px]">
<p className="text-3xl md:text-5xl text-white mb-[50px] md:mt-9 font-bold " data-aos="fade-up" >Worship Schedule </p>

<div className="flex flex-col items-center mb-6 justify-center">
      <div className="grid grid-cols-1 mx-auto md:grid-cols-2 gap-6 w-full">
        {[
          {
            title: "First Service",
            time: "6:30AM - 8:30AM",
            icon: <FaChurch  size={40} />,
          },
          {
            title: "Prayer Tuesday",
            time: "5:30AM - 6:45PM",
            icon: <FaPrayingHands  size={40} />,
          },
          {
            title: "Second Service",
            time: "9:00AM - 11:00AM",
            icon: <FaClock size={40} />,
          },
          {
            title: "Mid Week Thursday",
            time: "5:30AM - 6:45PM",
            icon: <FaBible  size={40} />,
          },
          {
            title: "Third Service",
            time: "11:30AM - 1:30PM",
            icon: <FaCross  size={40} />,
          },
          {
            title: "Keshas",
            time: "EVERY THIRD FRIDAY OF THE MONTH",
            icon: <FaMoon size={40} />,
          },
        ].map((item, index) => (
          <div data-aos="fade-up">
          <div
          key={index}
          className="group bg-white  text-black shadow-2xl rounded-2xl p-4 flex flex-row items-start text-left transition-all duration-500 cursor-pointer"
         
        >
          
          {/* Icon wrapper */}
          <div className="mr-4 transition-all duration-500 group-hover:bg-[#4c1d95] p-3 rounded-full">
            <div className="text-[#4c1d95] group-hover:text-white transition-all duration-500">
              {item.icon}
            </div>
          </div>

          {/* Text content */}
          <div className="flex flex-col">
            <p className="text-lg md:text-2xl font-bold  group-hover:text-[#4c1d95] transition-colors duration-500">
              {item.title}
            </p>
            <p className="text-lg md:text-xl font-medium  mt-1">
              {item.time}
            </p>
          </div>
        </div>
        </div>
        ))}
      </div>
    </div>
   

</div>
  </div>











  <div className="px-3 md:px-[100px] mt-[10px] text-[var(--softTextColor)] text-center animate-fadeIn flex flex-col items-center justify-center">

{(() => {
  const ministries = [
    {
      id: 'discipleship',
      title: 'Discipleship Classes',
      description: 'You were created to grow in Christ through fellowship with others, and one of the best ways to do that at Praise Church is by joining a discipleship group! No matter your stage of life, we want you to be part of a Christ-centered community where people come to know Jesus, grow in their faith through Bible reading, experience the joy of baptism, and walk together in spiritual growth and encouragement.',
      icon: <FaCross />,
      image: '/pics48.jpg',
    },
    {
      id: 'merigoround',
      title: 'Merigoround',
      description: 'The merigoround is special group that offers compassionate support and  finacial assistance to those in need within the church group. Whether individuals are facing illness, grief, financial struggles, or other life challenges, we want to provide encouragement through prayer, counseling, and a variety of resources. No one has to face difficult times alone.',
      icon: <FaChurch />,
      image: '/pics38.jpg',
    },
    {
      id: 'kids',
      title: 'Kids School',
      description: 'Praise Church Kids school is a vibrant ministry designed to help children learn about Gods love in a fun and engaging way. Through age-appropriate lessons, interactive activities, and exciting events, children are introduced to biblical truths, encouraged to grow in their faith, and build a foundation for a lifelong relationship with Jesus. The ministry provides a safe and welcoming environment where kids can explore, discover, and experience the joy of following Christ.',
      icon: <FaChild />,
      image: '/pics31.jpg',
    },
    {
      id: 'youth',
      title: 'Youth Fellowship',
      description: 'Our Youth Ministry is focused on guiding them through their spiritual journey during these formative years. With a mix of monthly gatherings, worship nights, and fun outings, Praise Church youth creates a space where the youth can deepen their relationship with God, form strong friendships, and discover their unique purpose. Our desire is to equip and empower the youth to have a personal relationship with God.',
      icon: <FaPeopleArrows />,
      image: '/pics51.jpg',
    },
    {
      id: 'men',
      title: "Men's Fellowship",
      description: 'Our Mens Ministry is here to help men grow in their God-given calling as a husband, son, brother, father, and leader. Our desire is for each man to be strengthened, loved, challenged, and encouraged by other men.We offer mens groups, outdoor activities, one-on-one coffees, and larger gathers for men to connect.',
      icon: <FaMale />,
      image: '/pics35.jpg',
    },
    {
      id: 'women',
      title: "Women's Fellowship",
      description: 'Our Womens Ministry provides a nurturing space for women to connect, encourage one another, and grow in their walk with Christ. By engaging in Bible studies, social gatherings, and outreach activities, women of all ages are empowered to strengthen their faith, build meaningful relationships, and serve the church and the wider community.',
      icon: <FaFemale />,
      image: '/pics33.jpg',
    },
  ];

  const activeMinistry = ministries.find((m) => m.id === selected);

  return (
    <>
      <div className="h-full max-w-full box-border">
        <h1
          className="text-2xl md:text-5xl mt-[25px] text-[var(--softTextColor)] px-2 md:mt-[75px] font-bold"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Join our church ministries
        </h1>

        <div className="flex flex-wrap gap-2 items-center justify-center md:gap-4 mt-4">
          {ministries.map(({ id, title, icon }) => {
            const isActive = selected === id;
            return (
              <button
                key={id}
                onClick={() => setSelected(id)}
                className={`mt-3 mb-3 flex items-center text-sm border md:text-lg py-2 px-2 md:px-6 md:py-3 gap-2 rounded-[10px] cursor-pointer transition-all
                  ${
                    isActive
                      ? 'bg-[#4c1d95] text-white border-[#4c1d95]'
                      : 'bg-[var(--bg2)] border-[#4c1d95] text-[var(--textColor)] hover:text-[#4c1d95] hover:border-[#4c1d95]'
                  }`}
              >
                <span className="text-lg">{icon}</span>
                <span>{title}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex  flex-col max-w-full  gap-3 md:gap-6 rounded-lg md:rounded-[20px] p-2 md:p-6 md:flex-row mt-6">
     
        <div className="md:w-3/5 text-left">
          <p className="text-xs mt-5 md:mt-9 text-[var(--softTextColor)] md:text-md" data-aos="fade-up" data-aos-delay="300">
            ABOUT US
          </p>
          <p className="text-md mt-1 md:mt-2 text-[var(--softTextColor)] md:text-2xl font-semibold">
            {activeMinistry.title}
          </p>
          <p className="text-sm text-[var(--softTextColor)] mt-1 md:mt-2 md:text-lg" data-aos="fade-up" data-aos-delay="300">
            {activeMinistry.description}
          </p>
          <a href="/ministries">
            <button className="mt-4 px-4 py-2 rounded-lg bg-[#4c1d95] text-white text-md md:text-lg hover:bg-[#3b0f75] transition">
              Learn More
            </button>
          </a>
        </div>
        <img
          src={activeMinistry.image}
          className="w-full rounded-lg md:rounded-[20px] md:w-1/2 mx-auto md:mx-0"
          data-aos="fade-up"
          data-aos-delay="200"
        />
      </div>
    </>
  );
})()}
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

export default Homepage;

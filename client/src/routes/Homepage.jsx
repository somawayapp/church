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
  <p className="text-3xl md:text-5xl md:pt-9  font-bold " data-aos="fade-up">Join US this Sunday
  </p>

  <p className="text-3xl md:text-5xl  :text-2xl font-semibold" data-aos="fade-up" data-aos-delay="100"> for un uplifting service
  </p>
  <p className="text-sm  mt-1 md:mt-2 md:text-lg" data-aos="fade-up" data-aos-delay="200">
  Join us every Sunday at 9:30a and 11:45a for our
   Atlanta Gatherings or 9:30a and 11:30a for our
   Washington DC Gatherings at passioncity.online.
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
  Legacy Hills Church is a Spirit-filled, Bible-based church in Lone Tree, Colorado.
   Founded in 2023 by Pastor Matt Washington, we exist to see people passionately devoted to God.
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
        Legacy Hills Church is a Spirit-filled, Bible-based church in Lone Tree, Colorado. Founded in 2023 by Pastor
        Matt Washington, we exist to see people passionately devoted to God.
        <br />
        <br />
        We value the presence of God. Our worship, preaching and teaching, and Children's Ministry are centered around
        each person encountering the Holy Spirit. We want to help you discover truth, find hope, and become all who God
        has created you to be.
      </p>
    </div>


    <div className="pb-[50px]">
 

  <div className="flex flex-col items-center mt-[50px] mb-6 justify-center">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-8xl">
      {[
        {
          title: "LIVE SERVICE",
          description:
            'Welcome friends & Followers, Thank You for joining us for our devotion. This week we will be focusing on "STRONG FAITH"',
          icon: <FaChurch size={24} />,
          img: "/pics46.jpg",
        },
        {
          title: "MORNING GLORY",
          description:
            'Welcome friends & Followers, Thank You for joining us for our devotion. This week we will be focusing on "The Power Of the Full Gospel"',
          icon: <FaClock size={24} />,
          img: "/pics43.jpg",
        },
        {
          title: "DEVOTION",
          description:
            'Welcome friends & Followers, Thank You for joining us for our devotion. This week we will be focusing on "WALKING IN THE LIGHT"',
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
      of deliverance church
    </p>
    <p className="text-sm mt-1 md:mt-2 md:text-lg" data-aos="fade-up" data-aos-delay="200">
      Join us every Sunday at 9:30a and 11:45a for our
      Atlanta Gatherings or 9:30a and 11:30a for our
      Washington DC Gatherings at passioncity.online.
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
      description: 'Join our enriching discipleship classes to grow spiritually and strengthen your walk with Christ.',
      icon: <FaCross />,
      image: '/pics48.jpg',
    },
    {
      id: 'merigoround',
      title: 'Merigoround',
      description: 'Connect, give, and grow together through our rotating support system rooted in fellowship.',
      icon: <FaChurch />,
      image: '/pics38.jpg',
    },
    {
      id: 'kids',
      title: 'Kids School',
      description: 'Empowering our young ones through fun, faith-based learning and activities.',
      icon: <FaChild />,
      image: '/pics31.jpg',
    },
    {
      id: 'youth',
      title: 'Youth Fellowship',
      description: 'A vibrant space for youth to worship, bond, and grow in faith together.',
      icon: <FaPeopleArrows />,
      image: '/pics51.jpg',
    },
    {
      id: 'men',
      title: "Men's Fellowship",
      description: 'Build character and community among men walking in faith and purpose.',
      icon: <FaMale />,
      image: '/pics35.jpg',
    },
    {
      id: 'women',
      title: "Women's Fellowship",
      description: 'Women supporting women in Christ through love, prayer, and sisterhood.',
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
                className={`mt-3 mb-3 flex items-center text-md border md:text-lg py-2 px-2 md:px-6 md:py-3 gap-2 rounded-[10px] cursor-pointer transition-all
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





<div className="w-full mt-[50px]  px-3  md:px-[100px] border-t  border-t-[var(--softBg)] flex flex-col md:flex-row gap-6">
  {/* Left: Map - 2/3 Width */}
 

  {/* Right: Contact Info - 1/3 Width */}
  <div className="md:w-1/2 flex  mt-[50px] flex-col justify-between gap-6" data-aos="fade-left" data-aos-delay="200">
    {/* Address Box */}
   
      <div className="mr-4 transition-all duration-500 bg-[#4c1d95] hoover:bg-[var(--bg)] border border-[#4c1d95]  p-3 rounded-full">
      <div className="text-white e transition-all duration-500">
        <FaMapMarkerAlt size={30} />
      </div>
      <h3 className="text-lg font-semibold text-[var(--softTextColor)]">Address</h3>
      <p className="text-md text-[var(--softTextColor)]">
        123 Faith Avenue, Grace City, Heaven State, 45678
      </p>
    </div>

    {/* Call and Email Side by Side */}
    <div className="flex gap-4">
  {/* Call Box */}
  <div className="w-1/2 border border-[#4c1d95] rounded-lg p-9 flex flex-col items-center text-center space-y-2 group">
  <div className="mr-4 transition-all duration-500 bg-[#4c1d95] hoover:bg-[var(--bg)] border border-[#4c1d95]  p-3 rounded-full">
  <div className="text-white e transition-all duration-500">
        <FaPhoneAlt size={24} />
      </div>
    </div>
    <h3 className="text-md font-semibold text-[var(--softTextColor)]">Call Us</h3>
    <p className="text-sm text-[var(--softTextColor)]">+1 (234) 567-8900</p>
  </div>

  {/* Email Box */}
  <div className="w-1/2 border border-[#4c1d95] rounded-lg p-9 flex flex-col items-center text-center space-y-2 group">
    <div className="mr-4 transition-all duration-500 bg-[#4c1d95] hoover:bg-[var(--bg)] border border-[#4c1d95]  p-3 rounded-full">
      <div className="text-white e transition-all duration-500">
        <FaEnvelope size={24} />
      </div>
    </div>
    <h3 className="text-md font-semibold text-[var(--softTextColor)]">Email</h3>
    <p className="text-sm text-[var(--softTextColor)]">contact@church.org</p>
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



      <Footer />


    
    </div>
    </div>

  );
};

export default Homepage;

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













   


      <Footer />


    
    </div>
    </div>

  );
};

export default Homepage;

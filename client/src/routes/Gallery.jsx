
import { useEffect, useState } from "react";
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
    window.scrollTo(0, 0);
  }, []);

  const images = Array.from({ length: 48 }, (_, i) => ({
    src: `/pics${i + 1}.jpg`,
    description: [
      "Worship team leading Sunday service with joy.",
      "Congregation in heartfelt prayer during revival night.",
      "Youth ministry bonding after Bible study.",
      "Beautiful shot of the church interior during sunset.",
      "Pastor delivering a powerful sermon on faith.",
      "Children's ministry sharing the message of love.",
      "Volunteers serving during community outreach day.",
      "Baptism ceremony — celebrating new life in Christ.",
      "Choir performance during Christmas celebration.",
      "Women’s fellowship group gathering for prayer.",
      "Worship team leading Sunday service with joy.",
      "Congregation in heartfelt prayer during revival night.",
      "Youth ministry bonding after Bible study.",
      "Beautiful shot of the church interior during sunset.",
      "Pastor delivering a powerful sermon on faith.",
      "Children's ministry sharing the message of love.",
      "Volunteers serving during community outreach day.",
      "Baptism ceremony — celebrating new life in Christ.",
      "Choir performance during Christmas celebration.",
      "Women’s fellowship group gathering for prayer.",  "Worship team leading Sunday service with joy.",
      "Congregation in heartfelt prayer during revival night.",
      "Youth ministry bonding after Bible study.",
      "Beautiful shot of the church interior during sunset.",
      "Pastor delivering a powerful sermon on faith.",
      "Children's ministry sharing the message of love.",
      "Volunteers serving during community outreach day.",
      "Baptism ceremony — celebrating new life in Christ.",
      "Choir performance during Christmas celebration.",
      "Women’s fellowship group gathering for prayer.",  "Worship team leading Sunday service with joy.",
      "Congregation in heartfelt prayer during revival night.",
      "Youth ministry bonding after Bible study.",
      "Beautiful shot of the church interior during sunset.",
      "Pastor delivering a powerful sermon on faith.",
      "Children's ministry sharing the message of love.",
      "Volunteers serving during community outreach day.",
      "Baptism ceremony — celebrating new life in Christ.",
      "Choir performance during Christmas celebration.",
      "Women’s fellowship group gathering for prayer.",  "Worship team leading Sunday service with joy.",
      "Congregation in heartfelt prayer during revival night.",
      "Youth ministry bonding after Bible study.",
      "Beautiful shot of the church interior during sunset.",
      "Pastor delivering a powerful sermon on faith.",
      "Children's ministry sharing the message of love.",
      "Volunteers serving during community outreach day.",
      "Baptism ceremony — celebrating new life in Christ.",
      "Choir performance during Christmas celebration.",
      "Women’s fellowship group gathering for prayer.",
    ][i] || `Image ${i + 1} from the Praise Church gallery.`,
  }));

  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <Helmet>
        <title>Gallery - Praise Church.</title>
        <meta name="description" content="Praise Church is a welcoming community where faith comes alive..." />
        <meta name="keywords" content="Praise Church, worship, Bible study, community..." />
        <meta property="og:title" content="Praise Church - A Home for Worship & Faith" />
        <meta property="og:description" content="Join Praise Church for Christ-centered worship, sermons, and community..." />
        <meta property="og:image" content="/images/praisechurch-og.jpg" />
        <meta property="og:url" content="https://praisechurch.org" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Praise Church - Worship, Grow, Connect" />
        <meta name="twitter:description" content="Experience faith, fellowship, and spiritual growth..." />
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
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />

      <div
        className="bg-cover bg-center h-[60vh] w-full flex text-white overflow-y-auto"
        style={{ backgroundImage: "url('/pics38.jpg')" }}
      >
        <div className="flex flex-col p-3 lg:flex-row gap-[100px]">
          <div className="max-w-[500px] flex flex-col mt-[50px] md:mt-[20px] gap-1 md:gap-4 rounded-md ml-[3px] md:ml-[100px]">
            <h1 className="text-4xl mt-[100px] lg:text-6xl font-bold text-white">
              Gallery
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

      <div className="mb-9 flex flex-col gap-0">




      <div className="overflow-hidden px-3 md:px-[100px]  mt-9 md:mt-[50px] w-full">
  <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 flex items-center justify-center ">
             {images.map((img, index) => {
              const isSquare = index % 2 === 0;
              return (
        <div
          key={index}
          className={`flex-shrink-0 rounded-lg overflow-hidden relative ${
            isSquare ? "aspect-[3/4] w-24 md:w-60" : "aspect-[3/4] w-24 md:w-60"
          }`}   onClick={() => openModal(img)}

        >
          <div
            className={`w-full h-full ${
              isSquare ? "" : "flex items-center justify-center"
            }`}
          >
            <img
              src={img.src}
              alt={`Image ${index + 1}`}
              className={`object-cover rounded-lg transform hover:scale-105 transition-all duration-300 ${
                isSquare ? "w-full h-full" : "w-24 h-24 md:w-60 md:h-60"
              }`}
            />
          </div>
        </div>
      );
    })}
  </div>
</div>





        {/* MODAL */}
        {isModalOpen && selectedImage && (
          <div className="fixed inset-0 bg-black  bg-opacity-70 z-50 flex items-center justify-center p-4"onClick={closeModal}>
            <div className="bg-[var(--bg)] rounded-lg p-6 max-w-[90vw] max-h-[90vh] overflow-auto shadow-xl">
              <button
                onClick={closeModal}
                className="ml-auto mb-4 text-[var(--softTextColor)] hover:text-extrabold transform hover:scale-105 transition-all duration-300 font-semibold"
              >
                ✖ Close
              </button>
              <img
                src={selectedImage.src}
                alt="Selected"
                className="w-full max-h-[60vh] object-contain rounded-md mb-4"
              />
              <p className="text-[var(--softTextColor)] text-lg">{selectedImage.description}</p>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
};

export default Gallery;
 

  


    


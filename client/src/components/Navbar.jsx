import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import "../index.css";
import ThemeToggler from "./Theme";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOverlayClick = () => setOpen(false);

  // Disable body scroll when the menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup in case of unmount
    };
  }, [open]);





  return (


    
     // Modify or remove z-index here
     <div style={{ zIndex: 100004 }}  className="relative w-full h-[50px] md:h-[70px]  px-3 md:px-[100px] gap-4 flex items-center text-[var(--TextColor)]
      sticky top-0 justify-between bg-[var(--bg)] border-b border-b-[var(--softBg4)] ">

<div className="flex items-center justify-between gap-12">
  <Link to="/home" className="flex items-center text-xl font-bold md:text-3xl">
    <img src="/logo3.png" className=" h-[20px]  md:h-[40px]" />
    <span className="text-[#4c1d95] text-lg  md:text-xl">CHURCH</span>
  </Link>

</div>


     

     <div className="flex items-center justify-between flex-row gap-2 md:gap-9">
     
         
  <div className="hidden md:flex flex-1 justify-center space-x-10">
    <Link className="hover:text-[#0053bf] font-bold" to="/" onClick={() => setOpen(false)}>Home</Link>
    <Link className="hover:text-[#0053bf] font-bold" to="/ministries" onClick={() => setOpen(false)}>Ministries</Link>
    <Link className="hover:text-[#0053bf] font-bold" to="/about" onClick={() => setOpen(false)}>About Us</Link>
    <Link className="hover:text-[#0053bf] font-bold" to="/services" onClick={() => setOpen(false)}>Services</Link>
    <Link className="hover:text-[#0053bf] font-bold" to="/give" onClick={() => setOpen(false)}>Give</Link>
    <Link className="hover:text-[#0053bf] font-bold" to="/gallery" onClick={() => setOpen(false)}>Gallery</Link>


  </div>

        
       
          
        </div>

    


   

     
      </div>
  );
};

export default Navbar;
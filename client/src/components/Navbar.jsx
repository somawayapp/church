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
  <Link to="/" className="flex items-center text-xl font-bold md:text-3xl">
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

        
        {/* MOBILE BUTTON */}
        <div
          className="cursor-pointer text-[var(--textColor)] text-sm"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="flex flex-col gap-1 md:gap-[6px]">
            <div
              className={`h-[1px] md:h-[2px] rounded-md w-5 md:w-9 bg-[var(--textColor)] origin-left transition-all ease-in-out ${
                open && "rotate-45"
              }`}
            ></div>
            <div
              className={`h-[1px] md:h-[2px] rounded-md w-5 md:w-9 bg-[var(--textColor)] origin-left  transition-all ease-in-out ${
                open && "opacity-0"
              }`}
            ></div>
            <div
              className={`h-[1px] md:h-[2px] rounded-md w-5 md:w-9 bg-[var(--textColor)] origin-left transition-all ease-in-out ${
                open && "-rotate-45"
              }`}
            ></div>
          </div>
        </div>

          
        </div>

        {/* DARK OVERLAY */}
        {open && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={handleOverlayClick}
          ></div>
        )}

        {/* MOBILE LINK LIST */}
        <div
          className={`w-[80%] md:w-[20%]  overflow-y-auto h-cover bg-[var(--bg)] flex flex-col p-5 items-left justify-left  text-[var(--TextColor)] 
            gap-8 font-sm text-md fixed top-0 right-0  bottom-0 overflow-x-hidden transition-transform ease-in-out z-50 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}   style={{ maxHeight: "100vh" }}

        >
<div>

</div>

          <button
            className="absolute top-2  right-8 text-md text-[var(--TextColor)]"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>


<div className="flex flex-row">





        <div>

           <Link  to="/" className="block py-2 text-[var(--TextColor)] font-bold  hover:text-[#0062e3]  p-2 rounded-xl"
             onClick={() => setOpen(false)} > Home  </Link>

           <div >

            <Link to="/ministries" className="block py-2 text-[var(--TextColor)] font-bold   hover:text-[#0062e3]  p-2 rounded-xl"
             onClick={() => setOpen(false)} > Ministries</Link>

          <Link to="/about" className="block py-2 text-[var(--TextColor)] font-bold  hover:text-[#0062e3]  p-2 rounded-xl"
           onClick={() => setOpen(false)}  > About Us </Link>

         <Link to="/services" className="block py-2 text-[var(--TextColor)] font-bold   hover:text-[#0062e3]  p-2 rounded-xl"
             onClick={() => setOpen(false)} > Services</Link>

          <Link to="/give" className="block py-2 text-[var(--TextColor)] font-bold  hover:text-[#0062e3]  p-2 rounded-xl"
           onClick={() => setOpen(false)}  >Give </Link>

           
          <Link to="/gallery" className="block py-2 text-[var(--TextColor)] font-bold  hover:text-[#0062e3]  p-2 rounded-xl"
           onClick={() => setOpen(false)}  >Gallery </Link>
            
  
         <ThemeToggler />

       
        </div>
        
        </div>



        </div>





       

          <SignedOut>
          <Link
            to="/login"
            className="w-full items-center  md:ml-2 mr-4 text-center  text-md md:text-xl sm:w-auto px-4 md:px-6  py-3 md:py-3
             bg-[#0062e3]  text-white font-semibold 
            rounded-md hover:bg-[#0053bf]   "
          >
          Login     
               </Link>
          </SignedOut> 

        </div>


   

     
      </div>
  );
};

export default Navbar;
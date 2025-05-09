import React from 'react';
import ThemeToggler from "./Theme";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" mt-5 px-3 md:px-[100px]  text-[var(--softTextColor)] md:mt-[50px] font-medium text-sm border-t border-[var(--softBg)]">
      <div className="container mx-auto grid pt-5  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Home Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Church</h4>
          <nav>
            <ul className="space-y-2">
              <li><a href="/" className="text-[var(--softTextColor)] hover:text-[var(--softTextColor)]">Home</a></li>
              <li><a href="/about" className="text-[var(--softTextColor)] hover:text-[var(--softTextColor)]">About Praise Church</a></li>
              <li><a href="/give" className="text-[var(--softTextColor)] hover:text-[var(--softTextColor)]">Gift Praise Church</a></li>
            </ul>
          </nav>
        </div>

        {/* Company Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Ministries</h4>
          <nav>
            <ul className="space-y-2">
              <li><a href="/ministries" className="text-[var(--softTextColor)] hover:text-[var(--softTextColor)]">Kids ministry</a></li>
              <li><a href="/ministries" className="text-[var(--softTextColor)] hover:text-[var(--softTextColor)]">Youth fellowship</a></li>
              <li><a href="/ministries" className="text-[var(--softTextColor)] hover:text-[var(--softTextColor)]">Women's felowship </a></li>
              <li><a href="/ministries" className="text-[var(--softTextColor)] hover:text-[var(--softTextColor)]">Men's fellowship </a></li>
              <li><a href="/ministries" className="text-[var(--softTextColor)] hover:text-[var(--softTextColor)]">Discipleship group </a></li>
            </ul>
          </nav>
        </div>

        {/* Resources Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Give</h4>
          <nav>
            <ul className="space-y-2">
              <li><a href="/give" className="text-[var(--softTextColor)] hover:text-[var(--softTextColor)]">Offering</a></li>
              <li><a href="/give" className="text-[var(--softTextColor)] hover:text-[var(--softTextColor)]">Tithes</a></li>
              <li><a href="/give" className="text-[var(--softTextColor)] hover:text-[var(--softTextColor)]">Donations</a></li>
              <li><a href="/give" className="text-[var(--softTextColor)] hover:text-[var(--softTextColor)]">Fundraiser</a></li>
            </ul>
          </nav>
        </div>

        {/* Legal Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Gallery</h4>
          <nav>
            <ul className="space-y-2">
              <li><a href="/about" className="text-[var(--softTextColor)] hover:text-[var(--softTextColor)]">All photos</a></li>
              <li><a href="/about" className="text-[var(--softTextColor)] hover:text-[var(--softTextColor)]">Group photos</a></li>
             </ul>
          </nav>
        </div>
      </div>

      {/* Bottom Info Section */}
      <div className="mt-8 text-center border-t border-[var(--softBg)]  mb-[100px] md:mb-0  pt-4">
        <p className="text-[var(--softTextColor)]">
          © {currentYear},        123 Valley Avenue, Nairobi City, Kenya.

       
          <a href="mailto:support@soma.ia.com" className="text-[var(--softTextColor)] pl-1 hover:text-[var(--softTextColor)]">
            support: praisechurch@gmail.com
          </a>

        </p>
      </div>
    </footer>
  );
};

export default Footer;

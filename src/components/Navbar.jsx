import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const NavBar = () => {
  const [selectedTab, setSelectedTab] = useState("/"); // Tracks selected tab
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Tracks if the mobile menu is open

  const handleLinkClick = (path) => {
    setSelectedTab(path);
    setIsMenuOpen(false); // Close the mobile menu when a link is clicked
  };

  const menuItems = useMemo(
    () => [
      { path: "/", label: "HOME", clickHandler: handleLinkClick },

      // "PROGRAMS" as a simple list item (no dropdown)
      { path: "/programs", label: "PROGRAMS", clickHandler: handleLinkClick },

      // "ABOUT" as a simple list item (no dropdown)
      { path: "/about", label: "ABOUT", clickHandler: handleLinkClick },
      
      { path: "/gallery", label: "GALLERY", clickHandler: handleLinkClick },
      { path: "/contact", label: "CONTACT", clickHandler: handleLinkClick },
    ],
    []
  );

  return (
    <div className="bg-white">
      {/* Contact Info Section */}
      <div className="bg-white text-black py-4 px-8 flex justify-between items-center z-40">
        <div className="flex space-x-6">
          <div className="flex items-center">
            <FaPhoneAlt className="text-lg" />
            <span className="ml-2 text-sm">+123 456 789</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-lg" />
            <span className="ml-2 text-sm">contact@example.com</span>
          </div>
        </div>

        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-[#3b5998] hover:text-white transition-colors"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[#fdb71d] transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-[#962fbf] hover:text-white transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-[#0077B5] hover:text-white transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Sticky Navbar */}
      <nav className="bg-white text-black fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto lg:flex items-center justify-between relative px-4">
          <Link to="/" onClick={() => handleLinkClick("/")}>
            <img
              src="logo.png"
              className="ml-2 md:m-0 h-20 md:h-22 flex items-center"
              alt="Logo"
            />
          </Link>

          {/* Mobile Menu Button */}
          <div className="absolute top-[30%] right-5 md:hidden border border-[#28317e] rounded flex items-center p-2 mr-2">
            <button
              className="mobile-menu-button z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <FaTimes className="text-2xl text-[#fdb71d]" />
              ) : (
                <FaBars className="text-xl text-[#fdb71d]" />
              )}
            </button>
          </div>

          {/* Desktop/Tablet Menu */}
          <ul
            className={`text-black md:flex font-sans font-semibold md:text ${
              isMenuOpen
                ? "block text-white absolute top-0 md:top-[25%] w-full h-auto py-4 bg-[#040707] right-0 p-5 transition-all ease-in-out duration-300 z-30"
                : "hidden"
            }`}
          >
            {menuItems.map((item, index) => (
              <li key={index} className="my-5 p-3 border-b border-[#28317e] md:border-none">
                <Link
                  to={item.path}
                  className={`hover:text-[#fdb71d] transition-all ease-in-out ${
                    selectedTab === item.path && "text-[#fdb71d]"
                  }`}
                  onClick={() => item.clickHandler(item.path)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

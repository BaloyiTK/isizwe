import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-800 to-gray-900 text-white pt-16 shadow-lg">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Logo and Description */}
        <div className="flex flex-col items-start">
          <img className="h-14 mb-4" src="../../public/logo3.png" alt="Isizwe Siyakhanya Logo" />
          <p className="text-sm mb-6 text-gray-300">
            Empowering young male learners through ICT and psycho-social development to become future leaders.
          </p>

        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start">
          <h4 className="text-xl font-semibold mb-4 text-gray-100">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/home" className="hover:text-yellow-400 transition-colors duration-300">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-400 transition-colors duration-300">About Us</a></li>
            <li><a href="/programs" className="hover:text-yellow-400 transition-colors duration-300">Our Programs</a></li>
            <li><a href="/team" className="hover:text-yellow-400 transition-colors duration-300">Our Team</a></li>
            <li><a href="/gallery" className="hover:text-yellow-400 transition-colors duration-300">Gallery</a></li>
            <li><a href="/contact" className="hover:text-yellow-400 transition-colors duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-start">
          <h4 className="text-xl font-semibold mb-4 text-gray-100">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 p-4 rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-110">
              <FaFacebook className="text-white text-xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-blue-400 p-4 rounded-full hover:bg-blue-500 transition duration-300 transform hover:scale-110">
              <FaTwitter className="text-white text-xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-pink-600 p-4 rounded-full hover:bg-pink-700 transition duration-300 transform hover:scale-110">
              <FaInstagram className="text-white text-xl" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-blue-700 p-4 rounded-full hover:bg-blue-800 transition duration-300 transform hover:scale-110">
              <FaLinkedin className="text-white text-xl" />
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-start">
          <h4 className="text-xl font-semibold mb-4 text-gray-100">Get In Touch</h4>
          <p className="text-sm mb-2 text-gray-300">
            Email: <a href="mailto:info@isizwe.org" className="text-yellow-400 hover:text-yellow-500">info@isizwe.org</a>
          </p>
          <p className="text-sm mb-2 text-gray-300">
            Phone: <a href="tel:+27123456789" className="text-yellow-400 hover:text-yellow-500">+27 12 345 6789</a>
          </p>
          <p className="text-sm text-gray-300">
            Address: 1234 Example Street, Pretoria, South Africa
          </p>
        </div>

      </div>

      {/* Bottom Footer (Legal Links) */}
      <div className="bg-gray-700 text-sm py-4 text-center text-gray-400">
        <p>&copy; 2024 Isizwe Siyakhanya. All rights reserved.</p>
        <div className="space-x-4 mt-2">
          <a href="/privacy-policy" className="hover:text-yellow-400 transition-colors duration-300">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-yellow-400 transition-colors duration-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

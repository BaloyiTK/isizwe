import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Importing icons from react-icons
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  const settings = {
    dots: true, // Enables the dots navigation at the bottom
    infinite: true, // Allows the carousel to loop infinitely
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 1, // Default: only one slide is shown at a time
    slidesToScroll: 1, // One slide moves per scroll
    autoplay: true, // Enables autoplay for the carousel
    autoplaySpeed: 3000, // Set the speed of autoplay
    arrows: true, // Ensure the arrows (Next/Prev) buttons are visible
    nextArrow: (
      <div 
        className="slick-next absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full cursor-pointer z-10 transition-all hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        aria-label="Next Slide"
      >
        <FaChevronRight size={30} className="text-white" />
      </div>
    ),
    prevArrow: (
      <div 
        className="slick-prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full cursor-pointer z-10 transition-all hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        aria-label="Previous Slide"
      >
        <FaChevronLeft size={30} className="text-white" />
      </div>
    ),
    // Responsive settings
    responsive: [
      {
        breakpoint: 1024, // For medium-sized screens (tablets)
        settings: {
          slidesToShow: 2, // Show 2 slides at a time
        },
      },
      {
        breakpoint: 768, // For small screens (mobile devices)
        settings: {
          slidesToShow: 1, // Show 1 slide at a time
        },
      },
      {
        breakpoint: 480, // For very small screens
        settings: {
          slidesToShow: 1, // Show 1 slide at a time
          arrows: false,   // Hide arrows for very small screens
        },
      },
    ],
  };

  return (
    <div className="gallery-container w-full relative overflow-hidden p-5">
      <Slider {...settings}>
        <div className="relative">
          <div className="image-container relative w-full">
            <img 
              className="w-full h-auto object-cover rounded-lg shadow-xl"
              src="/gal1.png"
              alt="A group of students in a classroom"
              loading="lazy" // Lazy loading for better performance
            />
          </div>
        </div>

        <div className="relative">
          <div className="image-container relative w-full">
            <img 
              className="w-full h-auto object-cover rounded-lg shadow-xl transition-all transform hover:scale-105"
              src="boys2.png"
              alt="A university student reading"
              loading="lazy"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Gallery;

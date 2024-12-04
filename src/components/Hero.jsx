import { useState, useEffect } from "react";

const Hero = () => {
  // Define the programs array inside the Hero component
  const programs = [
    {
      title: "Character Development and Emotional Wellness",
      description:
        "We develop comprehensive educational programs focused on building character, nurturing emotional and psychological wellness, and...",
      imageUrl: "../../public/sling2.jpg",
    },
    {
      title: "ICT Skills, Coding & Robotics",
      description:
        "We provide learners with crucial Information, Communication, and Technology skills, teach them coding and robotics...",
      imageUrl: "../../public/image_4.webp",
    },
  ];

  const [currentProgramIndex, setCurrentProgramIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProgramIndex((prevIndex) => (prevIndex + 1) % programs.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [programs.length]);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between text-gray-900 py-3 px-6 md:px-12 w-full">
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#08784a]">
          Empowering Male Learners for a Bright Future
        </h1>
        <p className="text-lg mb-6">
          We are dedicated to nurturing the leaders of tomorrow by providing
          critical skills and support to male learners across South Africa.
        </p>
        <button className="bg-[#28317e] hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-full shadow-md transition ease-in-out duration-300">
          Partner With Us
        </button>
      </div>

      {/* Program Slide */}
      <div className="w-full md:w-1/2 relative overflow-hidden mt-6 md:mt-0">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentProgramIndex * 100}%)`,
          }}
          aria-live="polite"
        >
          {programs.map((program, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex flex-col items-center justify-center"
              style={{
                opacity: currentProgramIndex === index ? 1 : 0,
              }}
            >
              <img
                src={program.imageUrl}
                alt={program.title}
                className="w-full h-50 object-cover rounded mb-4"
                loading="lazy" // Lazy load image
              />
              <h3 className="text-xl font-semibold mb-4">{program.title}</h3>
              <p>{program.description}</p>
              <button className="bg-[#28317e] hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-full shadow-md transition ease-in-out duration-300">
                Learn More..
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

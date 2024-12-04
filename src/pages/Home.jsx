// src/pages/Home.js
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles
import Hero from "../components/Hero";
import Impact from "../components/Impact";


const Home = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,  // Duration of the animation in ms
      once: true,      // Run animation only once
    });
  }, []);

  // Testimonial data
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, Tech Innovations",
      quote: "This program changed my life! I now have the skills I need to succeed.",
    },
    {
      name: "Jane Smith",
      role: "Marketing Director, Global Enterprises",
      quote: "Amazing resources and top-notch mentors who helped me grow professionally.",
    },
    {
      name: "Sam Wilson",
      role: "Founder, Innovate Tech",
      quote: "The mentorship and guidance I received were invaluable in scaling my business.",
    },
    {
      name: "Emma Davis",
      role: "Product Manager, Future Tech",
      quote: "I gained confidence in my career path, and I am now pursuing opportunities I never thought possible.",
    },
  ];

  // State to handle the active testimonial index
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  // Function to handle the next/previous testimonial
  const handleTestimonialChange = (direction) => {
    setActiveTestimonialIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
      if (newIndex < 0) newIndex = testimonials.length - 1;
      if (newIndex >= testimonials.length) newIndex = 0;
      return newIndex;
    });
  };

  // Auto-slide the testimonial every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleTestimonialChange(1);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className="rounded-lg p-6 w-full">
      {/* Hero Section */}
      <Hero />

      {/* What We Offer Section */}
      <section className="py-20 text-center w-full bg-white" data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-3xl  text-[#08784a] font-semibold mb-8">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
          <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-semibold mb-4">
              Character Development & Wellness
            </h3>
            <p>
              Our programs in this phase focus on building emotional wellness,
              fostering positive character traits, and preparing male learners
              for leadership roles.
            </p>
            <button
              aria-label="Partner With Us for Character Development & Wellness Program"
              className="bg-[#28317e] hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-full shadow-md transition-all duration-300"
            >
              Partner With Us
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-semibold mb-4">
              ICT Skills & Digital Economy
            </h3>
            <p>
              In this phase, we equip learners with critical ICT skills,
              including coding and robotics, to prepare them for the digital
              world and enhance their employability.
            </p>
            <button
              aria-label="Partner With Us for ICT Skills & Digital Economy Program"
              className="bg-[#28317e] hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-full shadow-md transition-all duration-300"
            >
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* Our Impact Section - Imported Component */}
      
      <Impact />

      {/* Additional sections */}

      
      {/* Testimonials Section */}
      <section className="py-20 text-center w-full bg-white" data-aos="fade-up" data-aos-delay="600">
        <h2 className="text-3xl text-[#08784a] font-semibold mb-8">Testimonials</h2>
        <div className="relative">
          <div className="max-w-xs text-center mx-auto" data-aos="fade-up" data-aos-delay="700">
            <p className="mb-4">{testimonials[activeTestimonialIndex].quote}</p>
            <p className="font-semibold">{testimonials[activeTestimonialIndex].name}</p>
            <p className="text-sm">{testimonials[activeTestimonialIndex].role}</p>
          </div>

          {/* Navigation buttons for the carousel */}
          <button
            onClick={() => handleTestimonialChange(-1)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
          >
            &lt;
          </button>
          <button
            onClick={() => handleTestimonialChange(1)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
          >
            &gt;
          </button>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 text-center w-full bg-white" data-aos="fade-up" data-aos-delay="800">
        <h2 className="text-3xl text-[#08784a] font-semibold mb-6">Ready to Make an Impact?</h2>
        <p className="mb-8">Join our programs today and start building a better tomorrow.</p>
        <button
          aria-label="Get Started Now"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-full shadow-md transition-all duration-300"
        >
          Get Started
        </button>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-20 text-center w-full bg-white" data-aos="fade-up" data-aos-delay="900">
        <h2 className="text-3xl font-semibold mb-6">Stay Updated</h2>
        <p className="mb-8">Sign up for our newsletter to receive the latest updates and news about our programs.</p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-full border border-gray-300 text-black"
          />
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-r-full">
            Subscribe
          </button>
        </div>
      </section>

    </div>
  );
};

export default Home;

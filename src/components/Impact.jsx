// src/components/ImpactStats.js
import { useEffect, useState } from "react";

const Impact = () => {
  const [learners, setLearners] = useState(0);
  const [partnerships, setPartnerships] = useState(0);
  const [graduationRate, setGraduationRate] = useState(0);

  // Function to animate counters
  const animateCounter = (target, setCounter) => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < target) {
        count += Math.ceil(target / 100); // Increment the count
        setCounter(count);
      } else {
        clearInterval(interval); // Stop once target is reached
      }
    }, 1);
  };

  // Trigger counter animation when the section is in view
  useEffect(() => {
    const impactSection = document.getElementById("impact-section");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounter(300, setLearners);
          animateCounter(50, setPartnerships);
          animateCounter(100, setGraduationRate);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    if (impactSection) {
      observer.observe(impactSection);
    }

    return () => {
      if (impactSection) {
        observer.unobserve(impactSection);
      }
    };
  }, []);

  return (
    <section id="impact-section" className="py-20 text-center w-full bg-white" data-aos="fade-up" data-aos-delay="400">
      <h2 className="text-3xl text-[#08784a] font-semibold mb-8">Our Impact</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">{learners}+</h3>
          <p>Learners Impacted</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">{partnerships}+</h3>
          <p>Partnerships Built</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">{graduationRate}%</h3>
          <p>Graduation Success Rate</p>
        </div>
      </div>
    </section>
  );
};

export default Impact;

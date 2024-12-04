const programs = [
  {
    title: "Character Development and Emotional Wellness",
    description:
      "We develop comprehensive educational programs focused on building character, nurturing emotional and psychological wellness, and providing a positive outlook for the future. These programs are designed to empower male learners to become the ideal men and leaders of tomorrow.",
    imageUrl:
      "https://zxcvbnmikelblog.wordpress.com/wp-content/uploads/2017/01/mental-health.png",
  },
  {
    title: "ICT Skills, Coding & Robotics",
    description:
      "We provide learners with crucial Information, Communication, and Technology skills, teach them coding and robotics, and prepare them for the digital economy. This phase is vital for enhancing employability and igniting entrepreneurial sparks in young minds.",
    imageUrl:
      "https://cdn1.expresscomputer.in/wp-content/uploads/2023/06/27150812/EC_digital_tablet_screen_futuristic_technology_750.jpg",
  }]
const Programs = () => {
  return (
    <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-20">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold text-blue-600">Our Empowering Programs</h1>
        <p className="mt-4 text-lg text-gray-600">
          Helping young men become leaders with skills in emotional wellness, technology, and entrepreneurship.
        </p>
      </header>

      <section className="flex flex-wrap justify-center gap-16">
        {/* Phase 1 Card */}
        <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all hover:scale-105 w-full sm:w-96">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Phase 1: Holistic Development for Future Leaders</h2>
          <p className="text-gray-700 mb-6">
            Our focus is on emotional wellness, leadership, and nurturing a strong sense of character to shape well-rounded, empathetic young men.
          </p>
          <ul className="space-y-4 text-gray-600">
            <li><strong>Character Development:</strong> Building resilience, integrity, and leadership skills.</li>
            <li><strong>Emotional Wellness:</strong> Promoting self-awareness, mindfulness, and mental health.</li>
            <li><strong>Psychological Wellness:</strong> Equipping students with coping strategies for life’s challenges.</li>
            <li><strong>Vision for the Future:</strong> Helping learners set goals and create actionable plans for success.</li>
          </ul>
        
        </div>

        {/* Phase 2 Card */}
        <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all hover:scale-105 w-full sm:w-96">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Phase 2: Preparing for the Digital Economy</h2>
          <p className="text-gray-700 mb-6">
            Equipping learners with coding, robotics, and ICT skills to thrive in the fast-paced digital world and foster entrepreneurial thinking.
          </p>
          <ul className="space-y-4 text-gray-600">
            <li><strong>Coding & Robotics:</strong> Hands-on experience in coding and building robotics projects.</li>
            <li><strong>ICT Training:</strong> Teaching essential digital skills for the modern workplace.</li>
            <li><strong>Entrepreneurship:</strong> Fostering innovation and entrepreneurial mindset through tech-driven ideas.</li>
            <li><strong>Workplace Readiness:</strong> Preparing students for the future workforce with modern skills and work ethics.</li>
          </ul>
       
        </div>
      </section>

      {/* Impact Section */}
      <section className="mt-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">The Impact of Our Programs</h2>
        <p className="text-lg text-gray-600 mb-12">Our work has a lasting effect on students, their communities, and the economy. Here’s how we make a difference:</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Impact Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold text-blue-600">500+ Students Trained</h3>
            <p className="mt-4 text-gray-600">Equipping young men with the skills they need to excel in life and work.</p>
          </div>

          {/* Impact Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold text-blue-600">10+ Successful Startups</h3>
            <p className="mt-4 text-gray-600">Our learners are inspired to create their own businesses and innovate solutions.</p>
          </div>

          {/* Impact Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold text-blue-600">100% of Participants Report Increased Confidence</h3>
            <p className="mt-4 text-gray-600">From emotional wellness to digital skills, our program helps learners grow in all areas of life.</p>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="mt-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Get Involved</h2>
        <p className="text-lg text-gray-600 mb-8">Partner with us to bring these life-changing programs to more learners and help build the leaders of tomorrow.</p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Become a Partner
        </button>
      </section>
    </div>
  );
};

export default Programs;

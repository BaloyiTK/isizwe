// src/components/Team.js
const Team = () => {
    return (
      <section className="text-center mb-20">
        <h2 className="text-3xl font-semibold text-green-700">Meet Our Team</h2>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Our team is dedicated to empowering the next generation. With expertise in ICT, education, and learner development, we collaborate to make a lasting impact.
        </p>
  
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Team Member 1 */}
          <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
            <img
              src="/thuli.png"
              alt="Thuli Dlamini"
              className="w-32 h-32 mx-auto rounded-full mb-6 border-4 border-green-600"
            />
            <h3 className="text-xl font-semibold text-green-700">Thuli Dlamini</h3>
            <p className="text-green-600">Founder & CEO</p>
            <p className="mt-4 text-gray-700 text-sm">
              Thuli leads the vision and strategy of Isizwe Siyakhanya, bringing over 10 years of experience in educational development.
            </p>
          </div>
  
          {/* Team Member 2 */}
          <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
            <img
              src="/thuli.png"
              alt="Thuli Dlamini"
              className="w-32 h-32 mx-auto rounded-full mb-6 border-4 border-green-600"
            />
            <h3 className="text-xl font-semibold text-green-700">Thuli Dlamini</h3>
            <p className="text-green-600">Program Director</p>
            <p className="mt-4 text-gray-700 text-sm">
              Thuli ensures the alignment of our programs with our mission, measuring their impact and ensuring effectiveness.
            </p>
          </div>
  
          {/* Team Member 3 */}
          <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
            <img
              src="/thuli.png"
              alt="Thuli Dlamini"
              className="w-32 h-32 mx-auto rounded-full mb-6 border-4 border-green-600"
            />
            <h3 className="text-xl font-semibold text-green-700">Thuli Dlamini</h3>
            <p className="text-green-600">Technical Lead</p>
            <p className="mt-4 text-gray-700 text-sm">
              Thuli leads the technical side of our programs, ensuring students gain critical ICT skills in coding and robotics.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Team;
  
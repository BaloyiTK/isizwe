import Team from "../components/Team";


const About = () => {
    return (
        <div className="bg-gradient-to-r from-green-50 to-green-100 py-16">
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <header className="text-center mb-20 relative">
                    <img 
                        src="/hero.png" 
                        alt="Empowering leaders through ICT" 
                        className="absolute inset-0 w-full h-full object-cover opacity-30 rounded-lg" 
                    />
                    <div className="relative z-10">
                        <h1 className="text-5xl font-bold text-gray-900">About Us</h1>
                        <p className="mt-4 text-xl text-gray-700">
                            Empowering the leaders of tomorrow through ICT & psycho-social development.
                        </p>
                    </div>
                </header>

                {/* What We Do Section */}
                <section className="bg-white rounded-lg shadow-lg mb-16 p-10">
                    <h2 className="text-3xl font-semibold text-green-700">What We Do</h2>
                    <p className="mt-4 text-lg text-gray-800 leading-relaxed">
                        At <strong>Isizwe Siyakhanya</strong>, we focus on the development of male learners in public schools across South Africa, preparing them to be the leaders of tomorrow. We provide them with the necessary ICT and psycho-social skills through a two-phase program:
                    </p>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col justify-center items-start">
                            <h3 className="text-2xl font-semibold text-green-600">Phase 1: Character & Wellness Development</h3>
                            <img 
                                src="welness.jpg" 
                                alt="Character Development" 
                                className="w-full h-64 object-cover rounded-lg mt-4"
                            />
                            <p className="mt-4 text-lg text-gray-700">
                                We focus on building strong character, nurturing emotional and psychological wellness, and providing a clear outlook for the future. This phase ensures that personal growth and leadership qualities are instilled early on.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center items-start">
                            <h3 className="text-2xl font-semibold text-green-600">Phase 2: ICT Skills & Future Readiness</h3>
                            <img 
                                src="ict_skills.webp" 
                                alt="ICT Skills" 
                                className="w-full h-64 object-cover rounded-lg mt-4"
                            />
                            <p className="mt-4 text-lg text-gray-700">
                                This phase equips learners with ICT skills, coding, and robotics to prepare them for the digital economy. By providing these essential skills, we increase their employability and foster entrepreneurship.
                            </p>
                        </div>
                    </div>
                </section>

             


                {/* Team Section */}
                <Team />

                {/* Call to Action Section */}
                <section className="bg-green-700 text-white text-center py-16 rounded-lg shadow-xl mb-16">
                    <h2 className="text-4xl font-semibold mb-4">Join Us in Empowering Tomorrow's Leaders</h2>
                    <p className="text-xl mb-8">
                        Be part of the change. Your support can make a significant impact on the lives of young learners in South Africa. Together, we can create a brighter future for the next generation of leaders.
                    </p>
                    <a
                        href="/contact"
                        className="bg-white text-green-700 font-semibold text-lg py-3 px-8 rounded-lg shadow-md hover:bg-green-200 transition duration-300"
                    >
                        Get Involved Today
                    </a>
                </section>
            </div>
        </div>
    );
};

export default About;

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const teamMembers = [
    {
      name: "Jane Cooper",
      role: "Overseeing medical innovation with 15+ years expertise in research and patient care.",
      image: "/team/Profile Pic.png"
    },
    {
      name: "Adam",
      role: "Ensuring efficient operations with expertise in healthcare administration and strategic planning.",
      image: "/team/Profile Pic.png"
    },
    {
      name: "John Doe",
      role: "Driving data-driven, patient-focused marketing strategies to amplify our healthcare outreach.",
      image: "/team/Profile Pic.png"
    },
    {
      name: "Anna Michael",
      role: "Developing digital healthcare solutions that enhance patient experience through technology.",
      image: "/team/Profile Pic.png"
    }
  ];

  const timelineSteps = [
    {
      title: "Identify Needs & Requirements",
      description: "We begin by understanding the essential certifications that healthcare professionals, particularly doctors and nurses, must obtain to practice effectively in the UK."
    },
    {
      title: "Develop Tailored Course Content",
      description: "Next, we collaborated with medical professionals and educators to design course content that is practical, up-to-date, and engaging."
    },
    {
      title: "Implement Online Accessibility",
      description: "Recognizing the demanding schedules of healthcare professionals, we make our courses fully accessible online."
    },
    {
      title: "Provide Ongoing Support & Updates",
      description: "Our journey doesn't end with course completion. We continuously update our materials to reflect the latest industry standards and offer ongoing support to our learners."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top-right circle */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-20"></div>
        {/* Bottom-left circle */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100 rounded-full translate-y-1/2 -translate-x-1/2 opacity-20"></div>
        {/* Floating dots pattern */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', 
          backgroundSize: '40px 40px',
          opacity: '0.05'
        }}></div>

        {/* Left side decorative elements */}
        <div className="fixed left-8 top-1/2 -translate-y-1/2 hidden xl:block">
          <div className="space-y-8">
            <div className="w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full opacity-40"></div>
            <div className="w-3 h-3 bg-blue-400 rounded-full opacity-20"></div>
            <div className="h-32 w-0.5 bg-gradient-to-b from-blue-500/50 to-transparent mx-auto"></div>
            <div className="w-8 h-8 border-2 border-blue-400/30 rounded-lg transform rotate-45"></div>
            <div className="w-12 h-12 border-2 border-orange-400/30 rounded-full"></div>
          </div>
        </div>

        {/* Right side decorative elements */}
        <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden xl:block">
          <div className="space-y-8">
            <div className="w-12 h-12 border-2 border-blue-400/30 rounded-full"></div>
            <div className="w-8 h-8 border-2 border-orange-400/30 rounded-lg transform -rotate-45"></div>
            <div className="h-32 w-0.5 bg-gradient-to-t from-orange-500/50 to-transparent mx-auto"></div>
            <div className="w-3 h-3 bg-orange-400 rounded-full opacity-60"></div>
            <div className="w-3 h-3 bg-orange-400 rounded-full opacity-40"></div>
            <div className="w-3 h-3 bg-orange-400 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Floating shapes - Left */}
        <div className="absolute left-16 top-1/4 hidden xl:block">
          <div className="animate-float-slow">
            <div className="w-16 h-16 border-4 border-blue-300/20 rounded-full"></div>
          </div>
        </div>
        <div className="absolute left-24 bottom-1/4 hidden xl:block">
          <div className="animate-float-slower">
            <div className="w-20 h-20 border-4 border-orange-300/20 rounded-lg transform rotate-45"></div>
          </div>
        </div>

        {/* Floating shapes - Right */}
        <div className="absolute right-16 bottom-1/3 hidden xl:block">
          <div className="animate-float-slow">
            <div className="w-16 h-16 border-4 border-blue-300/20 rounded-lg transform -rotate-45"></div>
          </div>
        </div>
        <div className="absolute right-24 top-1/3 hidden xl:block">
          <div className="animate-float-slower">
            <div className="w-20 h-20 border-4 border-orange-300/20 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[300px] bg-blue-600 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/team/iris.jpeg" 
            alt="Medical Background" 
            className="w-full h-full object-cover opacity-90"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-600/80"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white text-center" data-aos="fade-down">About Us</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* About Section */}
        <div className="max-w-3xl mx-auto mb-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">About Us</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We're passionate about delivering exceptional service to our customers. With a commitment to excellence and innovation, we strive to create solutions that make a difference. Our team is dedicated to bringing you the best, every day.
          </p>
        </div>

        {/* Vision Section */}
        <div className="max-w-3xl mx-auto mb-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Vision</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We're passionate about delivering exceptional service to our customers. With a commitment to excellence and innovation, we strive to create solutions that make a difference. Our team is dedicated to bringing you the best, every day.
          </p>
        </div>

        {/* Mission Section */}
        <div className="max-w-3xl mx-auto mb-20 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            We're passionate about delivering exceptional service to our customers. With a commitment to excellence and innovation, we strive to create solutions that make a difference. Our team is dedicated to bringing you the best, every day.
          </p>

          {/* Timeline */}
          <div className="space-y-12">
            {timelineSteps.map((step, index) => (
              <div key={index} className="flex gap-6" data-aos="fade-right" data-aos-delay={index * 100}>
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-orange-500 border-4 border-orange-200"></div>
                  {index !== timelineSteps.length - 1 && (
                    <div className="w-0.5 h-full bg-orange-200 mt-2"></div>
                  )}
                </div>
                <div className="flex-1 bg-white rounded-xl p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800" data-aos="fade-up">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 hover:scale-105 transform"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-50 shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{member.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
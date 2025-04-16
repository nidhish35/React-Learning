import React from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const courseCategories = [
    {
      id: 1,
      title: "Clinical Skills and Patient Safety",
      description: "Essential training for healthcare professionals to enhance clinical skills, ensure patient safety, and deliver quality care.",
      image: "/courses/clinical-skills.jpg",
    },
    {
      id: 2,
      title: "Nursing Competency and Specialization",
      description: "Specialized training for nurses to develop expertise in various clinical areas, enhance professional skills, and advance their careers.",
      image: "/courses/nursing-competency.jpg",
    },
    {
      id: 3,
      title: "Mental Health and Patient Wellbeing",
      description: "Comprehensive training focused on supporting mental health and enhancing patient wellbeing through evidence-based practices.",
      image: "/courses/mental-health.jpg",
    },
    {
      id: 4,
      title: "Compliance and Regulatory Training",
      description: "Essential training for healthcare professionals to enhance clinical skills, ensure compliance, and maintain regulatory standards.",
      image: "/courses/compliance.jpg",
    },
    {
      id: 5,
      title: "Leadership and Healthcare Management",
      description: "Specialized training for nurses to develop expertise in various clinical areas, enhance management skills, and lead healthcare teams.",
      image: "/courses/leadership.jpg",
    },
    {
      id: 6,
      title: "Specialized Medical Training",
      description: "Comprehensive training focused on supporting mental health and enhancing professional medical expertise through practical learning.",
      image: "/courses/specialized-medical.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Medical Professionals */}
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/courses/hero-medical.jpg" 
            alt="Medical Professionals" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-600/60"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" data-aos="fade-up">
            Course Categories for Your Professional Development
          </h1>
          <p className="text-lg text-white/90 max-w-3xl" data-aos="fade-up" data-aos-delay="100">
            We are dedicated to providing a comprehensive range of course categories that cover every aspect of corporate training. Our wide selection of course categories is thoughtfully designed to meet the unique requirements of businesses spanning across diverse sectors.
          </p>
        </div>
      </div>

      {/* Course Categories Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseCategories.map((course) => (
            <div 
              key={course.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={course.id * 100}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{course.description}</p>
                <Link
                  to={`/courses/${course.id}`}
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
                >
                  View Course
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/courses"
            className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-blue-600 hover:text-white transition-colors"
          >
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Courses; 
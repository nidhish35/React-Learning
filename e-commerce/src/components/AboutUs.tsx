import React from 'react';
import TeamMember from './TeamMember.tsx';
import Timeline from './Timeline.tsx';

const timelineSteps = [
  {
    title: 'Identify Needs & Requirements',
    description: 'We begin by understanding the essential certifications that healthcare professionals, particularly doctors and nurses, must obtain to practice effectively in the UK.'
  },
  {
    title: 'Develop Tailored Course Content',
    description: 'Next, we collaborated with medical professionals and educators to design course content that is practical, up-to-date, and engaging.'
  },
  {
    title: 'Implement Online Accessibility',
    description: 'Recognizing the demanding schedules of healthcare professionals, we make our courses fully accessible online.'
  },
  {
    title: 'Provide Ongoing Support & Updates',
    description: "Our journey doesn't end with course completion. We continuously update our materials to reflect the latest industry standards and offer ongoing support to our learners."
  }
];

const teamMembers = [
  {
    name: 'Jane Cooper',
    role: 'Overseeing medical innovation with 15+ years expertise in research and patient care.',
    image: '/team/jane-cooper.jpg'
  },
  {
    name: 'Adam',
    role: 'Ensuring efficient operations with expertise in healthcare administration and strategic planning.',
    image: '/team/adam.jpg'
  },
  {
    name: 'John Doe',
    role: 'Driving data-driven, patient-focused marketing strategies to amplify our healthcare outreach.',
    image: '/team/john-doe.jpg'
  },
  {
    name: 'Anna Michael',
    role: 'Developing digital healthcare solutions that enhance patient experience through technology.',
    image: '/team/anna-michael.jpg'
  }
];

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-blue-600">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">About Us</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* About Section */}
        <section className="mb-16">
          <p className="text-lg text-gray-600 mb-8">
            We're passionate about delivering exceptional service to our customers. With a commitment to excellence and innovation, we strive to create solutions that make a difference. Our team is dedicated to bringing you the best, every day.
          </p>
        </section>

        {/* Vision Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Vision</h2>
          <p className="text-lg text-gray-600">
            We're passionate about delivering exceptional service to our customers. With a commitment to excellence and innovation, we strive to create solutions that make a difference. Our team is dedicated to bringing you the best, every day.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600">
            We're passionate about delivering exceptional service to our customers. With a commitment to excellence and innovation, we strive to create solutions that make a difference. Our team is dedicated to bringing you the best, every day.
          </p>
        </section>

        {/* Timeline Section */}
        <section className="mb-16">
          <Timeline steps={timelineSteps} />
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-8">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <TeamMember
                key={member.name}
                name={member.name}
                role={member.role}
                image={member.image}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs; 
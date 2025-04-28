"use client";
import React from "react";
import {
  FaUserAlt,
  FaGraduationCap,
  FaHome,
  FaCertificate,
  FaHandshake,
} from "react-icons/fa";

const AboutUsSection = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            About Mi Alegria Daycare
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A place where children can feel comfortable and safe while parents
            feel at ease leaving their precious children in our capable care.
          </p>
        </div>

        {/* Personal Story */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
              <div className="rounded-full overflow-hidden border-4 border-blue-500 w-48 h-48 mx-auto">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/mi-alegria-daycare.firebasestorage.app/o/SpanhFamily.jpeg?alt=media&token=d0badde8-8b89-4014-93f5-3859f91b5997"
                  alt="Priscila Spahn"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  Priscila Spahn
                </h3>
                <p className="text-blue-600 font-medium">
                  Daycare Owner & Provider
                </p>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="flex items-center mb-4">
                <FaUserAlt className="text-2xl text-blue-500 mr-3" />
                <h2 className="text-2xl font-bold text-blue-600">Our Story</h2>
              </div>
              <p className="text-gray-700 mb-4">
                My name is Priscila Spahn and I am originally from Monterrey,
                Mexico. I enjoy providing dedicated care to the precious little
                ones being entrusted to my daycare and thus becoming part of
                their lives and those of their families.
              </p>
              <p className="text-gray-700 mb-4">
                My husband – who is from Switzerland originally - and I have 3
                wonderful teenage children who are 18, 17, and 15 years old
                respectively. They are excited to be part of a multi- ethnic
                family and enjoy occasionally supporting me by spending time
                with the daycare kids.
              </p>
              <p className="text-gray-700 mb-4">
                I speak Spanish at home and believe in learning through play
                philosophy. We enjoy going to a variety of local playgroups
                which provides my daycare children with valuable
                play/socializing opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* About Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Educational Philosophy */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <FaGraduationCap className="text-2xl text-purple-500 mr-3" />
              <h2 className="text-2xl font-bold text-purple-600">
                Educational Philosophy
              </h2>
            </div>
            <p className="text-gray-700 mb-4">
              At Mi Alegria Daycare, we believe in learning through play and
              respect. We support the five developmental domains which include:
              social, physical, intellectual, creative and emotional.
            </p>
            <p className="text-gray-700">
              Through our child-centered approach that includes a variety of
              appropriate and exciting activities, your child will be fully
              engaged. We have fun exploring the world around us while
              respecting each child&apos;s unique developmental path.
            </p>
          </div>

          {/* Facilities */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <FaHome className="text-2xl text-green-500 mr-3" />
              <h2 className="text-2xl font-bold text-green-600">
                Our Facilities
              </h2>
            </div>
            <p className="text-gray-700 mb-4">
              Our home is located conveniently next to a park which we visit
              daily, providing children with ample opportunities for outdoor
              play and exploration. There is plenty of outside time in our
              backyard as well as per government recommendations.
            </p>
            <p className="text-gray-700">
              We maintain a clean, safe, and stimulating environment with
              age-appropriate toys and learning materials. Our facility is
              designed to foster independence, creativity, and social
              interaction among children.
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Qualifications */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <FaCertificate className="text-2xl text-yellow-500 mr-3" />
              <h2 className="text-2xl font-bold text-yellow-600">
                Qualifications
              </h2>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-yellow-500 flex items-center justify-center mt-1 mr-3">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <p>
                  Maintained required training such as First Aid certification
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-yellow-500 flex items-center justify-center mt-1 mr-3">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <p>
                  Operating in compliance with childcare licensing regulations
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-yellow-500 flex items-center justify-center mt-1 mr-3">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <p>Valid liability insurance for the children and home</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-yellow-500 flex items-center justify-center mt-1 mr-3">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <p>
                  Ensuring safety measures are continually addressed, including
                  annual VIHA inspection
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-yellow-500 flex items-center justify-center mt-1 mr-3">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <p>Regular emergency drills and safety planning</p>
              </li>
            </ul>
          </div>

          {/* Values */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <FaHandshake className="text-2xl text-red-500 mr-3" />
              <h2 className="text-2xl font-bold text-red-600">Our Values</h2>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-red-500 flex items-center justify-center mt-1 mr-3">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <p>
                  Creating a welcoming &quot;open door&quot; atmosphere for both
                  children and their families
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-red-500 flex items-center justify-center mt-1 mr-3">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <p>
                  Developing collaborative partnerships with families and
                  working together on common goals
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-red-500 flex items-center justify-center mt-1 mr-3">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <p>
                  Communicating with families about their child&apos;s daily
                  experiences in a positive and respectful manner
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-red-500 flex items-center justify-center mt-1 mr-3">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <p>
                  Encouraging children to be independent and responsible for
                  their own actions
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-red-500 flex items-center justify-center mt-1 mr-3">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <p>
                  Ensuring children learn our core values: Be Safe, Be Kind,
                  Have Fun!
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Our Goal Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-blue-600">Our Goal</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-2"></div>
          </div>
          <p className="text-gray-700 text-lg text-center max-w-4xl mx-auto">
            Our goal is to provide quality childcare in a loving environment
            whilst addressing safety, health and hygiene, guidance and
            discipline. Through our choice of programming and by constantly
            being professional we ensure the children learn and have fun, as
            well as allowing them to follow their own unique developmental path.
            Mi Alegria Daycare is a place where children can feel comfortable
            and safe while parents feel at ease leaving their precious
            child(ren) in our capable care.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Interested in learning more?
          </h3>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;

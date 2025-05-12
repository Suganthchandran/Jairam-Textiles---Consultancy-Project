import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="bg-white w-full text-black">
      {/* Header Illustration */}
      <div className="flex justify-center pt-10">
        <img className="w-[600px] max-w-full" src={assets.About1} alt="Team working illustration" />
      </div>

      {/* About Us Heading */}
      <h1 className="text-4xl font-extrabold text-center mt-6">About Us</h1>

      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center justify-center p-10 gap-12">
        <img className="w-[400px] max-w-full" src={assets.about2} alt="Ecommerce History" />
        <div className="max-w-md text-center md:text-left">
          <h2 className="text-xl font-bold text-blue-700 mb-3">
            Know About Our Ecommerce Business, History
          </h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quod ipsum dolorem
            suscipit temporibus maiores et deserunt ipsa dolores sunt soluta, illo libero, delectus
            exercitationem?
          </p>
          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
            Contact Us
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-14 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {[
            {
              img: assets.abc1,
              title: 'Fast Delivery',
              desc: 'Get your products delivered fast and safe.',
            },
            {
              img: assets.abc2,
              title: '100% Cash Back',
              desc: 'Easy refunds and 100% money back guaranteed.',
            },
            {
              img: assets.abc3,
              title: 'Quality Products',
              desc: 'Only top-rated and verified products.',
            },
            {
              img: assets.abc4,
              title: '24/7 Service & Support',
              desc: 'We are available all day to assist you.',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 w-72 text-center hover:shadow-xl transition"
            >
              <img src={feature.img} alt={feature.title} className="w-28 h-28 mx-auto mb-4" />
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Client Testimonials */}
      <div className="py-14 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold mb-8">Our Clients Say!</h2>
        <div className="flex flex-wrap justify-center gap-10">
          <img src={assets.client1} alt="Client 1" className="w-[250px] rounded-lg shadow-md" />
          <img src={assets.client2} alt="Client 2" className="w-[250px] rounded-lg shadow-md" />
        </div>
        <p className="max-w-xl mx-auto mt-8 text-gray-600 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quod ipsum dolorem
          suscipit temporibus maiores et deserunt ipsa dolores sunt soluta.
        </p>
      </div>
    </div>
  );
};

export default About;

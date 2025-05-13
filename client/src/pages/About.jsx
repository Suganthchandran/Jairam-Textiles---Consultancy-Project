import React from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-white w-full text-black">
      <div className="flex justify-center pt-10">
        <img className="w-[600px] max-w-full" src={assets.About1} alt="Team working illustration" />
      </div>

      <h1 className="text-4xl font-extrabold text-center mt-6">About Us</h1>

      <div className="flex flex-col md:flex-row items-center justify-center p-10 gap-12">
        <img className="w-[400px] max-w-full" src={assets.about2} alt="Jairam Textiles" />
        <div className="max-w-md text-center md:text-left">
          <h2 className="text-xl font-bold text-blue-700 mb-3">
            Know About Jairam Textiles
          </h2>
          <p className="text-gray-600 mb-4">
            At Jairam Textiles, we specialize in crafting high-quality **bedsheets**, **towels**, and **kitchen napkins** 
            that bring comfort and elegance to your home. With a rich legacy in textile excellence, we take pride in delivering 
            products that blend tradition, style, and durability. Every thread we weave tells a story of quality and care.
          </p>
          <Link to='/contact'>
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition cursor-pointer">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-gray-50 py-14 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Jairam Textiles?</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {[
            {
              img: assets.abc1,
              title: 'Fast Delivery',
              desc: 'Get your bedsheets, towels, and napkins delivered quickly and safely.',
            },
            {
              img: assets.abc2,
              title: 'Easy Returns',
              desc: 'Hassle-free return process with customer-first policies.',
            },
            {
              img: assets.abc3,
              title: 'Premium Quality',
              desc: 'We use top-grade materials to ensure durability and comfort.',
            },
            {
              img: assets.abc4,
              title: '24/7 Customer Support',
              desc: 'Our team is here to assist you anytime, anywhere.',
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

      <div className="py-14 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
        <div className="flex flex-wrap justify-center gap-10">
          <img src={assets.client1} alt="Client 1" className="w-[250px] rounded-lg shadow-md" />
          <img src={assets.client2} alt="Client 2" className="w-[250px] rounded-lg shadow-md" />
        </div>
        <p className="max-w-xl mx-auto mt-8 text-gray-600 text-center">
          "I recently purchased bedsheets and kitchen napkins from Jairam Textiles, and I couldn’t be happier! 
          The quality is top-notch and delivery was super fast. Highly recommended!"
        </p>
      </div>
    </div>
  );
};

export default About;

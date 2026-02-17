import React from 'react';
import { SectionWrapper } from '../hoc';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin,FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8  bg-none from-green-500 via-gray-800 to-purple-800">
      <div className="container mx-auto flex justify-center items-center">
       
        <a href="https://www.facebook.com/sumedh.bhagat.589" className="text-blue-400 hover:text-blue-800 mr-4">
          <FaFacebook size={24} />
        </a>
        <a href="https://github.com/jnvw/" className="text-gray-300 hover:text-white mr-4">
          <FaGithub size={24} />
        </a>
        <a href="https://www.twitter.com/" className="text-blue-400 hover:text-blue-600 mr-4">
          <FaTwitter size={24} />
        </a>
        <a href="https://www.instagram.com/sumedhbhagat9/" className="text-pink-400 hover:text-orange-800 mr-4">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.linkedin.com/in/sumedh-bhagat-3559a7244" className="text-blue-400 hover:text-blue-600">
          <FaLinkedin size={24} />
        </a>
      </div>
      <div className="mt-4 text-center text-secondary">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} sumedhbhagat. All rights reserved.
        </p>

        <p className="mb-2">
          <a href="/privacy-policy" className="text-secondary hover:text-gray-300">Privacy Policy</a> | 
          <a href="/terms-of-service" className="text-secondary hover:text-gray-300"> Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default SectionWrapper(Footer,"footr");

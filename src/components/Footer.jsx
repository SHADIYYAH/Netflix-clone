import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8">
    
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">FAQ</li>
              <li className="hover:underline cursor-pointer">Investor Relations</li>
              <li className="hover:underline cursor-pointer">Privacy</li>
              <li className="hover:underline cursor-pointer">Speed Test</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">Help Center</li>
              <li className="hover:underline cursor-pointer">Jobs</li>
              <li className="hover:underline cursor-pointer">Cookie Preferences</li>
              <li className="hover:underline cursor-pointer">Legal Notices</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">Account</li>
              <li className="hover:underline cursor-pointer">Ways to Watch</li>
              <li className="hover:underline cursor-pointer">Corporate Information</li>
              <li className="hover:underline cursor-pointer">Only on Netflix</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4">
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">Media Center</li>
              <li className="hover:underline cursor-pointer">Terms of Use</li>
              <li className="hover:underline cursor-pointer">Contact Us</li>
            </ul>
          </div>
        </div>

       
        <div className="mt-8 flex justify-center">
          <button className="bg-gray-700 text-white px-4 py-2 rounded">English</button>
        </div>
      </div>
    
     
    </footer>
  );
}

export default Footer;

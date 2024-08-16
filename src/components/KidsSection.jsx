// import React from 'react'
// import KidsImage from "../assets/images/kids-image.png"
// import Section from './shared/Section'
// const KidsSection = () => {
//   return (
//     <div className="bg-black text-white py-12">
//    <Section>
//    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
//       <div className="flex-1 md:mr-10">
//         <img src={KidsImage} alt="Phone" className="w-full md:max-w-xs mx-auto" />
//       </div>
//       <div className="flex-1 mt-8 md:mt-0">
//         <h2 className="text-4xl font-bold mb-4">Create profiles for kids</h2>
//         <p className="text-lg">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
//       </div>
//     </div>
//    </Section>
   
//   </div>
//   )
// }

// export default KidsSection

import React from 'react';
import KidsImage from "../assets/images/kids-image.png";
import Section from './shared/Section';

const KidsSection = () => {
  return (
    <div className="bg-black text-white py-12">
      <Section>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="flex-1 md:mr-10">
            <img 
              src={KidsImage} 
              alt="Kids" 
              className="w-full h-auto md:max-w-lg mx-auto" 
            />
          </div>
          
          {/* Text Section */}
          <div className="flex-1 mt-8 md:mt-0">
            <h2 className="text-4xl font-bold mb-4">Create profiles for kids</h2>
            <p className="text-lg">
              Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default KidsSection;

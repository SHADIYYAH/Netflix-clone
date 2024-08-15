import React from 'react';

const Section = ({ children }) => {
  return (
    <div className="py-20 border-b border-gray-700">
      <div className="max-w-4xl mx-auto px-4">
        {children}
      </div>
    </div>
  );
};

export default Section;

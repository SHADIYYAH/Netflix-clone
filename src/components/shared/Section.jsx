

import React from 'react';

const Section = ({ children }) => {
  return (
    <div className="py-24 border-b-4 border-zinc-800">
      <div className="max-w-4xl mx-auto px-4">
        {children}
      </div>
    </div>
  );
};

export default Section;

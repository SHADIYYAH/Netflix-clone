import React, { useState } from 'react';

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-700">
      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center p-4 text-left text-white hover:bg-gray-800 focus:outline-none"
      >
        <span>{question}</span>
        <span className={`transform ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
          +
        </span>
      </button>
      {isOpen && (
        <div className="p-4 text-gray-400">
          {answer}
        </div>
      )}
    </div>
  );
};

export default Accordion;

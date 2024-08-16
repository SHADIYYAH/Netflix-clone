// import React from 'react'
// import Accordion from './Accordion';
// import Section from './shared/Section';
// import EmailFormSection from './shared/EmailForm';

// const Faq = () => {
//     const faqItems = [
//         { question: "What is Netflix?", answer: "Netflix is a streaming service that offers..." },
//         { question: "How much does Netflix cost?", answer: "Netflix plans range from..." },
//         { question: "Where can I watch?", answer: "You can watch Netflix on your..." },
//         { question: "How do I cancel?", answer: "You can cancel your subscription..." },
//         { question: "What can I watch on Netflix?", answer: "Netflix has an extensive library of..." },
//         { question: "Is Netflix good for kids?", answer: "The Netflix Kids experience is..." },
//       ];
    
//   return (
//     <section className="bg-black py-12">
//         <Section>
//         <div className="max-w-4xl mx-auto">
//         <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
//         {faqItems.map((item, index) => (
//           <Accordion key={index} question={item.question} answer={item.answer} />
//         ))}
//       </div>
//       <EmailFormSection/>
//         </Section>
     
//     </section>
//   )
// }

// export default Faq

import React from 'react';
import Accordion from './Accordion';
import Section from './shared/Section';
import EmailFormSection from './shared/EmailForm';

const Faq = () => {
  const faqItems = [
    { question: "What is Netflix?", answer: "Netflix is a streaming service that offers..." },
    { question: "How much does Netflix cost?", answer: "Netflix plans range from..." },
    { question: "Where can I watch?", answer: "You can watch Netflix on your..." },
    { question: "How do I cancel?", answer: "You can cancel your subscription..." },
    { question: "What can I watch on Netflix?", answer: "Netflix has an extensive library of..." },
    { question: "Is Netflix good for kids?", answer: "The Netflix Kids experience is..." },
  ];

  return (
    <section className="bg-black py-12">
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <Accordion key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
          <div className="mt-8">
            <EmailFormSection />
          </div>
        </div>
      </Section>
    </section>
  );
}

export default Faq;

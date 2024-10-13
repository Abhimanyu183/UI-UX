import React, { useState } from 'react';
import './FAQ.js'; // Import your CSS file

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle question
  };

  return (
    <section className="faq">
      <div className="faq-header">
        <div className="faq-icon-wrapper">
          <img src="/IMAGES/question-mark.svg" alt="question-mark" className="faq-icon" />
        </div>
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="questions">
        <div className="question" onClick={() => toggleQuestion(0)}>
          <div className="question-header">
            <span className="toggle-button">{activeIndex === 0 ? '-' : '+'}</span>
            <h3>What is SaaS?</h3>
          </div>
          {activeIndex === 0 && (
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venaim, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commando                                                           
            </p>
          )}
        </div>
        <div className="question" onClick={() => toggleQuestion(1)}>
          <div className="question-header">
            <span className="toggle-button">{activeIndex === 1 ? '-' : '+'}</span>
            <h3>Lorem ipsum dolor sit amet, consectetur?</h3>
          </div>
          {activeIndex === 1 && (
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.xcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat . Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem</p>
          )}
        </div>
        <div className="question" onClick={() => toggleQuestion(2)}>
          <div className="question-header">
            <span className="toggle-button">{activeIndex === 2 ? '-' : '+'}</span>
            <h3>Duis aute irure dolor in reprehenderit in voluptate velit esse?</h3>
          </div>
          {activeIndex === 2 && (
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
          )}
        </div>
 

        <div className="question" onClick={() => toggleQuestion(3)}>
          <div className="question-header">
            <span className="toggle-button">{activeIndex === 3 ? '-' : '+'}</span>
            <h3>Sed ut perspiciatis unde omnis iste natus error sit ?</h3>
          </div>
          {activeIndex === 3 && (
            <p> voluptatem accusantium doloremque laudantium.</p>
          )}
        </div>



        <div className="question" onClick={() => toggleQuestion(4)}>
          <div className="question-header">
            <span className="toggle-button">{activeIndex === 4 ? '-' : '+'}</span>
            <h3>Ut enim ad minima vaniam, quis nostrum exercitationem ?</h3>
          </div>
          {activeIndex === 4 && (
            <p> voluptatem accusantium doloremque laudantium.</p>
          )}
        </div>



        
      </div>
    </section>
  );
};

export default FAQ;
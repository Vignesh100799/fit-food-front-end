import React, { useState } from 'react'
import { faqData } from '../Dashboard/faqdata'

const Faq = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggle = (index) => {
      setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  return (
    <div className="container mt-4">
    <h2 className='text-center'>Frequently Asked Questions</h2>
    {faqData.map((faq, index) => (
      <div key={index} className="mb-3 ">
        <div
          className={`accordion accordion-flush faq-question ${
            expandedIndex === index ? "expanded" : ""
          }`}
          onClick={() => handleToggle(index)}
        >
          <div className="accordion-item">
            <h2 className="accordion-header " id={`faqHeading${index}`}>
              <button
                className="accordion-button collapsed text-bg-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#faqCollapse${index}`}
                aria-expanded={expandedIndex === index ? "true" : "false"}
                aria-controls={`faqCollapse${index}`}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`faqCollapse${index}`}
              className={`accordion-collapse collapse ${
                expandedIndex === index ? "show" : ""
              }`}
              aria-labelledby={`faqHeading${index}`}
              data-bs-parent="#accordionFaq"
            >
              <div className="accordion-body">{faq.answer}</div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}

export default Faq
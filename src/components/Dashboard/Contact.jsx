import React from 'react';
import Side from './Side';

const Contact = () => {
  return (
    <Side>
      <div className="container mt-4">
        <h2>Contact Us</h2>
        <p>
          If you have any questions, feedback, or need assistance, feel free to contact us using the information below:
        </p>
        <div>
          <h4>Email:</h4>
          <p>info@dietsuggestionapp.com</p>
        </div>
        <div>
          <h4>Phone:</h4>
          <p>+1 (123) 456-7890</p>
        </div>
        <div>
          <h4>Address:</h4>
          <p>123 Diet Street, Nutrition City, Healthland</p>
        </div>
      
      </div>
    </Side>
  );
};

export default Contact;

import React from 'react';
import './DeliverySection.js';

const DeliverySection = () => {
  return (
    <div className="delivery-section">
      <h2>All in one proof for 
       < br></br>final mile delivery solutions</h2> 
       
      <div className="features-container">
        <div className="feature">
          <img src="/IMAGES/1 All in one.png" alt="Real-time tracking" className="icon" />
          <h3>Real-time tracking</h3>
          <p>By adopting real-time delivery tracking software, final mile delivery management has become much easier.</p>
        </div>
        
        <div className="feature">
          <img src="/IMAGES/2 All in One.png" alt="Proof of Delivery" className="icon" />
          <h3>Proof of Delivery</h3>
          <p>The system works with the electronic and digital signatures of the recipient upon receiving the delivery item.</p>
        </div>
        <div className="feature">
          <img src="/IMAGES/3 All in one.png" alt="Real-time tracking" className="icon" />
          <h3>Real-time tracking</h3>
          <p>By adopting real-time delivery tracking software, final mile delivery management has become much easier.</p>
        </div>
      </div>
    </div>
  );
};

export default DeliverySection;

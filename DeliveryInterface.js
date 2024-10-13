import React, { useState } from 'react';
import './DeliveryInterface.js'; // Updated to import the correct CSS file

const DeliveryInterface = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <section className="delivery-interface">
      {/* Heading */}
      <h2>Delivery Business Interfaces</h2>

      {/* Button Section for Tabs */}
      <div className="interface-buttons">
        <button
          className={`tab-button ${activeTab === 'Dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('Dashboard')}
        >
          Dashboard
        </button>
        <button
          className={`tab-button ${activeTab === 'Customer App' ? 'active' : ''}`}
          onClick={() => setActiveTab('Customer App')}
        >
          Customer App
        </button>
        <button
          className={`tab-button ${activeTab === 'Agent App' ? 'active' : ''}`}
          onClick={() => setActiveTab('Agent App')}
        >
          Agent App
        </button>
      </div>

      {/* Image Section */}
      <div className="interface-image-wrapper">
        <img
          src="/IMAGES/dashboard.png"
          alt="Delivery Interface"
          className="interface-image"
        />
      </div>
    </section>
  );
};

export default DeliveryInterface;

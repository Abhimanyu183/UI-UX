// src/components/Solutions.js
import React from 'react';
import './Solutions.js'; // Make sure to use .css for styling

const Solutions = () => {
  return (
    <section className="solutions">
      <h2 className="section-title">Solutions for Every Delivery</h2>
      <div className="solution-cards">
        <div className="solution-card">
          <div className="solution-icon">🍔</div>
          <h3>Food</h3>
          <p>Leverage APIs for optimized food delivery routes.</p>
        </div>
        <div className="solution-card">
          <div className="solution-icon">🛒</div>
          <h3>Grocery</h3>
          <p>Efficient route mapping for grocery delivery.</p>
        </div>
        <div className="solution-card">
          <div className="solution-icon">📦</div>
          <h3>Courier</h3>
          <p>Complete last-mile delivery solutions for couriers.</p>
        </div>
        <div className="solution-card">
          <div className="solution-icon">🚚</div>
          <h3>Logistics</h3>
          <p>Manage logistics with advanced tracking features.</p>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
import React, { useState, useRef } from 'react';
import './Featuresh.css';
import FinancialLiteracyDetails from './FinancialLiteracyDetails';

import LoanManagementDetails from './LoanManagementDetails';
import StudentDiscountsDetails from './StudentDiscountsDetails';

const Featuresh = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const detailsRef = useRef(null); 

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth' });  
    }
  };

  const renderFeatureDetails = () => {
    switch (selectedFeature) {
      case 'financialLiteracy':
        return <FinancialLiteracyDetails />;
      case 'loanManagement':
        return <LoanManagementDetails/>;
      case 'studentDiscounts':
        return <StudentDiscountsDetails />;
      default:
        return null;
    }
  };

  return (
    <div className="features1-page">
      <h1>Our Features</h1>
      <div className="feature1-container">
        <div
          className="feature1"
          onClick={() => handleFeatureClick('financialLiteracy')}
        >
          <h2>Financial Literacy</h2>
          <p>Learn about budgeting, saving, and investing with our educational resources.</p>
          <button className="view-details">
            View details
          </button>
        </div>
        <div
          className="feature1"
          style={{ marginTop: '12rem' }}
          onClick={() => handleFeatureClick('loanManagement')}
        >
          <h2>Loan Management</h2>
          <p>Track your student loans and manage repayments with ease.</p>
          <button className="view-details">
            View details
          </button>
        </div>
        <div
          className="feature1"
          onClick={() => handleFeatureClick('studentDiscounts')}
        >
          <h2>Student Discounts</h2>
          <p>Get discounts on various products and services just for being a student.</p>
          <button className="view-details">
            View details
          </button>
        </div>
      </div>
      <div ref={detailsRef} className="feature1-details"> 
        {renderFeatureDetails()}
      </div>
    </div>
  );
};

export default Featuresh;

import React from 'react';
import { FaBook, FaYoutube } from 'react-icons/fa'; 
import './FinancialLiteracyDetails.css';

const FinancialLiteracyDetails = () => {
  return (
    <div className="financial-literacy-details-page">
      <h1 className="financial-literacy-details-heading">Financial Literacy</h1>
      <p className="financial-literacy-details-description">
        Our website provides valuable educational resources to help you learn about budgeting, saving, and investing. Explore our book recommendations and YouTube videos to enhance your financial knowledge.
      </p>
      
      <div className="financial-literacy-details-resources-section">
        <h2 className="financial-literacy-details-subheading">Recommended Books</h2>
        <div className="financial-literacy-details-books-container">
          <div className="financial-literacy-details-card financial-literacy-details-book-card">
            <FaBook className="financial-literacy-details-icon" />
            <h3 className="financial-literacy-details-book-title">Rich Dad Poor Dad</h3>
            <p className="financial-literacy-details-book-author">by Robert Kiyosaki</p>
            <p className="financial-literacy-details-book-description">
              A classic personal finance book that explains the mindset and principles behind financial independence.
            </p>
          </div>
          <div className="financial-literacy-details-card financial-literacy-details-book-card">
            <FaBook className="financial-literacy-details-icon" />
            <h3 className="financial-literacy-details-book-title">The Total Money Makeover</h3>
            <p className="financial-literacy-details-book-author">by Dave Ramsey</p>
            <p className="financial-literacy-details-book-description">
              A step-by-step guide to getting out of debt and building wealth through common-sense financial principles.
            </p>
          </div>
          <div className="financial-literacy-details-card financial-literacy-details-book-card">
            <FaBook className="financial-literacy-details-icon" />
            <h3 className="financial-literacy-details-book-title">Your Money or Your Life</h3>
            <p className="financial-literacy-details-book-author">by Vicki Robin</p>
            <p className="financial-literacy-details-book-description">
              Transform your relationship with money and achieve financial independence by aligning your spending with your values.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialLiteracyDetails;

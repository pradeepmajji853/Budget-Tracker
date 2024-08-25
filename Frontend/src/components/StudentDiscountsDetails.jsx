import React from 'react';
import './StudentDiscountsDetails.css'; 

const discounts = [
  {
    id: 1,
    title: 'Laptop Discount',
    description: 'Get up to 20% off on selected laptops.',
    image: 'https://m.media-amazon.com/images/I/71p-M3sPhhL.jpg',
  },
  {
    id: 2,
    title: 'Textbook Discount',
    description: 'Save 15% on textbooks with a valid student ID.',
    image: 'https://www.interviewbit.com/blog/wp-content/uploads/2022/02/Data-Structures-And-Algorithms-Made-Easy.jpg', 
  },
  {
    id: 3,
    title: 'Software Discount',
    description: 'Up to 30% off on Linkedin for students.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/5/418155777/LF/PK/UF/10378984/linkedin-6-month-premium-business-subscription.png', 
  },

];

const StudentDiscountsDetails = () => (
  <div className="student-discounts-details">
    <h1 style={{marginBottom:'3rem',fontSize:'3rem',marginTop:'5rem'}}>Student Discounts</h1>
    <div className="discounts-container">
      {discounts.map(discount => (
        <div key={discount.id} className="discount-card">
          <img src={discount.image} alt={discount.title} className="discount-image" />
          <div className="discount-info">
            <h2>{discount.title}</h2>
            <p>{discount.description}</p>

            <button 
              className="claim-button" 
              onClick={() => handleClaim(discount.title)}
            >
              Claim It
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default StudentDiscountsDetails;

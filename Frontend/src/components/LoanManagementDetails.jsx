// LoanManagementDetails.js
import React from 'react';
import './LoanManagementDetails.css';

const loanTypes = [
  {
    id: 1,
    title: 'Educational Loans',
    description: 'Loans specifically designed to cover tuition fees, books, and other educational expenses.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXwbv0xZu60riwJDjqj8qxYzbCalAQkcZ5UA&s'
  },
  {
    id: 2,
    title: 'Personal Loans',
    description: 'Flexible loans for personal needs, such as emergencies or consolidating other debts.',
    image: 'https://www.livemint.com/lm-img/img/2024/03/12/original/Screenshot_2024-03-12_200136_1710253871956.png'
  },
  {
    id: 3,
    title: 'Business Loans',
    description: 'Loans to help students start or grow a small business while managing their studies.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqUjzJC4ZktCqmgDIH_KlqXUaEIZg3a3ZcpA&s'
  },
  {
    id: 4,
    title: 'Government Grants',
    description: 'Grants provided by the government to support education and research, often requiring no repayment.',
    image: 'https://enterslice.com/learning/wp-content/uploads/2023/01/MicrosoftTeams-image-47.jpg'
  },
  {
    id: 5,
    title: 'Scholarships',
    description: 'Financial aid awarded based on academic achievement or other criteria, which does not need to be repaid.',
    image: 'https://scholarshiparena.in/wp-content/uploads/2024/02/Importance-Of-Scholarship.jpg'
  },
  
  {
    id: 6,
    title: 'Federal Student Loans',
    description: 'Loans funded by the federal government with lower interest rates and flexible repayment options.',
    image: 'https://pix4free.org/assets/library/2021-01-19/originals/federal_student_loans.jpg'
  }
];

const LoanManagementDetails = () => {
  return (
    <div className="loan-management-details">
      <h1>Student Loan Options</h1>
      <p>Explore various loan and financial aid options tailored for students to meet their diverse needs.</p>
      <div className="loan-cards-container">
        {loanTypes.map((loan) => (
          <div className="loan-card" key={loan.id}>
            <img src={loan.image} alt={loan.title} className="loan-card-image" />
            <h3 className="loan-card-title">{loan.title}</h3>
            <p className="loan-card-description">{loan.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoanManagementDetails;

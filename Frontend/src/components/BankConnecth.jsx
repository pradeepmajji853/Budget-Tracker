import React from "react";
import './BankConnecth.css';


const loanData = [
  {
    id: 1,
    title: 'e-wallets',
    description: 'E-wallets provide a convenient way to store and manage multiple payment methods (credit cards, debit cards, bank accounts) in one place',
    image: 'https://t3.ftcdn.net/jpg/02/39/50/30/240_F_239503004_ByNsatpxpDpTDVtEzWYUGM4SmGlbMJzN.jpg', 
  },
  
 
  {
    id: 2,
    title: 'Loans',
    description: 'Loan for higher education expenses. They empower students to pursue higher education without immediate financial strain.',
    image: 'https://www.ukstcbank.com/wp-content/uploads/2015/08/edu.jpg',
  },
  {
    id: 3,
    title: 'Cryptocurrencies',
    description: 'Cryptocurrencies operate on decentralized blockchain technology, which eliminates the need for intermediaries like banks',
    image: 'https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/4087184/cover_image/regular_1708x683/Untitled-d49357e25ca03f55c25d7db3e4ef70f2.png',
  },
];
const BankConnecth = () => {
    return (
      <div className="Total1">
    <div className="head1"><h1>.eBank</h1>
    <p>Fast and Safe</p></div>


    
    <div className="card1-container">
          {loanData.map((loan) => (
            <div key={loan.id} className="card1" id={loan.id}>
              <img src={loan.image} alt={loan.title} className="card1-image" />
              <div className="card1-content">
                <h3 className="card1-title">{loan.title}</h3>
                <p className="card1-description">{loan.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        
      </div>
    );
  };
  
  export default BankConnecth;
  
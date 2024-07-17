import React from 'react';
import styled from 'styled-components';

const MembershipContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const MembershipCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 2rem;
  margin: 1rem;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const MembershipTitle = styled.h3`
  color: #ff6b6b;
`;

const Price = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Button = styled.button`
  background-color: #ff6b6b;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #ff4757;
  }
`;

function Membership() {
  const plans = [
    { id: 1, name: 'Basic', price: '29,99€/Monat' },
    { id: 2, name: 'Premium', price: '49,99€/Monat' },
    { id: 3, name: 'VIP', price: '79,99€/Monat' },
  ];

  return (
    <div>
      <h2>Mitgliedschaften</h2>
      <MembershipContainer>
        {plans.map(plan => (
          <MembershipCard key={plan.id}>
            <MembershipTitle>{plan.name}</MembershipTitle>
            <Price>{plan.price}</Price>
            <Button>Jetzt Mitglied werden</Button>
          </MembershipCard>
        ))}
      </MembershipContainer>
    </div>
  );
}

export default Membership;
import React from 'react';
import styled from 'styled-components';

const ClassesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ClassCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ClassTitle = styled.h3`
  color: #ff6b6b;
`;

const ClassImage = styled.img`
  width: 100%;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

function Classes() {
  const classes = [
    { id: 1, name: 'Yoga', image: 'https://example.com/yoga.jpg' },
    { id: 2, name: 'Spinning', image: 'https://example.com/spinning.jpg' },
    { id: 3, name: 'Krafttraining', image: 'https://example.com/strength.jpg' },
    { id: 4, name: 'Pilates', image: 'https://example.com/pilates.jpg' },
  ];

  return (
    <div>
      <h2>Unsere Kurse</h2>
      <ClassesContainer>
        {classes.map(cls => (
          <ClassCard key={cls.id}>
            <ClassImage src={cls.image} alt={cls.name} />
            <ClassTitle>{cls.name}</ClassTitle>
          </ClassCard>
        ))}
      </ClassesContainer>
    </div>
  );
}

export default Classes;
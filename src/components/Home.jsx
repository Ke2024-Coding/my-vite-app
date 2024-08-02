import React from 'react';
import styled from 'styled-components';

const HomeContainer  styled.div`
  text-align: center;
`;

const Title = styled.h1`
  color: #ff6b6b;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

function Home() {
  return (
    <HomeContainer>
      <Title>Willkommen bei FitLife Studio</Title>
      <Subtitle>Ihr modernes Fitnessstudio für ein gesünderes Leben</Subtitle>
      <Image src="https://example.com/gym-image.jpg" alt="Modernes Fitnessstudio" />
    </HomeContainer>
  );
}

export default Home;
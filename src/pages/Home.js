import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Subheading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;



const Home = () => {
  return (
    <HomeContainer>
      <Heading>Welcome to Naman Shah's portfolio</Heading>
      <Subheading>Aspiring Web developer </Subheading>
      
    </HomeContainer>
  );
};

export default Home;

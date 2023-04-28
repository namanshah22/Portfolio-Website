import React from "react";
import styled from "styled-components";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 1rem; 
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center; 
`;

const Subheading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center; // Center the text for better readability
`;

const Button = styled.a`
  display: inline-block;
  background-color: #4caf50;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

const Home = () => {
  return (
    <HomePageContainer>
      <Heading>Welcome to Naman Shah's Portfolio</Heading>
      <Subheading>Aspiring Web Developer</Subheading>
      <Button href="projects">View My Projects</Button> 
    </HomePageContainer>
  );
};

export default Home;

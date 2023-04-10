import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Bio = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;

const SkillsContainer = styled.div`
  margin-top: 2rem;
`;

const Skill = styled.span`
  margin-right: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background-color: #eee;
  border-radius: 20px;
`;

const EducationContainer = styled.div`
  margin-top: 2rem;
`;

const Degree = styled.h3`
  margin-bottom: 1rem;
`;

const Institution = styled.p`
  font-style: italic;
`;

function About() {
  return (
    <AboutContainer>
      
      <h1>Naman Shah</h1>
      <Bio>
      Hi there! My name is Naman Shah, and I am a 2nd Year Computer Engineering Student at DJ Sanghvi. In my free time, I enjoy playing cricket and reading books.

I am passionate about Technology, and my goal is to pursue a career in Web Development. Through my academic and professional experiences, I have developed skills in Problem-solving, and I am excited to apply them in future projects and opportunities.
      </Bio>
      <SkillsContainer>
        <h2>Skills</h2>
        <Skill>React</Skill>
        <Skill>C</Skill>
        <Skill>C++</Skill>
        <Skill>JavaScript</Skill>
        <Skill>HTML</Skill>
        <Skill>CSS</Skill>
        <Skill>MySQL</Skill>
        <Skill>Python</Skill>
        <Skill>Java</Skill>
      </SkillsContainer>
      <EducationContainer>
        <h2>Education</h2>
        <Degree>B.E in Computer Engineering</Degree>
        <Institution>Dwarkadas.J.Sanghvi</Institution>
        <p>9.05 CGPA</p>
      </EducationContainer>
    </AboutContainer>
  );
}

export default About;


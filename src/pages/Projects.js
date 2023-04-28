import React from "react";
import styled from "styled-components";

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const ProjectCard = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-bottom: 2rem;
  max-width: 600px;
  width: 100%;
`;

const ProjectTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const ProjectLink = styled.a`
  background-color: #4caf50;
  border-radius: 4px;
  color: #fff;
  display: inline-block;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

const Projects = () => {
  const projects = [
    {
      title: "Food Managing App",
      description:
        "Developed a food recipe app using React that allows users to search for food, add it to favorites, and change themes. Utilized the Spoonacular API to retrieve food data. Implemented responsive design using CSS and HTML.",
      link: "https://react-food-app-tau.vercel.app/",
    },
    {
      title: "Contact Form",
      description:
        "This is a simple contact form built using PHP and HTML, with error checking included. This contact form includes error checking to ensure that all required form fields are filled.",
      link: "https://github.com/namanshah22/contactform",
    },
    {
      title: "Loads-API Manager",
      description:
        "This is a Spring Boot project that allows you to manage load details using RESTful APIs. The project uses MySQL as the database to store the data.",
      link: "https://github.com/namanshah22/loads-api",
    },
    {
      title: "Taxi Inquiry Service",
      description:
        "This is a simple web application for taxi inquiries. Users can submit their inquiry through a form and receive a confirmation page.",
      link: "https://my-taxi-inquiry-app.vercel.app/",
    },
    {
      title: "PDF Form Submission and Database Storage System",
      description:
        "This project is a web page containing a form that captures user data, including Name, Phone Number, and City. Upon submission of the form, a unique UUID will be generated, a PDF will be created containing the entered data, and the form data will be stored in a database.",
      link: "https://github.com/namanshah22/form-submission-with-pdf-creation",
    },
    {
      title: "PHP Login and Registration Form",
      description:
        "This is a simple PHP web application that allows users to register for an account and log in using their credentials. The application is built using PHP and MySQL and includes a security feature for hashing passwords.",
      link: "https://github.com/namanshah22/login-and-registration-form",
    },
  ];

  return (
    <ProjectsContainer>
      <h1>Projects</h1>
      {projects.map((project) => (
        <ProjectCard key={project.title}>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
            Visit Website
          </ProjectLink>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;

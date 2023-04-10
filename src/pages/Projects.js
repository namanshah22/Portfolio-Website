import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Food Managing App",
      description: (
        <div>
          Developed a food recipe app using React that allows users to search for food, add it to favorites, and change themes.
          <br/>
          Utilized the Spoonacular API to retrieve food data.
          <br/>
          Implemented responsive design using CSS and HTML.
          </div>),
      link: "https://react-food-app-tau.vercel.app/",
    },
    {
      title: "Contact Form",
      description: (
        <div>
          This is a simple contact form built using PHP and HTML, with error checking included.
          <br/>
          This contact form includes error checking to ensure that all required form fields are filled
          
          </div>),
      link: "https://github.com/namanshah22/contactform",
    },
    {
      title: "Loads-API Manager",
      description: (
        <div>
          This is a Spring Boot project that allows you to manage load details using RESTful APIs.
          <br/>
          The project uses MySQL as the database to store the data.
          
          </div>),
      link: "https://github.com/namanshah22/loads-api",
    },
    
  ];

  return (
    <div>
      <h1>Projects</h1>
      {projects.map((project) => (
        <div key={project.title}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <a href={project.link}>Visit Website</a>
        </div>
      ))}
    </div>
  );
};

export default Projects;

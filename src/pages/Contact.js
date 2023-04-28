import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 500px;
`;

const Label = styled.label`
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #333;
`;

const Input = styled.input`
  margin-top: 0.5rem;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  background-color: #f5f5f5;
  color: #333;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #333;
  }
`;

const TextArea = styled.textarea`
  margin-top: 0.5rem;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  background-color: #f5f5f5;
  color: #333;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #333;
  }
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 1.2rem;

  &:hover {
    background-color: #fff;
    color: #333;
    border: 1px solid #333;
  }
`;

const ContactInfo = styled.p`
  margin-top: 2rem;
  font-size: 1.2rem;
  text-align: center;
  color: #333;
`;

function Contact() {
  return (
    <ContactContainer>
      <h1>Contact Me</h1>
      <Form>
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" placeholder="Enter your name" required />

        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" placeholder="Enter your email address" required />

        <Label htmlFor="message">Message</Label>
        <TextArea id="message" name="message" rows="5" placeholder="Enter your message" required></TextArea>

        <Button type="submit">Submit</Button>
      </Form>
      <ContactInfo>Feel free to contact me via email at namanshah22@gmail.com or through my LinkedIn profile at linkedin.com/in/namanshah22.</ContactInfo>
    </ContactContainer>
  );
}

export default Contact;
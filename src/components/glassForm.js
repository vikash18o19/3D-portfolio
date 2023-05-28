import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 10px;
  width: 60%;
`;

const FormHeading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  width: 100%;
`;

const FormLabel = styled.label`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  width: 25vw;
`;

const FormButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const GlassForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <FormContainer>
      <FormHeading>Contact Me 👇</FormHeading>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>Name</FormLabel>
          <FormInput type="text" name="name" required />
        </FormGroup>
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <FormInput type="email" name="email" required />
        </FormGroup>
        <FormGroup>
          <FormLabel>Contact No</FormLabel>
          <FormInput type="tel" name="contact" required />
        </FormGroup>
        <FormGroup>
          <FormLabel>Message</FormLabel>
          <FormInput as="textarea" name="message" rows="4" required />
        </FormGroup>
        <FormButton type="submit">Send</FormButton>
      </form>
    </FormContainer>
  );
};

export default GlassForm;

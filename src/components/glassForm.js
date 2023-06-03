import React, { useState } from "react";
import styled from "styled-components";
import LoadingSpinner from "./Spinner";

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
  height: 70%;
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
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    setLoading(true);
    setResponse(null);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("to send: ", formData);
    try {
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      if (response.status === 200) {
        setResponse("message sent");
      } else {
        setResponse("error while sending mail to vikash.18.dev@gmail.com");
      }
      handleAfterSubmit();
      setLoading(false);
    } catch (error) {
      handleAfterSubmit();
      console.error("Error:", error);
      setLoading(false);
    }
  };
  const handleAfterSubmit = () => {
    setName("");
    setEmail("");
    setMessage("");
    setNumber("");
    setTimeout(() => {
      setResponse(null);
    }, 5000);
  };
  return (
    <FormContainer>
      <FormHeading>Contact Me 👇</FormHeading>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>Name</FormLabel>
          <FormInput
            value={name}
            type="text"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
              console.log(e);
            }}
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <FormInput
            value={email}
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Contact No</FormLabel>
          <FormInput
            value={number}
            type="tel"
            name="number"
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Message</FormLabel>
          <FormInput
            value={message}
            as="textarea"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            required
          />
        </FormGroup>
        <FormButton type="submit">
          {loading ? <LoadingSpinner /> : "Send"}
        </FormButton>
      </form>
      {response && (
        <div>
          <h3>{response}</h3>
        </div>
      )}
    </FormContainer>
  );
};

export default GlassForm;

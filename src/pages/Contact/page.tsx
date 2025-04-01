import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import Confetti from "react-confetti";
import axios from "axios";
import SparePartForm from "./SparePartForm";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    query: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setSubmitted(false);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://bright-ewe-inherently.ngrok-free.appapi/send-email/",
        {
          email: formData.email,
          subject: formData.query,
          message: `Hello ${formData.name}, we have received your query: ${formData.query}`,
        }
      );
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email.");
    }
    setFormData({ name: "", email: "", business: "", query: "" });
  };

  return (
    <Container className="mt-5 position-relative">
      {submitted && (
        <>
          <Confetti
            numberOfPieces={100}
            recycle={false}
            gravity={0.2}
            initialVelocityY={5}
            wind={0.2}
          />
          <Confetti
            numberOfPieces={100}
            recycle={false}
            gravity={0.2}
            initialVelocityY={5}
            wind={-0.2}
          />
        </>
      )}
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h2 className="mb-4 text-center">Contact Us</h2>
          {submitted && (
            <Alert variant="success">We will contact you shortly!</Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="business">
              <Form.Label>Business or Job Field</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your business or job field"
                name="business"
                value={formData.business}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="query">
              <Form.Label>Your Query</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter your query"
                name="query"
                value={formData.query}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button
              variant="secondary"
              type="submit"
              className="w-100 fancy-button"
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SparePartForm;

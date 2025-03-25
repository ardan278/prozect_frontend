import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <Container>
        <Row className="justify-content-between">
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Your Company. All rights
              reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a href="/privacy-policy" className="text-light me-3">
              Privacy Policy
            </a>
            <a href="/terms-service" className="text-light">
              Terms of Service
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import NavBar from "./components/navBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer";
import { Container } from "react-bootstrap";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <NavBar />
        <Container className="flex-grow-1">
          <App />
        </Container>
      </Router>
      <Footer />
    </div>
  </React.StrictMode>
);

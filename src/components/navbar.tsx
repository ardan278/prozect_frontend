import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import image from "../assets/images/3135715.png";
import "../assets/styles/NavBar.css";
import SearchBar from "./SearchBar"; // Import the custom SearchBar

const navbar: React.FC = () => {
  return (
    <Navbar className="w-100 px-3 navbar-light bg-light" expand="lg">
      <Container fluid>
        {/* Move Brand to Far Left */}
        <div className="px-3">
          <Navbar.Brand href="/" className="me-auto fs-4 text-dark">
            VTSTechCorp
          </Navbar.Brand>
        </div>

        {/* User Login Icon (Always Visible) */}
        <Nav.Link as={NavLink} to="/admin" className="fs-4 text-dark me-3">
          <img
            src={image}
            alt="User Icon"
            width="40"
            height="40"
            style={{ borderRadius: "50%" }}
          />
        </Nav.Link>

        {/* Navbar Toggle (Sandwich Icon) */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto my-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              end
              className="fs-5 my-2 px-4 py-3 text-dark nav-link-hover"
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/about"
              className="fs-5 my-2 px-4 py-3 text-dark nav-link-hover"
            >
              About
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/contact"
              className="fs-5 my-2 px-4 py-3 text-dark nav-link-hover"
            >
              Contact
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/forms"
              end
              className="fs-5 my-2 px-4 py-3 text-dark nav-link-hover"
            >
              Forms
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/services"
              end
              className="fs-5 my-2 px-4 py-3 text-dark nav-link-hover"
            >
              Services
            </Nav.Link>
          </Nav>

          {/* Replace Old Search Bar with SearchBar Component */}
          <div className="search-bar-container ms-auto">
            <SearchBar />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navbar;

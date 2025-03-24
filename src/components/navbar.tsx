import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";

const NavBar: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="w-100 px-3">
      <Container fluid>
        {/* Move Brand to Far Left */}
        <Navbar.Brand href="/" className="me-auto fs-4">VTSTechCorp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={NavLink} to="/" end className="fs-5 py-2 px-4">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="fs-5 py-2 px-4">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="fs-5 py-2 px-4">
              Contact
            </Nav.Link>
            <Nav.Link as={NavLink} to="/forms" end className="fs-5 py-2 px-4">
              Forms
            </Nav.Link>
          </Nav>
          {/* Search Bar Stays on the Right */}
          <Form className="d-flex ms-auto">
            <FormControl type="search" placeholder="Search" className="me-2" style={{ height: "45px", fontSize: "1.2rem" }} />
            <Button variant="outline-light" className="btn-lg px-4">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

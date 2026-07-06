import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand>
          <img
            src="/tdw-logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Site Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#about" className="nav-link fs-5 text-shadow-small">
              About Me
            </Nav.Link>
            <Nav.Link
              href="#my-work"
              className="nav-link fs-5 text-shadow-small"
            >
              My Work
            </Nav.Link>
            <Nav.Link
              href="#services"
              className="nav-link fs-5 text-shadow-small"
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className="nav-link fs-5 text-shadow-small"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

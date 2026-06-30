import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand>
          <img
            src="https://placehold.co/30x30"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Site Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#about" className="nav-link">
              About Me
            </Nav.Link>
            <Nav.Link href="#my-work" className="nav-link">
              My Work
            </Nav.Link>
            <Nav.Link href="#services" className="nav-link">
              Services
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-link">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

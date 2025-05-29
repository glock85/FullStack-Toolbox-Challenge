import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export const NavbarComponent = () => {
  return (
    <Navbar
      expand="lg"
      className="bg-body-"
      style={{ backgroundColor: "#7434eb" }}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          style={{ color: "white", fontSize: "1.5rem" }}
        >
          React Test App
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

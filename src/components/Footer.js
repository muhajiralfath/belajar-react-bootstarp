import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">SMAN 1 Pulokukon</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Copyright Allright reserved</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Footer;

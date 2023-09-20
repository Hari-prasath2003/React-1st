import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Login from "./Login";
import { useState } from "react";
import Register from "./Register";
const Anchor = () => {
  const [show, setShow] = useState(false);

  const [popup, setPopup] = useState(false);
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid className="cn ">
          <Navbar.Brand className="tit">Electric Cars</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="lnk">
              <Nav.Link href="#home" id="lk">
                Home
              </Nav.Link>
              <Nav.Link href="#about" id="lk">
                About
              </Nav.Link>
              <Nav.Link href="#tour" id="lk">
                Car Info
              </Nav.Link>
              <Nav.Link
                id="lk"
                onClick={() => {
                  setShow(true);
                }}
              >
                Login
              </Nav.Link>
              <Nav.Link
                id="lk"
                onClick={() => {
                  setPopup(true);
                }}
              >
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Login show={show} setShow={setShow} />
      <Register popup={popup} setPopup={setPopup} />
    </div>
  );
};

export default Anchor;

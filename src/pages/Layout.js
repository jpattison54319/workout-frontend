import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Layout = () => {
  return (
    <>
    <Navbar collapseOnSelect bg="light" expand="xxlg">
      <Container>
        <Navbar.Brand href="#home">SkyRocket Gains</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
            <Link to="/workout">Workout</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <Outlet />
    </>
  )
};

export default Layout;
<nav>
<Container>
    <Row>
  <Col>
    <Link to="/">Home</Link>
  </Col>
  <Col>
    <Link to="/blogs">Blogs</Link>
  </Col>
  <Col>
    <Link to="/contact">Contact</Link>
  </Col>
  <Col>
    <Link to="/login">Login</Link>
  </Col>
  </Row>
</Container>
</nav>
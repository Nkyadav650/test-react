import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header({setPage}) {
  return (
    <Navbar className="bg-dark" variant="dark">
      <Container>
        <Navbar.Brand className="navbar-heading" onClick={() => setPage("home")}>
          Cine Tracker
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link onClick={() => setPage("home")}>
              Home
            </Nav.Link>
            <Nav.Link onClick={() => setPage("Watchlist")}>
              Watchlist
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

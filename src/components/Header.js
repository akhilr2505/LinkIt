import React from "react";
import "./Header.css";
import { Navbar, Form, Nav, Button, FormControl } from "react-bootstrap";

const Header = ({handleLogOut}) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">L!NK!T</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Saved Links</Nav.Link>
          <Nav.Link href="#pricing">Profile</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
          <button onClick={handleLogOut}>Log Out</button>
        </Form>
      </Navbar>
    </div>
  );
};

export default Header;

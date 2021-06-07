import React from "react";
import "./Header.css";
import { Navbar, Form, Nav, Button, FormControl } from "react-bootstrap";

const Header = ({handleLogOut}) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">L!NK!T</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">DashBoard</Nav.Link>
          <Nav.Link href="#features">Saved Links</Nav.Link>
          <Nav.Link href="#pricing">Profile</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <button >  Search  </button> <span>   </span>
        </Form>
        <button onClick={handleLogOut}>Log Out</button>
      </Navbar>
    </div>
  );
};

export default Header;

import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Navbar,
  Nav,
} from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import AppRouteSwitch from './AppRouteSwitch';

function MenuLink({ children, ...props }) {
  return (
    <Link style={{ textDecoration: 'none' }} {...props}>{children}</Link>
  );
}

MenuLink.propTypes = {
  children: PropTypes.node,
};

export default function AppNavBar() {
  return (
    <Router>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>Uber Delivery</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as="div"><MenuLink to="/">Home</MenuLink></Nav.Link>
            <Nav.Link as="div"><MenuLink to="/planets">Planets</MenuLink></Nav.Link>
            <Nav.Link as="div"><MenuLink to="/character">Character</MenuLink></Nav.Link>
            <Nav.Link as="div"><MenuLink to="/restaurants">Restaurants</MenuLink></Nav.Link>
            {/* eslint-disable-next-line max-len */}
            {/* <Nav.Link as="div"><MenuLink to="/restaurants/:id/items">Items</MenuLink></Nav.Link> */}
            {/* <Nav.Link as="div"><MenuLink to="/restaurant">Restaurant</MenuLink></Nav.Link> */}
            {/* <Nav.Link as="div"><MenuLink to="/restaurants/:id/item">Item</MenuLink></Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      <AppRouteSwitch />
    </Router>

  );
}

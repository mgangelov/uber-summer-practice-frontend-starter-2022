import React from 'react';
import PropTypes from 'prop-types';
import { useCookies } from 'react-cookie';
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
  const [cookies, setCookie] = useCookies(['x-access-tokens']);
  const isTokenNull = cookies['x-access-tokens'] === 'null';

  return (
    <Router>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>Uber Delivery</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as="div"><MenuLink to="/login">Login</MenuLink></Nav.Link>
            <Nav.Link as="div"><MenuLink to="/register">Register</MenuLink></Nav.Link>
            {!isTokenNull && <Nav.Link as="div"><MenuLink to="/orders">Open Orders</MenuLink></Nav.Link>}
            {!isTokenNull && <Nav.Link as="div"><MenuLink to="/delivery/">Order</MenuLink></Nav.Link>}
            {!isTokenNull && <Nav.Link as="div"><MenuLink to="/statistics">Statistics</MenuLink></Nav.Link>}
            {!isTokenNull && <Nav.Link as="div"><MenuLink to="/edit-profile">Edit Profile</MenuLink></Nav.Link>}
            {!isTokenNull && (
            <Nav.Link
              as="div"
              onClick={() => {
                setCookie('x-access-tokens', null);
              }}
            >
              <MenuLink to="/login">
                Log out
              </MenuLink>
            </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
      <AppRouteSwitch />
    </Router>

  );
}

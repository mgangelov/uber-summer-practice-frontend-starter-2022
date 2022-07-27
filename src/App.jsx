import React from 'react';
import './App.css';
import {
  Container, Row,
} from 'react-bootstrap';
import AppNavBar from './components/navigation/AppNavBar';

function App() {
  return (
    <Container className="App">
      <Row className="header">
        <AppNavBar />
      </Row>
    </Container>
  );
}

export default App;

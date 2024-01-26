import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavbarP from './Navbar';
import SideMenu from './Sidemenu';
import MainContent from './Main';

const App = () => {
  return (
    <Container fluid>
      <Row>
        <Col md="2">
          <SideMenu />
        </Col>
        <Col md="10">
          <NavbarP />
          <MainContent />
        </Col>
      </Row>
    </Container>
  );
};

export default App;

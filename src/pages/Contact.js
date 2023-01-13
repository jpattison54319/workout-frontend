import React from 'react';
import Collapsible from 'react-collapsible';
import styled from 'styled-components';
import {Accordion} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';



const Contact = () => {
    return (
        <Accordion >
        <Container>
            <Row>
                <Col>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #3</Accordion.Header>
            <Accordion.Body>
                This Sucks
            </Accordion.Body>
            </Accordion.Item>
          </Col>
          <Col>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body>
              THIS SUCKS MORE
            </Accordion.Body>
          </Accordion.Item>
          </Col>
          </Row>
        </Container>
        </Accordion>
      );
  };
  
  export default Contact;
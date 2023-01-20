import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const Contact = () => {

    return (
        <>
        <Container>
            <Row>
                <Col>
                <Form>
                    <Form.Select aria-label="InclineChestExercise">
                    <option>Choose Exercise</option>
                    <option value="Dumbbell Incline Bench">Dumbbell Incline Bench</option>
                    <option value="Barbell Incline Bench">Barbell Incline Bench</option>
                    <option value="Machine Incline Bench">Machine Incline Bench</option>
                    </Form.Select>
                    </Form>
                </Col>
                <Col>
                <Form>
                <Form.Control
        type="text"
        id="InclineChest1RepMax"
      />
      </Form>
                </Col>



            </Row>
            <Button variant="primary" type="submit">
        Submit
      </Button>




        </Container>
        
        
        
        </>
    );





  };
  
  export default Contact;
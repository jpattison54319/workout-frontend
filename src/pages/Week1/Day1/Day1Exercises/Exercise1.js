import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {data} from '../../../../data'

const Exercise1 = (props) => {





    return (
        <Card style={{ width: '30rem' }}>
          <Card.Body>
            <Card.Subtitle>Exercise 1 of 5</Card.Subtitle>
            <Card.Title>{data[0].w1d1e1}</Card.Title>
            <Container>
            <Row>
                <Col style={{border: '.5px solid black'}}>
                <h6>Equipment</h6>
                <p>Smith Machine</p>
                </Col>
                <Col style={{border: '.5px solid black'}}>
                <h6>Sets</h6>
                <p id="w1d1e1s">{props.name}</p>
                </Col>
            </Row>
            <Row>
                <Col style={{border: '.5px solid black'}}>
                <h6>Reps</h6>
                <p>10-12</p>
                </Col>
                <Col style={{border: '.5px solid black'}}>
                <h6>Rest</h6>
                <p>3-5 minutes</p>
                </Col>
            </Row>
            </Container>
            <br></br>
            <div className="text-center">
            <Button variant="primary">Mark Completed</Button>
            </div>
            <br></br>
          </Card.Body>
        </Card>
      );
    }
  export default Exercise1;
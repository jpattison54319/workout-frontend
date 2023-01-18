import { Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Box from '@mui/material/Box'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import Week1Carousel from './Week1/Week1Carousel';
import Week2Carousel from './Week2/Week2Carousel'
import Week3Carousel from './Week3/Week3Carousel'
import Week4Carousel from './Week4/Week4Carousel'
import Week5Carousel from './Week5/Week5Carousel'
import Week6Carousel from './Week6/Week6Carousel'
import Week7Carousel from './Week7/Week7Carousel'


const inf = 9999999999999;

const Workout = () => {

    const navigate = useNavigate();

    return (
        <>
        <Week1Carousel/>
        <Week2Carousel/>
        <Week3Carousel/>
        <Week4Carousel/>
        <Week5Carousel/>
        <Week6Carousel/>
        <Week7Carousel/>
        </>
    );
    }
  
  export default Workout;
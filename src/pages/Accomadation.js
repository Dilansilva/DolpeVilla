import React,{useState,useEffect} from "react";

import '../../src/App.css';
import { Col, Container, Row, Card,  Badge,Carousel } from "react-bootstrap";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import MiddleBar from "../components/MiddleBar";
import MiddleBarPhoneView from "../components/MiddleBarPhoneView";
import {useNavigate} from "react-router-dom";
import AccModal from "../components/AccModal";

import {widthScreen} from "../constant/Constant";
import Header from "../components/Header";

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width
  };
}

const itemDataAttic = [
    {
        img: "https://i.postimg.cc/nrbwmrvW/1344168.jpg",
        title: 'Breakfast',
      },
      {
        img: "https://i.postimg.cc/cJvw5jy3/Whats-App-Image-2022-03-19-at-23-24-11.jpg",
        title: 'Burger',
      },
      {
        img: "https://i.postimg.cc/KYGBxwy4/Whats-App-Image-2022-03-19-at-23-27-04.jpg",
        title: 'Camera',
      },
      {
        img: "https://i.postimg.cc/QVGgZqDb/1344166.jpg",
        title: 'Coffee',
      },
      {
        img: "https://i.postimg.cc/nh1WTXK5/1344169.jpg",
        title: 'Hats',
      },
      {
        img: "https://i.postimg.cc/VNGVQ2VW/1344171.jpg",
        title: 'Honey',
      },
      {
        img: "https://i.postimg.cc/tJRVHmnp/1344173.jpg",
        title: 'Basketball',
      }, {
        img: "https://i.postimg.cc/3Rdrw0yG/IMG-2638.jpg",
        title: 'Basketball',
      },
      {
        img: "https://i.postimg.cc/TP2YZ4fC/IMG-2642.jpg",
        title: 'Basketball',
      },
];

const itemDataDeluxe= [
    {
        img: "https://i.postimg.cc/QMLrBDyf/1322202-b6fc28e9bcde277789e1.jpg",
        title: 'Breakfast',
      },
      {
        img: "https://i.postimg.cc/sg8c1BBh/1322200-98b63ba80899e748f22b.jpg",
        title: 'Burger',
      },
      {
        img: "https://i.postimg.cc/QMVY6qJz/237430245.jpg",
        title: 'Camera',
      },
      {
        img: "https://i.postimg.cc/D01MryPy/237430324.jpg",
        title: 'Coffee',
      },
      {
        img: "https://i.postimg.cc/L6M7HLmq/285441365.jpg",
        title: 'Hats',
      },
      {
        img: "https://i.postimg.cc/tgfS8Vr4/69235788-115221059837585-7834650883462791168-n.jpg",
        title: 'Honey',
      },
      {
        img: "https://i.postimg.cc/Prz7NJqS/1322198.jpg",
        title: 'Basketball',
      },
      {
        img: "https://i.postimg.cc/wxs8x9Jr/1322204.jpg",
        title: 'Basketball',
      },
      {
        img: "https://i.postimg.cc/3R46wZyG/1322230.jpg",
        title: 'Basketball',
      },
]

const atticDetails = <div>
<div>
    <Badge bg="light" text="dark">Size 47 m²</Badge>{" "}
    <Badge bg="light" text="dark">Private kitchenette</Badge>{" "}
    <Badge bg="light" text="dark">Attached bathroom</Badge>{" "}
    <Badge bg="light" text="dark">Mini Bar</Badge>{" "}<br/>

    <Badge bg="light" text="dark">Garden View</Badge>{" "}
    <Badge bg="light" text="dark">Pool View</Badge>{" "}
    <Badge bg="light" text="dark">Mountain View</Badge>{" "}
    <Badge bg="light" text="dark">Waterfall View</Badge>{" "}<br/>

    <Badge bg="light" text="dark">Balcony</Badge>{" "}
    <Badge bg="light" text="dark">Flat-Screen TV</Badge>{" "}
    <Badge bg="light" text="dark">Free WiFi</Badge>{" "}
    <Badge bg="light" text="dark">AirCondition</Badge>{" "}
    <Badge bg="light" text="dark">Fan</Badge>{" "}<br/><br/>
</div>
<div>
    <b>In your private kitchenette: </b>
</div>

<div>
    <ul className="unOrderdList">
        <li className="list"><a href="#home">Electric kettle</a></li>
        <li className="list"><a href="#news">Cleaning Products</a></li>
        <li className="list"><a href="#contact">Mini Bar</a></li>
    </ul>
</div>

<div>
    <b>In your private bathroom: </b>
</div>

<div>
    <ul className="unOrderdList">
        <li className="list"><a href="#home">Free toiletries</a></li>
        <li className="list"><a href="#news">Bathrobe</a></li>
        <li className="list"><a href="#contact">Bathtub or Shower</a></li>
        <li className="list"><a href="#home">towels</a></li>
        <li className="list"><a href="#news">Toilet Paper</a></li>
        <li className="list"><a href="#contact">Hairdryer</a></li>
    </ul>
</div>

<div><b>View:</b></div>

<div>
    <ul className="unOrderdList">
        <li className="list"><a href="#home">Garden View</a></li>
        <li className="list"><a href="#news">Pool View</a></li>
        <li className="list"><a href="#contact">Mountain View</a></li>
        <li className="list"><a href="#home">River View</a></li>
        <li className="list"><a href="#news">Waterfall View</a></li>
        <li className="list"><a href="#contact">Landmark VIew</a></li>
    </ul>
</div>

<div><b>Facilities :</b></div>

<div>
    <ul className="unOrderdList">
        <li className="list"><a href="#home">Entire unit wheelchair accessible</a></li>
        <li className="list"><a href="#news">Cleaning products</a></li>
        <li className="list"><a href="#contact">Hot tub</a></li>
        <li className="list"><a href="#home">Kitchenette</a></li>
        <li className="list"><a href="#news">Satellite channels</a></li>
        <li className="list"><a href="#contact">Sitting area</a></li>
        <li className="list"><a href="#home">Sofa</a></li>
        <li className="list"><a href="#news">Flat-screen TV</a></li>
        <li className="list"><a href="#contact">Extra long beds (> 6.5 ft)</a></li>
        <li className="list"><a href="#home">Minibar</a></li>
        <li className="list"><a href="#news">Socket near the bed</a></li>
        <li className="list"><a href="#contact">Tea/Coffee maker</a></li>
        <li className="list"><a href="#home">TV</a></li>
        <li className="list"><a href="#home">Board / card games</a></li>
        <li className="list"><a href="#home">Private entrance</a></li>
        <li className="list"><a href="#home">Mosquito net</a></li>
        <li className="list"><a href="#home">Fold-up bed</a></li>
        <li className="list"><a href="#home">Wake-up service/Alarm clock</a></li>
        <li className="list"><a href="#home">Books, DVDs music for children</a></li>
        <li className="list"><a href="#home">Pay-per-view channels</a></li>
        <li className="list"><a href="#home">Linens</a></li>
        <li className="list"><a href="#home">Air Condition</a></li>
        <li className="list"><a href="#home">Shoe Rack</a></li>
    </ul>
</div>

<div><b>Smoking: </b>Smoking Not allowed inside the room</div><br/>
<div><b>Parking: </b>Available</div>
</div>

const deluxDetails =  <div>
<div>
    <Badge bg="light" text="dark">Size 47 m²</Badge>{" "}
    <Badge bg="light" text="dark">Private kitchenette</Badge>{" "}
    <Badge bg="light" text="dark">Attached bathroom</Badge>{" "}
    <Badge bg="light" text="dark">Garden View</Badge>{" "}<br/>

    <Badge bg="light" text="dark">Pool View</Badge>{" "}
    <Badge bg="light" text="dark">Mountain View</Badge>{" "}
    <Badge bg="light" text="dark">Waterfall View</Badge>{" "}<br/>

    <Badge bg="light" text="dark">Balcony</Badge>{" "}
    <Badge bg="light" text="dark">Flat-Screen TV</Badge>{" "}
    <Badge bg="light" text="dark">Free WiFi</Badge>{" "}
    <Badge bg="light" text="dark">Mini Bar</Badge>{" "}
</div>
<div>
    <b>In your private kitchenette: </b>
</div>

<div>
    <ul className="unOrderdList">
        <li className="list"><a href="#home">Electric kettle</a></li>
        <li className="list"><a href="#news">Cleaning Products</a></li>
        <li className="list"><a href="#contact">Mini Bar</a></li>
    </ul>
</div>

<div>
    <b>In your private bathroom: </b>
</div>

<div>
    <ul className="unOrderdList">
        <li className="list"><a href="#home">Free toiletries</a></li>
        <li className="list"><a href="#news">Bathrobe</a></li>
        <li className="list"><a href="#contact">Bathtub or Shower</a></li>
        <li className="list"><a href="#home">towels</a></li>
        <li className="list"><a href="#news">Toilet Paper</a></li>
        <li className="list"><a href="#contact">Hairdryer</a></li>
    </ul>
</div>

<div><b>View:</b></div>

<div>
    <ul className="unOrderdList">
        <li className="list"><a href="#home">Garden View</a></li>
        <li className="list"><a href="#news">Pool View</a></li>
        <li className="list"><a href="#contact">Mountain View</a></li>
        <li className="list"><a href="#home">River View</a></li>
        <li className="list"><a href="#news">Waterfall View</a></li>
        <li className="list"><a href="#contact">Landmark VIew</a></li>
    </ul>
</div>

<div><b>Facilities :</b></div>

<div>
    <ul className="unOrderdList">
        <li className="list"><a href="#home">Entire unit wheelchair accessible</a></li>
        <li className="list"><a href="#news">Cleaning products</a></li>
        <li className="list"><a href="#contact">Hot tub</a></li>
        <li className="list"><a href="#home">Kitchenette</a></li>
        <li className="list"><a href="#news">Satellite channels</a></li>
        <li className="list"><a href="#contact">Sitting area</a></li>
        <li className="list"><a href="#home">Sofa</a></li>
        <li className="list"><a href="#news">Flat-screen TV</a></li>
        <li className="list"><a href="#contact">Extra long beds (> 6.5 ft)</a></li>
        <li className="list"><a href="#home">Minibar</a></li>
        <li className="list"><a href="#news">Socket near the bed</a></li>
        <li className="list"><a href="#contact">Tea/Coffee maker</a></li>
        <li className="list"><a href="#home">TV</a></li>
        <li className="list"><a href="#home">Board / card games</a></li>
        <li className="list"><a href="#home">Private entrance</a></li>
        <li className="list"><a href="#home">Mosquito net</a></li>
        <li className="list"><a href="#home">Fold-up bed</a></li>
        <li className="list"><a href="#home">Wake-up service/Alarm clock</a></li>
        <li className="list"><a href="#home">Books, DVDs music for children</a></li>
        <li className="list"><a href="#home">Pay-per-view channels</a></li>
        <li className="list"><a href="#home">Linens</a></li>
    </ul>
</div>

<div><b>Smoking: </b>Smoking Not allowed inside the room</div><br/>
<div><b>Parking: </b>Available</div>
</div>

const standardDetails = <div>
<div>
    <Badge bg="light" text="dark">Size 47 m²</Badge>{" "}
    <Badge bg="light" text="dark">Landmark View</Badge>{" "}
    <Badge bg="light" text="dark">Attached bathroom</Badge>{" "}
    <Badge bg="light" text="dark">Patio</Badge>{" "}
    <Badge bg="light" text="dark">Garden View</Badge>{" "}<br/>

    <Badge bg="light" text="dark">Pool View</Badge>{" "}
    <Badge bg="light" text="dark">Mountain View</Badge>{" "}
    <Badge bg="light" text="dark">Waterfall View</Badge>{" "}<br/>

    <Badge bg="light" text="dark">Terrace</Badge>{" "}
    <Badge bg="light" text="dark">Flat-Screen TV</Badge>{" "}
    <Badge bg="light" text="dark">Free WiFi</Badge>{" "}
    <Badge bg="light" text="dark">Sound Proof</Badge>{" "}
</div>

<div>
    <b>In your private bathroom: </b>
</div>

<div>
    <ul className="unOrderdList">
        <li className="list"><a href="#home">Free toiletries</a></li>
        <li className="list"><a href="#news">Bathrobe</a></li>
        <li className="list"><a href="#contact">Bathtub or Shower</a></li>
        <li className="list"><a href="#home">towels</a></li>
        <li className="list"><a href="#news">Toilet Paper</a></li>
        <li className="list"><a href="#contact">Hairdryer</a></li>
    </ul>
</div>

<div><b>View:</b></div>

<div>
    <ul className="unOrderdList">
        <li className="list"><a href="#home">Garden View</a></li>
        <li className="list"><a href="#news">Pool View</a></li>
        <li className="list"><a href="#contact">Mountain View</a></li>
        <li className="list"><a href="#home">River View</a></li>
        <li className="list"><a href="#news">Waterfall View</a></li>
        <li className="list"><a href="#contact">Landmark VIew</a></li>
    </ul>
</div>

<div><b>Facilities :</b></div>

<div>
    <ul className="unOrderdList">
        <li className="list"><a href="#news">Cleaning products</a></li>
        <li className="list"><a href="#contact">Hot tub</a></li>
        <li className="list"><a href="#home">Linens</a></li>
        <li className="list"><a href="#home">Kitchenette</a></li>
        <li className="list"><a href="#home">Satellite channels</a></li>
        <li className="list"><a href="#contact">Sitting area</a></li>
        <li className="list"><a href="#home">Fan</a></li>
        <li className="list"><a href="#news">Flat-screen TV</a></li>
        <li className="list"><a href="#contact">Pay-per-view channels</a></li>
        <li className="list"><a href="#home">Minibar</a></li>
        <li className="list"><a href="#news">Socket near the bed</a></li>
        <li className="list"><a href="#contact">Tea/Coffee maker</a></li>
        <li className="list"><a href="#home">TV</a></li>
        <li className="list"><a href="#home">Board / card games</a></li>
        <li className="list"><a href="#home">Private entrance</a></li>
        <li className="list"><a href="#home">Mosquito net</a></li>
        <li className="list"><a href="#home">Wake-up service/Alarm clock</a></li>
        <li className="list"><a href="#home">Dining table</a></li>
        <li className="list"><a href="#home">Books, DVDs music for children</a></li>
        <li className="list"><a href="#home">Wardrobe or closet</a></li>
        
    </ul>
</div>

<div><b>Smoking: </b>Smoking Not allowed inside the room</div><br/>
<div><b>Parking: </b>Available</div>
</div>

const budgetDetails = <div>
<div>
    <Badge bg="light" text="dark">Size 47 m²</Badge>{" "}
    <Badge bg="light" text="dark">Landmark View</Badge>{" "}
    <Badge bg="light" text="dark">Attached bathroom</Badge>{" "}
    <Badge bg="light" text="dark">Patio</Badge>{" "}
    <Badge bg="light" text="dark">Garden View</Badge>{" "}<br/>

    <Badge bg="light" text="dark">Pool View</Badge>{" "}
    <Badge bg="light" text="dark">Mountain View</Badge>{" "}
    <Badge bg="light" text="dark">Waterfall View</Badge>{" "}<br/>

    <Badge bg="light" text="dark">Terrace</Badge>{" "}
    <Badge bg="light" text="dark">Free WiFi</Badge>{" "}
</div>

<div>
    <b>In your private bathroom: </b>
</div>

<div>
    <ul className="unOrderdList">
        <li className="list"><a href="#home">Free toiletries</a></li>
        <li className="list"><a href="#news">Bathrobe</a></li>
        <li className="list"><a href="#contact">Bathtub or Shower</a></li>
        <li className="list"><a href="#home">towels</a></li>
        <li className="list"><a href="#news">Toilet Paper</a></li>
        <li className="list"><a href="#contact">Hairdryer</a></li>
    </ul>
</div>

<div><b>View:</b></div>

<div>
    <ul className="unOrderdList">
        <li className="list"><a href="#home">Garden View</a></li>
        <li className="list"><a href="#news">Pool View</a></li>
        <li className="list"><a href="#contact">Mountain View</a></li>
        <li className="list"><a href="#home">River View</a></li>
        <li className="list"><a href="#news">Waterfall View</a></li>
        <li className="list"><a href="#contact">Landmark VIew</a></li>
    </ul>
</div>

<div><b>Facilities :</b></div>

<div>
    <ul className="unOrderdList">
        <li className="list"><a href="#news">Cleaning products</a></li>
        <li className="list"><a href="#contact">Hand Sanitizer</a></li>
        <li className="list"><a href="#home">Linens</a></li>
        <li className="list"><a href="#home">Socket near the bed</a></li>
        <li className="list"><a href="#home">Board / card games</a></li>                                <li><a href="#news">Satellite channels</a></li>
        <li className="list"><a href="#contact">Sitting area</a></li>
        <li className="list"><a href="#home">Mosquito net</a></li>
        <li className="list"><a href="#news">Dining table</a></li>
        <li className="list"><a href="#contact">Private entrance</a></li>
        <li className="list"><a href="#home">Fan</a></li>
        <li className="list"><a href="#news">Patio</a></li>
        <li className="list"><a href="#contact">Wake-up service/Alarm clock</a></li>
    </ul>
</div>

<div><b>Smoking: </b>Smoking Not allowed inside the room</div><br/>
<div><b>Parking: </b>Available</div>
</div>

const itemDatastandard = [
    {
        img: "https://i.postimg.cc/xdh4rxGB/1322864-3ee46b7fd4122724c899.jpg",
        title: 'Breakfast',
      },
      {
        img: "https://i.postimg.cc/JhB24vL3/239340734.jpg",
        title: 'Burger',
      },
      {
        img: "https://i.postimg.cc/mgpvr7F4/287522383.jpg",
        title: 'Camera',
      },
      {
        img: "https://i.postimg.cc/QdzzDsRx/287522386.jpg",
        title: 'Coffee',
      },
      {
        img: "https://i.postimg.cc/x1KS6XkV/1322865.jpg",
        title: 'Hats',
      },
      {
        img: "https://i.postimg.cc/BQpTHggr/1322866.jpg",
        title: 'Honey',
      },
      {
        img: "https://i.postimg.cc/DzPnwSFP/1322867.jpg",
        title: 'Basketball',
      },
      {
        img: "https://i.postimg.cc/YCNJ1TVp/1322868.jpg",
        title: 'Fern',
      },
      {
        img: "https://i.postimg.cc/BZYZFPFh/1322869.jpg",
        title: 'Mushrooms',
      },
]

const itemDataBudget = [
    {
        img: "https://i.postimg.cc/ZRzxF1xY/1344124-518796593e48071df6c2.jpg",
        title: 'Breakfast',
      },
      {
        img: "https://i.postimg.cc/52VF7k47/268589856-653726802653672-2667501053886997262-n.jpg",
        title: 'Burger',
      },
      {
        img: "https://i.postimg.cc/RCJ6Mzqp/1344111.jpg",
        title: 'Camera',
      },
      {
        img: "https://i.postimg.cc/Z54CFBHX/1344114.jpg",
        title: 'Coffee',
      },
      {
        img: "https://i.postimg.cc/YS2LkGmQ/1344125.jpg",
        title: 'Hats',
      },
      {
        img: "https://i.postimg.cc/4NCKyF9f/1344214.jpg",
        title: 'Honey',
      },
      {
        img: "https://i.postimg.cc/j2nstKXH/1344215.jpg",
        title: 'Basketball',
      },
      {
        img: "https://i.postimg.cc/rph0pVS3/1344216.jpg",
        title: 'Fern',
      },
      {
        img: "https://i.postimg.cc/BtWJvyYd/1344217.jpg",
        title: 'Mushrooms',
      },
]
  

const Accomadation = () => {

  const navigate = useNavigate();

  function useWindowDimensions() {
      const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowDimensions;
  }

const {height,width} = useWindowDimensions();

    const [text,setText] = useState('accomadation');
    const middleSHow = () =>{
        if(text == 'accomadation'){
            return(
                <Container>
                <Row>
                    <Col sm={4}> 
                    <div className="d-grid gap-2">
                            <a className="button" onClick={() => {setText('accomadation')}}>ACCOMMODATION</a>
                            <a className="button" onClick={() => {setText('aticRoom')}}>ATTIC SUITE ROOM</a>
                            <a className="button" onClick={() => {setText('deluxeRoom')}}>DELUXE ROOM</a>
                            <a className="button" onClick={() => {setText('standardRoom')}}>STANDARD ROOM</a>
                            <a className="button" onClick={() => {setText('budget')}}>BUDGET VILLAS</a>
                        </div>
                    </Col>
                    <Col sm={8}>
                    <h4 className="dolpeText locationText">Relaxation , Beautiful view and in luxurious comfort</h4>
                     <p className="smallLocationText">
                     The Villa is made up of several beautifully suites tucked within the levelled landscape. 
                     making it one of the most beautiful views in Sri Lanka. There is ample space for parking 
                     and the suites with the view making it ideal for a quiet holiday of pure relaxation; for 
                     honeymooners or even for families. Each suites,rooms opens up to scenic views of the misty 
                     mountains,Ravana ella waterfall and is equipped with all modern amenities that ensure a 
                     luxurious, comfortable stay.<br/><br/>Guests have the option of booking this Whole Villa for a group to accommodate a maximum number of persons per room.
                     </p>
                    </Col>
                </Row>
            </Container>
            );
        } else if(text == 'aticRoom'){
            return(
                <Container>
                <Row>
                <Col sm={4}> 
                        <div className="d-grid gap-2">
                            <a className="button" onClick={() => {setText('accomadation')}}>ACCOMMODATION</a>
                            <a className="button" onClick={() => {setText('aticRoom')}}>ATTIC SUITE ROOM</a>
                            <a className="button" onClick={() => {setText('deluxeRoom')}}>DELUXE ROOM</a>
                            <a className="button" onClick={() => {setText('standardRoom')}}>STANDARD ROOM</a>
                            <a className="button" onClick={() => {setText('budget')}}>BUDGET VILLAS</a>
                        </div>
                    </Col>
                    <Col sm={8}>
                    <h4 className="dolpeText locationText">Attic Suite room</h4>
                        <p className="smallLocationText">
                        This elegant and spacious suite comes with a living and 
                        balcony area which opens out to the stunning views of the 
                        Ella Gap & the Ravana Ella Waterfall. The room is equipped 
                        with a large ensuite bathroom.<br/><br/>

                        The suite also comes with a kitchenette equipped with electric 
                        kettle, cutlery, glassware, crockery and includes a butler service 
                        to enhance the holiday experience.<br/><br/>

                        The rooms have a luxury carpet floor and elegant furnitures.Walk 
                        barefoot and feel the soothing comfort of the floors!<br/><br/>

                        The bathrooms are finished in titanium cement, completed with a 
                        shower cubicle with hot and cold water and a wash basin to 
                        complement the luxurious interior.
                        </p>
                    </Col>
                </Row>
            </Container>
            );
        } else if(text == 'deluxeRoom'){
            return(
                <Container>
                <Row>
                <Col sm={4}> 
                <div className="d-grid gap-2">
                            <a className="button" onClick={() => {setText('accomadation')}}>ACCOMMODATION</a>
                            <a className="button" onClick={() => {setText('aticRoom')}}>ATTIC SUITE ROOM</a>
                            <a className="button" onClick={() => {setText('deluxeRoom')}}>DELUXE ROOM</a>
                            <a className="button" onClick={() => {setText('standardRoom')}}>STANDARD ROOM</a>
                            <a className="button" onClick={() => {setText('budget')}}>BUDGET VILLAS</a>
                        </div>
                    </Col>
                    <Col sm={8}>
                    <h4 className="dolpeText locationText">Deluxe room</h4>
                         <p className="smallLocationText">
                         Super Deluxe rooms have its own private living area and offer breathtaking 
                         views of the Ella Gap and the Ravana Ella Waterfall that makes Dolape Villa 
                         Ella one of the most preferred Ella hotels in Sri Lanka to spend your 
                         precious holiday at.<br/><br/>

                        The veranda is ideal for lingering over breakfast, to watch a sunrise or to 
                        simply gaze at the magnificent Ella mountain range.<br/><br/>

                        The rooms have beautiful polished titanium cement floors and elegant furnitures.
                        Walk barefoot and feel the soothing comfort of the floors!<br/><br/>

                        The bathrooms are finished in titanium cement, completed with a bathtub with 
                        hot and cold water and a wash basin to complement the luxurious interior.

                         </p>
                    </Col>
                </Row>
            </Container>
            );
        } else if(text == 'standardRoom'){
            return(
                <Container>
                <Row>
                    <Col sm={4}> 
                    <div className="d-grid gap-2">
                            <a className="button" onClick={() => {setText('accomadation')}}>ACCOMMODATION</a>
                            <a className="button" onClick={() => {setText('aticRoom')}}>ATTIC SUITE ROOM</a>
                            <a className="button" onClick={() => {setText('deluxeRoom')}}>DELUXE ROOM</a>
                            <a className="button" onClick={() => {setText('standardRoom')}}>STANDARD ROOM</a>
                            <a className="button" onClick={() => {setText('budget')}}>BUDGET VILLAS</a>
                        </div>
                    </Col>
                    <Col sm={8}>
                    <h4 className="dolpeText locationText">Standard room</h4>
                        <p className="smallLocationText">
                        Deluxe rooms at Dolape Villa Ella are bright and cheery, offering 
                        excellent views of the Ella Gap and Ravana Ella Waterfall and designed 
                        with modern amenities that set it apart from the rest of the hotels Ella 
                        has to offer for a reasonable cost.<br/><br/>

                        Spend more time over breakfast in the spacious garden and enjoy the views 
                        of the Ella mountain range.<br/><br/>

                        The bathrooms are finished in titanium cement and include a rain shower 
                        with hot and cold water.<br/><br/>
                        </p>
                    </Col>
                </Row>
            </Container>
            );
        } else {
            return(
                <Container>
                <Row>
                    <Col sm={4}> 
                    <div className="d-grid gap-2">
                            <a className="button" onClick={() => {setText('accomadation')}}>ACCOMMODATION</a>
                            <a className="button" onClick={() => {setText('aticRoom')}}>ATTIC SUITE ROOM</a>
                            <a className="button" onClick={() => {setText('deluxeRoom')}}>DELUXE ROOM</a>
                            <a className="button" onClick={() => {setText('standardRoom')}}>STANDARD ROOM</a>
                            <a className="button" onClick={() => {setText('budget')}}>BUDGET VILLAS</a>
                        </div>
                    </Col>
                    <Col sm={8}>
                    <h4 className="dolpeText locationText">Budget Villas</h4>
                        <p className="smallLocationText">
                        This elegant budget suite comes with outdoor seating 
                        overlooking the stunning views of the Ella Gap & the 
                        Ravana Ella Waterfall. The room is equipped with a bathroom 
                        with shower, provided with hot & cold water.<br/><br/>

                        Spend more time over breakfast in the spacious Garden with 
                        a natural pool view and enjoy the views of the Ella mountain 
                        range.<br/>
                        </p>
                    </Col>
                </Row>
            </Container>
            );
        }
    }

    const showPictures = () => {
        if(text == 'accomadation'){
            return(
                <Row className="blueAreaRow">
                <Col>
                    <Card className="text-center" style={{ width: '15rem',background:'none' }}>
                        <Card.Img variant="top" src="https://i.postimg.cc/nrbwmrvW/1344168.jpg" />
                        <Card.Text>Attic Suite room</Card.Text>
                    </Card>
                </Col>
    
                <Col>
                <Card className="text-center" style={{ width: '15rem',background:'none' }}>
                        <Card.Img variant="top" src="https://i.postimg.cc/sg8c1BBh/1322200-98b63ba80899e748f22b.jpg" />
                        <Card.Text>Deluxe roomh</Card.Text>
                    </Card>
                </Col>
    
                <Col>
                <Card className="text-center" style={{ width: '15rem',background:'none' }}>
                        <Card.Img variant="top" src="https://i.postimg.cc/xdh4rxGB/1322864-3ee46b7fd4122724c899.jpg" />
                        <Card.Text>Standard room</Card.Text>
                    </Card>
                </Col>

                <Col>
                <Card className="text-center" style={{ width: '15rem',background:'none' }}>
                        <Card.Img variant="top" src="https://i.postimg.cc/ZRzxF1xY/1344124-518796593e48071df6c2.jpg" />
                        <Card.Text>Budget Villa</Card.Text>
                    </Card>
                </Col>
    
            </Row> 
            );
        } else if(text == 'aticRoom'){
            return(
                <Container>
                <Row className="blueAreaRow">
                   <Col sm={6}>
                   <ImageList sx={{ width: 500, height: '80%' }} cols={3} rowHeight={164}>
                {itemDataAttic.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
                   </Col>
                   <Col sm={6} >
                       {atticDetails}
                   </Col>
                </Row>
                </Container>
            );
        } else if(text == 'deluxeRoom'){
            return(
                <Container>
                <Row className="blueAreaRow">
                   <Col sm={6}>
                   <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                {itemDataDeluxe.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
                   </Col>
                   <Col sm={6}>
                       {deluxDetails}
                   </Col>
                </Row>
                </Container>
            );
        } else if(text == 'standardRoom'){
           return (
            <Container>
            <Row className="blueAreaRow">
               <Col sm={6}>
               <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {itemDatastandard.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
               </Col>
               <Col sm={6}>
                  {standardDetails}  
               </Col>
            </Row>
            </Container>
           );
        } else {
            return (
                <Container>
                <Row className="blueAreaRow">
                   <Col sm={6}>
                   <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                {itemDataBudget.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
                   </Col>
                   <Col sm={6}>
                      {budgetDetails}  
                   </Col>
                </Row>
                </Container>
               );
        }
    }

    const [showAttic, setShowAttic] = useState(false);

    const handleCloseAttic = () => setShowAttic(false);
    const handleShowAttic = () => setShowAttic(true);

    const [showDelux, setShowDelux] = useState(false);

    const handleCloseDelux = () => setShowDelux(false);
    const handleShowDelux = () => setShowDelux(true);

    const [showStandard, setShowStandard] = useState(false);

    const handleCloseStandard = () => setShowStandard(false);
    const handleShowStandard = () => setShowStandard(true);

    const [showBudget, setShowBudget] = useState(false);

    const handleCloseBudget = () => setShowBudget(false);
    const handleShowBudget = () => setShowBudget(true);

    return (
        <>
         {/* backgroundImage: `url(${"https://i.postimg.cc/x8Tr4cRw/1322226.jpg"})` */}
            {
               width > widthScreen ? <div className="homeImage" style={{backgroundImage: `url(${"https://i.postimg.cc/x8Tr4cRw/1322226.jpg"})`

              }}>
                <Header/>
                {
                  //Middle bar
              }
              <br/><br/><br/>
              <br/><br/><br/>
              <br/><br/><br/>
              <br/><br/><br/>
              <br/><br/><br/>
              <br/><br/><br/>
              <br/><br/><br/>
              <br/><br/><br/>
               <MiddleBar/>
           </div> : <MiddleBarPhoneView/>
            }

    {
      width > widthScreen ?
      <div  className="homeImage" style={{
        backgroundImage: `url(${"https://i.postimg.cc/59C8tXWL/5-19-2022-10-57-41-PM.jpg"})`,
      }}>
      <div className="secondDiv">
          <br/><br/><br/>
          {middleSHow()}
          <br/><br/><br/>
          {showPictures()}
          <br/><br/>
      </div>
      </div> : 
       <div>
       <div style={{textAlign:'start',padding:'10%',background:'#030F51'}}>
        <h1 className="dolpeText locationText">Relaxation , Beautiful view and in luxurious comfort.</h1>
            <br/><p style={{color:'white'}}>
            The Villa is made up of several beautifully suites
            tucked within the levelled landscape. making it one 
            of the most beautiful views in Sri Lanka. There is ample 
            space for parking and the suites with the view making it 
            ideal for a quiet holiday of pure relaxation; for honeymooners 
            or even for families. Each suites,rooms opens up to scenic views 
            of the misty mountains,Ravana ella waterfall and is equipped with 
            all modern amenities that ensure a luxurious, comfortable stay.<br/><br/>
            Guests have the option of booking this Whole Villa for a group 
            to accommodate a maximum number of persons per room.
            </p>
       </div>
       <AccModal
              show={showAttic}
              handleClose={handleCloseAttic}
              body={atticDetails}
              header="Attic Suite Room"
        />
       <AccModal
              show={showDelux}
              handleClose={handleCloseDelux}
              body={deluxDetails}
              header="Deluxe Room"
        />
         <AccModal
              show={showStandard}
              handleClose={handleCloseStandard}
              body={standardDetails}
              header="Standard Room"
        />
         <AccModal
              show={showBudget}
              handleClose={handleCloseBudget}
              body={budgetDetails}
              header="Budget Room"
        />
      <div style={{textAlign:'center',padding:'10%',background:'#030F51'}}>
            <Card >
               
                <Card.Body>
                  <Card.Title>
                    <Carousel>
                    {itemDataAttic.map((item) => (
                      <Carousel.Item key={item.img}>
                        <img
                        className="d-block w-100"
                          src={`${item.img}`}
                          alt={item.title}
                        />
                      </Carousel.Item>
                    ))}
                    </Carousel>
                  </Card.Title>
                    <Card.Title className="dolpeText locationText"><h1>Attic Suite room</h1></Card.Title>
                    <Card.Text>
                    This elegant and spacious suite comes with a living and balcony 
                    area which opens out to the stunning views of the Ella Gap & 
                    the Ravana Ella Waterfall. The room is equipped with a large 
                    ensuite bathroom.<br/><br/>

                    The suite also comes with a kitchenette equipped with electric
                    kettle, cutlery, glassware, crockery and includes a butler 
                    service to enhance the holiday experience.<br/><br/>

                    The rooms have a luxury carpet floor and elegant furnitures.
                    Walk barefoot and feel the soothing comfort of the floors!<br/><br/>

                    The bathrooms are finished in titanium cement, completed with a 
                    shower cubicle with hot and cold water and a wash basin to 
                    complement the luxurious interior.<br/><a onClick={handleShowAttic}><span style={{color:'blue'}}>SEE MORE</span></a>
                    

                    </Card.Text>
                </Card.Body>
            </Card>
            <br/>
            <Card >
                <Card.Body>
                <Card.Title>
                    <Carousel>
                    {itemDataDeluxe.map((item) => (
                  <Carousel.Item key={item.img}>
                    <img
                     className="d-block w-100"
                      src={`${item.img}`}
                      alt={item.title}
                    />
                  </Carousel.Item>
                ))}
                    </Carousel>
                  </Card.Title>
                    <Card.Title className="dolpeText locationText"><h1>Deluxe Room</h1></Card.Title>
                    <Card.Text>
                    Super Deluxe rooms have its own private living area and offer 
                    breathtaking views of the Ella Gap and the Ravana Ella Waterfall 
                    that makes Dolape Villa Ella one of the most preferred Ella hotels in 
                    Sri Lanka to spend your precious holiday at.<br/><br/>

                    The veranda is ideal for lingering over breakfast, to watch a sunrise or 
                    to simply gaze at the magnificent Ella mountain range.<br/><br/>

                    The rooms have beautiful polished titanium cement floors and elegant furnitures.
                    Walk barefoot and feel the soothing comfort of the floors!<br/><br/>

                    The bathrooms are finished in titanium cement, completed with a bathtub with hot
                    and cold water and a wash basin to complement the luxurious interior.
                    <br/><a onClick={handleShowDelux}><span style={{color:'blue'}}>SEE MORE</span></a>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br/>
            <Card >
                <Card.Body>
                <Card.Title>
                    <Carousel>
                    {itemDatastandard.map((item) => (
                  <Carousel.Item key={item.img}>
                    <img
                     className="d-block w-100"
                      src={`${item.img}`}
                      alt={item.title}
                    />
                  </Carousel.Item>
                ))}
                    </Carousel>
                  </Card.Title>
                    <Card.Title className="dolpeText locationText"><h1>Standard Room</h1></Card.Title>
                    <Card.Text>
                    Standard rooms at Dolape Villa Ella are bright and cheery, offering excellent 
                    views of the Ella Gap and Ravana Ella Waterfall and designed with modern amenities 
                    that set it apart from the rest of the hotels Ella has to offer for a reasonable 
                    cost.<br/><br/>

                    Spend more time over breakfast in the spacious garden and enjoy the views of the 
                    Ella mountain range.<br/><br/>

                    The bathrooms are finished in titanium cement and include a rain shower with hot
                    and cold water.
                    <br/><a onClick={handleShowStandard}><span style={{color:'blue'}}>SEE MORE</span></a>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br/>
            <Card >
                <Card.Body>
                <Card.Title>
                    <Carousel>
                    {itemDataBudget.map((item) => (
                  <Carousel.Item key={item.img}>
                    <img
                     className="d-block w-100"
                      src={`${item.img}`}
                      alt={item.title}
                    />
                  </Carousel.Item>
                ))}
                    </Carousel>
                  </Card.Title>
                    <Card.Title className="dolpeText locationText"><h1>Budget Villa</h1></Card.Title>
                    <Card.Text>
                    This elegant budget villa comes with outdoor seating overlooking the stunning views
                    of the Ella Gap & the Ravana Ella Waterfall. The room is equipped with a bathroom
                    with shower, provided with hot & cold water.<br/><br/>  

                    Spend more time over breakfast in the spacious Garden with a natural pool view and
                    enjoy the views of the Ella mountain range.
                    <br/><a onClick={handleShowBudget}><span style={{color:'blue'}}>SEE MORE</span></a>
                    </Card.Text>
                </Card.Body>
            </Card>
      </div>
   </div> 
    }
        </>
    );
}

export default Accomadation;


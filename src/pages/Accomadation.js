import React,{useState} from "react";

import '../../src/App.css';
import { Col, Container, Row, Card, Button, Badge } from "react-bootstrap";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import MiddleBar from "../components/MiddleBar";

import Blue from "../assets/107211990_297877908238565_7498320495348409177_n.jpg";
import backGround from "../assets/_1322226.jpg";

import FirstImg from "../assets/_1344168.jpg";
import SecondImg from "../assets/_1322200.jpg";
import ThirdImg from "../assets/_1322864.jpg";
import FourthImg from "../assets/_1344124.jpg"

import FirstImgAttic from "../assets/_1344166.jpg";
import SecondImgTrans from "../assets/_1344171.jpg";
import ThirdImgTrans from "../assets/_1344169.jpg";

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
      },
      {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
      },
      {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
      },
      {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
      },
      {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
      },
      {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
      },
      {
          img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
          title: 'Bike',
        },
        {
          img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
          title: 'Bike',
        },
        {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
          },
          
  ];
  

const Accomadation = () => {
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
                        <Card.Img variant="top" src={FirstImg} />
                        <Card.Text>Attic Suite room</Card.Text>
                    </Card>
                </Col>
    
                <Col>
                <Card className="text-center" style={{ width: '15rem',background:'none' }}>
                        <Card.Img variant="top" src={SecondImg} />
                        <Card.Text>Deluxe roomh</Card.Text>
                    </Card>
                </Col>
    
                <Col>
                <Card className="text-center" style={{ width: '15rem',background:'none' }}>
                        <Card.Img variant="top" src={ThirdImg} />
                        <Card.Text>Standard room</Card.Text>
                    </Card>
                </Col>

                <Col>
                <Card className="text-center" style={{ width: '15rem',background:'none' }}>
                        <Card.Img variant="top" src={FourthImg} />
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
                   <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                {itemData.map((item) => (
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
                        <div>
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
                {itemData.map((item) => (
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
                        <div>
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
            {itemData.map((item) => (
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
                    <div>
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
                                <li className="list"><a href="#home">Satellite channels</a></li>                                <li><a href="#news">Satellite channels</a></li>
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
                {itemData.map((item) => (
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
                        <div>
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
                   </Col>
                </Row>
                </Container>
               );
        }
    }

    return (
        <>
             <div className="homeImage" style={{
             backgroundImage: `url(${backGround})`
        }}>
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
        </div>

        <div  className="homeImage" style={{
             backgroundImage: `url(${Blue})`,
        }}>
        <div className="secondDiv">
           <br/><br/><br/>
           {middleSHow()}
           <br/><br/><br/>
           {showPictures()}
           <br/><br/>
        </div>
        </div>
        </>
    );
}

export default Accomadation;


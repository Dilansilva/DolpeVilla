import React,{useState} from "react";

import '../../src/App.css';
import { Col, Container, Row, Card, Button } from "react-bootstrap";
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
    const [text,setText] = useState('location');
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
                    <h4 className="dolpeText locationText">Weather</h4>
                         <p className="smallLocationText">
                             The climate at Dolape Villa Ella remains a comfortable 20-28 degrees 
                             Celsius throughout the year, thereby giving the weather in Ella a ‘not
                             too cold, not too hot’ comfort factor.<br/><br/>
                             The weather pattern in the locality of the resort is recognised
                              as being the most comfortable in the entire country.
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
                    <h4 className="dolpeText locationText">Excursion</h4>
                        <p className="smallLocationText">
                        Ella has plenty to offer that could keep you fascinated and occupied 
                        during a few nights’ stay. Apart from the mesmerizing views of mountains 
                        and tea estates, the region provides shelter to many precious flora and 
                        fauna. In addition to simply unwinding in the cool climes you could set 
                        out on a trekking adventure or safari to a nearby wildlife sanctuary as
                        part of excursions in Ella to discover and experience some of these 
                        delicate wonders of nature up- close.
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
                    <h4 className="dolpeText locationText">Excursion</h4>
                        <p className="smallLocationText">
                        Ella has plenty to offer that could keep you fascinated and occupied 
                        during a few nights’ stay. Apart from the mesmerizing views of mountains 
                        and tea estates, the region provides shelter to many precious flora and 
                        fauna. In addition to simply unwinding in the cool climes you could set 
                        out on a trekking adventure or safari to a nearby wildlife sanctuary as
                        part of excursions in Ella to discover and experience some of these 
                        delicate wonders of nature up- close.
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
            );
        } else if(text == 'deluxeRoom'){
            return(
                <Row className="blueAreaRow">
                <Col>
                    <Card style={{ width: '18rem',background:'none' }}>
                        <Card.Img variant="top" src={FirstImg} />
                    </Card>
                </Col>
    
                <Col>
                    <Card style={{ width: '18rem',background:'none' }}>
                        <Card.Img variant="top" src={SecondImg} />
                    </Card>
                </Col>
    
                <Col>
                    <Card style={{ width: '18rem',background:'none' }}>
                        <Card.Img variant="top" src={ThirdImg} />
                    </Card>
                </Col>
    
            </Row> 
            );
        } else {
            return(
                <Row className="blueAreaRow">
                <Col>
                    <Card style={{ width: '18rem',background:'none'}}>
                        <Card.Img variant="top" src={FirstImgAttic}/>
                    </Card>
                </Col>
    
                <Col>
                    <Card style={{ width: '18rem',background:'none' }}>
                        <Card.Img variant="top" src={SecondImgTrans} />
                    </Card>
                </Col>
    
                <Col>
                    <Card style={{ width: '18rem',background:'none' }}>
                        <Card.Img variant="top" src={ThirdImgTrans} />
                    </Card>
                </Col>
    
            </Row> 
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


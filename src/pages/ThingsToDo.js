import React,{useState} from "react";
import backGround from "../assets/_1344104.jpg";
import '../../src/App.css';

import { ImageList,ImageListItem } from "@mui/material";

import MiddleBar from "../components/MiddleBar";
import Blue from "../assets/DSC01496.jpg";
import LastSec from "../assets/MobilePopUpBackGround.jpg";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import FirstImg from "../assets/_1322209.jpg";
import SecondImg from "../assets/_1344104.jpg";
import ThirdImg from "../assets/_1322202.jpg";

import FirstImgTrans from "../assets/f682b054e7868718f4167b9243ab3f9c.jpg";
import SecondImgTrans from "../assets/The_Common_Wanderer_-3.jpg";
import ThirdImgTrans from "../assets/a12d3250b32491bd47f7773b57dabfe3.jpg";

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

const ThingsToDo = () => {
    const [text,setText] = useState('things');
    const middleSHow = () =>{
        if(text == 'things'){
            return(
                <Container>
                <Row>
                    <Col sm={4}> 
                        <div className="d-grid">
                            <a className="button" onClick={() => {setText('things')}}>THINGS TO DO</a>
                            <a className="button" onClick={() => {setText('natural')}}>NATURAL POOL WITH RILL</a>
                            <a className="button" onClick={() => {setText('airRifle')}}>AIR RIFLE  & ARCHERY</a>
                            <a className="button" onClick={() => {setText('birdAnimal')}}>BIRD & ANIMAL WATCHING</a>
                            <a className="button" onClick={() => {setText('cycle')}}>CYCLING & SAFARI</a>
                            <a className="button" onClick={() => {setText('learnAbout')}}>LEARN ABOUT THE CULTURE</a>
                            <a className="button" onClick={() => {setText('culturalEvents')}}>CULTURAL EVENTS</a>
                            <a className="button" onClick={() => {setText('farmingCooking')}}>FARMING & COOKING</a>
                            <a className="button" onClick={() => {setText('hiking')}}>HIKING & TREKKING</a>
                            <a className="button" onClick={() => {setText('around')}}>AROUND THE SRI LANKA</a>
                        </div>
                    </Col>
                    <Col sm={8}>
                    <h4 className="dolpeText locationText">Things to do</h4>
                     <p className="smallLocationText">
                     Ella is probably one of Sri Lanka’s best kept secrets that 
                     offers plenty to keep you fascinated during a few nights’ stay.
                     Apart from simply unwinding in cool climes with hypnotic views;
                     you may even set out on a hiking adventure to explore some of 
                     nature’s wonders; such as the famed Little Adam’s Peak. Ella, 
                     being a remote hamlet located among the peaks of country’s 
                     central highlands is surrounded by countryside perfect for 
                     walks or a cycling adventure.- Amongst the numerous things 
                     to do in Ella, one could also explore tea gardens & factories, 
                     nine arch bridge, waterfalls, ancient temples and historic 
                     artefacts.
                     </p>
                    </Col>
                </Row>
            </Container>
            );
        } else if(text == 'natural'){
            return(
                <Container>
                <Row>
                <Col sm={4}> 
                <div className="d-grid">
                            <a className="button" onClick={() => {setText('things')}}>THINGS TO DO</a>
                            <a className="button" onClick={() => {setText('natural')}}>NATURAL POOL WITH RILL</a>
                            <a className="button" onClick={() => {setText('airRifle')}}>AIR RIFLE  & ARCHERY</a>
                            <a className="button" onClick={() => {setText('birdAnimal')}}>BIRD & ANIMAL WATCHING</a>
                            <a className="button" onClick={() => {setText('cycle')}}>CYCLING & SAFARI</a>
                            <a className="button" onClick={() => {setText('learnAbout')}}>LEARN ABOUT THE CULTURE</a>
                            <a className="button" onClick={() => {setText('culturalEvents')}}>CULTURAL EVENTS</a>
                            <a className="button" onClick={() => {setText('farmingCooking')}}>FARMING & COOKING</a>
                            <a className="button" onClick={() => {setText('hiking')}}>HIKING & TREKKING</a>
                            <a className="button" onClick={() => {setText('around')}}>AROUND THE SRI LANKA</a>
                        </div>
                    </Col>
                    <Col sm={8}>
                    <h4 className="dolpeText locationText">Natural Pool With Rill</h4>
                        <p className="smallLocationText">
                        Ella is probably famous for natural waterfalls, rivers 
                        and natural water resources.The famous and beautiful Dolape 
                        Villa Natural Pool created in the natural landscape by 
                        collecting tha water flowing through the natural water sources 
                        located on the top of the hill through a naturally created 
                        Kithul Track.We invite you to experience the splendor of this 
                        rare and beautiful setting located within the Ella, Sri Lanka.
                        </p>

                        <div>
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
                        </div>
                    </Col>
                </Row>
            </Container>
            );
        } else if(text == 'airRifle'){
            return(
                <Container>
                <Row>
                <Col sm={4}> 
                <div className="d-grid">
                            <a className="button" onClick={() => {setText('things')}}>THINGS TO DO</a>
                            <a className="button" onClick={() => {setText('natural')}}>NATURAL POOL WITH RILL</a>
                            <a className="button" onClick={() => {setText('airRifle')}}>AIR RIFLE  & ARCHERY</a>
                            <a className="button" onClick={() => {setText('birdAnimal')}}>BIRD & ANIMAL WATCHING</a>
                            <a className="button" onClick={() => {setText('cycle')}}>CYCLING & SAFARI</a>
                            <a className="button" onClick={() => {setText('learnAbout')}}>LEARN ABOUT THE CULTURE</a>
                            <a className="button" onClick={() => {setText('culturalEvents')}}>CULTURAL EVENTS</a>
                            <a className="button" onClick={() => {setText('farmingCooking')}}>FARMING & COOKING</a>
                            <a className="button" onClick={() => {setText('hiking')}}>HIKING & TREKKING</a>
                            <a className="button" onClick={() => {setText('around')}}>AROUND THE SRI LANKA</a>
                        </div>
                    </Col>
                    <Col sm={8}>
                    <h4 className="dolpeText locationText">Air Rifle & Archery</h4>
                         <p className="smallLocationText">
                         A site exclusively designed for adventure enthusiasts and adrenaline junkies who prefer a not so ordinary hillside experience. Want to experience Archery in Sri Lanka like the way hunters did?
                        Join Dolape Villa Ella, and try out the field Archery session!
                        feel the wind, aim.....
                        bring the huntsman inside you !!
                         </p>

                            <div>
                                <ul >
                                    <li ><span href="#home">No practice or past experience necessary</span></li>
                                    <li ><span href="#home">Includes training and equipment by our in-house archery specialist.</span></li>
                                    <li ><span href="#home">One session – 2 hours</span></li>
                                    <li ><span href="#home">Number of pilots for air rifle (around 15-25)</span></li>
                                </ul>
                            </div>

                         <div>
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
                        </div>
                    </Col>
                </Row>
            </Container>
            );
        } else if(text == 'birdAnimal') {
            return(
                <Container>
                <Row>
                    <Col sm={4}> 
                    <div className="d-grid">
                            <a className="button" onClick={() => {setText('things')}}>THINGS TO DO</a>
                            <a className="button" onClick={() => {setText('natural')}}>NATURAL POOL WITH RILL</a>
                            <a className="button" onClick={() => {setText('airRifle')}}>AIR RIFLE  & ARCHERY</a>
                            <a className="button" onClick={() => {setText('birdAnimal')}}>BIRD & ANIMAL WATCHING</a>
                            <a className="button" onClick={() => {setText('cycle')}}>CYCLING & SAFARI</a>
                            <a className="button" onClick={() => {setText('learnAbout')}}>LEARN ABOUT THE CULTURE</a>
                            <a className="button" onClick={() => {setText('culturalEvents')}}>CULTURAL EVENTS</a>
                            <a className="button" onClick={() => {setText('farmingCooking')}}>FARMING & COOKING</a>
                            <a className="button" onClick={() => {setText('hiking')}}>HIKING & TREKKING</a>
                            <a className="button" onClick={() => {setText('around')}}>AROUND THE SRI LANKA</a>
                        </div>
                    </Col>
                    <Col sm={8}>
                    <h4 className="dolpeText locationText">Bird & Animal Watching</h4>
                        <p className="smallLocationText">
                        Bird lovers and wildlife enthusiasts will be delighted to observe
                        that the Dolape Villa Ella provides sanctuary for 27% or 63 species
                        of the resident birds of Sri Lanka, including 6 precious species 
                        endemic to the country. Out of those 63 bird species, birds such
                        as Woodpeckers, Babblers, Barbets, Flycatchers, Minivit, and 
                        Chestnut headed Bee-eaters and Hill Mynas are the types of 
                        birds commonly seen in this location. Also there are Monkeys, 
                        Snakes, Grizzled giant squirrel and etc.
                        </p>
                        <p> <a href="#animal">&lt;&lt;Click Here&gt;&gt;</a>  to learn more about Endemic Birds of Sri Lanka</p>
                        <p> <a href="#animal">&lt;&lt;Click Here&gt;&gt;</a>  to learn more about Endemic Animals of Sri Lanka</p>

                         <div>
                            <ImageList sx={{ width: '100%', height: 450 }} cols={4} rowHeight={164}>
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
                        </div>
                    </Col>
                </Row>
            </Container>
            );
        }else if(text == 'cycle') {
            return(
                <Container>
                <Row>
                    <Col sm={4}> 
                    <div className="d-grid">
                            <a className="button" onClick={() => {setText('things')}}>THINGS TO DO</a>
                            <a className="button" onClick={() => {setText('natural')}}>NATURAL POOL WITH RILL</a>
                            <a className="button" onClick={() => {setText('airRifle')}}>AIR RIFLE  & ARCHERY</a>
                            <a className="button" onClick={() => {setText('birdAnimal')}}>BIRD & ANIMAL WATCHING</a>
                            <a className="button" onClick={() => {setText('cycle')}}>CYCLING & SAFARI</a>
                            <a className="button" onClick={() => {setText('learnAbout')}}>LEARN ABOUT THE CULTURE</a>
                            <a className="button" onClick={() => {setText('culturalEvents')}}>CULTURAL EVENTS</a>
                            <a className="button" onClick={() => {setText('farmingCooking')}}>FARMING & COOKING</a>
                            <a className="button" onClick={() => {setText('hiking')}}>HIKING & TREKKING</a>
                            <a className="button" onClick={() => {setText('around')}}>AROUND THE SRI LANKA</a>
                        </div>
                    </Col>
                    <Col sm={8}>
                    <h4 className="dolpeText locationText">Bird & Animal Watching</h4>
                        <p className="smallLocationText">
                        Bird lovers and wildlife enthusiasts will be delighted to observe
                        that the Dolape Villa Ella provides sanctuary for 27% or 63 species
                        of the resident birds of Sri Lanka, including 6 precious species 
                        endemic to the country. Out of those 63 bird species, birds such
                        as Woodpeckers, Babblers, Barbets, Flycatchers, Minivit, and 
                        Chestnut headed Bee-eaters and Hill Mynas are the types of 
                        birds commonly seen in this location. Also there are Monkeys, 
                        Snakes, Grizzled giant squirrel and etc.
                        </p>
                        <p> <a href="#animal">&lt;&lt;Click Here&gt;&gt;</a>  to learn more about Endemic Birds of Sri Lanka</p>
                        <p> <a href="#animal">&lt;&lt;Click Here&gt;&gt;</a>  to learn more about Endemic Animals of Sri Lanka</p>

                        <div>
                                <ul >
                                    <li ><span href="#home">No practice or past experience necessary</span></li>
                                    <li ><span href="#home">Includes training and equipment by our in-house archery specialist.</span></li>
                                    <li ><span href="#home">One session – 2 hours</span></li>
                                    <li ><span href="#home">Number of pilots for air rifle (around 15-25)</span></li>
                                </ul>
                            </div>

                         <div>
                            <ImageList sx={{ width: '100%', height: 450 }} cols={4} rowHeight={164}>
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
                        </div>
                    </Col>
                </Row>
            </Container>
            );
        }
    }

    const showPictures = () => {
        if(text == 'natural'){
            return(
                <Row className="blueAreaRow">
                   <Col >
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
    
            </Row> 
            );
        } else if(text == 'transport'){
            return(
                <Row className="blueAreaRow">
                <Col>
                    <Card style={{ width: '18rem',background:'none'}}>
                        <Card.Img variant="top" src={FirstImgTrans}/>
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
        } else if(text == 'weather'){
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
                        <Card.Img variant="top" src={FirstImgTrans}/>
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
        {/*Dolpe Villa Ella, Sri lanka */}
        <div  className="homeImage" style={{
             backgroundImage: `url(${Blue})`,
        }}>
        <div className="secondDiv">
           <br/><br/><br/>
            {middleSHow()}
           <br/><br/><br/>
        </div>

       
        </div>
        {/*Blue Area */}
      
    </>
    );
}

export default ThingsToDo;
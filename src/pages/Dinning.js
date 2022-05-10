import React,{useState} from "react";
import backGround from "../assets/_1333445.jpg";
import '../../src/App.css';
import MiddleBar from "../components/MiddleBar";
import Blue from "../assets/_1344152.jpg";

import { Col, Container, Row, Card, Button } from "react-bootstrap";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import LastSec from "../assets/MobilePopUpBackGround.jpg";

import FirstImgTrans from "../assets/f682b054e7868718f4167b9243ab3f9c.jpg";
import SecondImgTrans from "../assets/The_Common_Wanderer_-3.jpg";
import ThirdImgTrans from "../assets/a12d3250b32491bd47f7773b57dabfe3.jpg";
import FirstImg from "../assets/_1344168.jpg";
import SecondImg from "../assets/_1322232.jpg";
import ThirdImg from "../assets/287522687.jpg"

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
    },]

const Dinnning = () => {
    const [text,setText] = useState('dinning');
    const middleSHow = () =>{
        if(text == 'dinning'){
            return(
                <Container>
                <Row className="blueAreaRow">
                    <Col sm={4} className="facilList"> 
                        <div className="d-grid gap-2">
                            <a className="button" onClick={() => {setText('dinning')}}>DINNING</a>
                            <a className="button" onClick={() => {setText('restaurant')}}>DOLPE RILL RESTAURANT</a>
                            <a className="button" onClick={() => {setText('garden')}}>GARDEN DINNING</a>
                        </div>
                    </Col>
                    <Col sm={8}>
                    <h4 className="dolpeText locationText">Dinning</h4>
                    <div className="secondDiv">
                        <p className="smallLocationText">
                            Dining at Dolape Villa Ella is a stimulating experience. 
                            A truly unique open area restaurant Ella, the ‘Restaurant Dolape Villa’, 
                            built on a hillock that overlooks breathtaking scenery, engulfs 
                            the guests in a tantalizing dining experience
                        </p>
                            <div>
                                <ul className="facilOrdList">
                                    <li className="facilBeforeList"><span href="#home"><b>Food: </b><span>Chinese, Indian, Italian, Middle Eastern, Seafood, International, Grill/BBQ</span></span></li>
                                    <li className="facilBeforeList"><span href="#home"><b>Open for: </b><span>Breakfast, Brunch, Lunch, Dinner, High tea</span></span></li>
                                    <li className="facilBeforeList"><span href="#home"><b>Menu: </b><span>Buffet & À La Carte </span></span></li>
                                </ul>
                            </div>
                    </div>
                    </Col>
                </Row>
            </Container>
            );
        } else if(text == 'restaurant'){
            return(
                <Container>
                <Row className="blueAreaRow">
                    <Col sm={4} className="facilList"> 
                        <div className="d-grid gap-2">
                            <a className="button" onClick={() => {setText('dinning')}}>DINNING</a>
                            <a className="button" onClick={() => {setText('restaurant')}}>DOLPE RILL RESTAURANT</a>
                            <a className="button" onClick={() => {setText('garden')}}>GARDEN DINNING</a>
                        </div>
                    </Col>
                    <Col sm={8}>
                    <h4 className="dolpeText locationText">Dolape Rill Restautant</h4>
                    <div className="secondDiv">
                        <p className="smallLocationText">
                        Dining at Dolape Villa Ella is a stimulating experience. A truly unique 
                        open area restaurant Ella, the ‘Dolape Rill Restaurant’, built on a 
                        hillock that overlooks breathtaking scenery, engulfs the guests 
                        in a tantalizing dining experience.
                        </p>
                    </div>
                    </Col>
                </Row>
            </Container>
            );
        } else{
            return(
                <Container>
                <Row className="blueAreaRow">
                    <Col sm={4} className="facilList"> 
                        <div className="d-grid gap-2">
                            <a className="button" onClick={() => {setText('dinning')}}>DINNING</a>
                            <a className="button" onClick={() => {setText('restaurant')}}>DOLPE RILL RESTAURANT</a>
                            <a className="button" onClick={() => {setText('garden')}}>GARDEN DINNING</a>
                        </div>
                    </Col>
                    <Col sm={8}>
                    <h4 className="dolpeText locationText">Garden Dinning </h4>
                    <div className="secondDiv">
                        <p className="smallLocationText">
                            Dining at Dolape Villa Ella is a stimulating experience. 
                            A truly unique open area restaurant Ella, the ‘Restaurant 
                            Dolape Villa’, built on a hillock that overlooks breathtaking 
                            scenery, engulfs the guests in a tantalizing dining experience.
                        </p>
                    </div>
                    </Col>
                </Row>
            </Container>
            );
        }
    }

    const showPictures = () => {
        if(text == 'dinning'){
            return(
                <Row className="blueAreaRow">
                    <Col sm={6}>
                    <div><b style={{color:'white'}}>DOLAPE RILL RESTAURANT</b></div><br/>
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
                    <div><b style={{color:'white'}}>GARDEN DINNING</b></div><br/>
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
        } else if(text == 'restaurant'){
            return(
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
        } else if(text == 'weather'){
            return(
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
        } else {
            return(
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
        }
    }

    return(
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
        <div style={{backgroundColor:'#1F211F'}}>
          
        </div>
        {/*Blue Area */}
        <div className="blueArea" style={{
             backgroundImage: `url(${Blue})`
        }}>
           <Container>
        <br/>
           {middleSHow()}
        <br/>
       </Container>
       <div className="blueArea" style={{
             
        }}>
           {
               //Middle bar
           }
       <Container style={{textAlign:'center'}}>
        <br/>
            {showPictures()}
        <br/>
       </Container>
           
        </div>
           
           
        </div>
    </>
    );
}

export default Dinnning;
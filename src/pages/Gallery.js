import React from "react";
import backGround from "../assets/_1344220.jpg";
import '../../src/App.css';
import MiddleBar from "../components/MiddleBar";
import Blue from "../assets/_1322204.jpg";
import { Col, Container, Row, Card, Button, Breadcrumb, Accordion } from "react-bootstrap";
import FirstImg from "../assets/_1344168.jpg";
import SecondImg from "../assets/_1322232.jpg";
import ThirdImg from "../assets/287522687.jpg";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

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

const Gallery = () => {
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
                <div className="secondDiv"><br/>
                    <h4 className="dolpeText">Contact Us</h4>
                    <hr style={{color:'#7CA844'}}/>
                    <Container style={{textAlign:'center'}}>
        <br/>
                <Row className="blueAreaRow">
                    <Col sm={6}>
                    <div><h4 className="dolpeText">Attic Suite Room</h4></div><br/>
                        <ImageList sx={{ width: 500, height: 450 }} cols={4} rowHeight={164}>
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
                    <div><h4 className="dolpeText">Deluxe Room</h4></div><br/>
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

            <Row className="blueAreaRow">
                    <Col sm={6}>
                    <div><h4 className="dolpeText">Standard Room</h4></div><br/>
                        <ImageList sx={{ width: 500, height: 450 }} cols={4} rowHeight={164}>
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
                    <div><h4 className="dolpeText">Budget Room</h4></div><br/>
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
            <hr style={{color:'#7CA844'}}/>
                            <br/><br/>
            <Row className="blueAreaRow">
                    <Col sm={6}>
                    <div><h4 className="dolpeText">Natural Pool</h4></div><br/>
                        <ImageList sx={{ width: 500, height: 450 }} cols={2} rowHeight={164}>
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
                    <div><h4 className="dolpeText">Air Rifle And Archery</h4></div><br/>
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
            <br/>
            <Row className="blueAreaRow">
                    <Col>
                    <div><h4 className="dolpeText">Bird and Animal Watching</h4></div><br/>
                        <ImageList sx={{ width: '80%', height: 450 }} cols={4} rowHeight={164}>
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
            <br/>
            <Row className="blueAreaRow">
                    <Col sm={6}>
                    <div><h4 className="dolpeText">Cycling and Safari</h4></div><br/>
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
                    </Col>
                    <Col sm={6}>
                    <div><h4 className="dolpeText">Cultural Events</h4></div><br/>
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
                    </Col>
            </Row>
        
        
       </Container><br/>
            
                  <br/>
                </div>
                </div>
                {/*Blue Area */}
              
            </>
    );
}

export default Gallery;
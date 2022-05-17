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
import { First } from "react-bootstrap/esm/PageItem";

const itemDataStandard = [
  {
    img: "https://i.postimg.cc/xdh4rxGB/1322864-3ee46b7fd4122724c899.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/JhB24vL3/239340734.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/mgpvr7F4/287522383.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/QdzzDsRx/287522386.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/x1KS6XkV/1322865.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/BQpTHggr/1322866.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/DzPnwSFP/1322867.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/YCNJ1TVp/1322868.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/BZYZFPFh/1322869.jpg",
    title: 'Title'
  },
]

const itemDataDeluxe = [
  {
    img: "https://i.postimg.cc/QMLrBDyf/1322202-b6fc28e9bcde277789e1.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/sg8c1BBh/1322200-98b63ba80899e748f22b.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/QMVY6qJz/237430245.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/D01MryPy/237430324.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/L6M7HLmq/285441365.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/tgfS8Vr4/69235788-115221059837585-7834650883462791168-n.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/Prz7NJqS/1322198.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/wxs8x9Jr/1322204.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/3R46wZyG/1322230.jpg",
    title: 'Title'
  },
]

const itemDataAttic = [
  {
    img: "https://i.postimg.cc/nrbwmrvW/1344168.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/cJvw5jy3/Whats-App-Image-2022-03-19-at-23-24-11.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/KYGBxwy4/Whats-App-Image-2022-03-19-at-23-27-04.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/QVGgZqDb/1344166.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/nh1WTXK5/1344169.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/VNGVQ2VW/1344171.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/tJRVHmnp/1344173.jpg",
    title: 'Title'
  },
];

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
                     backgroundImage: `url("https://i.postimg.cc/0N7xsywn/1344220.jpg")`
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
    
                    <Col sm={6}>
                    <div><h4 className="dolpeText">Deluxe Room</h4></div><br/>
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
            </Row> 

            <Row className="blueAreaRow">
                    <Col sm={6}>
                    <div><h4 className="dolpeText">Standard Room</h4></div><br/>
                        <ImageList sx={{ width: 500, height: 450 }} cols={4} rowHeight={164}>
                        {itemDataStandard.map((item) => (
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
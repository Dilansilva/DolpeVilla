import React,{useState,useEffect} from "react";
import '../../src/App.css';
import MiddleBar from "../components/MiddleBar";

import { Col, Container, Row,Card,Carousel } from "react-bootstrap";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {useNavigate} from "react-router-dom";
import MiddleBarPhoneView from "../components/MiddleBarPhoneView";
import {widthScreen} from "../constant/Constant";
import Header from "../components/Header";

function getWindowDimensions() {
    const { innerWidth: width } = window;
    return {
      width
    };
  }

const itemDataRill = [
    {
        img: "https://i.postimg.cc/cCsFMfx9/266309325_649201563106196_407574773516081162_n.jpg",
        title: 'never mind'
    },
    {
        img: "https://i.postimg.cc/zXbwgd5t/_1322236.jpg",
        title: 'never mind'
    },
    {
        img: "https://i.postimg.cc/2yzZXwBW/_1322239.jpg",
        title: 'never mind'
    },
    {
        img: "https://i.postimg.cc/NFw4Gm2G/_1333392.jpg",
        title: 'never mind'
    },
    {
        img: "https://i.postimg.cc/cJ9M3PKz/_1333393.jpg",
        title: 'never mind'
    },
    {
        img: "https://i.postimg.cc/8PcGB6nn/_1333394.jpg",
        title: 'never mind'
    },
    {
        img: "https://i.postimg.cc/26xw63Q4/_1333436.jpg",
        title: 'never mind'
    },
    {
        img: "https://i.postimg.cc/fbNTKbdt/_1333437.jpg",
        title: 'never mind'
    },
    {
        img: "https://i.postimg.cc/c1mYtVVB/_1333442.jpg",
        title: 'never mind'
    },
    {
        img: "https://i.postimg.cc/SKkYKdDv/_1333448.jpg",
        title: 'never mind'
    },
    {
        img: "https://i.postimg.cc/RhFcZdVB/_1333449.jpg",
        title: 'never mind'
    },
    {
        img: "https://i.postimg.cc/sX5LJVpX/_1344181.jpg",
        title: 'never mind'
    },
    {
        img: "https://i.postimg.cc/W39kCZmf/_1344185.jpg",
        title: 'never mind'
    },
    {
        img: "https://i.postimg.cc/D0FMjtgc/_1344186.jpg",
        title: 'never mind'
    },
    {
        img: "https://i.postimg.cc/Qxvpjc22/_1344189.jpg",
        title: 'never mind'
    },
    {
        img: "https://i.postimg.cc/d1hQNHZC/sdfdfsdf.jpg",
        title: 'never mind'
    },
];

const itemDataGarden = [
    {
        img: "https://i.postimg.cc/C5hBwpV1/111537168-314272919932397-3842468518808660940-n.jpg",
        title: 'title'
    },
    {
        img: "https://i.postimg.cc/KjDP55mK/111727377-314272979932391-3257877947673588409-n.jpg",
        title: 'title'
    },
    {
        img: "https://i.postimg.cc/xdmbRPR0/116744256-314272849932404-3451675875120941001-n.jpg",
        title: 'title'
    },
    {
        img: "https://i.postimg.cc/C5x1WCjn/137526812-436967364329618-5345110808949255071-n.jpg",
        title: 'title'
    },
    {
        img: "https://i.postimg.cc/6q4s2yK1/137534117-436965417663146-9173200387753449845-n.jpg",
        title: 'title'
    },
    {
        img: "https://i.postimg.cc/3R7C06TM/137576998-436967410996280-7870586033234887330-n.jpg",
        title: 'title'
    },
    {
        img: "https://i.postimg.cc/BZjtcpQR/137579704-436967400996281-1607976506926667323-n.jpg",
        title: 'title'
    },
    {
        img: "https://i.postimg.cc/v8CTPn4T/137606797-436965424329812-7132746721412113500-n.jpg",
        title: 'title'
    },
    {
        img: "https://i.postimg.cc/nLqGzxNY/272312560-677714636921555-2386438763310556595-n.jpg",
        title: 'title'
    },
    {
        img: "https://i.postimg.cc/14xz4kkw/272674727-677714616921557-6271748510368594815-n.jpg",
        title: 'title'
    },
    {
        img: "https://i.postimg.cc/28vQTrSp/272689457-677714600254892-3668276923148260266-n.jpg",
        title: 'title'
    },
    {
        img: "https://i.postimg.cc/9Xy0nMZB/1333450.jpg",
        title: 'title'
    },
    {
        img: "https://i.postimg.cc/52s6SRLd/1344151.jpg",
        title: 'title'
    },
    {
        img: "https://i.postimg.cc/FsjS3pTN/1344152.jpg",
        title: 'title'
    },
    {
        img: "https://i.postimg.cc/dtMdhpm5/1344187.jpg",
        title: 'title'
    }
]

const Dinnning = () => {

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
                        <ImageList sx={{ width: 500, height: 450 }} cols={4} rowHeight={164}>
                        {itemDataRill.map((item) => (
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
                        {itemDataGarden.map((item) => (
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
            <div style={{display:'flex',alignItems:'center'}}>
                    <ImageList sx={{ width: '100%', height: 450 }} cols={4} rowHeight={164}>
                    {itemDataRill.map((item) => (
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
            );
        } else{
            return(
                <div style={{display:'flex',alignItems:'center'}}>
                    <ImageList sx={{ width: '100%', height: 450 }} cols={4} rowHeight={164}>
                    {itemDataGarden.map((item) => (
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
            );
        }
    }

    return(
        <>
        {
            width > widthScreen ? <div className="homeImage" style={{
                backgroundImage: `url("https://i.postimg.cc/kXVJzBVL/1333445.jpg")`
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
        {/*Dolpe Villa Ella, Sri lanka */}
        <div style={{backgroundColor:'#1F211F'}}>
          
        </div>
        {/*Blue Area */}
       {
           width > widthScreen ? <div className="blueArea" style={{
                backgroundImage: `url("https://i.postimg.cc/FK7mGQ6X/5-17-2022-5-56-19-PM.jpg")`
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
               <div>
                   {showPictures()}
               </div>
           <br/>
          </Container>
              
           </div>
              
              
           </div> : 
           <div>
                <div style={{textAlign:'start',padding:'10%',background:'#000000'}}>
                    <h1 className="dolpeText locationText">Dinning</h1>
                        <br/><p style={{color:'white'}}>
                        Dining at Dolape Villa Ella is a stimulating experience. A truly 
                        unique open area restaurant Ella, the ‘Restaurant Dolape Villa’, built
                        on a hillock that overlooks breathtaking scenery, engulfs the guests in
                        a tantalizing dining experience.
                        </p>
                </div>
                <div style={{textAlign:'center',padding:'10%',background:'#030F51'}}>
                <Card >
               
               <Card.Body>
                 <Card.Title>
                   <Carousel>
                   {itemDataRill.map((item) => (
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
                   <Card.Title className="dolpeText locationText"><h1>Dolape Rill Restautant</h1></Card.Title>
                   <Card.Text>
                    Dining at Dolape Villa Ella is a stimulating experience. A truly unique open 
                    area restaurant Ella, the ‘Dolape Rill Restaurant’, built on a hillock that 
                    overlooks breathtaking scenery, engulfs the guests in a tantalizing dining
                    experience.
                   </Card.Text>
               </Card.Body>
           </Card>
           <br/>
           <Card >
                <Card.Body>
                  <Card.Title>
                    <Carousel>
                    {itemDataGarden.map((item) => (
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
                    <Card.Title className="dolpeText locationText"><h1>Garden Dinning</h1></Card.Title>
                    <Card.Text>
                    Dining at Dolape Villa Ella is a stimulating experience. A truly unique open area
                    restaurant Ella, the ‘Restaurant Dolape Villa’, built on a hillock that overlooks
                    breathtaking scenery, engulfs the guests in a tantalizing dining experience.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br/>
                </div>
           </div>
       }
    </>
    );
}

export default Dinnning;
import React from "react";
import backGround from "../assets/_1344105.jpg";
import '../../src/App.css';
import MiddleBar from "../components/MiddleBar";
import Blue from "../assets/OG12.jpg";
import LastSec from "../assets/MobilePopUpBackGround.jpg";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import FirstImg from "../assets/_1322209.jpg";
import SecondImg from "../assets/_1344104.jpg";
import ThirdImg from "../assets/_1322202.jpg"
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";

function Location() {
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
            <Container>
                <Row>
                    <Col sm={4}> 
                        <div className="d-grid gap-2">
                            <a className="button">LOCATION</a>
                            <a className="button">TRANSPORT</a>
                            <a className="button">WEATHER</a>
                            <a className="button">EXCURSIONS</a>
                        </div>
                    </Col>
                    <Col sm={8}>
                    <h4 className="dolpeText locationText">Dolape Villa standing on exquisite beauty in Ella, Sri Lanka.</h4>
           <p className="smallLocationText">Ella is a small village located among the peaks of Sri Lanka’s 
           central highlands. This sleepy village is nestled in a valley peering
           straight through the Ella Gap to the plain nearly 1000m below and across 
           to the coastline. Apart from the mesmerizing natural views, Ella is 
           surrounded by hilly countryside perfect for walks; through tea 
           plantations, waterfalls, ancient temples and artefacts. With a handful 
           of shops, hotels and guesthouses, Ella still remains a remote hamlet. 
           This hidden sanctuary with the perfect climate is probably one of the 
           best-kept secrets of the country and is easily accessible from the 
           comfort of our Ella resort in Sri Lanka.</p>

          
           <br/><br/><br/>
                    </Col>
                </Row>
            </Container>
           
        </div>
        </div>
        {/*Blue Area */}
        <div className="blueArea" style={{
             backgroundImage: `url(${LastSec})`
        }}>
           {
               //Middle bar
           }
       <Container style={{textAlign:'center'}}>
        <br/>
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

        </Row> <br/><br/><br/>
       </Container>
           
        </div>
    </>
    );
}

export default Location;
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
             backgroundImage: `url(${Blue})`
        }}>
        <div className="secondDiv">
           <br/><br/><br/>
            <Container>
                <Row>
                    <Col sm={4}>
                        <div className="d-grid gap-2">
                            <a className="button">Link Button</a>
                            <a className="button">Link Button</a>
                            <a className="button">Link Button</a>
                            <a className="button">Link Button</a>
                        </div>
                    </Col>
                    <Col sm={8}>
                    <h4 className="dolpeText">Dolpe Villa Ella, Sri lanka</h4>
           <br/><br/>
           <p>Located 8 km from Demodara Nine Arch Bridge, 
           Dolape Villa has accommodations with a restaurant, 
           a garden and a 24-hour front desk for your convenience. 
           Complimentary WiFi is offered throughout the property.</p>

           <p>Some of the units have satellite flat-screen TV, 
           a fully equipped kitchenette with a minibar, 
           and a private bathroom with a hot tub and bathrobes.</p>

           <p>The lodge offers a continental or à la carte breakfast.</p>

           <p>Dolape Villa has a playground</p>

           <p>A water park is available on site and cycling can 
           be enjoyed within close proximity of the accommodation.</p>
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
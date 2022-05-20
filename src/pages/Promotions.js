import React from "react";
import '../../src/App.css';
import MiddleBar from "../components/MiddleBar";

import { Col, Container, Row, Card, Button } from "react-bootstrap";


function Promotions() {
    return (
    <>
        <div className="homeImage" style={{
             backgroundImage: `url("https://i.postimg.cc/GmS8cRtH/IMG-20220519-WA0011.jpg")`
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
        <div className="secondDiv">
           <br/><br/><br/>
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
        </div>
        </div>
        {/*Blue Area */}
        <div className="blueArea" style={{
             backgroundImage: `url("https://i.postimg.cc/hPn2yPDg/118286133-312616393307498-3660786380803978693-n.jpg")`
        }}>
           {
               //Middle bar
           }
       <Container style={{textAlign:'center'}}>
        <br/>
       <Row className="blueAreaRow">
            <Col>
                <Card style={{ width: '18rem',background:'none' }}>
                    <Card.Img variant="top" src="https://i.postimg.cc/nrbwmrvW/1344168.jpg" />
                        <Card.Body>
                            <Button variant="primary">ACCOMODATION</Button>
                                <Card.Text className="textSizeAndCOlor">
                                The resort is made up of several beautifully crafted chalets tucked within the leveled landscape of the plantation.
                                </Card.Text>
    
                        </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{ width: '18rem',background:'none' }}>
                    <Card.Img variant="top" src="https://i.postimg.cc/cLBgyb9t/1322232.jpg" />
                        <Card.Body>
                            <Button variant="primary">THINGS TO DO</Button>
                                <Card.Text className="textSizeAndCOlor">
                                Ella is probably one of Sri Lanka’s best kept secrets that offers plenty to keep you fascinated during a few nights’ stay. Apart from simply unwinding in cool climes with hypnotic views;                                 </Card.Text>
    
                        </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{ width: '18rem',background:'none' }}>
                    <Card.Img variant="top" src="https://i.postimg.cc/d1hQNHZC/sdfdfsdf.jpg" />
                        <Card.Body>
                            <Button variant="primary">DINNING</Button>
                                <Card.Text className="textSizeAndCOlor">
                                Dining at Dolape Villa Ella is a stimulating experience. A truly unique open area restaurant Ella, the ‘Restaurant Dolape Villa’, built on a hillock that overlooks breathtaking scenery, engulfs the guests in a tantalizing dining experience.
                                </Card.Text>
    
                        </Card.Body>
                </Card>
            </Col>

        </Row>
       </Container>
           
        </div>
    </>
    );
}

export default Promotions;
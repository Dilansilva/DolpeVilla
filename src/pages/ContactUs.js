import React from "react";
import backGround from "../assets/ella-rock.jpg";
import '../../src/App.css';
import MiddleBar from "../components/MiddleBar";
import Blue from "../assets/_1322204.jpg";
import { Col, Container, Row, Card, Button, Breadcrumb } from "react-bootstrap";
import FirstImg from "../assets/_1344168.jpg";
import SecondImg from "../assets/_1322232.jpg";
import ThirdImg from "../assets/287522687.jpg"

const ContactUs = () => {
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
                    <Container style={{textAlign:'center'}}>
        <br/>
       <Row className="blueAreaRow">
            <Col sm={3}>
                <Card style={{ width: '18rem',background:'none' }}>
                        <Card.Body>
                        <Card.Title>ADDRESS</Card.Title>
                                <Card.Text className="textSizeAndCOlor">
                                Dolape Villa, Kandekumbura Road,
                                Ballaketuwa, Ella, 90090,
                                Sri Lanka.
                                </Card.Text>
                        </Card.Body>
                </Card>
            </Col>

            <Col sm={3}>
                <Card style={{ width: '18rem',background:'none' }}>
                        <Card.Body>
                            <Card.Title>TELEPHONES</Card.Title>
                                <Card.Text className="textSizeAndCOlor">
                                +94 (0) 777 1735 28
                                +94 (0) 771 8852 86
                                </Card.Text>
                        </Card.Body>
                </Card>
            </Col>

            <Col sm={3}>
                <Card style={{ width: '18rem',background:'none' }}>
                        <Card.Body>
                            <Card.Title>EMAIL</Card.Title>
                                <Card.Text className="textSizeAndCOlor">
                                dolapevilla.lbh@gmail.com
                                </Card.Text>
                        </Card.Body>
                </Card>
            </Col>

            <Col sm={3}>
                <Card style={{ width: '18rem',background:'none' }}>
                        <Card.Body>
                            <Card.Title>WHATSAPP</Card.Title>
                                <Card.Text className="textSizeAndCOlor">
                                +94 (0) 777 1735 28
                                </Card.Text>
                        </Card.Body>
                </Card>
            </Col>

        </Row>
       </Container>
                </div>
                </div>
                {/*Blue Area */}
              
            </>
    );
}

export default ContactUs;
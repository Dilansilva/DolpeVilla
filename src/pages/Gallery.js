import React from "react";
import backGround from "../assets/ella-rock.jpg";
import '../../src/App.css';
import MiddleBar from "../components/MiddleBar";
import Blue from "../assets/_1322204.jpg";
import { Col, Container, Row, Card, Button, Breadcrumb, Accordion } from "react-bootstrap";
import FirstImg from "../assets/_1344168.jpg";
import SecondImg from "../assets/_1322232.jpg";
import ThirdImg from "../assets/287522687.jpg"

const faqs = [
    {
        header: "What are the Check-in and Check-out times at Dolape Villa ?",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
        header: "How far is Dolape Villa from the center of Ella ?",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
        header: "Is Dolape Villa Ella popular with families ?",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
        header: "Does Dolape Villa have a restaurant on site ?",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
        header: "What kind of breakfast is served at Dolape Villa ?",
        body: "Lorem ipsum dolor sit amet"
    },
    {
        header: "What is there to do at Dolape Villa Ella ?",
        body: "Lorem ipsum dolor sit amet"
    },
    {
        header: "Does Dolape Villa have a hot tub for its guests ?",
        body: "Lorem ipsum dolor sit amet"
    },
    {
        header: "How much does it cost to say at Dolape Villa Ella ?",
        body: "Lorem ipsum dolor sit amet"
    },
    {
        header: "What type of room can I book at Dolape Villa Ella ?",
        body: "Lorem ipsum dolor sit amet"
    }
]

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
            <Col sm={3}>
                <Card bg="primary" style={{ width: '18rem',background:'none' }}>
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
                <Card bg="primary" style={{ width: '18rem',background:'none' }}>
                        <Card.Body>
                            <Card.Title>TELEPHONES</Card.Title>
                                <Card.Text className="textSizeAndCOlor">
                                +94 (0) 777 1735 28<br/>
                                +94 (0) 771 8852 86
                                </Card.Text>
                        </Card.Body>
                </Card>
            </Col>

            <Col sm={3}>
                <Card bg="primary" style={{ width: '18rem',background:'none' }}>
                        <Card.Body>
                            <Card.Title>EMAIL</Card.Title>
                                <Card.Text className="textSizeAndCOlor">
                                dolapevilla.lbh@gmail.com<br/><br/>
                                </Card.Text>
                        </Card.Body>
                </Card>
            </Col>

            <Col sm={3}>
                <Card bg="primary" style={{ width: '18rem',background:'none' }}>
                        <Card.Body>
                            <Card.Title>WHATSAPP</Card.Title>
                                <Card.Text className="textSizeAndCOlor">
                                +94 (0) 777 1735 28<br/><br/>
                                </Card.Text>
                        </Card.Body>
                </Card>
            </Col>

        </Row>

        
       </Container><br/>
            <h4 className="dolpeText">FAQ About Dolape Villa</h4>
                <hr style={{color:'#7CA844'}}/>
                {
                    faqs.map((faq) => (
                        <Accordion defaultActiveKey="1" flush>
                        <Accordion.Item eventKey="1">
                             <Accordion.Header>{faq.header}</Accordion.Header>
                             <Accordion.Body>
                             {faq.body}
                             </Accordion.Body>
                         </Accordion.Item>
                        </Accordion>
                    ))
                }
                  <br/>
                </div>
                </div>
                {/*Blue Area */}
              
            </>
    );
}

export default Gallery;
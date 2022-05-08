import React from "react";
import backGround from "../assets/_1322201.jpg";
import '../../src/App.css';
import MiddleBar from "../components/MiddleBar";
import Blue from "../assets/little-adams-peak-ella-1024x683.jpg";
import { Col, Container, Row, Badge } from "react-bootstrap";
import FirstImg from "../assets/_1344168.jpg";
import SecondImg from "../assets/_1322232.jpg";
import ThirdImg from "../assets/287522687.jpg"

const Facilities = () => {
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
            <div style={{backgroundColor:'#1F211F'}}>
            <div className="secondDiv">
               <br/><br/><br/>
               <h4 className="dolpeText" style={{textAlign:'center'}}>Facilities</h4>
               <br/><br/>
              
            </div>
            </div>
            {/*Blue Area */}
            <div className="blueArea" style={{
                 backgroundImage: `url(${Blue})`
            }}>
               {
                   //Middle bar
               }
            <Container>
                <Row className="blueAreaRow">
                   <Col sm={6}>
                   <div>
                            <div>
                                <b>Health & Wellness Facilities</b>
                            </div>
    
                            <div>
                                <ol>
                                    <li><span href="#home">Free toiletries</span></li>
                                    <li><span href="#news">Bathrobe</span></li>
                                    <li><span href="#contact">Bathtub or Shower</span></li>
                                    <li><span href="#home">towels</span></li>
                                    <li><span href="#news">Toilet Paper</span></li>
                                    <li><span href="#contact">Hairdryer</span></li>
                                </ol>
                            </div>
    
                            <div><b>Safety & security:</b></div>

                            <div><b>Language Spoken</b></div>
    
                    </div>
                   </Col>
                   <Col sm={6}>
                   </Col>
                </Row>
                </Container>
               
            </div>
        </>
        );
}

export default Facilities;
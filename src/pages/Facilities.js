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
                   <Col sm={6} className="facilList">
                   <div>
                            <div>
                                <b>Health & Wellness Facilities</b>
                            </div>
    
                            <div>
                                <ul className="facilOrdList">
                                    <li className="facilBeforeList"><span href="#home"> Yoga classes </span></li>
                                    <li className="facilBeforeList"><span href="#news">Full-body massage (Additional charge)</span></li>
                                    <li className="facilBeforeList"><span href="#contact">Hand massage (Additional charge) </span></li>
                                    <li className="facilBeforeList"><span href="#home">Head massage (Additional charge) </span></li>
                                    <li className="facilBeforeList"><span href="#news">Foot massage (Additional charge) </span></li>
                                    <li className="facilBeforeList"><span href="#contact">Neck massage (Additional charge) </span></li>
                                    <li className="facilBeforeList"><span href="#home">Back massage (Additional charge) </span></li>
                                    <li className="facilBeforeList"><span href="#news">Spa/Wellness packages   (Additional charge)</span></li>
                                    <li className="facilBeforeList"><span href="#contact">Spa lounge/Relaxation area</span></li>
                                    <li className="facilBeforeList"><span href="#home">Light therapy</span></li>
                                    <li className="facilBeforeList"><span href="#news">Hairstyling</span></li>
                                    <li className="facilBeforeList"><span href="#contact">Haircut</span></li>
                                    <li className="facilBeforeList"><span href="#home">Pedicure</span></li>
                                    <li className="facilBeforeList"><span href="#news">Manicure</span></li>
                                    <li className="facilBeforeList"><span href="#contact">Makeup services</span></li>
                                    <li className="facilBeforeList"><span href="#home">Waxing services</span></li>
                                    <li className="facilBeforeList"><span href="#news">Facial treatments</span></li>
                                    <li className="facilBeforeList"><span href="#contact">Beauty services</span></li>
                                    <li className="facilBeforeList"><span href="#contact">Beach umbrellas</span></li>
                                    <li className="facilBeforeList"><span href="#contact">Beach chairs/Loungers Additional charge</span></li>
                                    <li className="facilBeforeList"><span href="#contact">Hot tub/Jacuzzi (temporarily closed) Additional charge</span></li>
                                    <li className="facilBeforeList"><span href="#contact">Massage Additional charge</span></li>
                                    <li className="facilBeforeList"><span href="#contact">Solarium</span></li>
                                </ul>
                            </div>
    
                            <div><b>Safety & security:</b></div>
                                <ul className="facilOrdList">
                                    <li className="facilBeforeList"><span href="#contact">Fire extinguishers</span></li>
                                    <li className="facilBeforeList"><span href="#contact">CCTV outside property</span></li>
                                    <li className="facilBeforeList"><span href="#contact">24-hour security</span></li>
                                    <li className="facilBeforeList"><span href="#contact">Safe</span></li>
                                </ul>

                            <div><b>Language Spoken</b></div>
                                <ul className="facilOrdList">
                                    <li className="facilBeforeList"><span href="#contact">English</span></li>
                                    <li className="facilBeforeList"><span href="#contact">Japanese</span></li>
                                    <li className="facilBeforeList"><span href="#contact">Tamil</span></li>
                                    <li className="facilBeforeList"><span href="#contact">Sinhala</span></li>
                                </ul>

    
                    </div>
                   </Col>
                   <Col sm={6} className="facilList">
                   </Col>
                </Row>
                </Container>
               
            </div>
        </>
        );
}

export default Facilities;
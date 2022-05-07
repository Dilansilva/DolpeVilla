import React,{useState} from "react";

import '../../src/App.css';
import { Col, Container, Row, Card, Button } from "react-bootstrap";

import MiddleBar from "../components/MiddleBar";

import Blue from "../assets/107211990_297877908238565_7498320495348409177_n.jpg";
import backGround from "../assets/_1322226.jpg";

const Accomadation = () => {
    const [text,setText] = useState('location');
    const middleSHow = () =>{
        if(text == 'accomadation'){
            return(
                <Container>
                <Row>
                    <Col sm={4}> 
                    <div className="d-grid gap-2">
                            <a className="button" onClick={() => {setText('accomadation')}}>ACCOMMODATION</a>
                            <a className="button" onClick={() => {setText('aticRoom')}}>ATTIC SUITE ROOM</a>
                            <a className="button" onClick={() => {setText('deluxeRoom')}}>DELUXE ROOM</a>
                            <a className="button" onClick={() => {setText('standardRoom')}}>STANDARD ROOM</a>
                            <a className="button" onClick={() => {setText('budget')}}>BUDGET VILLAS</a>
                        </div>
                    </Col>
                    <Col sm={8}>
                    <h4 className="dolpeText locationText">Relaxation , Beautiful view and in luxurious comfort</h4>
                     <p className="smallLocationText">
                     The Villa is made up of several beautifully suites tucked within the levelled landscape. 
                     making it one of the most beautiful views in Sri Lanka. There is ample space for parking 
                     and the suites with the view making it ideal for a quiet holiday of pure relaxation; for 
                     honeymooners or even for families. Each suites,rooms opens up to scenic views of the misty 
                     mountains,Ravana ella waterfall and is equipped with all modern amenities that ensure a 
                     luxurious, comfortable stay.<br/><br/>Guests have the option of booking this Whole Villa for a group to accommodate a maximum number of persons per room.
                     </p>
                    </Col>
                </Row>
            </Container>
            );
        } else if(text == 'aticRoom'){
            return(
                <Container>
                <Row>
                <Col sm={4}> 
                        <div className="d-grid gap-2">
                            <a className="button" onClick={() => {setText('accomadation')}}>ACCOMMODATION</a>
                            <a className="button" onClick={() => {setText('aticRoom')}}>ATTIC SUITE ROOM</a>
                            <a className="button" onClick={() => {setText('deluxeRoom')}}>DELUXE ROOM</a>
                            <a className="button" onClick={() => {setText('standardRoom')}}>STANDARD ROOM</a>
                            <a className="button" onClick={() => {setText('budget')}}>BUDGET VILLAS</a>
                        </div>
                    </Col>
                    <Col sm={8}>
                    <h4 className="dolpeText locationText">Transport</h4>
                        <p className="smallLocationText">
                        Featuring among Ella resorts, Dolape Villa is easy to locate right across 
                        and facing ‘Little Adams Peak’. The resort is easily reached from any location
                          below:
                        <br/><br/>
                         10 km from Ella junction/railway station (5 mins)<br/>
                       17 km from Bandarawela (30 mins)<br/>
                         63.5 km from Nuwara Eliya (1.30 hours)<br/>
                         140 km wild life sanctuary Yala (2 hours)<br/>
                         239 km from Bandaranayake International Airport (5 to 6 hours)<br/>
                         202 km from Colombo (5 to 6 hours)<br/>
                         145 km from Kandy (3 to 4 hours)<br/><br/>
    
                         Please CONTACT US FOR directions / transport arrangements or to arrange a pick up from any location below.<br/>
                         Bandaranayake International Airport<br/>
                         Weerawila Mahinda Rajapakshe International Airport<br/>
                         Colombo<br/>
                        Nearest City / Town<br/>
                        Railway / Bus Station<br/>
                        </p>
                    </Col>
                </Row>
            </Container>
            );
        } else if(text == 'deluxeRoom'){
            return(
                <Container>
                <Row>
                <Col sm={4}> 
                <div className="d-grid gap-2">
                            <a className="button" onClick={() => {setText('accomadation')}}>ACCOMMODATION</a>
                            <a className="button" onClick={() => {setText('aticRoom')}}>ATTIC SUITE ROOM</a>
                            <a className="button" onClick={() => {setText('deluxeRoom')}}>DELUXE ROOM</a>
                            <a className="button" onClick={() => {setText('standardRoom')}}>STANDARD ROOM</a>
                            <a className="button" onClick={() => {setText('budget')}}>BUDGET VILLAS</a>
                        </div>
                    </Col>
                    <Col sm={8}>
                    <h4 className="dolpeText locationText">Weather</h4>
                         <p className="smallLocationText">
                             The climate at Dolape Villa Ella remains a comfortable 20-28 degrees 
                             Celsius throughout the year, thereby giving the weather in Ella a ‘not
                             too cold, not too hot’ comfort factor.<br/><br/>
                             The weather pattern in the locality of the resort is recognised
                              as being the most comfortable in the entire country.
                         </p>
                    </Col>
                </Row>
            </Container>
            );
        } else if(text == 'standardRoom'){
            return(
                <Container>
                <Row>
                    <Col sm={4}> 
                    <div className="d-grid gap-2">
                            <a className="button" onClick={() => {setText('accomadation')}}>ACCOMMODATION</a>
                            <a className="button" onClick={() => {setText('aticRoom')}}>ATTIC SUITE ROOM</a>
                            <a className="button" onClick={() => {setText('deluxeRoom')}}>DELUXE ROOM</a>
                            <a className="button" onClick={() => {setText('standardRoom')}}>STANDARD ROOM</a>
                            <a className="button" onClick={() => {setText('budget')}}>BUDGET VILLAS</a>
                        </div>
                    </Col>
                    <Col sm={8}>
                    <h4 className="dolpeText locationText">Excursion</h4>
                        <p className="smallLocationText">
                        Ella has plenty to offer that could keep you fascinated and occupied 
                        during a few nights’ stay. Apart from the mesmerizing views of mountains 
                        and tea estates, the region provides shelter to many precious flora and 
                        fauna. In addition to simply unwinding in the cool climes you could set 
                        out on a trekking adventure or safari to a nearby wildlife sanctuary as
                        part of excursions in Ella to discover and experience some of these 
                        delicate wonders of nature up- close.
                        </p>
                    </Col>
                </Row>
            </Container>
            );
        } else {
            return(
                <Container>
                <Row>
                    <Col sm={4}> 
                    <div className="d-grid gap-2">
                            <a className="button" onClick={() => {setText('accomadation')}}>ACCOMMODATION</a>
                            <a className="button" onClick={() => {setText('aticRoom')}}>ATTIC SUITE ROOM</a>
                            <a className="button" onClick={() => {setText('deluxeRoom')}}>DELUXE ROOM</a>
                            <a className="button" onClick={() => {setText('standardRoom')}}>STANDARD ROOM</a>
                            <a className="button" onClick={() => {setText('budget')}}>BUDGET VILLAS</a>
                        </div>
                    </Col>
                    <Col sm={8}>
                    <h4 className="dolpeText locationText">Excursion</h4>
                        <p className="smallLocationText">
                        Ella has plenty to offer that could keep you fascinated and occupied 
                        during a few nights’ stay. Apart from the mesmerizing views of mountains 
                        and tea estates, the region provides shelter to many precious flora and 
                        fauna. In addition to simply unwinding in the cool climes you could set 
                        out on a trekking adventure or safari to a nearby wildlife sanctuary as
                        part of excursions in Ella to discover and experience some of these 
                        delicate wonders of nature up- close.
                        </p>
                    </Col>
                </Row>
            </Container>
            );
        }
    }
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

        <div  className="homeImage" style={{
             backgroundImage: `url(${Blue})`,
        }}>
        <div className="secondDiv">
           <br/><br/><br/>
           {middleSHow()}
           <br/><br/><br/>
        </div>
        </div>
        </>
    );
}

export default Accomadation;


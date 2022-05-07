import React,{useState} from "react";

import '../../src/App.css';
import { Col, Container, Row, Card, Button } from "react-bootstrap";

import MiddleBar from "../components/MiddleBar";

import Blue from "../assets/107211990_297877908238565_7498320495348409177_n.jpg";
import backGround from "../assets/_1322226.jpg";

const Accomadation = () => {
    const [text,setText] = useState('location');
    const middleSHow = () =>{
        if(text == 'location'){
            return(
                <Container>
                <Row>
                    <Col sm={4}> 
                        <div className="d-grid gap-2">
                            <a className="button" onClick={() => {setText('location')}}>LOCATION</a>
                            <a className="button" onClick={() => {setText('transport')}}>TRANSPORT</a>
                            <a className="button" onClick={() => {setText('weather')}}>WEATHER</a>
                            <a className="button" onClick={() => {setText('excursions')}}>EXCURSIONS</a>
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
                    </Col>
                </Row>
            </Container>
            );
        } else if(text == 'transport'){
            return(
                <Container>
                <Row>
                <Col sm={4}> 
                        <div className="d-grid gap-2">
                            <a className="button" onClick={() => {setText('location')}}>LOCATION</a>
                            <a className="button" onClick={() => {setText('transport')}}>TRANSPORT</a>
                            <a className="button" onClick={() => {setText('weather')}}>WEATHER</a>
                            <a className="button" onClick={() => {setText('excursions')}}>EXCURSIONS</a>
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
        } else if(text == 'weather'){
            return(
                <Container>
                <Row>
                <Col sm={4}> 
                        <div className="d-grid gap-2">
                            <a className="button" onClick={() => {setText('location')}}>LOCATION</a>
                            <a className="button" onClick={() => {setText('transport')}}>TRANSPORT</a>
                            <a className="button" onClick={() => {setText('weather')}}>WEATHER</a>
                            <a className="button" onClick={() => {setText('excursions')}}>EXCURSIONS</a>
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
        } else {
            return(
                <Container>
                <Row>
                    <Col sm={4}> 
                        <div className="d-grid gap-2">
                            <a className="button" onClick={() => {setText('location')}}>LOCATION</a>
                            <a className="button" onClick={() => {setText('transport')}}>TRANSPORT</a>
                            <a className="button" onClick={() => {setText('weather')}}>WEATHER</a>
                            <a className="button" onClick={() => {setText('excursions')}}>EXCURSIONS</a>
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


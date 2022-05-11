import React,{useState} from "react";
import backGround from "../assets/_1344104.jpg";
import '../../src/App.css';
import MiddleBar from "../components/MiddleBar";
import Blue from "../assets/DSC01496.jpg";
import LastSec from "../assets/MobilePopUpBackGround.jpg";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import FirstImg from "../assets/_1322209.jpg";
import SecondImg from "../assets/_1344104.jpg";
import ThirdImg from "../assets/_1322202.jpg";

import FirstImgTrans from "../assets/f682b054e7868718f4167b9243ab3f9c.jpg";
import SecondImgTrans from "../assets/The_Common_Wanderer_-3.jpg";
import ThirdImgTrans from "../assets/a12d3250b32491bd47f7773b57dabfe3.jpg";


const ThingsToDo = () => {
    const [text,setText] = useState('things');
    const middleSHow = () =>{
        if(text == 'things'){
            return(
                <Container>
                <Row>
                    <Col sm={4}> 
                        <div className="d-grid">
                            <a className="button" onClick={() => {setText('things')}}>THINGS TO DO</a>
                            <a className="button" onClick={() => {setText('natural')}}>NATURAL POOL WITH RILL</a>
                            <a className="button" onClick={() => {setText('airRifle')}}>AIR RIFLE  & ARCHERY</a>
                            <a className="button" onClick={() => {setText('birdAnimal')}}>BIRD & ANIMAL WATCHING</a>
                            <a className="button" onClick={() => {setText('cycle')}}>CYCLING & SAFARI</a>
                            <a className="button" onClick={() => {setText('learnAbout')}}>LEARN ABOUT THE CULTURE</a>
                            <a className="button" onClick={() => {setText('culturalEvents')}}>CULTURAL EVENTS</a>
                            <a className="button" onClick={() => {setText('farmingCooking')}}>FARMING & COOKING</a>
                            <a className="button" onClick={() => {setText('hiking')}}>HIKING & TREKKING</a>
                            <a className="button" onClick={() => {setText('around')}}>AROUND THE SRI LANKA</a>
                        </div>
                    </Col>
                    <Col sm={8}>
                    <h4 className="dolpeText locationText">Things to do</h4>
                     <p className="smallLocationText">
                     Ella is probably one of Sri Lanka’s best kept secrets that 
                     offers plenty to keep you fascinated during a few nights’ stay.
                     Apart from simply unwinding in cool climes with hypnotic views;
                     you may even set out on a hiking adventure to explore some of 
                     nature’s wonders; such as the famed Little Adam’s Peak. Ella, 
                     being a remote hamlet located among the peaks of country’s 
                     central highlands is surrounded by countryside perfect for 
                     walks or a cycling adventure.- Amongst the numerous things 
                     to do in Ella, one could also explore tea gardens & factories, 
                     nine arch bridge, waterfalls, ancient temples and historic 
                     artefacts.
                     </p>
                    </Col>
                </Row>
            </Container>
            );
        } else if(text == 'natural'){
            return(
                <Container>
                <Row>
                <Col sm={4}> 
                <div className="d-grid">
                            <a className="button" onClick={() => {setText('things')}}>THINGS TO DO</a>
                            <a className="button" onClick={() => {setText('natural')}}>NATURAL POOL WITH RILL</a>
                            <a className="button" onClick={() => {setText('airRifle')}}>AIR RIFLE  & ARCHERY</a>
                            <a className="button" onClick={() => {setText('birdAnimal')}}>BIRD & ANIMAL WATCHING</a>
                            <a className="button" onClick={() => {setText('cycle')}}>CYCLING & SAFARI</a>
                            <a className="button" onClick={() => {setText('learnAbout')}}>LEARN ABOUT THE CULTURE</a>
                            <a className="button" onClick={() => {setText('culturalEvents')}}>CULTURAL EVENTS</a>
                            <a className="button" onClick={() => {setText('farmingCooking')}}>FARMING & COOKING</a>
                            <a className="button" onClick={() => {setText('hiking')}}>HIKING & TREKKING</a>
                            <a className="button" onClick={() => {setText('around')}}>AROUND THE SRI LANKA</a>
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
                <div className="d-grid">
                            <a className="button" onClick={() => {setText('things')}}>THINGS TO DO</a>
                            <a className="button" onClick={() => {setText('natural')}}>NATURAL POOL WITH RILL</a>
                            <a className="button" onClick={() => {setText('airRifle')}}>AIR RIFLE  & ARCHERY</a>
                            <a className="button" onClick={() => {setText('birdAnimal')}}>BIRD & ANIMAL WATCHING</a>
                            <a className="button" onClick={() => {setText('cycle')}}>CYCLING & SAFARI</a>
                            <a className="button" onClick={() => {setText('learnAbout')}}>LEARN ABOUT THE CULTURE</a>
                            <a className="button" onClick={() => {setText('culturalEvents')}}>CULTURAL EVENTS</a>
                            <a className="button" onClick={() => {setText('farmingCooking')}}>FARMING & COOKING</a>
                            <a className="button" onClick={() => {setText('hiking')}}>HIKING & TREKKING</a>
                            <a className="button" onClick={() => {setText('around')}}>AROUND THE SRI LANKA</a>
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
                    <div className="d-grid">
                            <a className="button" onClick={() => {setText('things')}}>THINGS TO DO</a>
                            <a className="button" onClick={() => {setText('natural')}}>NATURAL POOL WITH RILL</a>
                            <a className="button" onClick={() => {setText('airRifle')}}>AIR RIFLE  & ARCHERY</a>
                            <a className="button" onClick={() => {setText('birdAnimal')}}>BIRD & ANIMAL WATCHING</a>
                            <a className="button" onClick={() => {setText('cycle')}}>CYCLING & SAFARI</a>
                            <a className="button" onClick={() => {setText('learnAbout')}}>LEARN ABOUT THE CULTURE</a>
                            <a className="button" onClick={() => {setText('culturalEvents')}}>CULTURAL EVENTS</a>
                            <a className="button" onClick={() => {setText('farmingCooking')}}>FARMING & COOKING</a>
                            <a className="button" onClick={() => {setText('hiking')}}>HIKING & TREKKING</a>
                            <a className="button" onClick={() => {setText('around')}}>AROUND THE SRI LANKA</a>
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

    const showPictures = () => {
        if(text == 'location'){
            return(
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
    
            </Row> 
            );
        } else if(text == 'transport'){
            return(
                <Row className="blueAreaRow">
                <Col>
                    <Card style={{ width: '18rem',background:'none'}}>
                        <Card.Img variant="top" src={FirstImgTrans}/>
                    </Card>
                </Col>
    
                <Col>
                    <Card style={{ width: '18rem',background:'none' }}>
                        <Card.Img variant="top" src={SecondImgTrans} />
                    </Card>
                </Col>
    
                <Col>
                    <Card style={{ width: '18rem',background:'none' }}>
                        <Card.Img variant="top" src={ThirdImgTrans} />
                    </Card>
                </Col>
    
            </Row> 
            );
        } else if(text == 'weather'){
            return(
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
    
            </Row> 
            );
        } else {
            return(
                <Row className="blueAreaRow">
                <Col>
                    <Card style={{ width: '18rem',background:'none'}}>
                        <Card.Img variant="top" src={FirstImgTrans}/>
                    </Card>
                </Col>
    
                <Col>
                    <Card style={{ width: '18rem',background:'none' }}>
                        <Card.Img variant="top" src={SecondImgTrans} />
                    </Card>
                </Col>
    
                <Col>
                    <Card style={{ width: '18rem',background:'none' }}>
                        <Card.Img variant="top" src={ThirdImgTrans} />
                    </Card>
                </Col>
    
            </Row> 
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
        {/*Dolpe Villa Ella, Sri lanka */}
        <div  className="homeImage" style={{
             backgroundImage: `url(${Blue})`,
        }}>
        <div className="secondDiv">
           <br/><br/><br/>
            {middleSHow()}
           <br/><br/><br/>
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
           {showPictures()}
        <br/>
       </Container>
           
        </div>
    </>
    );
}

export default ThingsToDo;
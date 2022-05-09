import React,{useState} from "react";
import backGround from "../assets/_1333445.jpg";
import '../../src/App.css';
import MiddleBar from "../components/MiddleBar";
import Blue from "../assets/_1322204.jpg";
import { Col, Container, Row, Card, Button } from "react-bootstrap";

import FirstImgTrans from "../assets/f682b054e7868718f4167b9243ab3f9c.jpg";
import SecondImgTrans from "../assets/The_Common_Wanderer_-3.jpg";
import ThirdImgTrans from "../assets/a12d3250b32491bd47f7773b57dabfe3.jpg";
import FirstImg from "../assets/_1344168.jpg";
import SecondImg from "../assets/_1322232.jpg";
import ThirdImg from "../assets/287522687.jpg"

const Dinnning = () => {
    const [text,setText] = useState('location');
    const middleSHow = () =>{
        if(text == 'dinning'){
            return(
                <Container>
                <Row className="blueAreaRow">
                    <Col sm={4} className="facilList"> 
                        <div className="d-grid gap-2">
                            <a className="button" onClick={() => {setText('dinning')}}>DINNING</a>
                            <a className="button" onClick={() => {setText('restaurant')}}>DOLPE RILL RESTAURANT</a>
                            <a className="button" onClick={() => {setText('garden')}}>GARDEN DINNING</a>
                        </div>
                    </Col>
                    <Col sm={8}>
                    <h4 className="dolpeText locationText">Dinning</h4>
                    <div className="secondDiv">
                        <p className="smallLocationText">
                            Dining at Dolape Villa Ella is a stimulating experience. 
                            A truly unique open area restaurant Ella, the ‘Restaurant Dolape Villa’, 
                            built on a hillock that overlooks breathtaking scenery, engulfs 
                            the guests in a tantalizing dining experience
                        </p>
                            <div>
                                <ul className="facilOrdList">
                                    <li className="facilBeforeList"><span href="#home"><b>Food: </b><span>Chinese, Indian, Italian, Middle Eastern, Seafood, International, Grill/BBQ</span></span></li>
                                    <li className="facilBeforeList"><span href="#home"><b>Open for: </b><span>Breakfast, Brunch, Lunch, Dinner, High tea</span></span></li>
                                    <li className="facilBeforeList"><span href="#home"><b>Menu: </b><span>Buffet & À La Carte </span></span></li>
                                </ul>
                            </div>
                    </div>
                    </Col>
                </Row>
            </Container>
            );
        } else if(text == 'restaurant'){
            return(
                <Container>
                <Row className="blueAreaRow">
                    <Col sm={4} className="facilList"> 
                        <div className="d-grid gap-2">
                            <a className="button" onClick={() => {setText('dinning')}}>DINNING</a>
                            <a className="button" onClick={() => {setText('restaurant')}}>DOLPE RILL RESTAURANT</a>
                            <a className="button" onClick={() => {setText('garden')}}>GARDEN DINNING</a>
                        </div>
                    </Col>
                    <Col sm={8}>
                    <h4 className="dolpeText locationText">Dolape Rill Restautant</h4>
                    <div className="secondDiv">
                        <p className="smallLocationText">
                        Dining at Dolape Villa Ella is a stimulating experience. A truly unique 
                        open area restaurant Ella, the ‘Dolape Rill Restaurant’, built on a 
                        hillock that overlooks breathtaking scenery, engulfs the guests 
                        in a tantalizing dining experience.
                        </p>
                    </div>
                    </Col>
                </Row>
            </Container>
            );
        } else{
            return(
                <Container>
                <Row className="blueAreaRow">
                    <Col sm={4} className="facilList"> 
                        <div className="d-grid gap-2">
                            <a className="button" onClick={() => {setText('dinning')}}>DINNING</a>
                            <a className="button" onClick={() => {setText('restaurant')}}>DOLPE RILL RESTAURANT</a>
                            <a className="button" onClick={() => {setText('garden')}}>GARDEN DINNING</a>
                        </div>
                    </Col>
                    <Col sm={8}>
                    <h4 className="dolpeText locationText">Garden Dinning </h4>
                    <div className="secondDiv">
                        <p className="smallLocationText">
                            Dining at Dolape Villa Ella is a stimulating experience. 
                            A truly unique open area restaurant Ella, the ‘Restaurant 
                            Dolape Villa’, built on a hillock that overlooks breathtaking 
                            scenery, engulfs the guests in a tantalizing dining experience.
                        </p>
                    </div>
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
           <p>nkn</p>
        </div>
        {/*Blue Area */}
        <div className="blueArea" style={{
             backgroundImage: `url(${Blue})`
        }}>
           <Container>
        <br/>
           {middleSHow()}
        <br/>
       </Container>
       <Container style={{textAlign:'center'}}>
        <br/>
       <Row className="blueAreaRow">
            <Col>
                <Card style={{ width: '18rem',background:'none' }}>
                    <Card.Img variant="top" src={FirstImg} />
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
                    <Card.Img variant="top" src={SecondImg} />
                        <Card.Body>
                            <Button variant="primary">THINGS TO DO</Button>
                                <Card.Text className="textSizeAndCOlor">
                                Ella is probably one of Sri Lanka’s best kept secrets that offers plenty to keep you fascinated during a few nights’ stay. Apart from simply unwinding in cool climes with hypnotic views;                                 </Card.Text>
    
                        </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{ width: '18rem',background:'none' }}>
                    <Card.Img variant="top" src={ThirdImg} />
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

export default Dinnning;
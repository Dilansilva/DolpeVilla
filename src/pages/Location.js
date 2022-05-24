import React,{useState,useEffect} from "react";
import '../../src/App.css';
import MiddleBar from "../components/MiddleBar";

import { Col, Container, Row, Card,Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import MiddleBarPhoneView from "../components/MiddleBarPhoneView";
import {widthScreen} from "../constant/Constant";

function getWindowDimensions() {
    const { innerWidth: width } = window;
    return {
      width
    };
  }

function Location() {

    const navigate = useNavigate();

    function useWindowDimensions() {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowDimensions;
  }

  const {height,width} = useWindowDimensions();


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

    const showPictures = () => {
        if(text == 'location'){
            return(
                <Row className="blueAreaRow">
                <Col>
                    <Card style={{ width: '18rem',background:'none' }}>
                        <Card.Img variant="top" src="https://i.postimg.cc/8c9MVchw/1344104.jpg" />
                    </Card>
                </Col>
    
                <Col>
                    <Card style={{ width: '18rem',background:'none' }}>
                        <Card.Img variant="top" src="https://i.postimg.cc/QMLrBDyf/1322202-b6fc28e9bcde277789e1.jpg" />
                    </Card>
                </Col>
    
                <Col>
                    <Card style={{ width: '18rem',background:'none' }}>
                        <Card.Img variant="top" src="https://i.postimg.cc/9fGHZS3C/1322209-0ef6bdcb6673ab137539.jpg" />
                    </Card>
                </Col>
    
            </Row> 
            );
        } else if(text == 'transport'){
            return(
                <Row className="blueAreaRow">
                <Col>
                    <Card style={{ width: '18rem',background:'none'}}>
                        <Card.Img variant="top" src="https://i.postimg.cc/7ZV0YW2C/a12d3250b32491bd47f7773b57dabfe3-1.jpg"/>
                    </Card>
                </Col>
    
                <Col>
                    <Card style={{ width: '18rem',background:'none' }}>
                        <Card.Img variant="top" src="https://i.postimg.cc/bw81Phsc/ezgif-com-gif-maker-1.jpg" />
                    </Card>
                </Col>
    
                <Col>
                    <Card style={{ width: '18rem',background:'none' }}>
                        <Card.Img variant="top" src="https://i.postimg.cc/907ymXdV/f682b054e7868718f4167b9243ab3f9c-1.jpg" />
                    </Card>
                </Col>
    
            </Row> 
            );
        } else if(text == 'weather'){
            return(
                <Row className="blueAreaRow">
                <Col>
                    <Card style={{ width: '18rem',background:'none' }}>
                        <Card.Img variant="top" src="https://i.postimg.cc/x874XdNd/342656051.jpg" />
                    </Card>
                </Col>
    
                <Col>
                    <Card style={{ width: '18rem',background:'none' }}>
                        <Card.Img variant="top" src="https://i.postimg.cc/ryYbnfZL/Weather-in-Ella.jpg" />
                    </Card>
                </Col>
    
                <Col>
                    <Card style={{ width: '18rem',background:'none' }}>
                        <Card.Img variant="top" src="https://i.postimg.cc/x874XdNd/342656051.jpg" />
                    </Card>
                </Col>
    
            </Row> 
            );
        } else {
            return(
                <Row className="blueAreaRow">
                <Col>
                    <Card style={{ width: '18rem',background:'none'}}>
                        <Card.Img variant="top" src="https://i.postimg.cc/DzBGqv1Q/DSC01503.jpg" />
                    </Card>
                </Col>
    
                <Col>
                    <Card style={{ width: '18rem',background:'none' }}>
                        <Card.Img variant="top" src="https://i.postimg.cc/bvzbDDSN/1344226.jpg" />
                    </Card>
                </Col>
    
                <Col>
                    <Card style={{ width: '18rem',background:'none' }}>
                        <Card.Img variant="top" src="https://i.postimg.cc/DzBGqv1Q/DSC01503.jpg" />
                    </Card>
                </Col>
    
            </Row> 
            );
        }
    }

    return (
    <>
       {
             width > widthScreen ?
            <div className="homeImage" style={{
                backgroundImage: `url("https://i.postimg.cc/gjL2p5Tv/1344105.jpg")`
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
           </div> : <MiddleBarPhoneView/>
       }
        {/*Dolpe Villa Ella, Sri lanka */}
      {
            width > widthScreen ? <div  className="homeImage" style={{
                backgroundImage: `url("https://i.postimg.cc/R0702S9z/OG12-31702f1ced68599661aa.jpg")`,}}>
           <div className="secondDiv">
              <br/><br/><br/>
               {middleSHow()}
              <br/><br/><br/>
           </div>
           </div>
            :
           <div>
               <div style={{textAlign:'start',padding:'10%',background:'#030F51'}}>
                <h1 className="dolpeText locationText">Dolape Villa standing on exquisite beauty in Ella, Sri Lanka.</h1>
                    <p style={{color:'white'}}>
                    Ella is a small village located among the peaks of Sri Lanka’s 
                    central highlands. This sleepy village is nestled in a valley 
                    peering straight through the Ella Gap to the plain nearly 
                    1000m below and across to the coastline. Apart from the 
                    mesmerizing natural views, Ella is surrounded by hilly 
                    countryside perfect for walks; through tea plantations, 
                    waterfalls, ancient temples and artefacts. With a handful 
                    of shops, hotels and guesthouses, Ella still remains a 
                    remote hamlet. This hidden sanctuary with the perfect climate
                    is probably one of the best-kept secrets of the country and 
                    is easily accessible from the comfort of our Ella resort in Sri Lanka.
                    </p>
               </div>

              <div style={{textAlign:'center',padding:'10%',background:'#030F51'}}>
                    <Card >
                        <Card.Img variant="top" src="https://i.postimg.cc/3JXZwqt5/ella-s-pretty-train-station-quaint-has-won-best-kept-station-award-built-british-station-one-12262.jpg" />
                        <Card.Body>
                            <Card.Title className="dolpeText locationText"><h1>Transport</h1></Card.Title>
                            <Card.Text>
                            Featuring among Ella resorts, Dolape Villa is easy to locate 
                            right across and facing ‘Little Adams Peak’. The resort is easily
                             reached from any location below:<br/><br/>

                            10 km from Ella junction/railway station (5 mins)
                            17 km from Bandarawela (30 mins)
                            63.5 km from Nuwara Eliya (1.30 hours)
                            140 km wild life sanctuary Yala (2 hours)
                            239 km from Bandaranayake International Airport (5 to 6 hours)
                            202 km from Colombo (5 to 6 hours)
                            145 km from Kandy (3 to 4 hours)<br/><br/>

                            Please CONTACT US FOR directions / transport arrangements or to arrange a pick up from any location below.
                            Bandaranayake International Airport
                            Weerawila Mahinda Rajapakshe International Airport
                            Colombo
                            Nearest City / Town
                            Railway / Bus Station
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br/>
                    <Card >
                        <Card.Img variant="top" src="https://i.postimg.cc/ryYbnfZL/Weather-in-Ella.jpg" />
                        <Card.Body>
                            <Card.Title className="dolpeText locationText"><h1>Weather</h1></Card.Title>
                            <Card.Text>
                            The climate at Dolape Villa Ella remains a comfortable 
                            20-28 degrees Celsius throughout the year, thereby giving
                            the weather in Ella a ‘not too cold, not too hot’ comfort factor.<br/><br/>

                            The weather pattern in the locality of the resort is 
                            recognised as being the most comfortable in the entire country.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br/>
                    <Card >
                        <Card.Img variant="top" src="https://i.postimg.cc/gjL2p5Tv/1344105.jpg" />
                        <Card.Body>
                            <Card.Title className="dolpeText locationText"><h1>Excursion</h1></Card.Title>
                            <Card.Text>
                            Ella has plenty to offer that could keep you fascinated and occupied
                            during a few nights’ stay. Apart from the mesmerizing views of mountains
                            and tea estates, the region provides shelter to many precious flora and fauna.
                            In addition to simply unwinding in the cool climes you could set out on a 
                            trekking adventure or safari to a nearby wildlife sanctuary as part of excursions
                            in Ella to discover and experience some of these delicate wonders of nature
                            up- close.
                            </Card.Text>
                        </Card.Body>
                    </Card>
              </div>
           </div> 
      }
        {/*Blue Area */}
     {
           width > widthScreen ? <div className="blueArea" style={{
                backgroundImage: `url("https://i.postimg.cc/05FHfn94/mini-adams-peak-1-7.jpg")`
           }}>
              {
                  //Middle bar
              }
          <Container style={{textAlign:'center'}}>
           <br/>
              {showPictures()}
           <br/>
          </Container>
              
           </div> : null
     }
    </>
    );
}

export default Location;
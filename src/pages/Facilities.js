import React,{useEffect,useState} from "react";
import '../../src/App.css';
import MiddleBar from "../components/MiddleBar";
import { Col, Container, Row } from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import MiddleBarPhoneView from "../components/MiddleBarPhoneView";
import {widthScreen} from "../constant/Constant";
import Header from "../components/Header";

function getWindowDimensions() {
    const { innerWidth: width } = window;
    return {
      width
    };
  }

const Facilities = () => {

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

    return (
        <>
        {
            width > widthScreen ?
            <div className="homeImage" style={{
                backgroundImage: `url("https://i.postimg.cc/V6HkZn0k/1322201.jpg")`
           }}>
               <Header/>
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
            <div style={{backgroundColor:'#1F211F'}}>
            <div className="secondDiv">
               <br/><br/><br/>
               <h4 className="dolpeText" style={{textAlign:'center'}}>Facilities</h4>
               <br/><br/>
              
            </div>
            </div>
            {/*Blue Area */}
            <div className="blueArea textCenter" style={{
                 backgroundImage: `url("https://i.postimg.cc/QdLByYb9/5-17-2022-5-43-41-PM.jpg")`
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
                       <div><b>General</b></div>

                       <div>
                           <ul className="facilOrdList">
                                <li className="facilBeforeList"><span href="#contact">Grocery deliveries (Additional charge)</span></li>
                                <li className="facilBeforeList"><span href="#contact">Convenience store on site</span></li>
                                <li className="facilBeforeList"><span href="#contact">Airport shuttle (Additional charge)</span></li>
                                <li className="facilBeforeList"><span href="#contact">Shuttle service (Additional charge)</span></li>
                                <li className="facilBeforeList"><span href="#contact">Shuttle service (Free)</span></li>
                                <li className="facilBeforeList"><span href="#contact">Smoke-free property</span></li>
                                <li className="facilBeforeList"><span href="#contact">Wake-up service</span></li>
                                <li className="facilBeforeList"><span href="#contact">Private entrance</span></li>
                                <li className="facilBeforeList"><span href="#contact">Car rental</span></li>
                                <li className="facilBeforeList"><span href="#contact">Packed lunches</span></li>
                                <li className="facilBeforeList"><span href="#contact">Chapel/Shrine</span></li>
                                <li className="facilBeforeList"><span href="#contact">Fan</span></li>
                                <li className="facilBeforeList"><span href="#contact">Family rooms</span></li>
                                <li className="facilBeforeList"><span href="#contact">Hair/Beauty salon</span></li>
                                <li className="facilBeforeList"><span href="#contact">Facilities for disabled guests</span></li>
                                <li className="facilBeforeList"><span href="#contact">Non-smoking rooms</span></li>
                                <li className="facilBeforeList"><span href="#contact">Wake-up service/Alarm clock</span></li>
                                <li className="facilBeforeList"><span href="#contact">Room service</span></li>
                           </ul>
                       </div>

                       <div><b>Front Desk Services</b></div>

                       <div>
                       <ul className="facilOrdList">
                                <li className="facilBeforeList"><span href="#contact">Invoice provided</span></li>
                                <li className="facilBeforeList"><span href="#contact">Private check-in/out</span></li>
                                <li className="facilBeforeList"><span href="#contact">Concierge</span></li>
                                <li className="facilBeforeList"><span href="#contact">Baggage storage</span></li>
                                <li className="facilBeforeList"><span href="#contact">Tour desk</span></li>
                                <li className="facilBeforeList"><span href="#contact">Currency exchange</span></li>
                                <li className="facilBeforeList"><span href="#contact">Express check-in/out</span></li>
                                <li className="facilBeforeList"><span href="#contact">24-hour front desk</span></li>
                           </ul>
                       </div>

                       <div><b>Cleaning Services</b></div>

                       <div>
                       <ul className="facilOrdList">
                                <li className="facilBeforeList"><span href="#contact">Daily housekeeping Additional charge</span></li>
                                <li className="facilBeforeList"><span href="#contact">Suit press Additional charge</span></li>
                                <li className="facilBeforeList"><span href="#contact">Ironing service Additional charge</span></li>
                                <li className="facilBeforeList"><span href="#contact">Laundry Additional charge</span></li>
                           </ul>
                       </div>
                   </Col>
                </Row>
                </Container>
               
            </div>
        </>
        );
}

export default Facilities;
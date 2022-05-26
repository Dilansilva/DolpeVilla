import React,{useState,useEffect} from "react";
import '../../src/App.css';
import MiddleBar from "../components/MiddleBar";
import { Col, Container, Row, Card, Accordion } from "react-bootstrap";
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

const faqs = [
    {
        header: "What are the Check-in and Check-out times at Dolape Villa ?",
        body: "Check-in at Dolape Villa is from 2:00 PM, and check-out is until 12:00 PM.",
    },
    {
        header: "How far is Dolape Villa from the center of Ella ?",
        body: "Dolape Villa is 4.5 km from the center of Ella.",
    },
    {
        header: "Is Dolape Villa Ella popular with families ?",
        body: "Yes, Dolape Villa is popular with guests booking family stays.",
    },
    {
        header: "Does Dolape Villa have a restaurant on site ?",
        body: "Dolape Villa has 1 restaurant : Dolape Rill Restaurant",
    },
    {
        header: "What kind of breakfast is served at Dolape Villa ?",
        body: "Guests staying at Dolape Villa can enjoy a highly-rated breakfast during their stay (guest review score: 8.8) : Continental,Full English/Irish,Vegetarian,Vegan,Halal,Asian,American,Buffet,À la carte"
    },
    {
        header: "What is there to do at Dolape Villa Ella ?",
        body: "Dolape Villa offers the following activities/services (charges may apply):,Hot tub/Jacuzzi,Massage,Cycling,Hiking,Playground,Snorkeling,Diving,Fishing,Canoeing,Windsurfing,Solarium,Water park,Evening entertainment,Beauty services,Happy hour,Horseback riding,Bike tours,Facial treatments,Cooking class,Badminton equipment,Water sports facilities on site,Waxing services,Archery,Makeup services,Walking tours,Manicure,Tour or class about local culture,Pedicure,Temporary art galleries,Haircut,Live music/Performance,Hairstyling,Themed dinners,Light therapy,Spa lounge/Relaxation area,Spa/Wellness packages,Back massage,Neck massage,Foot massage,Head massage,Hand massage,Full-body massage,Entertainment staff,Yoga classes"
    },
    {
        header: "Does Dolape Villa have a hot tub for its guests ?",
        body: "Yes, there's a hot tub. You can find out more about this and the other facilities at Dolape Villa on this page."
    },
    {
        header: "How much does it cost to say at Dolape Villa Ella ?",
        body: "The prices at Dolape Villa may vary depending on your stay (e.g. dates, hotel's policy etc.). To see prices, enter your dates."
    },
    {
        header: "What type of room can I book at Dolape Villa Ella ?",
        body: "Room options at Dolape Villa include:,Attic Suite Room,Deluxe Room,Standard Room,Budget Villas"
    }
]

const ContactUs = () => {

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

    return(
            <>
             {
                    width > widthScreen ? <div className="homeImage" style={{
                        backgroundImage: `url("https://i.postimg.cc/nzH8fYZV/ella-rock.jpg")`
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
                        <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="1">
                             <Accordion.Header>{faq.header}</Accordion.Header>
                             <Accordion.Body style={{color:'black'}}>
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

export default ContactUs;
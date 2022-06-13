import React,{useState,useEffect} from "react";
import '../../src/App.css';
import MiddleBar from "../components/MiddleBar";
import {useNavigate} from "react-router-dom";
import MiddleBarPhoneView from "../components/MiddleBarPhoneView";
import CardCarousel from "../components/CardCarousel";

import { Col, Container, Row, Card, Button,Carousel } from "react-bootstrap";
import {widthScreen} from "../constant/Constant";
import Header from "../components/Header";

import { storage, db } from '../firebase/firebase';
import {deleteObject, getDownloadURL, list, listAll, ref,uploadBytes} from "firebase/storage";
import { addDoc, collection,getDocs,doc, updateDoc, deleteDoc } from "firebase/firestore";
import { v4 } from "uuid";
import { async } from '@firebase/util';

function getWindowDimensions() {
    const { innerWidth: width } = window;
    return {
      width
    };
  }


function Promotions() {


    const [imageList,setImageList] = useState([]);

    const userCollectionRef = collection(db,"promotions");
    useEffect(() => {
        const getData = async () => {
        const data = await getDocs(userCollectionRef)
        setImageList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
        getData();
    },[]);

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
            width > widthScreen ? <div className="homeImage" style={{
                backgroundImage: `url("https://i.postimg.cc/GmS8cRtH/IMG-20220519-WA0011.jpg")`
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
        
        </div>
        {/*Blue Area */}
        <div className="blueArea" style={{
             backgroundImage: `url("https://i.postimg.cc/hPn2yPDg/118286133-312616393307498-3660786380803978693-n.jpg")`
        }}>
           {
               //Middle bar
           }
            
              <Carousel style={{padding:'10%'}}>
                {
                 
                        imageList.map((list) => {
                            return(
                                <Carousel.Item key={list.id}>
                                <img
                                  className="d-block w-100"
                                  src={list.pro_img}
                                  alt="First slide"
                                />
                                <Carousel.Caption style={{textAlign:'center'}}>
                                  <h3>{list.pro_heading}</h3>
                                  <p>{list.pro_body}</p>
                                </Carousel.Caption>
                              </Carousel.Item>
                            );
                        })
                   
                }
              </Carousel>
           {

          
            //     <Container style={{textAlign:'center'}}>
            //     <br/>
            //    <Row className="blueAreaRow">
            //         <Col>
            //             <Card style={{ width: '18rem',background:'none' }}>
            //                 <Card.Img variant="top" src="https://i.postimg.cc/nrbwmrvW/1344168.jpg" />
            //                     <Card.Body>
            //                         <Button variant="primary">ACCOMODATION</Button>
            //                             <Card.Text className="textSizeAndCOlor">
            //                             The resort is made up of several beautifully crafted chalets tucked within the leveled landscape of the plantation.
            //                             </Card.Text>
            
            //                     </Card.Body>
            //             </Card>
            //         </Col>
        
            //         <Col>
            //             <Card style={{ width: '18rem',background:'none' }}>
            //                 <Card.Img variant="top" src="https://i.postimg.cc/cLBgyb9t/1322232.jpg" />
            //                     <Card.Body>
            //                         <Button variant="primary">THINGS TO DO</Button>
            //                             <Card.Text className="textSizeAndCOlor">
            //                             Ella is probably one of Sri Lanka’s best kept secrets that offers plenty to keep you fascinated during a few nights’ stay. Apart from simply unwinding in cool climes with hypnotic views;                                 </Card.Text>
            
            //                     </Card.Body>
            //             </Card>
            //         </Col>
        
            //         <Col>
            //             <Card style={{ width: '18rem',background:'none' }}>
            //                 <Card.Img variant="top" src="https://i.postimg.cc/d1hQNHZC/sdfdfsdf.jpg" />
            //                     <Card.Body>
            //                         <Button variant="primary">DINNING</Button>
            //                             <Card.Text className="textSizeAndCOlor">
            //                             Dining at Dolape Villa Ella is a stimulating experience. A truly unique open area restaurant Ella, the ‘Restaurant Dolape Villa’, built on a hillock that overlooks breathtaking scenery, engulfs the guests in a tantalizing dining experience.
            //                             </Card.Text>
            
            //                     </Card.Body>
            //             </Card>
            //         </Col>
        
            //     </Row>
            //    </Container>
           }
           
        </div>
    </>
    );
}

export default Promotions;
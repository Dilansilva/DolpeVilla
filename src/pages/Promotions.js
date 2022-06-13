import React,{useState,useEffect} from "react";
import '../../src/App.css';
import MiddleBar from "../components/MiddleBar";
import {useNavigate} from "react-router-dom";
import MiddleBarPhoneView from "../components/MiddleBarPhoneView";

import { Carousel } from "react-bootstrap";
import {widthScreen} from "../constant/Constant";
import Header from "../components/Header";

import { db } from '../firebase/firebase';
import {collection,getDocs } from "firebase/firestore";

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
           
        </div>
    </>
    );
}

export default Promotions;
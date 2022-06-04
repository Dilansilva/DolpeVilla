import React,{useState,useEffect} from "react";
import '../../src/App.css';

import MiddleBar from "../components/MiddleBar";
import MiddleBarPhoneView from "../components/MiddleBarPhoneView";

import { Col, Container, Row} from "react-bootstrap";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {useNavigate} from "react-router-dom";
import GalleryCarousel from "../components/GalleryCarousel";
import {widthScreen} from "../constant/Constant";
import Header from "../components/Header";

import {storage} from "../firebase/firebase"; 
import {getDownloadURL, listAll, ref} from "firebase/storage";

function getWindowDimensions() {
    const { innerWidth: width } = window;
    return {
      width
    };
  }

const Gallery = () => {

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

    const imageListRefAttic = ref(storage,"images/atticRooms/");
    const [atticImg,setAtticImg] = useState([]);
    useEffect(() => {
        listAll(imageListRefAttic).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setAtticImg((prev) => [...prev, url])
                })
            })
        });
    },[]);

    const imageListRefDeluxe = ref(storage,"images/deluxeRooms/");
    const [deluxeImg,setDeluxeImg] = useState([]);
    useEffect(() => {
        listAll(imageListRefDeluxe).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setDeluxeImg((prev) => [...prev, url])
                })
            })
        });
    },[]);

    const imageListRefStandard = ref(storage,"images/standardRooms/");
    const [standardImg,setStandardImg] = useState([]);
    useEffect(() => {
        listAll(imageListRefStandard).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setStandardImg((prev) => [...prev, url])
                })
            })
        });
    },[]);

    const imageListRefBudget = ref(storage,"images/budgetdRooms/");
    const [budgetImg,setBudgetImg] = useState([]);
    useEffect(() => {
        listAll(imageListRefBudget).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setBudgetImg((prev) => [...prev, url])
                })
            })
        });
    },[]);

    const imageListRefRestaurant = ref(storage,"images/restaurant/");
    const [restaurantImg,setRestaurantImg] = useState([]);
    useEffect(() => {
        listAll(imageListRefRestaurant).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setRestaurantImg((prev) => [...prev, url])
                })
            })
        });
    },[]);

    const imageListRefGarden = ref(storage,"images/gardenDinning/");
    const [gardenImg,setGardenImg] = useState([]);
    useEffect(() => {
        listAll(imageListRefGarden).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setGardenImg((prev) => [...prev, url])
                })
            })
        });
    },[]);

    const imageListRefPool = ref(storage,"images/naturalPool/");
    const [poolImg,setPoolImg] = useState([]);
    useEffect(() => {
        listAll(imageListRefPool).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setPoolImg((prev) => [...prev, url])
                })
            })
        });
    },[]);

    const imageListRefRifle = ref(storage,"images/airRifle/");
    const [rifleImg,setRifleImg] = useState([]);
    useEffect(() => {
        listAll(imageListRefRifle).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setRifleImg((prev) => [...prev, url])
                })
            })
        });
    },[]);

    const imageListRefBird = ref(storage,"images/birdsAndAnimals/");
    const [birdsImg,setBirdsImg] = useState([]);
    useEffect(() => {
        listAll(imageListRefBird).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setBirdsImg((prev) => [...prev, url])
                })
            })
        });
    },[]);

    const imageListRefCycle = ref(storage,"images/cyclingAndSafari/");
    const [cycleImg,setCycleImg] = useState([]);
    useEffect(() => {
        listAll(imageListRefCycle).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setCycleImg((prev) => [...prev, url])
                })
            })
        });
    },[]);

    const imageListRefCulture = ref(storage,"images/culture/");
    const [cultureImg,setCultureImg] = useState([]);
    useEffect(() => {
        listAll(imageListRefCulture).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setCultureImg((prev) => [...prev, url])
                })
            })
        });
    },[]);

    const {height,width} = useWindowDimensions();

    return(
            <>
                {
                    width > widthScreen ? <div className="homeImage" style={{
                        backgroundImage: `url("https://i.postimg.cc/0N7xsywn/1344220.jpg")`
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
                {
                    width > widthScreen ? <div style={{backgroundColor:'#1F211F'}}>
                    <div className="secondDiv"><br/>
                        <h4 className="dolpeText">Gallery</h4>
                        <hr style={{color:'#7CA844'}}/>
                        <Container style={{textAlign:'center'}}>
            <br/>
                    <Row className="blueAreaRow">
                        <Col sm={6}>
                        <div><h4 className="dolpeText">Attic Suite Room</h4></div><br/>
                            <ImageList sx={{ width: 500, height: 450 }} cols={4} rowHeight={164}>
                            {atticImg.map((item) => (
                                <ImageListItem key={item}>
                                    <img
                                    src={`${item}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item}
                                    loading="lazy"
                                    />
                                </ImageListItem>
                                ))}
                            </ImageList>
                        </Col>
        
                        <Col sm={6}>
                        <div><h4 className="dolpeText">Deluxe Room</h4></div><br/>
                            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                            {deluxeImg.map((item) => (
                                <ImageListItem key={item}>
                                    <img
                                    src={`${item}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item}
                                    loading="lazy"
                                    />
                                </ImageListItem>
                                ))}
                            </ImageList>
                        </Col>
                </Row> 
    
                <Row className="blueAreaRow">
                        <Col sm={6}>
                        <div><h4 className="dolpeText">Standard Room</h4></div><br/>
                            <ImageList sx={{ width: 500, height: 450 }} cols={4} rowHeight={164}>
                            {standardImg.map((item) => (
                                <ImageListItem key={item}>
                                    <img
                                    src={`${item}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item}
                                    loading="lazy"
                                    />
                                </ImageListItem>
                                ))}
                            </ImageList>
                        </Col>
        
                        <Col sm={6}>
                        <div><h4 className="dolpeText">Budget Room</h4></div><br/>
                            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                            {budgetImg.map((item) => (
                                <ImageListItem key={item}>
                                    <img
                                    src={`${item}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item}
                                    loading="lazy"
                                    />
                                </ImageListItem>
                                ))}
                            </ImageList>
                        </Col>
                </Row> 
                <hr style={{color:'#7CA844'}}/>
                <Row className="blueAreaRow">
                        <Col sm={6}>
                        <div><h4 className="dolpeText">Dolape Rill Restaurant</h4></div><br/>
                            <ImageList sx={{ width: 500, height: 450 }} cols={4} rowHeight={164}>
                            {restaurantImg.map((item) => (
                                <ImageListItem key={item}>
                                    <img
                                    src={`${item}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item}
                                    loading="lazy"
                                    />
                                </ImageListItem>
                                ))}
                            </ImageList>
                        </Col>
        
                        <Col sm={6}>
                        <div><h4 className="dolpeText">Garden Dinning</h4></div><br/>
                            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                            {gardenImg.map((item) => (
                                <ImageListItem key={item}>
                                    <img
                                    src={`${item}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                    />
                                </ImageListItem>
                                ))}
                            </ImageList>
                        </Col>
                </Row> 
                <hr style={{color:'#7CA844'}}/>
                                <br/><br/>
                <Row className="blueAreaRow">
                        <Col sm={6}>
                        <div><h4 className="dolpeText">Natural Pool</h4></div><br/>
                            <ImageList sx={{ width: 500, height: 450 }} cols={2} rowHeight={164}>
                            {poolImg.map((item) => (
                                <ImageListItem key={item}>
                                    <img
                                    src={`${item}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item}
                                    loading="lazy"
                                    />
                                </ImageListItem>
                                ))}
                            </ImageList>
                        </Col>
        
                        <Col sm={6}>
                        <div><h4 className="dolpeText">Air Rifle And Archery</h4></div><br/>
                            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                            {rifleImg.map((item) => (
                                <ImageListItem key={item}>
                                    <img
                                    src={`${item}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item}
                                    loading="lazy"
                                    />
                                </ImageListItem>
                                ))}
                            </ImageList>
                        </Col>
                </Row>
                <br/>
                <Row className="blueAreaRow">
                        <Col>
                        <div><h4 className="dolpeText">Bird and Animal Watching</h4></div><br/>
                            <ImageList sx={{ width: '80%', height: 450 }} cols={4} rowHeight={164}>
                            {birdsImg.map((item) => (
                                <ImageListItem key={item}>
                                    <img
                                    src={`${item}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item}
                                    loading="lazy"
                                    />
                                </ImageListItem>
                                ))}
                            </ImageList>
                        </Col>
                </Row>
                <br/>
                <Row className="blueAreaRow">
                        <Col sm={6}>
                        <div><h4 className="dolpeText">Cycling and Safari</h4></div><br/>
                            <ImageList sx={{ width: '100%', height: 450 }} cols={4} rowHeight={164}>
                            {cycleImg.map((item) => (
                                <ImageListItem key={item}>
                                    <img
                                    src={`${item}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item}
                                    loading="lazy"
                                    />
                                </ImageListItem>
                                ))}
                            </ImageList>
                        </Col>
                        <Col sm={6}>
                        <div><h4 className="dolpeText">Cultural Events</h4></div><br/>
                            <ImageList sx={{ width: '100%', height: 450 }} cols={4} rowHeight={164}>
                            {cultureImg.map((item) => (
                                <ImageListItem key={item}>
                                    <img
                                    src={`${item}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item}
                                    loading="lazy"
                                    />
                                </ImageListItem>
                                ))}
                            </ImageList>
                        </Col>
                </Row>
            
            
           </Container><br/>
                
                      <br/>
                    </div>
                    </div> : 
                    <div style={{backgroundColor:'#1A2460',textAlign:'center'}}><br/>
                        <h1 className="dolpeText">Gallery</h1>
                            <div style={{padding:'5%'}}>
                                <GalleryCarousel
                                    items={atticImg}
                                    title="Attic Suite Room"
                                /><br/>
                                <GalleryCarousel
                                    items={deluxeImg}
                                    title="Deluxe Room"
                                /><br/>
                                <GalleryCarousel
                                    items={standardImg}
                                    title="Standard Room"
                                /><br/>
                                <GalleryCarousel
                                    items={budgetImg}
                                    title="Budget Room"
                                /><br/>
                                <GalleryCarousel
                                    items={restaurantImg}
                                    title="Dolape Rill Restaurant"
                                /><br/>
                                <GalleryCarousel
                                    items={gardenImg}
                                    title="Garden Dinning"
                                /><br/>
                                <GalleryCarousel
                                    items={poolImg}
                                    title="Natural Pool"
                                /><br/>
                                <GalleryCarousel
                                    items={rifleImg}
                                    title="Air Rifle And Archery"
                                /><br/>
                                 <GalleryCarousel
                                    items={birdsImg}
                                    title="Bird and Animal Watching"
                                /><br/>
                                <GalleryCarousel
                                    items={cycleImg}
                                    title="Cycling and Safari"
                                /><br/>
                                <GalleryCarousel
                                    items={cultureImg}
                                    title="Cultural Events"
                                />
                            </div>
                    </div>
                }
                {/*Blue Area */}
              
            </>
    );
}

export default Gallery;
import React,{useState} from "react";
import backGround from "../assets/_1344104.jpg";
import '../../src/App.css';

import { ImageList,ImageListItem } from "@mui/material";

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
import { First } from "react-bootstrap/esm/PageItem";

const itemDataAround = [
    {
        img: "https://i.postimg.cc/2jwFVvx1/48800644637-e09e7ecc6b-b.jpg",
        title: 'Title'
    }, {
        img: "https://i.postimg.cc/Y006crsp/7718425268-1ffa7617fc-k.jpg",
        title: 'Title'
    }, {
        img: "https://i.postimg.cc/T1srfzzn/esala-perahera.jpg",
        title: 'Title'
    }, {
        img: "https://i.postimg.cc/QdBgtdmw/01.jpg",
        title: 'Title'
    }, {
        img: "https://i.postimg.cc/5tLwBKZm/1491555548-Hikkaduwa-Discover-Scuba-Diving-for-adults-03.jpg",
        title: 'Title'
    }, {
        img: "https://i.postimg.cc/PqjLjXRm/5e7a3ee81de2791e72d27361-nine-arch-bridge-ella.jpg",
        title: 'Title'
    }, {
        img: "https://i.postimg.cc/C5z5NzRV/75168-orig.jpg",
        title: 'Title'
    }, {
        img: "https://i.postimg.cc/WbNX2VQc/7c.jpg",
        title: 'Title'
    }, {
        img: "https://i.postimg.cc/05WJwqzs/a2c148fa-80c8-4dd3-b18f-f99bc8be6eee.webp",
        title: 'Title'
    }, {
        img: "https://i.postimg.cc/tgxzr4VW/Anuradhapura-city.jpg",
        title: 'Title'
    }, {
        img: "https://i.postimg.cc/KzbtJrbh/ayubowan-sri-lanka.jpg",
        title: 'Title'
    }, {
        img: "https://i.postimg.cc/WzHFL0B3/best-places-to-visit-in-Sri-Lanka.jpg",
        title: 'Title'
    }, {
        img: "https://i.postimg.cc/Wb5SzKvF/Depositphotos-457865098-XL-1024x683-jpg.webp",
        title: 'Title'
    }, {
        img: "https://i.postimg.cc/zvXK1z3d/ezgif-com-gif-maker-4.jpg",
        title: 'Title'
    }, {
        img: "https://i.postimg.cc/gJyHWts0/Jaffna.jpg",
        title: 'Title'
    }, {
        img: "https://i.postimg.cc/Dywd9gX2/photo2jpg.jpg",
        title: 'Title'
    }, {
        img: "https://i.postimg.cc/fRFKj9kM/Polonnaruwa-header.jpg",
        title: 'Title'
    }, {
        img: "https://i.postimg.cc/654T44sr/Polonnaruwa-02.jpg",
        title: 'Title'
    }, {
        img: "https://i.postimg.cc/FHjRDtH1/sigiriya-459197-1920.jpg",
        title: 'Title'
    }, {
        img: "https://i.postimg.cc/QN0cJTnv/Sri-Lanka-Map-Tourist-Attractions-Tours-Maps-com.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/pTMJ3MD7/whale3-1024x683.jpg",
        title: 'Title'
    }, {
        img: "https://i.postimg.cc/FF8HvFf7/yaala.jpg",
        title: 'Title'
    }
]

const itemDataHiking = [
    {
        img: "https://i.postimg.cc/2jwFVvx1/48800644637-e09e7ecc6b-b.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/4dRbhQM9/caption.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/zXxjPWLs/DSC-0458-1.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/WbN8nS4m/little-adams-peak-ella-1024x683.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/NjXm1PXj/342656083.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/d3WmxkQQ/d70508bc-f149-4c06-a8df-41c52d8c7c97.webp",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/RFLTwpjH/DSC-0040.webp",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/9ft9kRJ3/ezgif-com-gif-maker.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/KjsB56QR/ezgif-com-gif-maker-1.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/9XxdV9VC/ezgif-com-gif-maker-2.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/wxFVvP5K/ezgif-com-gif-maker-3.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/6q6fcLX1/Ravanas-Cave-41.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/wBdJFc5c/The-Common-Wanderer-Diyaluma-falls-guide-6.jpg",
        title: 'Title'
    }
]

const itemDataCulture = [
    {
        img: "https://i.postimg.cc/k4fQh6w1/1492428417-Kandy-Final-Kumbal-Perahera-03.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/Y006crsp/7718425268-1ffa7617fc-k.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/d0RmrSCK/837254-1594117789-Public-not-allowed-to-visit-Kataragama-during-Esala-Perahera-festival-B.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/T1srfzzn/esala-perahera.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/50x53q5Q/image.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/vH1r3mnh/market-body.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/jjY4WrLX/og-picture-for-sri-lanka-festivities.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/VsZ9qtJ5/Sinhala-and-Tamil-New-Year-Celebrations-in-Sri-Lanka.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/0yYJBKyY/Snapseed-1.jpg",
        title: 'Title'
    },
]

const itemDataCycle = [
    {
        img: "https://i.postimg.cc/gjL2p5Tv/1344105.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/kGnQTX7M/098ghj.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/jS9hRb4v/342656051.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/2jwFVvx1/48800644637-e09e7ecc6b-b.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/4dRbhQM9/caption.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/zXxjPWLs/DSC-0458-1.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/6pT0s3ny/ella-rock-16.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/XYT9Tgnz/img10-min.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/WbN8nS4m/little-adams-peak-ella-1024x683.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/BZcNHRJQ/P1250043.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/k5bv4pjC/ravana-cave-ella-1.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/SsLLLzFt/ravana-s-cave.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/xdwg32kq/sunset-on-the-way-back.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/gk1wJk1w/1344109.jpg",
        title: 'Title'
    },
]

const itemDataBird = [
    {
        img: "https://i.postimg.cc/ncby3Kt3/0987.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/8c4LrQQF/1-buse94ay-OYNV5x46-BTZ4-Sw.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/FsFyXR30/1-MPplvw-IKYup-Cy-BGEETw-Xh-A.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/sgKbftGL/1233434234.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/d1gbPrZt/145.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/13PZ3GC8/1483958673-sparrow-sns.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/02h0YZRN/3037225610-3ec0eb406a-c.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/XYp9Xz2J/542-5179461483.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/qBswdSYH/bird-watching-slider1.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/dVpt6HJL/Black-Capped-Kingfisher.webp",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/dtXLNtBs/common-cobra-e1504181364653.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/VNJ4Q6yK/df9ce790fb204284a565706fb32a51a4.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/jj2PwkZ2/elulu-the-goat.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/3wRVkngx/fdgdkjiojlkmk-opo.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/W3MHC3rQ/Funambulus-palmarum-Bengaluru.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/Hx52nhk5/index.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/zD2mTLzf/kobeyya2.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/vHGz8XFg/kobyya1.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/BbSK3YLJ/lizard-4723975-480.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/8k4v4S9c/LK75090100-01-E-1280-720-1280x.webp",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/BQ8vFfGd/Loten-s-Sunbird-M.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/yxHTZyDG/monkey-sri-lanka1.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/FFLtbWwf/poiioolk.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/xjvJC2ng/Sri-Lanka-king-fisher-yala-national-park.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/fb1CwNDD/sri-lankan-junglefowl-sri-lanka-945x630.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/nhF9Qw07/The-Ceylon-krait-or-Sri-Lankan-krait-Bungarus-ceylonicus-is-a-species-of-venomous-snake-endemic-to.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/RFQHj50P/zebu-385682-1280.jpg",
        title: 'Title'
    },
]

const itemDataRifle = [
    {
        img: "https://i.postimg.cc/PJvs7K6q/1518461565-img-1684.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/Ls4sWKj6/274185217-5289184551115501-806109289725916924-n.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/G27dV4dX/MAD096https://i.postimg.cc/MGw6Qk9m/product-jpeg-500x500.jpg2-800-450.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/nrG5g54p/MVIMG-20200222-131858.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/MGw6Qk9m/product-jpeg-500x500.jpg",
        title: 'Title'
    },
    {
        img: "https://i.postimg.cc/ydY7Lm4J/ZLMAT-2.jpg",
        title: 'Title'
    },
]
const itemDataPool = [
    {
        img:"https://i.postimg.cc/k4kWQXzp/DSC01492.jpg",
        title:'Title'
    },
    {
        img:"https://i.postimg.cc/25tWYSkS/DSC01494.jpg",
        title:'Title'
    },
    {
        img:"https://i.postimg.cc/ZqnNXdhQ/DSC01496.jpg",
        title:'Title'
    },
    {
        img:"https://i.postimg.cc/L43sB8cg/1344012.jpg",
        title:'Title'
    }
]
const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
      },
      {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
      },
      {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
      },
      {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
      },
      {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
      },
      {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
      },
      {
          img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
          title: 'Bike',
        },
        {
          img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
          title: 'Bike',
        },
        {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
          },
          
  ];

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
                    <h4 className="dolpeText locationText">Natural Pool With Rill</h4>
                        <p className="smallLocationText">
                        Ella is probably famous for natural waterfalls, rivers 
                        and natural water resources.The famous and beautiful Dolape 
                        Villa Natural Pool created in the natural landscape by 
                        collecting tha water flowing through the natural water sources 
                        located on the top of the hill through a naturally created 
                        Kithul Track.We invite you to experience the splendor of this 
                        rare and beautiful setting located within the Ella, Sri Lanka.
                        </p>

                        <div>
                            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                            {itemDataPool.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                    />
                                </ImageListItem>
                                ))}
                            </ImageList>
                        </div>
                    </Col>
                </Row>
            </Container>
            );
        } else if(text == 'airRifle'){
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
                    <h4 className="dolpeText locationText">Air Rifle & Archery</h4>
                         <p className="smallLocationText">
                         A site exclusively designed for adventure enthusiasts and adrenaline junkies who prefer a not so ordinary hillside experience. Want to experience Archery in Sri Lanka like the way hunters did?
                        Join Dolape Villa Ella, and try out the field Archery session!
                        feel the wind, aim.....
                        bring the huntsman inside you !!
                         </p>

                            <div>
                                <ul >
                                    <li ><span href="#home">No practice or past experience necessary</span></li>
                                    <li ><span href="#home">Includes training and equipment by our in-house archery specialist.</span></li>
                                    <li ><span href="#home">One session – 2 hours</span></li>
                                    <li ><span href="#home">Number of pilots for air rifle (around 15-25)</span></li>
                                </ul>
                            </div>

                         <div>
                            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                            {itemDataRifle.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                    />
                                </ImageListItem>
                                ))}
                            </ImageList>
                        </div>
                    </Col>
                </Row>
            </Container>
            );
        } else if(text == 'birdAnimal') {
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
                    <h4 className="dolpeText locationText">Bird & Animal Watching</h4>
                        <p className="smallLocationText">
                        Bird lovers and wildlife enthusiasts will be delighted to observe
                        that the Dolape Villa Ella provides sanctuary for 27% or 63 species
                        of the resident birds of Sri Lanka, including 6 precious species 
                        endemic to the country. Out of those 63 bird species, birds such
                        as Woodpeckers, Babblers, Barbets, Flycatchers, Minivit, and 
                        Chestnut headed Bee-eaters and Hill Mynas are the types of 
                        birds commonly seen in this location. Also there are Monkeys, 
                        Snakes, Grizzled giant squirrel and etc.
                        </p>
                        <p> <a href="#animal">&lt;&lt;Click Here&gt;&gt;</a>  to learn more about Endemic Birds of Sri Lanka</p>
                        <p> <a href="#animal">&lt;&lt;Click Here&gt;&gt;</a>  to learn more about Endemic Animals of Sri Lanka</p>

                         <div>
                            <ImageList sx={{ width: '100%', height: 450 }} cols={4} rowHeight={164}>
                            {itemDataBird.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                    />
                                </ImageListItem>
                                ))}
                            </ImageList>
                        </div>
                    </Col>
                </Row>
            </Container>
            );
        }else if(text == 'cycle') {
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
                    <h4 className="dolpeText locationText">Cycling & Safari</h4>
                        <p className="smallLocationText">
                        Cycling in Ella is one of the most frequent activity done 
                        by most of the tourists. This cycling tour covers some of 
                        the most important tourist attractions in Ella. You will 
                        start cycling to the famous Rawana Waterfalls. Ravana Falls
                        is another must visit in Ella. Hill country of Sri Lanka is
                        quite popular for beautiful waterfalls and Ravana Falls
                        is right at the top.It currently ranks as one of the
                        widest falls in the country. This waterfall measures 
                        approximately 25 m (82 ft) in high and cascade from an
                        oval-shaped concave rock outcrop. During the local wet
                        season, the waterfall turns into what is said to resemble
                        an areca flower with withering petals. But this is not
                        the case in the dry season, where the flow of water
                        reduces dramatically.<br/><br/>

                        And, this ride will be approximately 30 minutes. On arrival
                        at Rawana waterfalls, you will do a small trekking to witness
                        the Rawana Cave where Rawana hid a lovely Indian Princess Sita
                        after abducting her.The Ravana Cave is located about 2 km from
                        the Ella town and 11 km (7 mi) away from Bandarawela. It is
                        quite a small cave, measuring about 50ft wide, 150ft long
                        and 60ft high.  Recently a 20,000-year-old skull was
                        discovered in the cave. Then you will do a short cycling
                        ride to enjoy the sceneries at Ella gap. This incredible 
                        gap is one of the most picturesque locations in the country 
                        that allows plenty of photographic opportunities. At the 
                        end of this visit, you will cycle back to Ella.<br/><br/>
                        </p>

                         <div>
                            <ImageList sx={{ width: 450, height: 450 }} cols={3} rowHeight={164}>
                            {itemDataCycle.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                    />
                                </ImageListItem>
                                ))}
                            </ImageList>
                        </div>
                    </Col>
                </Row>
            </Container>
            );
        }else if(text == 'learnAbout') {
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
                    <h4 className="dolpeText locationText">Learn About The Culture</h4>
                        <b>Introducation</b><br/><br/>
                        <p className="smallLocationText">
                        The culture of Sri Lanka has been influenced by many factors but has
                        managed to retain much of its ancient aspects. Mostly it has 
                        been influenced by its long history and its Buddhist heritage. 
                        The country has a rich artistic tradition, embracing the fine 
                        arts, including music, dance, and visual arts. Sri Lankan 
                        lifestyle is reflected in the cuisine, festivals, and sports. 
                        South Indian influences are visible in many aspects. There 
                        are some influences from colonisation by the Portuguese, the 
                        Dutch, and the British. Sri Lankan culture is best known 
                        abroad for its cricket, food, holistic medicine, religious 
                        icons like the Buddhist flag, and cultural exports such as tea,
                        cinnamon and gems. Sri Lankan culture is diverse, as it varies 
                        from region to region.<br/><br/>

                        Sri Lanka has had ties with Indian subcontinent from ancient times.
                        Demographics: Sinhalese 74.8%, Sri Lankan Moors 9.23%, Indian
                        Tamil 4.16%, Sri Lankan Tamil 11.21%, Other 0.6%.<br/><br/>

                        Sri Lanka boasts of a documented history of over 2000 years 
                        mainly due to ancient historic scriptures like Mahawansa. 
                        Several centuries of intermittent foreign influence, has 
                        transformed Sri Lankan culture to the present outlook. 
                        Nevertheless ancient traditions and festivals are 
                        celebrated by mostly conservative Sinhalese people 
                        of the island, together with other minorities that make up the 
                        Sri Lankan identity.<br/><br/>

                        <b>Architecture </b><br/><br/>
                        The architecture of Sri Lanka displays a rich variety of architectural forms and
                        styles. Buddhism had a significant influence on Sri Lankan architecture. 
                        However techniques and styles developed in Europe and Asia have also played 
                        a major role in the architecture of Sri Lanka.<br/><br/>

                        <b>Arts and Crafts </b><br/><br/>
                        Many forms of Sri Lankan arts and crafts take inspiration from the 
                        Island&#39;s long and lasting Buddhist culture which in turn has 
                        absorbed and adopted countless regional and local traditions. 
                        In most instances Sri Lankan art originates from religious beliefs, 
                        and are represented in many forms such as painting, sculpture, and architecture. 
                        One of the most notable aspects of Sri Lankan art are caves and temple paintings, 
                        such as the frescoes found in Sigiriya and religious paintings found in temples 
                        in Dambulla and Temple of the Tooth Relic in Kandy. Other popular forms of art 
                        have been influenced by both natives as well as outside settlers. For example, 
                        traditional wooden handicrafts and clay pottery are found around the hill country
                         while Portuguese-inspired lacework and Indonesian-inspired Batik have become
                          notable. <br/><br/>

                        <b>Music</b><br/><br/>
                        The two single biggest influences on Sri Lankan music are from Buddhism and 
                        Portuguese colonizers. Buddhism arrived in Sri Lanka after the Buddha&#39;s
                        visit in 300 BC, while the Portuguese arrived in the 15th century, bringing 
                        with them cantiga ballads, the ukulele, and guitars, along with African slaves, 
                        who further diversified the musical roots of the island. These slaves were called
                         kaffrinha, and their dance music was called baila. Traditional Sri Lankan music
                          includes the hypnotic Kandyan drums – drumming was and is very much a part and
                           parcel of music in both Buddhist and Hindu temples in Sri Lanka. Most western
                            parts of Sri Lanka follow western dancing and music.<br/>

                        </p>

                    </Col>
                </Row>
            </Container>
            );
        } else if(text == 'culturalEvents') {
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
                    <h4 className="dolpeText locationText">Cultural Events</h4>
                        <p className="smallLocationText">
                        Take part in the many religious and social local events in Ella during
                        your stay at this scenic and tranquil location among the hills.
                        </p>
                        <ul>
                            <li> Every Wednesday - Weekly Wednesday Fair in Ella</li>
                            <li>May - Dova Temple Perahera</li>
                            <li>June - Kumbal Perehara in Ella</li>
                            <li>April 12th-16th - Sinhala and Tamil New Year Festival</li>
                            <li> August - Halpewatte Estate Kovil Ceremony</li>
                            <li>May - Vesak Poya Day (Festival of Lights)</li>
                            <li>July - Kandy Esala Perahara</li>
                        </ul>

                        <div>
                            <ImageList sx={{ width: 450, height: 450 }} cols={3} rowHeight={164}>
                            {itemDataCulture.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                    />
                                </ImageListItem>
                                ))}
                            </ImageList>
                        </div>
                    </Col>
                </Row>
            </Container>
            );
        }else if(text == 'farmingCooking'){
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
                    <h4 className="dolpeText locationText">Farming & Cooking</h4>
                    <p style={{color:'#7CA844'}}>FARMING WITH RESORT GARDNERS :</p>
                        <p className="smallLocationText">
                        Method of booking: In-person or email requesting to dolapevilla.lbh@gmail.com<br/><br/>
                        Time of class:  Around 8.00 - 10.00 morning<br/><br/>
                        Normal duration: Time is depend on the section that you are joining<br/><br/>
                        </p>
                        <ul>
                            <li>Practical  of Dolape Villa Ella.</li>
                            <li>Conducted by villa gardeners.</li>
                            <li>Experience how a villa's gardening instruments are using</li>
                            <li>Introduction to Sri Lankan farming and traditional techniques.</li>
                            <li>Step by step instructions.</li>
                            <li>Learn to prepare soil and land before farming.</li>
                        </ul>

                    <p style={{color:'#7CA844'}}>COOKING CLASS WITH RESORT CHEF : </p>
                        <p className="smallLocationText">
                        Max 05 people inside the kitchen at once. Group classes will be conducted in the open area of the villa.<br/><br/>
                        Method of booking: In-person or email requesting to dolapevilla.lbh@gmail.com<br/><br/>
                        Time of class: Lunch/dinner<br/><br/>
                        Normal duration: Negotiable once you meet the chef and discuss or communicate via email.<br/><br/>
                        </p>
                        <ul>
                            <li>Private class in the main kitchen of Dolape Villa Ella.</li>
                            <li>Conducted by villa chef.</li>
                            <li>Experience how a villa's fine dining kitchen operates during your course.</li>
                            <li>Introduction to Sri Lankan farming and traditional techniques.</li>
                            <li>Step by step instructions.</li>
                            <li>Learn to prepare soil and land before farming.</li>
                            <li>Discuss, interact and ask questions directly from the chef.</li>
                            <li>Have the option to have the lunch/Dinner you cooked yourself in the Dolape Rill Restaurant.</li>
                            <li>Guests simultaneously learn to cook as well as cover one meal during the program.</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            );
        }else if(text == 'hiking'){
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
                    <h4 className="dolpeText locationText">Hiking & Trekking</h4>
                    <p style={{color:'#7CA844'}}>FARMING WITH RESORT GARDNERS :</p>
                        <p className="smallLocationText">
                        When staying at our retreat in Ella, things to do for guests would 
                        include a host of pleasing and enjoyable activities. The vicinity of 
                        Dolape Villa Ella affords ample opportunity for hiking, trekking and 
                        biking. Ella is a great location for viewing some of the best natural 
                        scenery in Sri Lanka. Must visit locations: 
                        </p>
                        <p style={{color:'#7CA844'}}>Little Adam’s Peak </p>
                        <ul>
                            <li>Little Adam’s peak is Ella’s best known tourist attraction.</li>
                            <li>Resembles Adam's Peak.</li>
                            <li>Located five minutes away from the resort</li>
                            <li>A short half hour climb to the top of the 1141 metre peak</li>
                            <li>Breathtaking views of an endless valley, tea plantations and waterfalls</li>
                        </ul>

                        <p style={{color:'#7CA844'}}>Ella Rock </p>
                        <ul>
                            <li>Ella Rock is a must climb for those into hiking and trekking.</li>
                            <li>Ranks as one of the widest falls in Sri Lanka.</li>
                            <li>The waterfall measures approximately 25 meters (82 ft) in height and cascades from an oval-shaped concave rock outcrop.</li>
                            <li>The falls form part of the Ravana Ella Wildlife Sanctuary</li>
                            <li> A ten minute ride or a half hour walk away from the resort</li>
                            <li>Visit the nearby Ravana cave, which according to history, is famed to have held Seetha captive who was kidnapped from India by Ravana</li>
                        </ul>

                        <p style={{color:'#7CA844'}}>Ravana Ella Falls</p>
                        <ul>
                            <li> The Ravana Ella Falls is a wonderful sightseeing attraction.</li>
                            <li>A challenging climb and takes about three hours.</li>
                            <li>See spectacular views of the valley.</li>
                        </ul>   

                        <p style={{color:'#7CA844'}}>Ravana Ella Falls</p>
                        <ul>
                            <li> The Ravana Ella Falls is a wonderful sightseeing attraction.</li>
                            <li>A challenging climb and takes about three hours.</li>
                            <li>See spectacular views of the valley.</li>
                        </ul>  

                     
                    </Col>
                </Row>
            </Container>
            );
        }else if(text == 'around'){
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
                    <h4 className="dolpeText locationText">Around The Sri Lanka</h4>
                        <p className="smallLocationText">
                        Sri Lanka is an amazing travel destination offering a wide range of places
                        to visit. This island, located in the Indian Ocean off the coast of India, 
                        presents visitors with an incredible array of environments and tourist 
                        attractions to enjoy and experience.
                        </p>
                        
                        <p className="smallLocationText">
                        Travelers can trace the island's fascinating history, from ancient times through
                        the colonial period to the present, in cities like Colombo and Kandy. This
                        relatively compact island boasts eight UNESCO World Heritage Sites where that
                        history is preserved.
                        </p>
                     
                        <p className="smallLocationText">
                        Incredible outdoor landscapes and safari experiences can be found in the 
                        country's large elephant- and leopard-filled national parks, like Yala, 
                        Minneriya, and Udawalawe. Sri Lanka is also a beach-lover's paradise, 
                        ringed by some of the world's most beautiful beaches, and perfect to 
                        number of water sports.
                        </p>

                        <p className="smallLocationText">
                        When planning a Sri Lankan adventure, keep in mind that the country 
                        experiences various type of weather conditions,climate changes with 
                        in 4 to 5 hours travel.Plan your travel itinerary with our list of the
                         best places to visit in Sri Lanka.
                        </p>
                        <br/>
                        <div>
                            <ImageList sx={{ width: 450, height: 450 }} cols={3} rowHeight={164}>
                            {itemDataAround.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                    />
                                </ImageListItem>
                                ))}
                            </ImageList>
                        </div>
                    </Col>
                </Row>
            </Container>
            );
        }
    }

    const showPictures = () => {
       if(text == 'hiking'){
         return (
            <div><br/>
            <ImageList sx={{ width:'100%', height: 450 }} cols={6} rowHeight={164}>
            {itemDataHiking.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    />
                </ImageListItem>
                ))}
            </ImageList><br/>
        </div>
         )
       }
    }

    return (
    <>
        <div className="homeImage" style={{
             backgroundImage: `url("https://i.postimg.cc/8c9MVchw/1344104.jpg")`
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
             backgroundImage: `url("https://i.postimg.cc/x1rT9SQP/5-17-2022-6-59-20-PM.jpg")`,
        }}>
        <div className="secondDiv">
           <br/><br/><br/>
            {middleSHow()}
           <br/><br/><br/>
        </div>

       
        </div>
        {/*Blue Area */}
        <div  className="homeImage" style={{
             backgroundImage: `url(${Blue})`,
        }}>
        <div className="secondDiv">
          
            {showPictures()}
          
        </div>

       
        </div>
    </>
    );
}

export default ThingsToDo;
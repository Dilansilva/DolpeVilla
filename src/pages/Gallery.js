import React from "react";
import backGround from "../assets/_1344220.jpg";
import '../../src/App.css';
import MiddleBar from "../components/MiddleBar";
import Blue from "../assets/_1322204.jpg";
import { Col, Container, Row, Card, Button, Breadcrumb, Accordion } from "react-bootstrap";
import FirstImg from "../assets/_1344168.jpg";
import SecondImg from "../assets/_1322232.jpg";
import ThirdImg from "../assets/287522687.jpg";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { First } from "react-bootstrap/esm/PageItem";

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

const itemDataRill = [
  {
      img: "https://i.postimg.cc/cCsFMfx9/266309325_649201563106196_407574773516081162_n.jpg",
      title: 'never mind'
  },
  {
      img: "https://i.postimg.cc/zXbwgd5t/_1322236.jpg",
      title: 'never mind'
  },
  {
      img: "https://i.postimg.cc/2yzZXwBW/_1322239.jpg",
      title: 'never mind'
  },
  {
      img: "https://i.postimg.cc/NFw4Gm2G/_1333392.jpg",
      title: 'never mind'
  },
  {
      img: "https://i.postimg.cc/cJ9M3PKz/_1333393.jpg",
      title: 'never mind'
  },
  {
      img: "https://i.postimg.cc/8PcGB6nn/_1333394.jpg",
      title: 'never mind'
  },
  {
      img: "https://i.postimg.cc/26xw63Q4/_1333436.jpg",
      title: 'never mind'
  },
  {
      img: "https://i.postimg.cc/fbNTKbdt/_1333437.jpg",
      title: 'never mind'
  },
  {
      img: "https://i.postimg.cc/c1mYtVVB/_1333442.jpg",
      title: 'never mind'
  },
  {
      img: "https://i.postimg.cc/SKkYKdDv/_1333448.jpg",
      title: 'never mind'
  },
  {
      img: "https://i.postimg.cc/RhFcZdVB/_1333449.jpg",
      title: 'never mind'
  },
  {
      img: "https://i.postimg.cc/sX5LJVpX/_1344181.jpg",
      title: 'never mind'
  },
  {
      img: "https://i.postimg.cc/W39kCZmf/_1344185.jpg",
      title: 'never mind'
  },
  {
      img: "https://i.postimg.cc/D0FMjtgc/_1344186.jpg",
      title: 'never mind'
  },
  {
      img: "https://i.postimg.cc/Qxvpjc22/_1344189.jpg",
      title: 'never mind'
  },
  {
      img: "https://i.postimg.cc/d1hQNHZC/sdfdfsdf.jpg",
      title: 'never mind'
  },
];

const itemDataGarden = [
  {
      img: "https://i.postimg.cc/C5hBwpV1/111537168-314272919932397-3842468518808660940-n.jpg",
      title: 'title'
  },
  {
      img: "https://i.postimg.cc/KjDP55mK/111727377-314272979932391-3257877947673588409-n.jpg",
      title: 'title'
  },
  {
      img: "https://i.postimg.cc/xdmbRPR0/116744256-314272849932404-3451675875120941001-n.jpg",
      title: 'title'
  },
  {
      img: "https://i.postimg.cc/C5x1WCjn/137526812-436967364329618-5345110808949255071-n.jpg",
      title: 'title'
  },
  {
      img: "https://i.postimg.cc/6q4s2yK1/137534117-436965417663146-9173200387753449845-n.jpg",
      title: 'title'
  },
  {
      img: "https://i.postimg.cc/3R7C06TM/137576998-436967410996280-7870586033234887330-n.jpg",
      title: 'title'
  },
  {
      img: "https://i.postimg.cc/BZjtcpQR/137579704-436967400996281-1607976506926667323-n.jpg",
      title: 'title'
  },
  {
      img: "https://i.postimg.cc/v8CTPn4T/137606797-436965424329812-7132746721412113500-n.jpg",
      title: 'title'
  },
  {
      img: "https://i.postimg.cc/nLqGzxNY/272312560-677714636921555-2386438763310556595-n.jpg",
      title: 'title'
  },
  {
      img: "https://i.postimg.cc/14xz4kkw/272674727-677714616921557-6271748510368594815-n.jpg",
      title: 'title'
  },
  {
      img: "https://i.postimg.cc/28vQTrSp/272689457-677714600254892-3668276923148260266-n.jpg",
      title: 'title'
  },
  {
      img: "https://i.postimg.cc/9Xy0nMZB/1333450.jpg",
      title: 'title'
  },
  {
      img: "https://i.postimg.cc/52s6SRLd/1344151.jpg",
      title: 'title'
  },
  {
      img: "https://i.postimg.cc/FsjS3pTN/1344152.jpg",
      title: 'title'
  },
  {
      img: "https://i.postimg.cc/dtMdhpm5/1344187.jpg",
      title: 'title'
  }
]

const itemDataBudget = [
  {
    img: "https://i.postimg.cc/ZRzxF1xY/1344124-518796593e48071df6c2.jpg",
    title: 'Title'
  },{
    img: "https://i.postimg.cc/52VF7k47/268589856-653726802653672-2667501053886997262-n.jpg",
    title: 'Title'
  },{
    img: "https://i.postimg.cc/RCJ6Mzqp/1344111.jpg",
    title: 'Title'
  },{
    img: "https://i.postimg.cc/Z54CFBHX/1344114.jpg",
    title: 'Title'
  },{
    img: "https://i.postimg.cc/YS2LkGmQ/1344125.jpg",
    title: 'Title'
  },{
    img: "https://i.postimg.cc/4NCKyF9f/1344214.jpg",
    title: 'Title'
  },{
    img: "https://i.postimg.cc/j2nstKXH/1344215.jpg",
    title: 'Title'
  },{
    img: "https://i.postimg.cc/rph0pVS3/1344216.jpg",
    title: 'Title'
  },{
    img: "https://i.postimg.cc/BtWJvyYd/1344217.jpg",
    title: 'Title'
  },
  
]

const itemDataStandard = [
  {
    img: "https://i.postimg.cc/xdh4rxGB/1322864-3ee46b7fd4122724c899.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/JhB24vL3/239340734.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/mgpvr7F4/287522383.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/QdzzDsRx/287522386.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/x1KS6XkV/1322865.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/BQpTHggr/1322866.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/DzPnwSFP/1322867.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/YCNJ1TVp/1322868.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/BZYZFPFh/1322869.jpg",
    title: 'Title'
  },
]

const itemDataDeluxe = [
  {
    img: "https://i.postimg.cc/QMLrBDyf/1322202-b6fc28e9bcde277789e1.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/sg8c1BBh/1322200-98b63ba80899e748f22b.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/QMVY6qJz/237430245.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/D01MryPy/237430324.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/L6M7HLmq/285441365.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/tgfS8Vr4/69235788-115221059837585-7834650883462791168-n.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/Prz7NJqS/1322198.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/wxs8x9Jr/1322204.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/3R46wZyG/1322230.jpg",
    title: 'Title'
  },
]

const itemDataAttic = [
  {
    img: "https://i.postimg.cc/nrbwmrvW/1344168.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/cJvw5jy3/Whats-App-Image-2022-03-19-at-23-24-11.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/KYGBxwy4/Whats-App-Image-2022-03-19-at-23-27-04.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/QVGgZqDb/1344166.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/nh1WTXK5/1344169.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/VNGVQ2VW/1344171.jpg",
    title: 'Title'
  },
  {
    img: "https://i.postimg.cc/tJRVHmnp/1344173.jpg",
    title: 'Title'
  },
];

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
    },]

const Gallery = () => {
    return(
            <>
                <div className="homeImage" style={{
                     backgroundImage: `url("https://i.postimg.cc/0N7xsywn/1344220.jpg")`
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
                <div className="secondDiv"><br/>
                    <h4 className="dolpeText">Contact Us</h4>
                    <hr style={{color:'#7CA844'}}/>
                    <Container style={{textAlign:'center'}}>
        <br/>
                <Row className="blueAreaRow">
                    <Col sm={6}>
                    <div><h4 className="dolpeText">Attic Suite Room</h4></div><br/>
                        <ImageList sx={{ width: 500, height: 450 }} cols={4} rowHeight={164}>
                        {itemDataAttic.map((item) => (
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
                    </Col>
    
                    <Col sm={6}>
                    <div><h4 className="dolpeText">Deluxe Room</h4></div><br/>
                        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                        {itemDataDeluxe.map((item) => (
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
                    </Col>
            </Row> 

            <Row className="blueAreaRow">
                    <Col sm={6}>
                    <div><h4 className="dolpeText">Standard Room</h4></div><br/>
                        <ImageList sx={{ width: 500, height: 450 }} cols={4} rowHeight={164}>
                        {itemDataStandard.map((item) => (
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
                    </Col>
    
                    <Col sm={6}>
                    <div><h4 className="dolpeText">Budget Room</h4></div><br/>
                        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                        {itemDataBudget.map((item) => (
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
                    </Col>
            </Row> 
            <hr style={{color:'#7CA844'}}/>
            <Row className="blueAreaRow">
                    <Col sm={6}>
                    <div><h4 className="dolpeText">Dolape Rill Restaurant</h4></div><br/>
                        <ImageList sx={{ width: 500, height: 450 }} cols={4} rowHeight={164}>
                        {itemDataRill.map((item) => (
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
                    </Col>
    
                    <Col sm={6}>
                    <div><h4 className="dolpeText">Garden Dinning</h4></div><br/>
                        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                        {itemDataGarden.map((item) => (
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
                    </Col>
            </Row> 
            <hr style={{color:'#7CA844'}}/>
                            <br/><br/>
            <Row className="blueAreaRow">
                    <Col sm={6}>
                    <div><h4 className="dolpeText">Natural Pool</h4></div><br/>
                        <ImageList sx={{ width: 500, height: 450 }} cols={2} rowHeight={164}>
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
                    </Col>
    
                    <Col sm={6}>
                    <div><h4 className="dolpeText">Air Rifle And Archery</h4></div><br/>
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
                    </Col>
            </Row>
            <br/>
            <Row className="blueAreaRow">
                    <Col>
                    <div><h4 className="dolpeText">Bird and Animal Watching</h4></div><br/>
                        <ImageList sx={{ width: '80%', height: 450 }} cols={4} rowHeight={164}>
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
                    </Col>
            </Row>
            <br/>
            <Row className="blueAreaRow">
                    <Col sm={6}>
                    <div><h4 className="dolpeText">Cycling and Safari</h4></div><br/>
                        <ImageList sx={{ width: '100%', height: 450 }} cols={4} rowHeight={164}>
                        {itemData.map((item) => (
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
                    </Col>
                    <Col sm={6}>
                    <div><h4 className="dolpeText">Cultural Events</h4></div><br/>
                        <ImageList sx={{ width: '100%', height: 450 }} cols={4} rowHeight={164}>
                        {itemData.map((item) => (
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
                    </Col>
            </Row>
        
        
       </Container><br/>
            
                  <br/>
                </div>
                </div>
                {/*Blue Area */}
              
            </>
    );
}

export default Gallery;
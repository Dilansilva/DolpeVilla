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
                        </div>
                    </Col>
                </Row>
            </Container>
            );
        }
    }

    const showPictures = () => {
        if(text == 'natural'){
            return(
                <Row className="blueAreaRow">
                   <Col >
                   <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
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
      
    </>
    );
}

export default ThingsToDo;
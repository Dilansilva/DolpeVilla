import React from "react";
import {Card,Carousel} from "react-bootstrap";

const CardCarousel = (props) => {
    return (
        <Card >
               
        <Card.Body>
          <Card.Title>
            <Carousel>
            {props.items.map((item) => (
              <Carousel.Item key={item.img}>
                <img
                  className="d-block w-100"
                  src={`${item.img}`}
                  alt={item.title}
                />
              </Carousel.Item>
            ))}
            </Carousel>
          </Card.Title>
            <Card.Title className="dolpeText locationText"><h1>{props.title}</h1></Card.Title>
            <Card.Text>
                {props.body}
               <br/>
                <a onClick={props.handleShow}>
                    <span style={{color:'blue'}}>{props.seeMore}</span></a>
            </Card.Text>
        </Card.Body>
    </Card>
    );
}

export default CardCarousel;
import { Carousel } from "react-bootstrap";
import React from "react";
import '../../src/App.css';

const GalleryCarousel = (props) => {
    return(
        <div>
            <Carousel>
            {props.items.map((item) => (
                <Carousel.Item key={item}>
                    <img
                    className="d-block w-100"
                    src={`${item}`}
                    alt={item}
                    />
                </Carousel.Item>
            ))}
            </Carousel><br/>
            <div className="textAlign dolpeText">
                <h4>{props.title}</h4>
            </div>
        </div>
    );
}

export default GalleryCarousel;
import { Carousel } from "react-bootstrap";
import React from "react";
import '../../src/App.css';

const galleryCarousel = () => {
    return(
        <div>
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
            <div className="textAlign">
                <h3>{props.title}</h3>
            </div>
        </div>
    );
}

export default galleryCarousel;
import { Carousel } from "react-bootstrap";
import React from "react";

const galleryCarousel = () => {
    return(
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
    );
}

export default galleryCarousel;
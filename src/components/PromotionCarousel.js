import { Carousel } from "react-bootstrap";
import React from "react";
import '../../src/App.css';

const PromotionCarousel = (props) => {
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
                    <Carousel.Caption>
                        <h3>{props.title}</h3>
                        <p>{props.body}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
            </Carousel>
        </div>
    );
}

export default PromotionCarousel;
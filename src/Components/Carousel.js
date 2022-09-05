import React, { Fragment, useState } from 'react'
import styles from '../CSS_modules/home.module.css'
import { Carousel } from 'react-bootstrap';

function CarouselComponent() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Fragment>
            <Carousel activeIndex={index} onSelect={handleSelect} style={{ height: "500px" }}>
                <Carousel.Item style={{ height: "500px" }} >
                    <img
                        className={`d-block  ${styles.img1}`}
                    />
                </Carousel.Item>

                <Carousel.Item style={{ height: "500px" }}>
                    <img
                        className={`d-block ${styles.img2} `}
                    />
                </Carousel.Item>

                <Carousel.Item style={{ height: "500px" }}>
                    <img
                        className={`d-block  ${styles.img3}`}
                    />
                </Carousel.Item>
            </Carousel>
        </Fragment>
    )
}

export default CarouselComponent
import React, { Fragment, useState } from "react";
import img1 from "../assets/slider1.jpg";
import img2 from "../assets/slider2.jpeg";
import img3 from "../assets/slider3.jpg";
import { Carousel } from "react-bootstrap";
// this component used in home page
function CarouselComponent() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Fragment>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        style={{ height: "500px" }}
      >
        <Carousel.Item style={{ height: "500px" }} className="w-100">
          <img
            alt=""
            src={img1}
            style={{ objectFit: "cover" }}
            className="w-100 h-100"
          />
        </Carousel.Item>
        <Carousel.Item style={{ height: "500px" }} className="w-100">
          <img
            alt=""
            src={img2}
            style={{ objectFit: "cover" }}
            className="w-100 h-100"
          />
        </Carousel.Item>
        <Carousel.Item style={{ height: "500px" }} className="w-100">
          <img
            alt=""
            src={img3}
            style={{ objectFit: "cover" }}
            className="w-100 h-100"
          />
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
}

export default CarouselComponent;

import React, { Fragment, useEffect, useState, useContext } from "react";
import Context from "../Context";
import Who from "../Components/Who";
import CarouselComponent from "../Components/Carousel";
import { Col, Card, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../CSS_modules/HotDeals.module.css";
import Loading from "../Components/Loading";
import { getProducts } from "../api";
function Home() {
  let { setProducts, products } = useContext(Context);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    getProducts().then((productsData) => {
      setProducts(productsData);
    });
    setLoading(false);
  }, [setProducts]);
  useEffect(() => {
    // set products in local storage to get it in HotDeals Page instead of making request to api
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);
  return (
    <Fragment>
      <CarouselComponent />
      <br />
      <br />
      <Who />
      <br />
      <br />
      <h1 className="text-center"> Our products </h1>
      <Row>
        {" "}
        {loading ? (
          <Loading />
        ) : (
          products.map((product) => {
            let { title, price, image } = product;
            return (
              <Col
                xs={4}
                md={3}
                className="mb-3"
                key={product.id}
                style={{ height: "450px" }}
              >
                <Card
                  style={{ cursor: "pointer" }}
                  className="pt-2 h-100 w-100"
                >
                  <Card.Img
                    variant="top"
                    src={`${image} `}
                    className={`h-50 w-100 m-auto ${styles.product_img}`}
                  />
                  <Card.Body className="d-flex align-items-center flex-column justify-content-around">
                    <Card.Text>
                      <div>{title.slice(0, 20)}</div>
                      <div>${price} </div>
                    </Card.Text>
                    <Link className="w-100 " to={`/products/${product.id}`}>
                      <Button variant="primary" className="w-100 text-center">
                        Check Out
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        )}
      </Row>
    </Fragment>
  );
}

export default Home;

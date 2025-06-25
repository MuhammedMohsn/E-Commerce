import React, { Fragment, useEffect, useContext, useState } from "react";
import { Col, Row, Container, Card, Button } from "react-bootstrap";
import styles from "../CSS_modules/HotDeals.module.css";
import { Link } from "react-router-dom";
import Context from "../Context";
import Loading from "../Components/Loading";
import { getProducts } from "../api";
function HotDeals() {
  let { products, setProducts } = useContext(Context);
  let [loading, setLoading] = useState(true);
  //  get all products after mounting the HotDeals component from local storage if found else get these from API
  useEffect(() => {
    if (localStorage.getItem("products")) {
      setLoading(false);
      setProducts(JSON.parse(localStorage.getItem("products")));
    } else {
      // to get products from API if doesn't found in localStorage
      getProducts().then((productsData) => {
        setLoading(false);
        setProducts(productsData);
      });
    }
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <Fragment>
      <Container className="mt-4">
        <h2 className={styles.header}>Hot Deals</h2>
        <Row>
          {products.map((product) => {
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
                  <Card.Body>
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
          })}
        </Row>
      </Container>
    </Fragment>
  );
}

export default HotDeals;

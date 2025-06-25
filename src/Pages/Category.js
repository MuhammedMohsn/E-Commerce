import React, { Fragment, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../CSS_modules/Category.module.css";
import Context from "../Context";
function Category() {
  let { products, setProducts } = useContext(Context);
  let { category } = useParams();
  let categoryProducts = products.filter(
    (product) => category === product.category
  );
  useEffect(() => {
    // to get products if there is a change in category parmeter in URL
    if (localStorage.getItem("products")) {
      setProducts(JSON.parse(localStorage.getItem("products")));
    }
  }, [category, setProducts]);
  return (
    <Fragment>
      <Container>
        <h1 className="fw-bolder">{category}</h1>
        <h5 className="fw-bolder mb-5">
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </h5>
        <Row>
          {categoryProducts.map((product) => {
            let { image, title, price } = product;
            return (
              <Col
                key={product.id}
                xs="3"
                style={{ height: "400px" }}
                className="justify-content-center"
              >
                <Link
                  to={`/products/${product.id}`}
                  style={{
                    textDecoration: "none",
                    height: "100%",
                    color: "white",
                  }}
                >
                  <img
                    src={image}
                    alt={title}
                    className={`w-100 h-75 m-auto rounded ${styles.product_img}`}
                  />
                  <div className="w-100 justify-content-between text-dark fw-bolder align-items-center d-flex">
                    <div>{title.slice(0, 10)}</div>
                    <div>$ {price}</div>
                  </div>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Fragment>
  );
}
export default Category;

import React, { Fragment, useEffect } from 'react'
import { Col, Row, Container, Card, Button } from 'react-bootstrap'
import styles from '../CSS_modules/HotDeals.module.css'
import { Link } from 'react-router-dom'
import { getProducts } from '../api'
function HotDeals({ setProducts, products, setLoading }) {
  useEffect(() => {
    getProducts().then((productsData) => {
      setLoading(false);
      setProducts(productsData);
    });
  }, []);
  return (
    <Fragment>
      <Container className="mt-4">
        <h2 className={styles.header}>Hot Deals</h2>
        <Row>
          {products.slice(0, 4).map(product => {
            let { title, price, image } = product;
            return (
              <Col xs={4} md={3} className="mb-3" key={product.id} style={{ height: "450px" }}>
                <Card style={{ cursor: "pointer" }} className="pt-2 h-100 w-100" >
                  <Card.Img variant="top" src={`${image} `} className={`h-50 w-100 m-auto ${styles.product_img}`} />
                  <Card.Body>
                    <Card.Text>
                      <div>{title}</div>
                      <div>${price} </div>
                    </Card.Text>
                    <Link className="w-100 " to={`/products/${product.id}`}>
                      <Button variant="primary" className="w-100 text-center">Check Out</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}</Row>
      </Container>
    </Fragment>
  )
}

export default HotDeals

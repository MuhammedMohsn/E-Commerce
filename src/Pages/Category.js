import React, { Fragment } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "../CSS_modules/Category.module.css"
function Category({ products }) {
  let { category } = useParams()
  let categoryProducts = products.filter(product => category === product.category)
  return (

    <Fragment>

      <Container>
        <h1 className="fw-bolder">{category}</h1>
        <h5 className="fw-bolder mb-5">Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</h5>
        <Row>
          {categoryProducts.map(product => {
            let { image, title, price } = product
            return (
              <Col key={product.id} xs="3" style={{ height: "400px" }} className="justify-content-center">
                <Link to={`/products/${product.id}`} style={{ textDecoration: "none", height: "100%", color: "white" }}>
                  <img src={image} alt={title} className={`w-100 h-75 m-auto rounded ${styles.product_img}`} />
                  <div className="w-100 justify-content-between align-items-center d-flex">
                    <div>{title.slice(0, 10)}</div>
                    <div>$ {price}</div>
                  </div></Link>
              </Col>
            )
          })}
        </Row>

      </Container>
    </Fragment>
  )
}

export default Category
import React, { Fragment } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Col, Row } from 'react-bootstrap'
function Loading() {
  return (
    <Fragment>
      <Row>
        <Col md={3}>
          <Skeleton width={250} height={400} />
        </Col>
        <Col md={3}>
          <Skeleton width={250} height={400} />
        </Col>
        <Col md={3}>
          <Skeleton width={250} height={400} />
        </Col>
        <Col md={3}>
          <Skeleton width={250} height={400} />
        </Col>
      </Row></Fragment>
  )
}

export default Loading

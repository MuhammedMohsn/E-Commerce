import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Col, Row } from 'react-bootstrap'
function Loading() {
  return (
    <div>

      <Row>
        <Col md={6}>
          <Skeleton width={460} height={650} />
        </Col>
        <Col md={6} className='LoadRight'>
          <Skeleton width={650} height={40} />
          <Skeleton width={100} height={30} />
          <Skeleton width={650} height={100} />
          <Skeleton width={130} height={40} />
        </Col>
      </Row>

    </div>
  )
}

export default Loading

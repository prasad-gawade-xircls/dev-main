import React from 'react'
import { Col, Row } from 'reactstrap'
import Button from 'react-bootstrap/Button'

export const Section8 = () => {
  return (
    <div>
        <Row className='mt-5' style={{background: "#dedede", marginLeft: "98px", marginRight: "98px",marginBottom: "28vh", borderRadius: "1.5rem", boxShadow: "rgba(0, 0, 0, 0.35)0px 5px 15px"}}>
            <Col>
                <div>
                    <div className='section8-heading'>
                        <h1>Harness the power of <span>collaborative marketing</span></h1>
                    </div>
                    <div className='section8-info'>
                        <p>Build rewards & loyalty marketing solutions
that give your clients instant access to
a whole host of offers across product
categories</p>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
  )
}

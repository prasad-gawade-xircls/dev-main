import React from 'react'
import { Col, Row } from 'reactstrap'
import Button from 'react-bootstrap/Button'
import './Section7.css'

export const Section7 = () => {
  return (
    <div className='section7-background mt-5 mb-5 section-7' style={{marginLeft: "98px", marginRight: "98px", boxShadow: "rgba(0, 0, 0, 0.35)0px 5px 15px"}}>
        <Row>
            <Col>
                <div className=''>
                    <div className='text-center mt-5 section7-heading'>
                        <h1 className='text-white'>Ready to build the future?</h1>
                    </div>
                    <div className='text-center mt-5 mb-5 section7-button mt-5'>
                    <Button className='text-black' variant="warning">Get started</Button>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
  )
}

import React from 'react'
import { Col, Row } from 'reactstrap'
import s1 from "@src/assets/images/s1.png"
import Button from 'react-bootstrap/Button'

export const Section4 = () => {
  return (
    <>
        <Row className='mt-5' style={{background: "#dedede", marginLeft: "98px", marginRight: "98px",marginBottom: "28vh", borderRadius: "1.5rem", boxShadow: "rgba(0, 0, 0, 0.35)0px 5px 15px"}}> 
            <div className='d-flex justify-content-end'>
            <Col>
                <div className='mt-4 ms-3'>
                    <div className='section4-heading'>
                        <h1>Stop building from scratch !</h1>
                    </div>
                    <div className='section4-info'>
                        <p>Our developer-friendly APIs are
easy to understand, implement & iterate.
Build on top of core features such as forms,
shopping cart, user profile, wishlist & more</p>
                    </div>
                    <div className='section4-button mt-5'>
                    <Button variant="outline-dark">Get Started</Button>
                    </div>
                </div>
            </Col>

            <Col className='text-center mt-5 mb-4'>
                <div className='section4-img'>
                    <img src={s1} width={500}></img>
                </div>
            </Col>
            </div>
        </Row>
    </>
  )
}

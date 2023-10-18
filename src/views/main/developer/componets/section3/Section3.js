import React from 'react'
import { Col, Row } from 'reactstrap'
import {FiSettings} from "react-icons/fi"
import {MdPrivacyTip} from "react-icons/md"

export const Section3 = () => {
  return (
    <div style={{marginLeft: "98px", marginRight: "98px", marginBottom: "28vh"}}>
        <Row>
            <Col className=''>
                <div className='mt-5' style={{marginLeft: "5rem"}}>
                    <div className='section3-heading'>
                        <h1 style={{fontSize: "2.1rem", fontWeight: "600"}}>Our tech, your growth</h1>
                    </div>
                    <div className='section3-info'>
                        <p>Monetize the most cutting-edge APIs in marketing</p>
                    </div>
                </div>
            </Col>
        </Row>
        <Row className='text-center mt-4'>
            <Col md={6} sm={12}>
                <div className='d-flex justify-content-center'>
                    <div className='img'>
                        <FiSettings size={50}/>
                    </div>
                    <div className='Easy-to-integrate ms-2'>
                        <div className='heading'>
                            <h3 style={{textAlign: "left"}}>Easy to integrate</h3>
                        </div>
                        <div className='info'>
                            <p style={{textAlign: "left"}}>Deeply integrate our APIs into your applications with ease.</p>
                        </div>
                    </div>
                </div>
            </Col>

            <Col md={6} sm={12}>
                <div className='d-flex justify-content-center'>
                    <div className='img'>
                        <MdPrivacyTip size={50}/>
                    </div>
                    <div className='Data-privacy-first ms-2'>
                        <div className='heading'>
                            <h3 style={{textAlign: "left"}}>Data privacy first</h3>
                        </div>
                        <div className='info'>
                            <p style={{textAlign: "left"}}>Our in-built security protocols future-proof you against data theft & ad fraud.</p>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>

        <Row className='text-center mt-4'>
            <Col md={6} sm={12}>
                <div className='d-flex justify-content-center'>
                    <div className='img'>
                        <FiSettings size={50}/>
                    </div>
                    <div className='Easy-to-integrate ms-2'>
                        <div className='heading'>
                            <h3 style={{textAlign: "left"}}>Easy to integrate</h3>
                        </div>
                        <div className='info'>
                            <p style={{textAlign: "left"}}>Deeply integrate our APIs into your applications with ease.</p>
                        </div>
                    </div>
                </div>
            </Col>

            <Col md={6} sm={12}>
                <div className='d-flex justify-content-center'>
                    <div className='img'>
                        <MdPrivacyTip size={50}/>
                    </div>
                    <div className='Data-privacy-first ms-2'>
                        <div className='heading'>
                            <h3 style={{textAlign: "left"}}>Data privacy first</h3>
                        </div>
                        <div className='info'>
                            <p style={{textAlign: "left"}}>Our in-built security protocols future-proof you against data theft & ad fraud.</p>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
  )
}

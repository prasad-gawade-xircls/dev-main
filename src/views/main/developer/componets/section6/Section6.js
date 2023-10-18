import React from 'react'
import { Col, Row } from 'reactstrap'
import XIRCLSLogo  from '@src/assets/images/XIRCLS_logo.png';
import './Section6.css'
import Button from 'react-bootstrap/Button'

export const Section6 = () => {
  return (
    <div className="background mt-5" style={{marginBottom: "25vh"}}>
        <Row>
            <Col className="mt-5 mb-5 d-flex justify-content-end">
                <div className=" ms-5">
                    <div className='section6-heading'>
                        <h1 className='text-white'>Submit your app</h1>
                    </div>
                    <div className='section6-info mt-1'>
                        <p className='text-white'>Expand your app’s reach. Add it to our marketplace
for the XIRCLS brand community to discover.</p>
                    </div>
                    <div className='section6-buttons mt-2'>
                        <Button variant="primary">Submit an App</Button>
                        <Button className='ms-2' variant="outline-light">Explore Marketplace</Button>
                    </div>
                    <div className='section6-link mt-2'>
                        <p className='text-white'><span style={{textDecoration: "underline"}}>Sign up </span> for early access to new Developer products.</p>
                    </div>
                </div>
            </Col>

            <Col style={{marginTop: "15vh"}}>
                <div className='section6-img d-flex justify-content-center'>
                    <img src={XIRCLSLogo} width={150}></img>
                </div>
            </Col>
        </Row>
    </div>
  )
}

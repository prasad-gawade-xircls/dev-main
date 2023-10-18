import React from 'react'
import { Progress } from "rsuite" 
import "rsuite/dist/rsuite.min.css"
import { Col, Row } from 'reactstrap'
import "./Section5.css"
import loginform from "@src/assets/images/loginform.png"

export const Section5 = () => {
  return (
    <>
        <Row className='mt-5' style={{marginLeft: "98px", marginRight: "98px", borderRadius: "1.5rem", marginBottom: "20vh"}}> 
            <div className='d-flex justify-content-end'>
                <Col>
                    <div style={{ marginLeft: 10 }}>
                        <div className="wrapper">
                            <ul className="StepProgress">
                                <div className="StepProgress-item is-done">
                                    <strong className='mb-1'>STEP 1</strong>
                                    <h6>Sign up</h6>
                                    <p>Register and agree to our legal terms & conditions</p>
                                </div>
                                <div className="StepProgress-item is-done">
                                    <strong className='mb-1'>STEP 2</strong>
                                    <h6>Describe your use case and select APIs</h6>
                                    <p>Once submitted, we will review your request
and reach out within 48 hours</p>
                                </div>
                                <div className="StepProgress-item current">
                                    <strong className='mb-1'>STEP 3</strong>
                                    <h6>Start developing!</h6>
                                    <p>Once your request is approved, access our
API documentation to begin your work</p>
                                </div>
                                {/* <div className="StepProgress-item is-done">
                                    <strong>Handover</strong>
                                </div>
                                <div className="StepProgress-item current">
                                    <strong>Provide feedback</strong>
                                </div> */}
                            </ul>
                        </div>
                    </div>

                </Col>

                <Col>
                    <div className='d-flex d-flex justify-content-center'>
                        <img src={loginform} width={350}></img>
                    </div>
                </Col>
            </div>
        </Row>
    </>
  )
}

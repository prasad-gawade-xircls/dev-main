import React from 'react'
import { Card, Col, Row } from 'reactstrap'

export const Section2 = () => {
  return (
    <div style={{}}>
      <Row>
        <Col className='d-flex justify-content-center'>
          <div className='mt-5 mb-5' style={{width: "25rem", position: "relative"}}>
            <div style={{width: "4rem", height: "4rem", background: "rgb(192 217 231)", position: "absolute", top: "0", left: "0", zIndex: "-1", borderRadius: "6px"}}></div>
            <div className='section2-heading' style={{marginTop: "2.2rem", marginLeft: "2rem"}}>
              <h1><span style={{fontSize: "4rem", fontWeight: "700"}}>Why build</span> <span style={{fontSize: "3rem", fontWeight: "500"}}>on</span> <span style={{fontSize: "4rem", fontWeight: "700"}}>XIRCLS ?</span></h1>
            </div>
            <div style={{marginLeft: "2rem"}} className='section2-info'>
              <p  style={{textAlign: "left", fontSize:"1.1rem"}}>We empower you to leverage our 100+ brand network
and powerful functionalities to build industry-shaping apps
that will delight your clients and impress your peers.</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

import React from 'react'
import { Card, Col, Row } from 'reactstrap'


export default function Section6() {
    const img = "https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/61fa78aa67d329961f45979f_check-icon.svg"
    return (
        <div className='section8Test d-flex flex-column justify-content-center align-items-center mt190 p-0 p-sm-5'  >

            <div className='main-cont ' style={{width:"85%"}}>
                <h1 className='display-1 fw-bold mt-3 text-white text-start ' >Get the <br/>XIRCLS Partner <br/> Advantage.</h1>

                <Row className='match-height mt-2 '>
                    <Col lg="6" md="6" className=''>
                        <Card className='box  shadow-none border d-flex flex-column p-1 justify-content-start align-items-start'>
                            <h4 className=' fs-2 fw-light fw-lig w-75' >Performing at the highest degree possible, these are the common traits reps accepted to XIRCLS have in common.</h4>
                          <button className='btn bg-white text-black fs-4 fw-bold border rounded-1 mt-3 px-3 py-1'> Apply now</button>
                            <div className='ms-auto arrow' >
                                <img src="https://uploads-ssl.webflow.com/5fac11c3554384e2baf6481c/61fa78aa61452b33bdbd7c9c_Arrow_01.svg" alt="" srcset="" />
                            </div>
                        </Card>
                    </Col>
                    <Col lg="6" md="6" >
                        <Card className='box box2 shadow-none border d-flex flex-column p-1 justify-content-end align-items-center mt-2'>
                            <ul>
                                <li><img src={img} alt="" srcset="" width={40} /><h4 className='fs-1 text-white fw-lig m-0'>No Sign-up Costs</h4></li>
                                <li><img src={img} alt="" srcset="" width={40} /><h4 className='fs-1 text-white fw-lig m-0'>Track Performance</h4></li>
                                <li><img src={img} alt="" srcset="" width={40} /><h4 className='fs-1 text-white fw-lig m-0'>First Access</h4></li>
                                <li><img src={img} alt="" srcset="" width={40} /><h4 className='fs-1 text-white fw-lig m-0'>Comprehensive Support</h4></li>
                            </ul>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

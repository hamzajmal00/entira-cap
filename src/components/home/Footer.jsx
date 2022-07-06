import React, { Component, Fragment } from 'react'
import { Container,Row,Col,Button,Form } from 'react-bootstrap'
import FormRange from 'react-bootstrap/esm/FormRange'
import Wlogo from "../../assets/images/white-logo.png"
import FiconP from "../../assets/images/f-icon.png"
import FiconM from "../../assets/images/f-icon-m.png"
import FiconL from "../../assets/images/f-icon-L.png"

export class footer extends Component {
  render() {
    return (
      <Fragment>
        <div className="footer-main">
            <Container>
                <Row className='footer-row'>
                    <Col lg={3} md={5}>
                        <img src={Wlogo} alt="" />
                        <p className="footer-about">
                        We look forward to meeting with you and explaining in-
                        depth how our unique asset monetization model is superior
                         to traditional financing. We are confident in our ability 
                         to deliver competitive 
                        funding that your institution needs to ensure financial sustainability.
                        </p>
                    </Col>
                    <Col lg={2} md={2} className='ffooter-men'>
                        <h2 className="footer-heading">
                        Quick Links
                        </h2>
                        <ul className="footer-menu">
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>Project Structure</a></li>
                            <li><a href='#'>What Sets us a Part</a></li>
                            <li><a href='#'>Our Team</a></li>
                            <li><a href='#'>Contact</a></li>
                        </ul>
                    </Col>
                    <Col lg={2} md={2} className='ffooter-men'>
                        <h2 className="footer-heading">
                        Useful Links
                        </h2>
                        <ul className="footer-menu">
                            <li><a href='#'>Privacy Policy</a></li>
                            <li><a href='#'>Terms & Condition</a></li>
                    
                        </ul>
                    </Col>
                    <Col lg={5} md={7}>
                        <h2 className="footer-heading">
                            Contact
                        </h2>
                        <div className="footer-li">
                        <ul className='howtodo-list'>
                                <li><img src={FiconP} /></li>
                                <li>(614) 207-1369</li>

                            </ul>
                            <ul className='howtodo-list'>
                                <li><img src={FiconM} /></li>
                                <li>ToddHolstlaw@Entira CapitalPartners.com</li>

                            </ul>
                            <ul className='howtodo-list'>
                                <li><img src={FiconL} /></li>
                                <li>Entira Capital <br></br>
                               <p> ​5020 Reed Road, Suite D  |  Columbus,<br></br> OH  43220</p>
                                </li>

                            </ul>
                        </div>

                    </Col>

                </Row>
                <hr></hr>
                <p className="footer-end">All Rights Reserved</p>
            </Container>
        </div>
      </Fragment>
    )
  }
}

export default footer
import React, { Component, Fragment } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import AboutImg from "../../assets/images/about-img.png"
import AboutBefor from "../../assets/images/about-befor.png"
import AboutAfter from "../../assets/images/about-after.png"
import { BrowserRouter as Router, Routes, Route, Link,NavLink } from "react-router-dom";

export class AboutCom extends Component {
  render() {
    return (
      <Fragment>
        <Container className='about-section'>
            <Row>
                <Col lg={6} md={6} className="about-contain">
                    <div className="about-img">
                        <img src={AboutImg} height="400px"/>
                        <img src={AboutBefor}  className="about-befor" />
                        <img src={AboutAfter}  className="about-after" />
                    </div>
                </Col>
                <Col lg={6} md={6}>
                 <h1 className="about-heading">
                 What We Are
                 </h1>
                 <div className="seprator"></div>
                 <p className="about-des">
                 <b>Campus Capital</b> is a specialized finance company that creates 
                 innovative funding for higher education. <b>Campus Capital's</b> model 
                 monetizes existing assets using tax-exempt municipal bonds,
                  efficiently funding these institutions with capital, ensuring 
                  their financial sustainability by utilizing their most underutilized 
                  asset, <b>REAL ESTATE! </b>We turn existing assets into Capital, then annually 
                  donate the asset and asset's cash flow back to the institution over the
                   lease term, without requiring the institution's capital or debt!
                 </p>
                    </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default AboutCom
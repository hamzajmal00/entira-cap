import React, { Component, Fragment } from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import BaneListIcon from "../../assets/images/banefit-li-icon.png"
import BanefitImg from "../../assets/images/benefit-img.png"
import Banefitlf from "../../assets/images/banefit-lf.png"
import Union from "../../assets/images/Union.png"

export class Banefits extends Component {
  render() {
    return (
      <Fragment>
        <div className="banefit-warper">

       
        <Container>
            <Row>
                <Col lg={6} md={6}>
                <div className="mt-5">
                            <h1 className="benefit-heading">
                            Our Advantage
                            </h1>
                        <div className="seprator mt-5"></div>
                        <div className="benefit-li">
                            <ul className='howtodo-list'>
                                <li><img src={BaneListIcon} /></li>
                                <li>Experience</li>

                            </ul>
                            <ul className='howtodo-list'>
                                <li><img src={BaneListIcon} /></li>
                                <li>Innovation</li>

                            </ul>
                            <ul className='howtodo-list'>
                                <li><img src={BaneListIcon} /></li>
                                <li>Purpose</li>

                            </ul>
                            <ul className='howtodo-list'>
                                <li><img src={BaneListIcon} /></li>
                                <li>Success</li>

                            </ul>
                            <Button className='benefit-btn'>Strategic Advantages</Button>
                        </div>
                    </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <div className="banefit-img">
                        <img className='banefit-main-img' src={BanefitImg}/>
                        <img className='banefit-left' src={Banefitlf} />
                        <img className='banefit-right' src={Union}  />
                    </div>

                </Col>
            </Row>
        </Container>
        </div>
      </Fragment>
    )
  }
}

export default Banefits
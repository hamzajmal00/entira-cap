import React, { Component, Fragment } from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import ListIcon from "../../assets/images/howtodo-icon.png"

export class HowToDo extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className='position-relative'>
            <Row className='mt-5'>
                
                <Col lg={6} md={6} sm={12} className="p-0 howtodo-img-ro">
  
                </Col>

                <Col lg={6} md={6} sm={12} className="p-0">
                    <div className="howtodo-second">
                        
                    </div>
                </Col>
            </Row>
            <div className='overlay'>
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                        <div className="howtodo-first mt-5">
                            <h1 className="howtodo-heading">
                            What We Are
                            </h1>
                        <div className="seprator bg-white"></div>
                        <p className="howtodo-dex">
                        Entira Capital’s Unique Capitalization Model
                        </p>
                        <Button className='howtodo-btn'>Structure</Button>
                    </div>
                        </Col>
                        <Col lg={6} md={6}>

                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
        <Container>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <div>
                    <h2 className="howtodo-h2">
                    Entira Capital recognizes current financial challenges facing colleges and universities.
                    </h2>
                    </div>
                    <p>
                    The old tuition-based model has proven to be ineffective and outdated.
                     It Is a time of challenges that must be met by conviction, nimbleness
                      and imagination. The solutions to these challenges must be funded with
                       a strategic approach to capital. Our unique asset monetization model 
                       is innovative because we become true strategic partners with the 
                       resources to monetize existing assets, overcome existing debt restrictive covenants, 
                    collateralize individual assets and do not require capital use restrictions.
                    </p>
                    <p>
                    The old tuition-based model has proven to be ineffective and outdated.
                     It Is a time of challenges that must be met by conviction, nimbleness
                      and imagination. The solutions to these challenges must be funded with
                       a strategic approach to capital. Our unique asset monetization model 
                       is innovative because we become true strategic partners with the 
                       resources to monetize existing assets, overcome existing debt restrictive covenants, 
                    collateralize individual assets and do not require capital use restrictions.
                    </p>
                </Col>
                <Col lg={4} md={6}>
                <ul className='howtodo-list'>
                        <li><img src={ListIcon} /></li>
                        <li>Inability to repair outdated facilities</li>
                    </ul>
                </Col>
                <Col lg={4} md={6}>
                <ul className='howtodo-list'>
                        <li><img src={ListIcon} /></li>
                        <li>Rising drop-out rates</li>
                    </ul>
                </Col>
                <Col lg={4} md={6}>
                <ul className='howtodo-list'>
                        <li><img src={ListIcon} /></li>
                        <li>Declining enrollment</li>
                    </ul>
                </Col>
                <Col lg={4} md={6}>
                <ul className='howtodo-list'>
                        <li><img src={ListIcon} /></li>
                        <li>Inability to repair outdated facilities</li>
                    </ul>
                </Col>
                <Col lg={4} md={6}>
                <ul className='howtodo-list'>
                        <li><img src={ListIcon} /></li>
                        <li>Rising drop-out rates</li>
                    </ul>
                </Col>
                <Col lg={4} md={6}>
                <ul className='howtodo-list'>
                        <li><img src={ListIcon} /></li>
                        <li>Declining enrollment</li>
                    </ul>
                </Col>
                <Col lg={4} md={6}>
                <ul className='howtodo-list'>
                        <li><img src={ListIcon} /></li>
                        <li>Inability to repair outdated facilities</li>
                    </ul>
                </Col>
                <Col lg={4} md={6}>
                <ul className='howtodo-list'>
                        <li><img src={ListIcon} /></li>
                        <li>Rising drop-out rates</li>
                    </ul>
                </Col>
                <Col lg={4} md={6}>
                <ul className='howtodo-list'>
                        <li><img src={ListIcon} /></li>
                        <li>Declining enrollment</li>
                    </ul>
                </Col>
                <Col lg={4} md={6}>
                <ul className='howtodo-list'>
                        <li><img src={ListIcon} /></li>
                        <li>Rising drop-out rates</li>
                    </ul>
                </Col>
                <Col lg={4} md={6}>
                <ul className='howtodo-list'>
                        <li><img src={ListIcon} /></li>
                        <li>Declining enrollment</li>
                    </ul>
                </Col>

            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default HowToDo
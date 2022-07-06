import React, { Component, Fragment } from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import Toddimg from "../../assets/images/Todd.png"
import Drewimg from "../../assets/images/Drew.png"
import Fumimg from "../../assets/images/Fume.png"
import Rogerimg from "../../assets/images/Roger.png"

export class Team extends Component {
  render() {
    return (
      <Fragment>
        <Container>
            <Row className='team-section'>
                <Col lg={4}></Col>
                <Col lg={4}>
                    <div className="team-text">
                    <h1 className="team-heading">
                    Meet the Team
                            </h1>
                        <div className="seprator mt-5"></div>
                    </div>
                </Col>
                <Col lg={4}></Col>


                <Col lg={3} md={6}>
                    <div className="card mt-5">
                        <img src={Toddimg} />
                        <div className="team-desc">
                            <h3 className="team-title">Todd A Holstlaw</h3>
                            <p className="pashion">Founder/CEO</p>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6}>
                    <div className="card mt-5">
                        <img src={Drewimg} />
                        <div className="team-desc team-main">
                            <h3 className="team-title">Drew Vennemeyer</h3>
                            <p className="pashion">Founder</p>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6}>
                    <div className="card mt-5">
                        <img src={Fumimg} />
                        <div className="team-desc">
                            <h3 className="team-title">David Fumi</h3>
                            <p className="pashion">Managing Director</p>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6}>
                    <div className="card mt-5">
                        <img src={Rogerimg} />
                        <div className="team-desc">
                            <h3 className="team-title">David Rogers</h3>
                            <p className="pashion">Bond Counsel</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Team
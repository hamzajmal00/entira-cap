import React, { Component, Fragment } from 'react'
import Phoneicon from "../../assets/images/phone.png"
import Evnalopicon from "../../assets/images/envalop.png"
import Mlogo from "../../assets/images/logo.png"
import Heroimg from "../../assets/images/hero.png"
import { Container,Row,Col } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link,NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../../assets/css/header.css"

export class HeaderCom extends Component {
  render() {
    return (
      <Fragment>
  
        <div className='top-bar'>
        <Container >
            <Row>
               <Col lg={5}>
                  
               </Col>
               <Col lg={2}>
                    <ul className='top-info'>
                        <li><img src={Phoneicon} /></li>
                        <li>(614) 207-1369</li>
                    </ul>
                </Col>
                <Col lg={5}>
                <ul className='top-info'>
                        <li><img src={Evnalopicon} /></li>
                        <li>ToddHolstlaw@EntiraCapitalPartners.com</li>
                    </ul>
                </Col>
            </Row>

        </Container>
        </div>
      
            <Navbar className='nav-bar' expand="lg">
            <Container className='header-menu'>
                <Navbar.Brand href="#home"><img src={Mlogo} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <ul className="unav">
                    <li><NavLink  to="/">Home</NavLink></li>
                    <li><Link  to="/dd">Project Structure</Link></li>
                    <li><Link  to="/dd">What sets us a part</Link></li>
                    <li><Link  to="/dd">Our Team</Link></li>
                    <li><Link  to="/dd">Contact</Link></li>

                </ul>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            <Container fluid={true}>
            <Row>
            <div className='hero-main'>
               <div className="hero-heading">
               Entira Capital
               </div>
               <div className="hero-subheading">
               Capital for Colleges & Universities
               </div>
            </div>
            </Row>
            </Container>



    
             
      </Fragment>
    )
  }
}

export default HeaderCom
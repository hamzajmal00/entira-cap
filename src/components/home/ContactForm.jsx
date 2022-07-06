import React, { Component, Fragment } from 'react'
import { Container,Row,Col,Button,Form } from 'react-bootstrap'
import Callimg from "../../assets/images/call.png"

export class ContactForm extends Component {
  render() {
    return (
      <Fragment>
        <Container>
            <Row className='contact-sectoin'>
                <Col lg={6} md={6} className='contact-form p-0'>
                <h1 className="contact-heading">
                    Meet the Team
                            </h1>
                        <div className="seprator mt-5"></div>

                        <div className="form-clas mt-5">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter email" />
                   
                            </Form.Group>
                            <Row>
                            <Col lg={6}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter email" />
                   
                            </Form.Group>
                            </Col>
                            <Col lg={6}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter email" />
                   
                            </Form.Group>
                            </Col>
                            </Row>
                            <Row>
                            <Col lg={6}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter email" />
                   
                            </Form.Group>
                            </Col>
                            <Col lg={6}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter email" />
                   
                            </Form.Group>
                            </Col>
                            </Row>
              
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control as="textarea" placeholder="Leave a comment here" />
                            </Form.Group>
                            <Button variant="primary" className='mb-3' type="submit">
                                Submit
                            </Button>
                        </Form>
                        </div>
                </Col>
                <Col lg={6} md={6} className='p-0'>
                    <img src={Callimg} height='100%' width='100%'/>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default ContactForm
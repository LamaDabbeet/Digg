import React, { Component } from 'react';
import "./HomePage.scss";
import {Link} from 'react-router-dom'
import {Container,Row,Col, Form,Dropdown} from 'react-bootstrap'

export default class HomePage extends Component {
    render() {
        return (
            <div className="home-page">
                <Container fluid>
                    <Row>
                    <Col md={5} className="left-side">
                        <h1 className="digg-home-title">digg</h1> 
                        <p className="quote">"Coming to Dubai with One Step Dubai has been the best decision of my life. I am now living in Dubai with a good job and I will be getting married next year!"</p>
                        <p className="student-name">Mohammed, One Step Dubai student </p>
                        <p className="student-country">Pakistan</p>
                    </Col>
                    <Col md={7} xs={12} className="right-side">
                    <h2 className="apply-now">Apply Now to work in Dubai</h2>
                    <Form>
                        <Row>
                          <Col xs={12}>   
                            <Form.Group controlId="formBasicFName">
                                <Form.Control className="input-style" type="text" placeholder="First Name" />
                            </Form.Group>
                          </Col>
                          <Col xs={12}>
                            <Form.Group controlId="formBasicLName">
                              <Form.Control className="input-style" type="text" placeholder="Last Name" />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={12}>   
                            <Form.Group controlId="formBasicDoBirth">
                                <Form.Control type="date" placeholder="Date of birth" />
                            </Form.Group>
                          </Col>
                          <Col xs={12}>
                             <Form.Group controlId="formBasicCheckbox">
                               <Form.Check type="checkbox" label="Check me out" />
                             </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs={12}>   
                            <Dropdown>
                                <Dropdown.Toggle  id="dropdown-nationality">
                                  Nationality
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <Dropdown.Item href="#/action-1">UAE</Dropdown.Item>
                                  <Dropdown.Item href="#/action-2">Syria</Dropdown.Item>
                                  <Dropdown.Item href="#/action-3">UK</Dropdown.Item>
                                  <Dropdown.Item href="#/action-4">Germany</Dropdown.Item>
                                  <Dropdown.Item href="#/action-5">India</Dropdown.Item>
                                  <Dropdown.Item href="#/action-6">Pakistan</Dropdown.Item>
                                  <Dropdown.Item href="#/action-7">France</Dropdown.Item>
                                  <Dropdown.Item href="#/action-8">Turkey</Dropdown.Item>
                                  <Dropdown.Item href="#/action-9">Egypt</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                          </Col>
                          <Col xs={12}>
                          <Dropdown>
                                <Dropdown.Toggle  id="dropdown-residency">
                                  Country of residence
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <Dropdown.Item href="#/action-1">UAE</Dropdown.Item>
                                  <Dropdown.Item href="#/action-2">Syria</Dropdown.Item>
                                  <Dropdown.Item href="#/action-3">UK</Dropdown.Item>
                                  <Dropdown.Item href="#/action-4">Germany</Dropdown.Item>
                                  <Dropdown.Item href="#/action-5">India</Dropdown.Item>
                                  <Dropdown.Item href="#/action-6">Pakistan</Dropdown.Item>
                                  <Dropdown.Item href="#/action-7">France</Dropdown.Item>
                                  <Dropdown.Item href="#/action-8">Turkey</Dropdown.Item>
                                  <Dropdown.Item href="#/action-9">Egypt</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                          </Col >
                        </Row>
                        <p>How we can contact you?</p>
                        <Row>
                          <Col xs={12}>   
                            <Form.Group controlId="formBasicNumber">
                                <Form.Control type="number" placeholder="Contact number" />
                            </Form.Group>
                          </Col>
                          <Col xs={12}>
                            <Form.Group controlId="formBasicEmail">
                              <Form.Control type="email" placeholder="Email address" />
                            </Form.Group>
                          </Col>
                        </Row>
                        <div class="button-container">
                          <Link to="/info-form">
                          <button className="dig-blue-button"  type="submit">
                              Apply now
                          </button>
                          </Link>
                        </div>
                    </Form>
                    </Col>
                    </Row>
                </Container> 
            </div>
        )
    }
}


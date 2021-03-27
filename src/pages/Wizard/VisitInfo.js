import React, { Component } from 'react';
import ProgressBar from '../../components/ProgressBar'
import {Container,Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './WizardStep.scss'

export default class VisitInfo extends Component {
    render() {
        return (
            <div className="wizard-step">
            <Container fluid>
                <Row>
                    <Col md='3'><h1 className="digg-title">digg</h1></Col>
                    <Col md='9'><ProgressBar stepsInfo={this.props}/></Col>
                </Row>
                  <form>
                      <div className="radio-group">
                        <p>Have you ever visited Dubai?</p>
                        <div className="radio-buttons-wrapper">
                          <div className="radio">
                            <input
                              id="combination1"
                              type="radio"
                              name="combination1"
                              />
                              <label htmlFor="combination1"> 
                                <div className="checker"> <span>No</span></div>        
                              </label>
                          </div>
                          <div className="radio">
                            <input
                              id="combination1"
                              type="radio"
                              name="combination1"
                              />
                              <label htmlFor="combination1"> 
                                <div className="checker"> <span>Yes</span></div>        
                              </label>
                          </div>
                         </div>
                      </div>   
                      <div className="radio-group">
                        <p>Do you have any friends or family in Dubai?</p>
                        <div className="radio-buttons-wrapper">
                          <div className="radio">
                            <input
                              id="combination2"
                              type="radio"
                              name="combination2"
                              />
                              <label htmlFor="combination2"> 
                                <div className="checker"> <span>No</span></div>        
                              </label>
                          </div>
                          <div className="radio">
                            <input
                              id="combination2"
                              type="radio"
                              name="combination2"
                              />
                              <label htmlFor="combination2"> 
                                <div className="checker"> <span>Yes</span></div>        
                              </label>
                          </div>
                         </div>
                        </div>
                      <div className="radio-group">
                      <p>How long do you want to stay in stay in Dubai?</p>
                      <div className="radio-buttons-wrapper">
                        <div className="radio">
                          <input
                            id="combination3"
                            type="radio"
                            name="combination3"
                            />
                            <label htmlFor="combination3"> 
                              <div className="checker"> <span>Upto 3 months</span></div>        
                            </label>
                        </div>
                        <div className="radio">
                          <input
                            id="combination3"
                            type="radio"
                            name="combination3"
                            />
                            <label htmlFor="combination3"> 
                              <div className="checker"> <span>3 to 6 months</span></div>        
                            </label>
                         </div>
                        <div className="radio">
                          <input
                            id="combination3"
                            type="radio"
                            name="combination3"
                            />
                            <label htmlFor="combination3"> 
                              <div className="checker"> <span>6 to 12 months</span></div>        
                            </label>
                        </div>
                        <div className="radio">
                          <input
                            id="combination3"
                            type="radio"
                            name="combination3"
                            />
                            <label htmlFor="combination3"> 
                              <div className="checker"> <span>6 to 12 months</span></div>        
                            </label>
                         </div>
                        <div className="radio">
                          <input
                            id="combination3"
                            type="radio"
                            name="combination3"
                            />
                            <label htmlFor="combination3"> 
                              <div className="checker"> <span>+3 years</span></div>        
                            </label>
                         </div> 
                    </div> 
                    </div>
                  </form>
                    <div className='buttons-container' >
                    <Link to="/"><button className="dig-white-button" onClick={this.props.previousStep}>Back</button></Link>
                        <button className="dig-blue-button" onClick={this.props.nextStep}>Next </button>
                    </div>
              </Container>
             </div>
        )
    }
}

import React, { Component } from 'react'
import ProgressBar from '../../components/ProgressBar'
import {Container,Row,Col} from 'react-bootstrap'
import './WizardStep.scss'

export default class WhyDubai extends Component {
    render() {
        return (
            <div class="wizard-step">
            <Container fluid>
                <Row>
                    <Col md='3'><h1 className="digg-title">digg</h1></Col>
                    <Col md='9'><ProgressBar stepsInfo={this.props}/></Col>
                </Row>
                <form>
                    <div class="radio-group">
                      <p>Why do you want to come to dubai?</p>
                       <div class="radio-buttons-wrapper">
                           
                       <div className="radio">
                                <input
                                    id="combination1"
                                    type="radio"
                                    name="combination1"
                                    />
                                    <label htmlFor="combination1"> 
                                    <div className="checker"> <span>Lifestyle</span></div>        
                                    </label>
                        </div>
                   
                            <div className="radio">
                                <input
                                    id="combination1"
                                    type="radio"
                                    name="combination1"
                                    />
                                    <label htmlFor="combination1"> 
                                    <div className="checker"> <span>Work opportunities</span></div>        
                                    </label>
                            </div>
                            <div className="radio">
                                <input
                                    id="combination1"
                                    type="radio"
                                    name="combination1"
                                    />
                                    <label htmlFor="combination1"> 
                                    <div className="checker"> <span>Education</span></div>        
                                    </label>
                            </div>
                            <div className="radio">
                                <input
                                    id="combination1"
                                    type="radio"
                                    name="combination1"
                                    />
                                    <label htmlFor="combination1"> 
                                    <div className="checker"> <span>Finance</span></div>        
                                    </label>
                            </div>
                            <div className="radio">
                                <input
                                    id="combination1"
                                    type="radio"
                                    name="combination1"
                                    />
                                    <label htmlFor="combination1"> 
                                    <div className="checker"> <span>Tourism</span></div>        
                                    </label>
                            </div>
                            <div className="radio">
                                <input
                                    id="combination1"
                                    type="radio"
                                    name="combination1"
                                    />
                                    <label htmlFor="combination1"> 
                                    <div className="checker"> <span>Family</span></div>        
                                    </label>
                            </div>
                            <div className="radio">
                                <input
                                    id="combination1"
                                    type="radio"
                                    name="combination1"
                                    />
                                    <label htmlFor="combination1"> 
                                    <div className="checker"> <span>Business</span></div>        
                                    </label>
                            </div>
                            <div className="radio">
                                <input
                                    id="combination1"
                                    type="radio"
                                    name="combination1"
                                    />
                                    <label htmlFor="combination1"> 
                                    <div className="checker"> <span>The weather</span></div>        
                                    </label>
                            </div>
                            <div className="radio">
                                <input
                                    id="combination1"
                                    type="radio"
                                    name="combination1"
                                    />
                                    <label htmlFor="combination1"> 
                                    <div className="checker"> <span>The weather</span></div>        
                                    </label>
                            </div>
                            <div className="radio">
                                <input
                                    id="combination1"
                                    type="radio"
                                    name="combination1"
                                    />
                                    <label htmlFor="combination1"> 
                                    <div className="checker"> <span>Meeting new people</span></div>        
                                    </label>
                            </div>
                            <div className="radio">
                                <input
                                    id="combination1"
                                    type="radio"
                                    name="combination1"
                                    />
                                    <label htmlFor="combination1"> 
                                    <div className="checker"> <span>Culture</span></div>        
                                    </label>
                            </div>
                       </div>           
                   
                   
                    </div>                     
                </form>
                <div className='buttons-container' >
                    <button className="dig-white-button" onClick={this.props.previousStep}>Back</button>
                    <button className="dig-blue-button" onClick={this.props.nextStep}>Next </button>
                </div>
            </Container>
        </div>
        )
    }
}

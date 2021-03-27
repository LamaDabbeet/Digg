import React, { Component } from 'react'
import ProgressBar from '../../components/ProgressBar'
import {Container,Row,Col} from 'react-bootstrap'
import './WizardStep.scss'


export default class Education extends Component {
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
                      <p>What industries would you prefer to work in?</p>
                       <div class="radio-buttons-wrapper">
                           
                       <div className="radio">
                                <input
                                    id="combination1"
                                    type="radio"
                                    name="combination1"
                                    />
                                    <label htmlFor="combination1"> 
                                    <div className="checker"> <span>Construction</span></div>        
                                    </label>
                        </div>
                   
                            <div className="radio">
                                <input
                                    id="combination1"
                                    type="radio"
                                    name="combination1"
                                    />
                                    <label htmlFor="combination1"> 
                                    <div className="checker"> <span>Hospitality</span></div>        
                                    </label>
                            </div>
                            <div className="radio">
                                <input
                                    id="combination1"
                                    type="radio"
                                    name="combination1"
                                    />
                                    <label htmlFor="combination1"> 
                                    <div className="checker"> <span>Real estate</span></div>        
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
                                    <div className="checker"> <span>Technology</span></div>        
                                    </label>
                            </div>
                            <div className="radio">
                                <input
                                    id="combination1"
                                    type="radio"
                                    name="combination1"
                                    />
                                    <label htmlFor="combination1"> 
                                    <div className="checker"> <span>Media</span></div>        
                                    </label>
                            </div>
                            <div className="radio">
                                <input
                                    id="combination1"
                                    type="radio"
                                    name="combination1"
                                    />
                                    <label htmlFor="combination1"> 
                                    <div className="checker"> <span>Farming</span></div>        
                                    </label>
                            </div>
                            <div className="radio">
                                <input
                                    id="combination1"
                                    type="radio"
                                    name="combination1"
                                    />
                                    <label htmlFor="combination1"> 
                                    <div className="checker"> <span>Fishing</span></div>        
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
                                    <div className="checker"> <span>Public services</span></div>        
                                    </label>
                            </div>
                            <div className="radio">
                                <input
                                    id="combination1"
                                    type="radio"
                                    name="combination1"
                                    />
                                    <label htmlFor="combination1"> 
                                    <div className="checker"> <span>Administration</span></div>        
                                    </label>
                            </div>
                            <div className="radio">
                                <input
                                    id="combination1"
                                    type="radio"
                                    name="combination1"
                                    />
                                    <label htmlFor="combination1"> 
                                    <div className="checker"> <span>Media</span></div>        
                                    </label>
                            </div>
                            <div className="radio">
                                <input
                                    id="combination1"
                                    type="radio"
                                    name="combination1"
                                    />
                                    <label htmlFor="combination1"> 
                                    <div className="checker"> <span>Farming</span></div>        
                                    </label>
                            </div>
                            <div className="radio">
                                <input
                                    id="combination1"
                                    type="radio"
                                    name="combination1"
                                    />
                                    <label htmlFor="combination1"> 
                                    <div className="checker"> <span>Fishing</span></div>        
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
                                    <div className="checker"> <span>Public services</span></div>        
                                    </label>
                            </div>
                            <div className="radio">
                                <input
                                    id="combination1"
                                    type="radio"
                                    name="combination1"
                                    />
                                    <label htmlFor="combination1"> 
                                    <div className="checker"> <span>Administration</span></div>        
                                    </label>
                            </div>
                            <div className="radio">
                                <input
                                    id="combination1"
                                    type="radio"
                                    name="combination1"
                                    />
                                    <label htmlFor="combination1"> 
                                    <div className="checker"> <span>Financial services</span></div>        
                                    </label>
                            </div>
                            <div className="radio">
                                <input
                                    id="combination1"
                                    type="radio"
                                    name="combination1"
                                    />
                                    <label htmlFor="combination1"> 
                                    <div className="checker"> <span>Legal</span></div>        
                                    </label>
                            </div>
                            <div className="radio">
                                <input
                                    id="combination1"
                                    type="radio"
                                    name="combination1"
                                    />
                                    <label htmlFor="combination1"> 
                                    <div className="checker"> <span>Health care</span></div>        
                                    </label>
                            </div>
                            <div className="radio">
                                <input
                                    id="combination1"
                                    type="radio"
                                    name="combination1"
                                    />
                                    <label htmlFor="combination1"> 
                                    <div className="checker"> <span>Government </span></div>        
                                    </label>
                            </div>
                            <div className="radio">
                                <input
                                    id="combination1"
                                    type="radio"
                                    name="combination1"
                                    />
                                    <label htmlFor="combination1"> 
                                    <div className="checker"> <span>Medical</span></div>        
                                    </label>
                            </div>
                            <div className="radio">
                                <input
                                    id="combination1"
                                    type="radio"
                                    name="combination1"
                                    />
                                    <label htmlFor="combination1"> 
                                    <div className="checker"> <span>Security</span></div>        
                                    </label>
                            </div>
                            <div className="radio">
                                <input
                                    id="combination1"
                                    type="radio"
                                    name="combination1"
                                    />
                                    <label htmlFor="combination1"> 
                                    <div className="checker"> <span>Logistics</span></div>        
                                    </label>
                            </div>
                            <div className="radio">
                                <input
                                    id="combination1"
                                    type="radio"
                                    name="combination1"
                                    />
                                    <label htmlFor="combination1"> 
                                    <div className="checker"> <span>Robotics</span></div>        
                                    </label>
                            </div>
                            <div className="radio">
                                <input
                                    id="combination1"
                                    type="radio"
                                    name="combination1"
                                    />
                                    <label htmlFor="combination1"> 
                                    <div className="checker"> <span>Fashion</span></div>        
                                    </label>
                            </div>
                            <div className="radio">
                                <input
                                    id="combination1"
                                    type="radio"
                                    name="combination1"
                                    />
                                    <label htmlFor="combination1"> 
                                    <div className="checker"> <span>Automotive</span></div>        
                                    </label>
                            </div>
                            <div className="radio">
                                <input
                                    id="combination1"
                                    type="radio"
                                    name="combination1"
                                    />
                                    <label htmlFor="combination1"> 
                                    <div className="checker"> <span>Transportation</span></div>        
                                    </label>
                            </div>
                            <div className="radio">
                                <input
                                    id="combination1"
                                    type="radio"
                                    name="combination1"
                                    />
                                    <label htmlFor="combination1"> 
                                    <div className="checker"> <span>Customer support</span></div>        
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

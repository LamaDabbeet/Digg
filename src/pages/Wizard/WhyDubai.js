import React, { useState } from 'react'
import ProgressBar from '../../components/ProgressBar'
import {Container,Row,Col} from 'react-bootstrap'
import { alertService } from '../../services/AlertService';
import './WizardStep.scss'

const WhyDubai = (props) =>{
  const [reasonsList, setVisitReasons] = useState([]);
  const setReasonsList =(value)=>{
    if(reasonsList.length<3) setVisitReasons(oldArray => [...oldArray, value]);
    else alert('Only three options are allowed!')
  }
 
  const handleSubmit = (e) =>{
    e.preventDefault();  
    var visitReasons = reasonsList;
    localStorage.setItem("visitReasons", JSON.stringify(visitReasons));
    props.nextStep();
  }
        return (
            <div className="wizard-step">
            <Container fluid>
                <Row>
                    <Col md='3'><h1 className="digg-title">digg</h1></Col>
                    <Col md='9'><ProgressBar stepsInfo={props}/></Col>
                </Row>
                <form> 
                <div className="radio-group">
                      <p>Why do you want to come to dubai?</p>
                        <div className="radio-buttons-wrapper">
                         <label className="wrapper">
                            <input  
                            value="Lifestyle"
                              checked={reasonsList.includes('Lifestyle')}
                               type="checkbox" 
                                name="group-1"
                               onChange={() => setReasonsList('Lifestyle')} />
                            <span className="checkmark"><span>Lifestyle</span></span>
                          </label>
                          <label className="wrapper">
                            <input type="checkbox" 
                              value="Work opportunities"
                              name="group-2"
                              checked={reasonsList.includes('Work opportunities')}
                              onChange={() => setReasonsList('Work opportunities')}/>
                            <span className="checkmark"><span>Work opportunities</span></span>
                          </label>
                          <label className="wrapper">
                            <input  value="Education"
                              checked={reasonsList.includes('Education')}
                               type="checkbox" 
                                name="group-3"
                               onChange={() => setReasonsList('Education')}/>
                            <span className="checkmark"><span>Education</span></span>
                          </label>
                          <label className="wrapper">
                            <input  value="Finance"
                              checked={reasonsList.includes('Finance')}
                               type="checkbox" 
                                name="group-4"
                               onChange={() => setReasonsList('Finance')} />
                            <span className="checkmark">Finance</span>
                          </label>
                          <label className="wrapper">
                            <input type="checkbox" 
                              value="Tourism"
                              name="group-5"
                              checked={reasonsList.includes('Tourism')}
                              onChange={() => setReasonsList('Tourism')}/>
                            <span className="checkmark">Tourism</span>
                          </label>
                          <label className="wrapper">
                            <input  
                            value="Family"
                              checked={reasonsList.includes('Family')}
                               type="checkbox" 
                                name="group-6"
                               onChange={() => setReasonsList('Family')} />
                            <span className="checkmark"><span>Family</span></span>
                          </label>
                          <label className="wrapper">
                            <input type="checkbox" 
                              value="Business"
                              name="group-7"
                              checked={reasonsList.includes('Business')}
                              onChange={() => setReasonsList('Business')}/>
                            <span className="checkmark"><span>Business</span></span>
                          </label>
                          <label className="wrapper">
                            <input  value="The weather"
                              checked={reasonsList.includes('The weather')}
                               type="checkbox" 
                                name="group-8"
                               onChange={() => setReasonsList('The weather')}/>
                            <span className="checkmark"><span>The weather</span></span>
                          </label>
                          <label className="wrapper">
                            <input  value="Meeting new people"
                              checked={reasonsList.includes('Meeting new people')}
                               type="checkbox" 
                                name="group-9"
                               onChange={() => setReasonsList('Meeting new people')} />
                            <span className="checkmark">Meeting new people</span>
                          </label>
                          <label className="wrapper">
                            <input type="checkbox" 
                              value="Culture"
                              name="group-10"
                              checked={reasonsList.includes('Culture')}
                              onChange={() => setReasonsList('Culture')}/>
                            <span className="checkmark">Culture</span>
                          </label>
                        </div>
                    </div>
                </form>
                <div className='buttons-container' >
                    <button className="dig-white-button" onClick={props.previousStep}>Back</button>
                    <button className="dig-blue-button" disabled={reasonsList.length===0} onClick={handleSubmit}>Next </button>
                </div>
            </Container>
        </div>
        )
}

export default WhyDubai;

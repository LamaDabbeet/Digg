import React, { useState } from 'react'
import ProgressBar from '../../components/ProgressBar'
import {Container,Row,Col} from 'react-bootstrap'
import visitReasons from '../../data/visitReasons.json';
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
                        {
                        visitReasons.data.map((reason,index)=>(
                          <label key={index} className="wrapper">
                          <input  
                                value={reason.name}
                                  checked={reasonsList.includes(reason.name)}
                                  type="checkbox" 
                                    name={index}
                                  onChange={() => setReasonsList(reason.name)} />
                                <span className="checkmark"><span>{reason.name}</span></span>
                              </label>
                              ))
                          }
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

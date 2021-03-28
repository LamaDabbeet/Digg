import React, { useState } from 'react'
import ProgressBar from '../../components/ProgressBar'
import {Container,Row,Col} from 'react-bootstrap'
import './WizardStep.scss'
import preferredIndustries from '../../data/preferredIndustries.json';

const PreferredInd = (props) =>{
    const [indList, setPreferred] = useState([]);
    const setPrefInd =(value)=>{
      if(indList.length<3) setPreferred(oldArray => [...oldArray, value]);
      else alert('Only three options are allowed!')
    }
   
    const handleSubmit = (e) =>{
      e.preventDefault();  
      var preferredIndust = indList;
      localStorage.setItem("preferredIndust", JSON.stringify(preferredIndust));
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
                      <p>What industries would you prefer to work in?</p>
                        <div className="radio-buttons-wrapper">
                        {
                        preferredIndustries.data.map((industry,index)=>(
                          <label key={index} className="wrapper">
                          <input  
                                value={industry.name}
                                  checked={indList.includes(industry.name)}
                                  type="checkbox" 
                                    name={index}
                                  onChange={() => setPrefInd(industry.name)} />
                                <span className="checkmark"><span>{industry.name}</span></span>
                              </label>
                              ))
                          }
                      </div>
                    </div>
                </form>
                <div className='buttons-container' >
                    <button className="dig-white-button" onClick={props.previousStep}>Back</button>
                    <button className="dig-blue-button" disabled={indList.length===0} onClick={handleSubmit}>Next </button>
                </div>
            </Container>
        </div>
        )
    }
export default PreferredInd;

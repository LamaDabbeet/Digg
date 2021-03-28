import React,{ useState } from 'react';
import ProgressBar from '../../components/ProgressBar'
import {Container,Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './WizardStep.scss'

const VisitInfo = (props)=> {
  const [firstValue, setFirstGroup] = useState({});
  const [secondValue, setSecondGroup] = useState({});
  const [thirdValue, setThirdGroup] = useState({});

  const setFirstValue =(value)=>{
    setFirstGroup(value);
  }
  const setSecondValue =(value)=>{
    setSecondGroup(value);
  }
  const setThirdValue =(value)=>{
    setThirdGroup(value);
  }
  const handleSubmit = (e) =>{
    e.preventDefault();  
    localStorage.setItem('firstValue', firstValue);
    localStorage.setItem('secondValue', secondValue);
    localStorage.setItem('thirdValue', thirdValue);
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
                      <p>Have you ever visited Dubai?</p>
                        <div className="radio-buttons-wrapper">
                         <label className="wrapper">
                            <input  value="No"
                              checked={firstValue === 'No'}
                               type="radio" 
                               onChange={() => setFirstValue('No')} name="radio"/>
                            <span className="checkmark">No</span>
                          </label>
                          <label className="wrapper">
                            <input type="radio" 
                              value="Yes"
                              name="first-group-2"
                              checked={firstValue === 'Yes'}
                              onChange={() => setFirstValue('Yes')}/>
                            <span className="checkmark">Yes</span>
                          </label>
                       </div>
                    </div>
                    <div className="radio-group">
                      <p>Do you have any friends or family in Dubai?</p>
                        <div className="radio-buttons-wrapper">
                         <label className="wrapper">
                            <input  value="No"
                              checked={secondValue === 'No'}
                               type="radio" 
                                name="second-group-1"
                               onChange={() => setSecondValue('No')} />
                            <span className="checkmark">No</span>
                          </label>
                          <label className="wrapper">
                            <input type="radio" 
                              value="Yes"
                              name="second-group-2"
                              checked={secondValue=== 'Yes'}
                              onChange={() => setSecondValue('Yes')}/>
                            <span className="checkmark">Yes</span>
                          </label>
                        </div>
                      </div>
                    <div className="radio-group">
                      <p>How long do you want to stay in stay in Dubai?</p>
                        <div className="radio-buttons-wrapper">
                         <label className="wrapper">
                            <input  
                            value="Upto 3 months"
                              checked={thirdValue === 'Upto 3 months'}
                               type="radio" 
                                name="third-group-1"
                               onChange={() => setThirdValue('Upto 3 months')} />
                            <span className="checkmark">Upto 3 months</span>
                          </label>
                          <label className="wrapper">
                            <input type="radio" 
                              value="3 to 6 months"
                              name="third-group-2"
                              checked={thirdValue === '3 to 6 months'}
                              onChange={() => setThirdValue('3 to 6 months')}/>
                            <span className="checkmark">3 to 6 months</span>
                          </label>
                          <label className="wrapper">
                            <input  value="6 to 12 months"
                              checked={thirdValue === '6 to 12 months'}
                               type="radio" 
                                name="third-group-3"
                               onChange={() => setThirdValue('6 to 12 months')}/>
                            <span className="checkmark"><span>6 to 12 months</span></span>
                          </label>
                          <label className="wrapper">
                            <input  value="+12 months"
                              checked={thirdValue === '+12 months'}
                               type="radio" 
                                name="third-group-4"
                               onChange={() => setThirdValue('+12 months')} />
                            <span className="checkmark">+12 months</span>
                          </label>
                          <label className="wrapper">
                            <input type="radio" 
                              value="+3 years"
                              name="third-group-5"
                              checked={thirdValue === '+3 years'}
                              onChange={() => setThirdValue('+3 years')}/>
                            <span className="checkmark">+3 years</span>
                          </label>
                          </div>
                    </div>
                  </form>
                    <div className='buttons-container' >
                    <Link to="/"><button className="dig-white-button" onClick={props.previousStep}>Back</button></Link>
                        <button className="dig-blue-button" disabled={!(Object.keys(firstValue).length > 0 && Object.keys(secondValue).length > 0 &&Object.keys(thirdValue).length > 0)} onClick={handleSubmit}>Next </button>
                    </div>
              </Container>
             </div>
        )
}

export default VisitInfo;

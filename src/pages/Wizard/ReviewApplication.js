import React, { Component } from 'react'
import ProgressBar from '../../components/ProgressBar'
import {Container,Row,Col} from 'react-bootstrap'
import './WizardStep.scss'
import './ReviewApplication.scss'


export default class ReviewApplication extends Component {

    constructor(props) {
        super(props);
        this.state = {
          fName: '',
          lName: '',
          email: '',
          gender:'',
          doB: '',
          nationality:'',
          residence:'',
          number:'',
          visitedDubaiBefore:'',
          visitLong:"",
          preferredIndustries:[],
          visitReasons:[]
        };
      }
    
    componentDidMount() {
        const fName = localStorage.getItem('fName') ;
        const lName =  localStorage.getItem('lName') ;
        const doB = localStorage.getItem('doB') ;
        const email =  localStorage.getItem('email') ;
        const gender =  localStorage.getItem('gender') ;
        const nationality =  localStorage.getItem('nationality') ;
        const residence =  localStorage.getItem('residence') ;
        const number =  localStorage.getItem('number') ;

        const visitedDubaiBefore =  localStorage.getItem('firstValue') ;
        const visitLong =  localStorage.getItem('thirdValue') ;

        const visitReasons = JSON.parse(localStorage.getItem("visitReasons"));
        const preferredIndustries = JSON.parse(localStorage.getItem("preferredIndust"));
        this.setState({ fName, lName,doB,email,gender,nationality,residence,number,visitedDubaiBefore,visitLong,visitReasons,preferredIndustries});
      }
    render() {
        const { fName, lName,doB,email,gender,nationality,residence,number,visitedDubaiBefore,visitLong,visitReasons,preferredIndustries}=this.state;
        return (
            <div className="review-application wizard-step">
             <Container fluid>
                <Row>
                    <Col md='3'><h1 className="digg-title">digg</h1></Col>
                    <Col md='9'><ProgressBar stepsInfo={this.props}/></Col>
                </Row>
                <p className="title">Complete - Review your application </p>
                <div className="basic-info-box">
                    <p>
                        Basic Information
                    </p>
                    <div className="info-blocks-wrapper">
                    <div className="info-block"> 
                        <div >Name: <span>{fName+' '+lName}</span></div>
                    </div>
                    <div className="info-block"> 
                        <div >Date of birth: <span>{doB}</span></div>
                    </div>
                    <div className="info-block"> 
                        <div >Gender: <span>{gender}</span></div>
                    </div>
                    <div className="info-block"> 
                        <div >Nationality: <span>{nationality}</span></div>
                    </div>
                    <div className="info-block"> 
                        <div >Country of residence: <span>{residence}</span></div>
                    </div>
                    <div className="info-block"> 
                        <div>Contact Number: <span>{`+971${number?.substr(1)}`}</span></div>
                    </div>
                    <div className="info-block"> 
                        <div>Email: <span>{email}</span></div>
                    </div>
                 </div> 
                </div>
                <div className="questionnair-box">
                    <p className="title">
                      Questionnaire
                    </p>
                    <div className="question-blocks-wrapper">
                        <div className="question-block">
                          <p>Have you ever visited Dubai?</p> 
                          <div class="answers-wrapper">  <div className="answer">{visitedDubaiBefore}</div> </div>
                        </div>
                        <div className="question-block">
                          <p>How long do you want to stay in stay in Dubai?</p> 
                          <div class="answers-wrapper"> <div className="answer">{visitLong}</div></div>
                        </div>
                        <div className="question-block">
                          <p>Why do you want to come to Dubai?</p>
                          <div class="answers-wrapper">
                         {visitReasons.map((reason,index)=>(
                             <div className="answer" key={index}>{reason}</div>
                         ))}
                         </div> 
                        </div>
                        <div className="question-block">
                          <p>What industries would you prefer to work in?</p> 
                          <div class="answers-wrapper">
                         {preferredIndustries.map((industry,index)=>(
                             <div className="answer" key={index}><span>{industry}</span></div>
                         ))}
                         </div>
                      </div>
                    </div>
                </div>
                <div className='buttons-container' >
                    <button className="dig-white-button" onClick={this.props.previousStep}>Back</button>
                    <button className="dig-blue-button" onClick={this.props.nextStep}>Complete Application </button>
                </div>                      
               </Container>
            </div>

        )
    }
}

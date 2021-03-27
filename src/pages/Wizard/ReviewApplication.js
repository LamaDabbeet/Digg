import React, { Component } from 'react'
import ProgressBar from '../../components/ProgressBar'
import {Container,Row,Col} from 'react-bootstrap'
import './WizardStep.scss'
import './ReviewApplication.scss'


export default class ReviewApplication extends Component {
    render() {
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
                        <div >Name:</div>
                    </div>
                    <div className="info-block"> 
                        <div >Date of birth:</div>
                    </div>
                    <div className="info-block"> 
                        <div >Gender:</div>
                    </div>
                    <div className="info-block"> 
                        <div >Nationality:</div>
                    </div>
                    <div className="info-block"> 
                        <div >Date of birth:</div>
                    </div>
                    <div className="info-block"> 
                        <div >Gender:</div>
                    </div>
                    <div className="info-block"> 
                        <div >Country of residence:</div>
                    </div>
                    <div className="info-block"> 
                        <div>Contact Number:</div>
                    </div>
                    <div className="info-block"> 
                        <div>Email:</div>
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
                        </div>
                        <div className="question-block">
                          <p>Do you have any friends or family in Dubai?</p> 
                        </div>
                        <div className="question-block">
                          <p>Why do you want to come to Dubai?</p> 
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

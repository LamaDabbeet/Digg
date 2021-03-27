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
                <Row>
                    <div className='buttons-container' >
                        <button className="dig-white-button" onClick={this.props.previousStep}>Back</button>
                        <button className="dig-blue-button" onClick={this.props.nextStep}>Next </button>
                    </div>
                </Row>
               
                 
             
            </Container>
        </div>
        )
    }
}

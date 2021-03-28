import React, { Component } from 'react'
import PreferredInd from './PreferredInd'
import StepWizard from 'react-step-wizard';
import VisitInfo from './VisitInfo';
import WhyDubai from './WhyDubai';
import ReviewApplication from './ReviewApplication';

export default class Wizard extends Component {
    render() {
        return (
            <div>
               <StepWizard isHashEnabled={true}>
                    <VisitInfo hashKey={'visit-info'} /> 
                    <WhyDubai hashKey={'why-dubai'} /> 
                    <PreferredInd hashKey={'preferred-industries'} /> 
                    <ReviewApplication hashKey={'review-application'} />
               </StepWizard>    
            </div>
        )
    }
}

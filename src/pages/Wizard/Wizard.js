import React, { Component } from 'react'
import PreferredInd from './PreferredInd'
import StepWizard from 'react-step-wizard';
import VisitInfo from './VisitInfo';
import WhyDubai from './WhyDubai';
/* import Interests from './Interests'
import Savings from './Savings';
import Education from './Education';
import FrequentVisits from './FrequentVisits'; */
import ReviewApplication from './ReviewApplication';

export default class Wizard extends Component {
    render() {
        return (
            <div>
               <StepWizard isHashEnabled={true}>
                    <VisitInfo hashKey={'visit-info'} /> 
                    <WhyDubai hashKey={'why-dubai'} /> 
                    <PreferredInd hashKey={'preferred-industries'} /> 
                {/*     <Interests hashKey={'interests'} /> 
                    <Savings hashKey={'financial-savings'} /> 
                    <Education hashKey={'education-level'} /> 
                    <FrequentVisits hashKey={'frequent-visits'} />  */}
                    <ReviewApplication hashKey={'review-application'} />
               </StepWizard>    
            </div>
        )
    }
}

import React from 'react'
import './ProgressBar.scss'

const  ProgressBar = (props)=>{
    const {stepsInfo}=props;  
    return (
        <div className="progress-bar-container">
          <p>Progress</p>
          <div className="digg-progress-bar">
            <div className="active-bar" style={{width:(stepsInfo.currentStep/stepsInfo.totalSteps)*100+'%'}}></div>
          </div>
        </div>
  
    )
}
export default ProgressBar;
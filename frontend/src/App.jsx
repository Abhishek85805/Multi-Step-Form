import { useState } from 'react'
import './App.css'
import Step from './components/Step'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'
import Step4 from './components/Step4'
import leftBackgroundImageURL from './assets/bg-sidebar-desktop.svg'

function App() {
  const leftBackgroundImage = {
    backgroundImage: `url(${leftBackgroundImageURL})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }
  
  const [steps, setSteps] = useState({
    step1: true,
    step2: false,
    step3: false,
    step4: false,
  });

  const handleSelect = (data) =>{
    const updatedStep = {};
    for(const step in steps){
      updatedStep[step] = step===data?true:false;
    }
    setSteps(updatedStep);
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-magnolia">
      <div className="h-3/4 w-3/5 p-2 bg-white rounded-lg flex">
        <div className="h-full w-52 rounded-lg pl-5 pt-6" style={leftBackgroundImage}>
          <Step number={1} info="YOUR INFO" selected={steps.step1} onClick={handleSelect}/> 
          <Step number={2} info="SELECT PLAN" selected={steps.step2} onClick={handleSelect}/>
          <Step number={3} info="ADD-ONS" selected={steps.step3} onClick={handleSelect}/>
          <Step number={4} info="SUMMARY" selected={steps.step4} onClick={handleSelect}/>    
        </div>
        <div className="flex-1 bg-white rounded-r-lg p-12">
          {steps.step1 && <Step1 onSubmit={handleSelect}/>}
          {steps.step2 && <Step2 onSubmit={handleSelect}/>}
          {steps.step3 && <Step3 onSubmit={handleSelect}/>}
          {steps.step4 && <Step4/>}
        </div>
      </div>
    </div>
  )
}

export default App

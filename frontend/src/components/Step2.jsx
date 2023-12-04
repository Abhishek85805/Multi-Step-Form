import { useState } from "react"
import React from 'react'
import arcade from '../assets/icon-arcade.svg'
import advanced from '../assets/icon-advanced.svg'
import pro from '../assets/icon-pro.svg'

const Step2 = ({onSubmit}) => {
  const [toggleValue, setToggleValue] = useState("monthly");
  const [plan, setPlan] = useState('arcade');

  const handleToggle = () =>{
    const value = toggleValue === "monthly"?"yearly":"monthly";
    setToggleValue(value);
  }
  const handlePlan = (val) =>{
    setPlan(val);
  }
  const handleSubmit = () =>{
    console.log([plan, toggleValue]);
    onSubmit('step3')
  }
  const handleGoBack = () =>{
    onSubmit('step1')
  }


  return (
    <div className='h-full'>
      <h1 className="font-bold text-3xl text-marineBlue mb-2">Select your plan</h1>
      <p className="text-coolGray mb-10">You have the option of monthly or yearly billing.</p>
      <div className='h-44 flex flex-row gap-6 mb-4'>
        <div 
        className={`h-full w-1/3 border rounded-lg flex flex-col p-5 ${plan==='arcade'?'bg-magnolia border-purplishBlue':'bg-transparent border-coolGray'}`}
        onClick={() => {handlePlan('arcade')}}>
          <div className="flex-1">
            <img src={arcade} alt="icon" />
          </div>
          <p className="text-marineBlue font-bold">Arcade</p>
          <p className="text-coolGray font-medium">$9/mo</p>
        </div>
        <div 
        className={`h-full w-1/3 border border-coolGray rounded-lg flex flex-col p-5 ${plan==='advanced'?'bg-magnolia border-purplishBlue':'bg-transparent border-coolGray'}`}
        onClick={() => {handlePlan('advanced')}}>
          <div className="flex-1">
            <img src={advanced} alt="icon" />
          </div>
          <p className="text-marineBlue font-bold">Advanced</p>
          <p className="text-coolGray font-medium">$12/mo</p>
        </div>
        <div 
        className={`h-full w-1/3 border border-coolGray rounded-lg flex flex-col p-5 ${plan==='pro'?'bg-magnolia border-purplishBlue':'bg-transparent border-coolGray'}`}
        onClick={() => {handlePlan('pro')}}>
          <div className="flex-1">
            <img src={pro} alt="icon" />
          </div>
          <p className="text-marineBlue font-bold">Pro</p>
          <p className="text-coolGray font-medium">$15/mo</p>
        </div>
      </div>
      <div className='flex flex-row justify-center items-center gap-5 h-10 bg-magnolia rounded-lg mb-5'>
        <p className={`${toggleValue==="monthly"?"text-marineBlue":"text-coolGray"} font-bold`}>Monthly</p>
        <div 
        className={`h-1/2 w-10 bg-marineBlue rounded-xl flex items-center ${toggleValue==="monthly"?"justify-start":"justify-end"} p-0.5`}
        onClick={handleToggle}
        >
          <div className="h-3.5 w-3.5 bg-white rounded-lg"></div>
        </div>
        <p className={`${toggleValue==="yearly"?"text-marineBlue":"text-coolGray"} font-bold`}>Yearly</p>
      </div>
      <div className="flex flex-row justify-between">
        <button 
        className="text-marineBlue font-bold"
        onClick={handleGoBack}
        >
          Go Back
        </button>
        <button 
        className="bg-marineBlue text-white h-10 w-24 rounded-lg"
        onClick={handleSubmit}
        >
          Next Step
        </button>
      </div>
    </div>
  )
}

export default Step2
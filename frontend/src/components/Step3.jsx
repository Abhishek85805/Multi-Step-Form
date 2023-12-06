import React, { useState } from 'react'

const Step3 = ({onSubmit}) => {
  const [addOns, setAddOns] = useState({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  });

  const handleAddOns = (addon) => {
    setAddOns(prevAddOns =>({
      ...prevAddOns,
      [addon]: !prevAddOns[addon],
    }))
  }

  const handleSubmit = () =>{
    console.log(addOns);
    onSubmit('step4')
  }
  const handleGoBack = () =>{
    onSubmit('step2')
  }
  return (
    <div className='h-full flex flex-col'>
      <h1 className="font-bold text-3xl text-marineBlue mb-2">Pick add-ons</h1>
      <p className="text-coolGray mb-10">Add-ons help enhance your gaming experience.</p>
      <div className='flex-1 flex flex-col gap-3 mb-4'>
        <label 
        className={`h-1/3 border border-purplishBlue rounded-lg flex items-center p-4 gap-5 ${addOns.onlineService?'bg-magnolia':'bg-transparent'}`} 
        id="onlineService"
        >
          <input 
          type="checkbox" 
          name="onlineService" 
          id="onlineService"
          checked={addOns.onlineService}
          onClick={()=>{handleAddOns('onlineService')}}
          />
          <div className='flex-1'>
            <p className='text-marineBlue font-bold'>Online service</p>
            <p className='text-coolGray font-medium'>Access to multiple games</p>
          </div>
          <div className='text-purplishBlue font-medium'>+$1/mo</div>
        </label>
        <label 
        className={`h-1/3 border border-purplishBlue rounded-lg flex items-center p-4 gap-5 ${addOns.largerStorage?'bg-magnolia':'bg-transparent'}`} 
        id="largerStorage"
        >
          <input 
          type="checkbox" 
          name="largerStorage" 
          id="largerStorage"
          checked={addOns.largerStorage}
          onClick={()=>{handleAddOns('largerStorage')}}
          />
          <div className='flex-1'>
            <p className='text-marineBlue font-bold'>Large storage</p>
            <p className='text-coolGray font-medium'>Extra 1TB of cloud save</p>
          </div>
          <div className='text-purplishBlue font-medium'>+$2/mo</div>
        </label>
        <label 
        className={`h-1/3 border border-purplishBlue rounded-lg flex items-center p-4 gap-5 ${addOns.customizableProfile?'bg-magnolia':'bg-transparent'}`} 
        id="customizableProfile"
        >
          <input 
          type="checkbox" 
          name="customizableProfile" 
          id="customizableProfile"
          checked={addOns.customizableProfile}
          onClick={()=>{handleAddOns('customizableProfile')}}
          />
          <div className='flex-1'>
            <p className='text-marineBlue font-bold'>Customizable Profile</p>
            <p className='text-coolGray font-medium'>Custom theme on your profile</p>
          </div>
          <div className='text-purplishBlue font-medium'>+$2/mo</div>
        </label>
      </div>
      
      <div className="flex flex-row justify-between">
        <button 
        className="text-coolGray font-bold"
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

export default Step3
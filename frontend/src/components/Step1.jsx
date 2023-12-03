import React, {useState} from 'react'
import {useFormik} from 'formik'

const Step1 = ({onSubmit}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  })

  const [error, setError] = useState({});

  const validateForm = () =>{
    let isValid = true;
    const newError = {};

    if(!formData.name){
      newError.name = "This field is required";
      isValid = false;
    }

    if(!formData.email){
      newError.email = "This field is required";
      isValid = false;
    }

    if(!formData.number){
      newError.number = "This field is required";
      isValid = false;
    }

    setError(newError);

    return isValid;
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    if(!validateForm()){
      console.log("Form submission failed due to validation errors.");
      return;
    }
    onSubmit("step2");
    setFormData({
      name: "",
      email: "",
      number: "",
    })
  }

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    setError({
      ...error,
      [name]: '',
    })
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const getBorderColor = (fieldName) =>{
    return error[fieldName] ? 'border-strawberryRed' : 'border-coolGray';
  }

  return (
    <div className="h-full">
        <h1 className="font-bold text-3xl text-marineBlue mb-2">Personal info</h1>
        <p className="text-coolGray mb-4">Please provide your name, email address and phone number</p>
        <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="flex flex-col mb-3">
                <div className="flex flex-row justify-between">
                  <label htmlFor="name" className='text-marineBlue font-medium mb-1'>Name</label>
                  <p className="text-strawberryRed">{error.name}</p>
                </div>
                <input
                type="text"
                id="name"
                name="name"
                placeholder='Vanessa Mint'
                value={formData.name}
                onChange={handleInputChange}
                className={`border ${getBorderColor('name')} h-10 rounded-lg pl-3`}
                />
            </div>
            <div className="flex flex-col mb-3">
                <div className="flex flex-row justify-between">
                  <label htmlFor="email" className='text-marineBlue font-medium mb-1'>Email Address</label>
                  <p className="text-strawberryRed">{error.email}</p>
                </div>
                <input
                type="email"
                id="email"
                name="email"
                placeholder='vanessamint@gmail.com'
                value={formData.email}
                onChange={handleInputChange}
                className={`border ${getBorderColor('email')} h-10 rounded-lg pl-3`}
                />
            </div>
            <div className="flex flex-col mb-10">
                <div className="flex flex-row justify-between">
                  <label htmlFor="number" className='text-marineBlue font-medium mb-1'>Phone Number</label>
                  <p className="text-strawberryRed">{error.number}</p>
                </div>
                <input
                type="tel"
                id="number"
                name="number"
                placeholder='e.g. +1 234 567 890'
                value={formData.number}
                onChange={handleInputChange}
                className={`border ${getBorderColor('number')} h-10 rounded-lg pl-3`}
                />
            </div>
            <button type="submit" className="bg-marineBlue text-white w-24 h-9 rounded-lg self-end">Next Step</button>
        </form>
    </div>
  )
}

export default Step1
import React from 'react'

const Step = (props) => {
  const handleClick = () =>{
    props.onClick(`step${props.number}`);
  }
  return (
    <div className="flex gap-2 items-center m-2 cursor-pointer" onClick={handleClick}>
        <div 
        className="w-8 h-8 flex justify-center items-center rounded-full border border-white text-white" 
        style={{backgroundColor: props.selected?'hsl(206, 94%, 87%)':'transparent', color:props.selected?'hsl(213, 96%, 18%)':'white'}}>{props.number}</div>
        <div>
            <div className="text-coolGray">Step {props.number}</div>
            <div className="text-white">{props.info}</div>
        </div>
    </div>
  )
}

export default Step
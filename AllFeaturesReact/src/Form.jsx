import  React,{useState} from 'react'

function Form()
{
    let [curValue,updateValue] = useState();
    let [submitName,updateName] = useState();

    const inputEvent = (event)=>{
      updateValue(event.target.value);  
    }

    const setFullName = ()=>{
        updateName(curValue);
    }

  return (
      <>
      <div className="div-center">
          <h4>Submitted Name:{submitName}</h4>
          <label htmlFor="name">Enter Name: </label>
          <input type="text" name="name" onChange = {inputEvent}/>
          <h4>{curValue}</h4>
          <button className="btn" onClick={setFullName}>Submit</button>
      </div>
      </>
  )
}

export default Form
import  React,{useState} from 'react'

function Form2()
{
    let [curValue,updateValue] = useState();
    let [submitName,updateName] = useState();

    const inputEvent = (event)=>{
      updateValue(event.target.value);  
    }

    const setFullName = (event)=>{
        console.log(event)
        event.preventDefault();
        updateName(curValue);
    }

  return (
      <>
      <form onSubmit={setFullName}>
      <div className="div-center">
          <h4>Submitted Name:{submitName}</h4>
          <label htmlFor="name">Enter Name: </label>
          <input type="text" name="name" onChange = {inputEvent}/>
          <h4>{curValue}</h4>

          <label htmlFor="name">Enter Password: </label>
          <input type="password" name="password"/>
          <button className="btn" type="submit">Submit</button>
      </div>
      </form>
      </>
  )
}
export default Form2
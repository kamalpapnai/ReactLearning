import  React,{useState} from 'react'

function Form3()
{
   const onFormSubmit = (event)=>{
       event.preventDefault();
   }

   let [curValue,updateValues] = useState({
       firstName:'',
       lastName:'',
   });

   const inputEvent = (event)=>{
       
       const inputName = event.target.name;
       const inputValue = event.target.value;

       if(inputName == 'firstname')
       {
         updateValues({
            firstName:inputValue,
            lastName:curValue['lastName'],
         })
       }
       else if(inputName == 'lastname'){
         updateValues((prevValue)=>{
             return {
                firstName:prevValue['firstName'],
                lastName:inputValue,
             }
         })
       }
   }

  

  return (
      <>
      <form onSubmit={onFormSubmit}>
      <div className="div-center">
          <h4>Hi:{curValue['firstName']} {curValue.lastName}</h4>

          <label htmlFor="firstname">Enter First Name: </label>
          <input type="text" name="firstname" onChange = {inputEvent}/>

          <label htmlFor="lastname">Enter Second Name: </label>
          <input type="text" name="lastname" onChange = {inputEvent}/>

          <label htmlFor="name">Enter Password: </label>
          <input type="password" name="password"/>
          
          <button className="btn" type="submit">Submit</button>
      </div>
      </form>
      </>
  )
}
export default Form3
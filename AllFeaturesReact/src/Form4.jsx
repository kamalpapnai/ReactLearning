import React, { useState } from 'react'

function Form4() {
    const onFormSubmit = (event) => {
        event.preventDefault();
    }

    let [curValue, updateValues] = useState({
        firstname: '',
        lastname: '',
    });

    const inputEvent = (event) => {

        const inputName = event.target.name;
        const inputValue = event.target.value;

        //    if(inputName == 'firstname')
        //    {
        //      updateValues({
        //         firstname:inputValue,
        //         lastname:curValue['lastName'],
        //      })
        //    }
        //    else if(inputName == 'lastname'){
        //      updateValues((prevValue)=>{
        //          return {
        //             firstname:prevValue['firstName'],
        //             lastname:inputValue,
        //          }
        //      })
        //    }


        /** using spread operator */
        updateValues({
            ...curValue,
            [inputName]: inputValue,
        })
    }



    return (
        <>
            <form onSubmit={onFormSubmit}>
                <div className="div-center">
                    <h4>Hi:{curValue.firstname} {curValue.lastname}</h4>

                    <label htmlFor="firstname">Enter First Name: </label>
                    <input type="text" name="firstname" onChange={inputEvent} />
                    <br />
                    <br />

                    <label htmlFor="lastname">Enter Second Name: </label>
                    <input type="text" name="lastname" onChange={inputEvent} />
                    <br />
                    <br />

                    <label htmlFor="name">Enter Password: </label>
                    <input type="password" name="password" />
                    <br />
                    <br />

                    <button className="btn" type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}
export default Form4
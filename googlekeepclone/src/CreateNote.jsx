import React,{useState} from 'react';
import './CreateNode.css';
import NoteModel from './NoteModel';

function CreateNote(props)
{
   const [curNote, updateCurNote] = useState(NoteModel);
   

   const submitForm = (event)=>{
       event.preventDefault();
       if(curNote.title!='' && curNote.note!='')
       {
        props.createNote(curNote);
        updateCurNote(NoteModel);
       }
       else{
         alert('Please Fill all fields');
       }
   }
   const handleInputChange = (event)=>{

    // const tagName = event.target.name;
    // const tagValue = event.target.value;

    const {name,value} = event.target;
     updateCurNote((prevCurNote)=>{
         return {...prevCurNote,[name]:value};
     });
   }

  return (
      <>
      <div className="div_note">
          <form className="note_form" onSubmit={submitForm}>
              <input type="text" className="input_title" placeholder="Title" name="title" autoComplete="off" onChange={handleInputChange} value={curNote.title}/>
              <textarea className="text_todo" name="note" id="" cols="30" rows="10" placeholder="Write a Note" onChange={handleInputChange} value={curNote.note}></textarea>
              <button  className="add_btn">+</button>
          </form>
      </div>
      </>
  )
}

export default CreateNote
import React,{useState} from 'react';
import './CreateNode.css';
import NoteModel from './NoteModel';

function CreateNote(props)
{
   const [curNote, updateCurNote] = useState(NoteModel);
   const [expand,updateExpand] = useState(false);

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

   const expandArea = ()=>{
      updateExpand(true);
   }

   const minimizeArea = ()=>{
       updateExpand(false);
   }

  return (
      <>
      <div className="div_note">
          <form className="note_form" onSubmit={submitForm}>
              <input type="text" className="input_title" placeholder="Enter Title" name="title" autoComplete="off" onChange={handleInputChange} value={curNote.title} onClick={expandArea} onDoubleClick={minimizeArea}/>
              {
                  (expand==true)?(<>
                  <textarea className="text_todo" name="note" id="" cols="30" rows="10" placeholder="Write a Note" onChange={handleInputChange} value={curNote.note}></textarea>
                  <button  className="add_btn">+</button>
                  </>):(null)
              }
          </form>
      </div>
      </>
  )
}

export default CreateNote
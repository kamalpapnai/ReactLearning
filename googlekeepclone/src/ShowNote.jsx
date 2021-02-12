import React from 'react';
import './ShowNote.css';

function ShowNote(props)
{
    const deleteNote = ()=>{
        props.delete(props.index);
    }
  return (
      <>
      <div className="note_div">
          <h3 className="title">{props.title}</h3>
          <p className="note">{props.note}</p>
          <button className="btn_delete" onClick={deleteNote}>x</button>        
      </div>
      </>
  )
}

export default ShowNote;
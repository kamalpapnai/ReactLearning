import React, {useState} from 'react';
import './App.css';
import CreateNote from './CreateNote';
import Header from './Header';
import ShowNote from './ShowNote';

function App() {

  const [notes,updateNotes] = useState([]);

  const addNote = (note)=>{
    updateNotes((prevNotes)=>{
      return [...prevNotes,note];
    })
  }

  const deleteNote = (index)=>{
    updateNotes(notes.filter((curNote,ind)=>{
      if(ind!=index)
      return curNote;
    }))
  }

  return (
   <>
   <Header/>
   <CreateNote createNote={addNote}/>
   <div className="showNotes">
   { notes.map((note,index)=>{
      return <ShowNote title={note.title} note={note.note} delete={deleteNote} key={index} index={index}/> 
   })}
   </div>
   </>
  );
}

export default App;

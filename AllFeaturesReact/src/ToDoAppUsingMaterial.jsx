import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import './ToDoMaterial.css'
import ToDoItem from './ToDoItem';

function ToDoAppUsingMaterial() {

   const [toDoItem, setToDoItem] = useState('');
   const [toDos, updateToDos] = useState([]);

   const handleInputChange = (event)=>{
      setToDoItem(event.target.value);
   }

   const addToDoItem = ()=>{
     updateToDos((prevToDos)=>{
         if(toDoItem!='')
         return [...prevToDos,toDoItem];
         else
         return toDos
     })
     setToDoItem('');
   }


    return (
        <>
           <div className="main_div">
               <div className="center_div">
                   <br/>
                   <h1>To Do List</h1>
                   <br/>
                   <input type="text" className="todo_Input" placeholder="Add Item" onChange={handleInputChange} value={toDoItem}/>
                   <Button  onClick={addToDoItem}>
                       <AddIcon  className="add_btn"/>
                   </Button>

                   <br/>
                   <ul type="none" id="list">
                        {toDos.map((curTodo,index) => {
                            return (
                                <>
                                    <ToDoItem toDoName={curTodo} key={index} index={index}/>
                                </>
                            )
                        })}

                    </ul>
               </div>
           </div>
        </>
    )
                
}

export default ToDoAppUsingMaterial
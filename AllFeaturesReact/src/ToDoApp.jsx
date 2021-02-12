import React, { useState } from 'react'
import ToDoItem from './ToDoItem';

function ToDoApp() {

    const [curTodo, updateToDo] = useState('');
    const [todoList, updateToDoList] = useState([]);

    const handleInputEvent = (event) => {
        updateToDo(event.target.value);
    }

    const addToDo = () => {
        updateToDoList((curToDoList) => {
            return [...todoList, curTodo];

        })
        updateToDo('');
        //     var todoItem = document.createElement('li');

        //     var deleteBtn = document.createElement('button');
        //     deleteBtn.className='btn_todo_sm';
        //     deleteBtn.innerText = 'X';

        //     var todoName = document.createElement('span');
        //     todoName.className='p_todo';
        //     todoName.innerText = curTodo;

        //     todoItem.appendChild(deleteBtn);
        //     todoItem.appendChild(todoName);

        //   document.getElementById('list').appendChild(todoItem);

    }

    const deleteToDo = (indexToDelete)=>{
        updateToDoList( todoList.filter((todo,index)=>{
            if(index!=indexToDelete)
            return todo;
        }))
    }

    return (
        <>
            <div className="div-center">
                <div className="div_todo">
                    <h1 className="h_todo">To Do List</h1>
                    <input type="text" className="input_todo" onChange={handleInputEvent} value={curTodo} placeholder="Add Item" />
                    <button type="submit" className="btn_todo" onClick={addToDo}>+</button>

                    <ul type="none" id="list">
                        {todoList.map((curTodo,index) => {
                            return (
                                <>
                                    <ToDoItem toDoName={curTodo} key={index} index={index} onDelete={deleteToDo}/>
                                </>
                            )
                        })}

                    </ul>
                </div>
            </div>
        </>
    )
}

export default ToDoApp
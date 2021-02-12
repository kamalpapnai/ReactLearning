import React,{useState} from 'react'

function ToDoItem(props) {

    const [isCompleted,update] = useState(false);
    const strikeToDo = ()=>{
      update(true);
    }
    return (
        <>
            <li>
                <button className="btn_todo_sm"  onClick={strikeToDo}>X</button>
                <span className="p_todo" style={{textDecoration:isCompleted?'line-through':'none'}} >{props.toDoName}</span>
            </li>
        </>
    )
}

export default ToDoItem
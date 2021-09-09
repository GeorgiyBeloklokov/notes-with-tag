

/*
function ToDo({todo,toggleTask,removeTask,editTask,userInput}) {

    return (
        <div key={todo.id} className="item-todo">
            <div className={todo.complete ? "item-text strike" : "item-text"} onClick={() => toggleTask(todo.id)}>
                {todo.task}
            </div>
            <div className="item-delete" onClick={() => removeTask(todo.id)}>
                X
            </div>
            <div className="item-delete edit" onClick={() => editTask(userInput)}>
            EDIT
            </div>
        </div>
    )
}

export default ToDo;
*/


import {useState} from "react";

const ToDo = ({editTask, removeTaskOld, todo, toggleTask, removeTask}) => {

    let [editMode, setEditMode] = useState(false);

    let [userInput, setUserInput] = useState('');



    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode =() => {
        setEditMode(false);
        editTask(userInput)
        setUserInput("")
        /*removeTaskOld(todo.id,userInput)*/
    }

    const OnTaskChange = (e) => {
        setUserInput(e.currentTarget.value);

    }

    return (
        <div  >
            {!editMode &&
            <div key={todo.id} className="item-todo">
                <div className={todo.complete ? "item-text strike" : "item-text"} onClick={() => toggleTask(todo.id)}>
                    {todo.task}
                </div>
                <div className="item-delete" onClick={() => removeTask(todo.id)}>
                    X
                </div>
                <div className="item-delete edit" onClick = {activateEditMode}>
                    EDIT
                </div>
            </div>
            }
            {editMode &&
            <div>
                <input  onChange={OnTaskChange} onBlur={deactivateEditMode} autoFocus={true} value={userInput} />
            </div>
            }
        </div>
    )
}

export default ToDo;
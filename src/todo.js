import {useState} from "react";

const ToDo = ({editTask, todo, toggleTask, removeTask}) => {

    let [editMode, setEditMode] = useState(false);

    let [userInput, setUserInput] = useState('');


    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        editTask(userInput, todo.id)
        setUserInput(userInput)
    }

    const OnTaskChange = (e) => {
        setUserInput(e.currentTarget.value);

    }

    return (
        <div>
            {!editMode &&
            <div key={todo.id} className="item-todo">
                <div className={todo.complete ? "item-text strike" : "item-text"} onClick={() => toggleTask(todo.id)}>
                    {todo.task}
                </div>
                <div className="item-delete" onClick={() => removeTask(todo.id)}>
                    X
                </div>
                <div className="item-delete edit" onClick={activateEditMode}>
                    EDIT
                </div>
            </div>
            }
            {editMode &&
            <div className="item-delete edit-task " >
                <input onChange={OnTaskChange} onBlur={deactivateEditMode} autoFocus={true} value={userInput}
                       id={todo.id} placeholder={'Введите значение...'}/>
            </div>
            }
        </div>
    )
}

export default ToDo;
import React  from "react";

const Task = (props) => {
    const dats = props.dats;
    const listData = dats.map(item => {
        return (
            <div key={item.key}>
                {!item.editMode &&
                <div className='notes'>
                    <div className='someNote'>{item.text}</div>
                    <div>
                        <button onClick={() => props.activateEditMode(item.text, item.key)}
                                className='changeNote'>Edit
                        </button>
                    </div>
                    <div>
                        <button onClick={() => props.delPost(item.key)} className='delNote'>X</button>
                    </div>
                </div>}

                {item.editMode &&
                <div className="someText editMode">
                    <input id={item.key} value={props.value} onChange={props.handleChange}
                           onBlur={() => props.deactivateEditMode(item.key, item.text)}
                           autoFocus={true}
                           placeholder={'Введите значение...'}/>
                </div>}
            </div>
        )
    })
    return (
        <div>{listData}</div>
    )
}
export default Task;
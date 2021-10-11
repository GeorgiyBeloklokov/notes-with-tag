import React  from "react";

const HashTag = (props) => {
    const note = props.note;
    const listTag = note.map(item => {
            return (
                <div key={item.key}>
                    <div className='tags'>
                        <div className='someTag'>{item}</div>
                        <button onClick={() => props.delHashtag(item.index)} className='delTag'>Удалить тэг
                        </button>
                    </div>
                </div>
            )
        }
    )
    return (
        <div>{listTag}</div>
    )
}
export default HashTag;
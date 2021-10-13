import React  from "react";

const HashTag = (props) => {
    const note = props.note;

    const listTag = note.map(item => {
        let className = 'tags';
        if (props.isActive) {
            className += 'tags active';
        }
            return (
                <div key={item.index}>
                    <div className='tags'>
                        <div className={className}>{item}</div>
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

/*
<div className='someTag'>{item}</div>*/

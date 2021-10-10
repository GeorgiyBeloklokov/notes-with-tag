import React  from "react";

const HashTag = (delHashtag,item) => {
        return (
            <div key={item.key} >
            <div   className='tags'>
                <div   className='someTag'>{item.text}</div>
                <button onClick={() => delHashtag(item.index)} className='delTag'>Удалить тэг
                </button>
            </div>
            </div>
        )
}
export default HashTag;
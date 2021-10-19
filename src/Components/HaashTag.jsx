import React from "react";

const HashTag = (props) => {
    const note = props.note;

    const listTag = note.map((item) => {
        let className = " ";
        if (props.isActive) {
            className = "active";
        }
        return (
            <div  key={item}>
                <div className={"tags"}>
                    <div className={className}>{item}</div>
                    <button onClick={() => props.delHashtag(item)} className="delTag">
                        Удалить тэг
                    </button>
                </div>
            </div>
        );
    });
    return <div>{listTag}</div>
};
export default HashTag;

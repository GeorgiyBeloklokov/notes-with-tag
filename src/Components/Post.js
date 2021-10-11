import React, {Component} from 'react';
import Task from "./Task";
import HashTag from "./HaashTag";

class Post extends Component {

    render() {
        return (
            <div className="Post">
                <form className="someText">
                    <textarea value={this.props.value}  onChange={this.props.handleChange}
                              placeholder="Для создания заметки и/или тега введите текст..."> </textarea>
                    <button className="save" onClick={this.props.handleSubmit}>Сохранить</button>
                </form>
                <form className="searchTag">
                    <input placeholder="Искать заметку по тегу..." value={this.props.tag}
                           onChange={this.props.noteChange}/>
                    <button className="tagButton" onClick={this.props.searchTag}>Искать</button>
                </form>
                <div className='listBox'>
                    <Task currentData={this.props.currentData}
                          state={this.props.state}
                          note={this.props.note}
                          tag={this.props.tag}
                          value={this.props.value}
                          handleChange={this.props.handleChange}
                          handleChangeEditMode={this.props.handleChangeEditMode}
                          delPost={this.props.delPost}
                          activateEditMode={this.props.activateEditMode}
                          deactivateEditMode={this.props.deactivateEditMode}
                          handleSubmit={this.props.handleSubmit}
                          handleActive={this.props.handleActive}
                          searchTag={this.props.searchTag}
                          noteChange={this.props.noteChange}
                          dats={this.props.dats}
                          handleChangeTask={this.props.handleChangeTask}
                    />
                    <div className='containerNote'>
                                <HashTag
                                    dats={this.props.dats}
                                    note={this.props.note}
                                />
                    </div>
                </div>
            </div>
        )
    }
}

export default Post;

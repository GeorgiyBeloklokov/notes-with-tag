import React, { Component } from "react";
import Task from "./Task";
import HashTag from "./HaashTag";

class Post extends Component {
    render() {
        return (
            <div className="Post">
                <form className="someText">
          <textarea
              value={this.props.value}
              onChange={this.props.handleChange}
              onKeyDown={this.props.handleKeyPress}
              placeholder="Введите текст/тег и нажмите Enter или Сохранить..."
          >
          </textarea>
                    <button className="save" onClick={this.props.handleSubmit}>
                        Сохранить
                    </button>
                </form>
                <form className="searchTag">
                    <input
                        placeholder="Искать заметку по тегу..."
                        value={this.props.tag}
                        onChange={this.props.noteChange}
                    />
                    <button className="tagButton" onClick={this.props.searchTag}>
                        Искать
                    </button>
                </form>
                <div className="listBox">
                    <Task
                        value={this.props.value}
                        handleChange={this.props.handleChange}
                        delPost={this.props.delPost}
                        activateEditMode={this.props.activateEditMode}
                        deactivateEditMode={this.props.deactivateEditMode}
                        dats={this.props.dats}
                    />
                    <div className="containerNote">
                        <HashTag
                            isActive={this.props.isActive}
                            dats={this.props.dats}
                            note={this.props.note}
                            delHashtag={this.props.delHashtag}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;

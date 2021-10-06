import React, {Component} from 'react';
import Task from "./Task";

class Post extends Component {

    render() {
        return (
            <div className="Post">
                <form className="someText">
                    <textarea value={this.props.value} onChange={this.props.handleChange}
                              placeholder="Для создания заметки введите техт"> </textarea>
                    <button className="save" onClick={this.props.handleSubmit}>Сохранить</button>
                </form>
                <form className="searchTag">
                    <input placeholder="Искать заметку по тегу" value={this.props.tag}
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

                    {/*{!this.props.editMode &&
                    this.props.data.length > 0 ? this.props.data.map((item, index) =>
                        <div key={index} className='notes'>
                            <div onDoubleClick={() => this.props.handleActive(item)} className='someNote'>{item}</div>
                            <div>
                                <button onClick={() => this.props.activateEditMode(index)} className='changeNote'>Edit
                                </button>
                            </div>
                            <div>
                                <button onClick={() => this.props.delPost(index)} className='delNote'>X</button>
                            </div>
                        </div>
                    ) : null}
                    {this.props.editMode &&
                    this.props.data.length > 0 ? this.props.data.map((item, index) =>
                        <div className="someText">
                            <input onChange={this.props.handleChange}
                                   onBlur={() => this.props.deactivateEditMode(index, item)} autoFocus={true}
                                   value={this.props.value}
                                   placeholder={'Введите значение...'}/>
                        </div>
                    ) : null}*/}
                    <div className='containerNote'>
                        {this.props.note.length > 0 ? this.props.note.map((item, index) =>
                            <div key={index} className='tags'>
                                <div className='someTag'>{item}</div>
                                <button onClick={() => this.props.delHashtag(index)} className='delTag'>Удалить тэг
                                </button>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        )
    }
}

    export default Post;

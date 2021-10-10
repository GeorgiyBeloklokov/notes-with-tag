import React, {Component} from 'react';
import Post from "./Post";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            tag: '',

            dats: [],
            currentData: {
                text: '',
                key: '',
                editMode: false
            },
            currentTag: {
                text: '',
                key: '',
                servNote:'',
            },
            note: [],
            json: null,
        };
    }


    noteChange = (e) => {
        this.setState({
            tag: e.target.value,

        });
    }

    searchTag = (e) => {
        e.preventDefault();
        let dats = this.state.dats;
        let indexOfStevie = dats.findIndex(i => i.indexOf(this.state.tag) !== -1);
        dats.unshift(dats[indexOfStevie]);
        dats.splice(indexOfStevie + 1, 1);
        this.setState({
            dats: dats,
            tag: '',
        })
    }

    delHashtag = (index) => {
        let tag = this.state.note;
        let val = this.state.value;
        let del = tag.splice(index, 1);
        let clearTag = val.substring(0, val.length - 1).replace(del, '');
        this.setState({
            note: tag,
            value: clearTag,
        })
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value,
            currentData: {
                text: e.target.value,
                key: Date.now(),
                editMode: false,
            },
                currentTag: {
                    text: e.target.value,
                    key: Date.now(),
            },
        });
        let val = this.state.value.split(/(#[a-z\d-]+)/ig);
        for (let i = 0; i < val.length; i++) {
            if (val[i].charAt(0) === "#") {
                let array = [];
                array.push(val[i]);
                this.setState({

                        note:array
                });
            }
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.value !== '' ) {
            let myJson = {
                dats: this.state.dats,
                note: this.state.note
            };
            const newData = this.state.currentData;
            const newDats = [...this.state.dats,newData];
            const newTag = this.state.currentTag;
            const newTags = [...this.state.note, newTag];
            this.setState({
                json: JSON.stringify(myJson),
                dats: newDats,
                note: newTags,
                value: '',
            })
            console.log(myJson);
        }
    }

    delPost = (key) => {
        const filterTask = this.state.dats.filter(item =>
            item.key !== key);
        this.setState({
                dats: filterTask
            }
        )
    }



    activateEditMode = (text, key) => {
        const dats = this.state.dats;
        if (text) {
            dats.forEach(item => {
                if (item.key === key) {
                    item.text = text;
                    item.editMode = !item.editMode;
                }
            })
            this.setState({
                dats: dats,
                value: text,
            })
        }
    }

    deactivateEditMode = (key, text) => {
        if (this.state.value) {
            const dats = this.state.dats;
            if (text) {
                dats.forEach(item => {
                    if (item.key === key) {
                        item.editMode = false;
                        item.text = this.state.value;
                    }
                })
                this.setState({
                    dats: dats,
                    value: '',
                })
            }
        }
    }


    render() {
        return (
            <div>
                <Post
                    state={this.state}
                    value={this.state.value}
                    currentData={this.state.currentData}
                    note={this.state.note}
                    tag={this.state.tag}
                    dats={this.state.dats}
                    handleChange={this.handleChange}
                    handleChangeEditMode={this.handleChangeEditMode}
                    delHashtag={this.delHashtag}
                    delPost={this.delPost}
                    activateEditMode={this.activateEditMode}
                    deactivateEditMode={this.deactivateEditMode}
                    handleSubmit={this.handleSubmit}
                    handleActive={this.handleActive}
                    searchTag={this.searchTag}
                    noteChange={this.noteChange}
                    handleChangeTask={this.handleChangeTask}
                />
            </div>
        );
    }
}

export default Form;

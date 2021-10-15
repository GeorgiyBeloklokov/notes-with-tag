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
                servTag: ''
            },
            note: [],
            json: null,
            isActive: false
        };
    }


    noteChange = (e) => {
        this.setState({
                tag: e.target.value,

            }
        );
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
            }
        )
    }

    delHashtag = (index) => {
        let tag = this.state.note;
        let val = this.state.value;
        let del = tag.splice(index, 1);
        let clearTag = val.substring(0, val.length - 1).replace(del, '');
        this.setState({
                note: tag,
                value: clearTag,
            }
        )
    }

    handleChange = (e) => {
        let val = e.target.value.split(/(#[a-z\d-]+)/ig);
        let array = [];
        for (let i = 0; i < val.length; i++) {
            if (val[i].charAt(0) === "#" && val[i] !== "") {
                array.push({key: Math.random().toString(36).substr(2, 9),
                    text: val[i]});
            }
        }

        if(array.length === 0){

            this.setState({
                value: e.target.value,
                currentData: {
                    text: e.target.value,
                    key: Date.now(),
                    editMode: false,
                }
                })
        } else {
            this.setState({
                    value: e.target.value,
                    currentData: {
                        text: e.target.value,
                        key: Date.now(),
                        editMode: false,
                    },

                    note:array

                }
            )
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.value !== '') {
            let myJson = {
                dats: this.state.dats,
                note: this.state.note
            };
            const newDats = [...this.state.dats, this.state.currentData];
            const newTags = [...this.state.note, this.state.currentTag];
            this.setState({
                    json: JSON.stringify(myJson),
                    dats: newDats,
                    /*note: newTags,*/
                    value: '',
                }
            )
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
                }
            )
        }
        let act = 0;
        for (let i = 0; i < text.length; i++) {
            if (text[i].charAt(0) === "#") {
                act = true;
            }
        }
        this.setState({
                dats: dats,
                value: text,
                isActive: act
            }
        )
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
                    }
                )
                this.setState({
                        dats: dats,
                        value: '',
                        isActive: false
                    }
                )
            }
        }
    }


    render() {
        return (
            <div>
                <Post
                    isActive={this.state.isActive}
                    value={this.state.value}
                    note={this.state.note}
                    tag={this.state.tag}
                    dats={this.state.dats}
                    handleChange={this.handleChange}
                    delHashtag={this.delHashtag}
                    delPost={this.delPost}
                    activateEditMode={this.activateEditMode}
                    deactivateEditMode={this.deactivateEditMode}
                    handleSubmit={this.handleSubmit}
                    searchTag={this.searchTag}
                    noteChange={this.noteChange}
                />
            </div>
        );
    }
}

export default Form;

import React, { Component } from "react";
import Post from "./Post";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            tag: "",
            dats: [],
            note: [],
            currentTags: [],
            json: null,
            isActive: false,
            currentData: {
                text: "",
                key: "",
                editMode: false
            }
        };
    }

    noteChange = (e) => {
        this.setState({
            tag: e.target.value
        });
    };

    searchTag = (e) => {
        e.preventDefault();
        let dats = this.state.dats;
        let indexOfStevie = dats.findIndex(item => item.text.toLowerCase().includes (this.state.tag) );
         dats.unshift(dats[indexOfStevie]);
          dats.splice(indexOfStevie + 1, 1);
        this.setState({
            dats: dats,
            tag: ""
        });
    };

    delHashtag = (delTag) => {
        this.setState({
            note: this.state.note.filter((tag) => tag !== delTag)
        });
    };

    handleChange = (e) => {
        this.setState({
            value: e.target.value,
            currentData: {
                text: e.target.value,
                key: Date.now(),
                editMode: false
            },
            currentTags: e.target.value.match(/(#[a-z\d-]+)/gi) || []
        });
    };

    tagCloud = (savedTags, currentTags) => {
        return [...new Set([...savedTags, ...currentTags])];
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.value !== "") {
            let myJson = {
                dats: this.state.dats,
                note: this.state.note
            };
            const newDats = [...this.state.dats, this.state.currentData];
            this.setState({
                json: JSON.stringify(myJson),
                dats: newDats,
                note: this.tagCloud(this.state.note, this.state.currentTags),
                currentTags: [],
                value: ""
            });
        }
    };

    delPost = (key) => {
        const filterTask = this.state.dats.filter((item) => item.key !== key);
        this.setState({
            dats: filterTask
        });
    };

    activateEditMode = (text, key) => {
        const dats = this.state.dats;
        if (text) {
            dats.forEach((item) => {
                if (item.key === key) {
                    item.text = text;
                    item.editMode = !item.editMode;
                }
            });
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
        });
    };

    deactivateEditMode = (key, text) => {
        if (this.state.value) {
            const dats = this.state.dats;
            if (text) {
                dats.forEach((item) => {
                    if (item.key === key) {
                        item.editMode = false;
                        item.text = this.state.value;
                    }
                });
                this.setState({
                    dats: dats,
                    value: "",
                    isActive: false
                });
            }
        }
    };

    handleKeyPress = (e) => {
        if (e.key === "Enter") {
            this.handleSubmit(e)
        }
    };

    render() {
        return (
            <div>
                <Post
                    isActive={this.state.isActive}
                    value={this.state.value}
                    note={this.tagCloud(this.state.note, this.state.currentTags)}
                    tag={this.state.tag}
                    dats={this.state.dats}
                    handleKeyPress={this.handleKeyPress}
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
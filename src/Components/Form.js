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
            note: [],
            json: null,

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.noteChange = this.noteChange.bind(this);
        this.searchTag = this.searchTag.bind(this);
    }

    /*handleActive(item) {
        this.setState({value: item});
    }*/

    noteChange(e) {
        this.setState({
            tag: e.target.value,
        });
    }

    searchTag(e) {
        e.preventDefault();
        let data = this.state.data;
        let indexOfStevie = data.findIndex(i => i.indexOf(this.state.tag) !== -1);
        data.unshift(data[indexOfStevie]);
        data.splice(indexOfStevie + 1, 1);
        this.setState({
            data: data,
            tag: '',
        })
    }

    handleChange(e) {
            this.setState({
                value: e.target.value,
                currentData: {
                    text: e.target.value,
                    key: Date.now(),
                    editMode: false,
                },
            });
            let val = this.state.value.split(/(#[a-z\d-]+)/ig);
            for (let i = 0; i < val.length; i++) {
                if (val[i].charAt(0) === "#") {
                    let array = [];
                    array.push(val[i]);
                    this.setState({
                        note: array,
                    });
                }
            }
        }



    /*handleChangeTask = (e) => {
        this.setState({
            value: e.target.value,
            currentData: {
                text: e.target.value,
                editMode: false,
            },
        });
        let val = this.state.value.split(/(#[a-z\d-]+)/ig);
        for (let i = 0; i < val.length; i++) {
            if (val[i].charAt(0) === "#") {
                let array = [];
                array.push(val[i]);
                this.setState({
                    note: array,
                });
            }
        }
    }*/


    handleSubmit(e) {
        e.preventDefault();
        if (this.state.value !== '') {
            let myJson = {
                data: this.state.currentData,
                note: this.state.note
            };
            const newData = this.state.currentData;
            const newDats = [...this.state.dats, newData];
            this.setState({
                json: JSON.stringify(myJson),
                value: '',
                dats: newDats,
            })
            console.log(myJson);

        }
    }

    delPost = (key) => {
        const filterTask = this.state.dats.filter(item =>
        item.key!==key);
        this.setState({
            dats: filterTask
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
        });
    };

    activateEditMode = (text,key) => {
        const dats = this.state.dats;
        if (text) {
             dats.map(item => {
                if (item.key === key) {
                    item.text = text;
                    item.editMode = true;
                }
            })

                this.setState({
                    dats:dats,
                    value:text,
                })
        }
    }

    deactivateEditMode = (key,text) => {
        if (this.state.value) {
            const dats = this.state.dats;
            if (text) {
                dats.map(item => {
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

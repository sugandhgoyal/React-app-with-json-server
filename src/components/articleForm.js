import React from 'react';
import '../App.css';
import Example from './example';
import Addcard from './addCard';
import Multidropdown from './multiselectDropdown';
const uuidv1 = require('uuid/v1');
const uuidv4 = require('uuid/v4');

class Addarticleform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditor: [],
            num: 0,
        }
    }
    render() {
        console.log(this.state.showEditor);
        console.log(this.state.num);
        for (var i = 0; i < this.state.num; i += 1) {
            this.state.showEditor.push(<Addcard key={this.state.num} />);
        };
        return (
            <div className="form">
                <div className="container">
                    <div>
                        <div className="row">
                            <div className="col-50">
                                <input type="text" id="fname" name="Title" placeholder="Title" />
                            </div>
                            <div className="col-50">
                                <input type="text" id="fname" name="Id" placeholder="Id" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-50">
                                <input type="text" id="lname" name="Meta Title" placeholder="Meta Title" />
                            </div>
                            <div className="col-50">
                                <input type="text" id="lname" name="Meta Description" placeholder="Meta Description" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-50">
                                <input type="text" id="lname" name="Meta Keywords" placeholder="Meta Keywords" />
                            </div>
                            <div className="col-50">
                                <input type="text" id="lname" name="Meta Image" placeholder="Meta Image" />
                            </div>
                        </div>
                        <div className="row" key={uuidv4}>
                            <Example />
                            <div className="editor" key={uuidv1()}>{this.state.showEditor}</div>
                        </div>
                        <div className="row">
                            <div className="col-10" >
                                <label>Image Url</label>
                            </div>
                            <div className="col-40">
                                <input type="text" id="lname" />
                            </div>
                            <div className="col-40"><input type="checkbox" />&nbsp;Does this article have any links?</div>
                        </div>
                        <div className="row" style={{ borderBottom: '1px solid grey' }}>
                            <div className="col-50">
                                <button className="addcard" onClick={() => { this.setState({ num: this.state.num + 1 }) }} >Add Another card</button>
                            </div>
                        </div>
                        <div className="row " style={{ borderBottom: '1px solid grey' }}>
                            <div className="col-30 createdBy" >Created By</div>
                            <div className=" col-20 dropdown">
                                <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">So Delhi
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a href="#">HTML</a></li>
                                    <li><a href="#">CSS</a></li>
                                    <li><a href="#">JavaScript</a></li>
                                </ul>
                            </div>
                            <div className="col-60"><Multidropdown /></div>
                        </div>
                        <div className="row">
                            <button className="submitArticle" type="submit">SAVE ARTICLE</button>
                            <button className="cancelArticle" type="submit">CANCEL</button>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Addarticleform;
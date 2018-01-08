import React from 'react';
import Navigationbar from './navbar';
import Searchbox from './searchbox';
import Table from './table';
import { connect } from 'react-redux';

class ArticleHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            moveaside: false,
        };
        this.openNav = this.openNav.bind(this);
    }
    openNav() {
        const currentState = this.state.moveaside;
        this.setState({ moveaside: !currentState });
    }
    render() {
        return (
            <div>
                <div className={this.state.moveaside ? "mainMove" : "main"} id="mainId">
                    <span className="openButton" onClick={this.openNav}>&#9776; </span>
                    <Searchbox />
                    <i className="fa fa-user-circle-o user" aria-hidden="true"></i>
                </div>
                <div className={this.state.moveaside ? "mainMove" : "main"}>
                    <Table products={this.props.data} />
                </div>
                <Navigationbar products={this.props.data} moveasideProp={this.state.moveaside} />
            </div>

        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

export default connect((state) => state, mapDispatchToProps)(ArticleHome);
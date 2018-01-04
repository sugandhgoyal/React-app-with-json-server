import React from 'react';
import '../App.css';
import Searchbox from './searchbox';
import Table from './table';
import logo from '../images/logo.png';


class Navigationbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moveaside: false,
            searching: false,
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
                <nav id={this.state.moveaside ? "openNavbar" : "sidebar-wrapper"} className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <ul className="nav sidebar-nav">
                        <li>
                            <a href="#" id="title">So Control</a>
                        </li>
                        <li>
                            <img src={logo} className="logo" />
                        </li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <i className="fa fa-building" aria-hidden="true"></i>&nbsp;City
                            </a>
                            <ul className="dropdown-menu" role="menu">
                                <li>
                                    <a href="#"> <i className="fa fa-database"></i>&nbsp;Listings</a>
                                </li>
                                <li>
                                    <a href="#"> <i className="fa fa-bars"></i>&nbsp;Feeds</a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <i className="fa fa-newspaper-o"></i>&nbsp;Articles
                            </a>
                            <ul className="dropdown-menu" role="menu">
                                <li>
                                    <a href="#"><i className="fa fa-home"></i>&nbsp;Articles Home</a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-plus-square"></i>&nbsp;Add New Article</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-camera-retro"></i>&nbsp;Media</a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-smile-o" aria-hidden="true"></i>&nbsp;Memes</a>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <i className="fa fa-users"></i>&nbsp;Users
                            </a>
                            <ul className="dropdown-menu" role="menu">
                                <li>
                                    <a href="#"><i className="fa fa-home"></i>&nbsp;Users Home</a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-plus-square"></i>&nbsp;Add New Users</a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <i className="fa fa-window-maximize" aria-hidden="true"></i>&nbsp;Apps
                            </a>
                            <ul className="dropdown-menu" role="menu">
                                <li>
                                    <a href="#"><i className="fa fa-slack" aria-hidden="true"></i>&nbsp;Slack</a>

                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i>&nbsp;Twitter</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div className={this.state.moveaside ? "mainMove" : "main"} id="mainId">
                    <span className="openButton" onClick={this.openNav}>&#9776; </span>
                    <Searchbox />
                    <i className="fa fa-user-circle-o user" aria-hidden="true"></i>
                </div>
                <div className={this.state.moveaside ? "mainMove" : "main"}>
                    <Table products={this.props.products} />
                </div>
            </div >)
    }
}

export default Navigationbar;
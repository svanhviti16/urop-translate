import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, NavLink } from 'react-router-dom';


export default class Header extends React.Component {
    render () {
        return (  
            <div className="header">
                <NavLink to="/" activeClassName="active" value="main" id="title"><div id="title-wrapper"><img id="logo" src={ require('../resources/logo.png') } /><h1 id="title-text" >Ensk-íslensk þýðingavél</h1></div></NavLink>
                <NavLink to="/um" activeClassName="active" value="about" id="about-link">Um vefinn</NavLink>
            </div>
        );
    }
}
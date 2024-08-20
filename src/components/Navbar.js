import React from "react"
import logo from '../logo.svg';
import PropTypes from 'prop-types';

export default function Navbar(props){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark px-4 justify-content-between">
            <div className="d-flex justify-content-start align-items-center logo">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="fs-2 fw-bolder m-0">{props.websiteName}</h1>
            </div>
            <div className="d-flex justify-content-end align-items-center">
                <h1 className="fs-2 fw-bolder m-0">{props.title}</h1>
            </div>

        </nav>
    )
}

Navbar.propTypes = {
    websiteName : PropTypes.string,
    title : PropTypes.string.isRequired

}
Navbar.defaultProps = {
    websiteName : "ReactFacts",
}
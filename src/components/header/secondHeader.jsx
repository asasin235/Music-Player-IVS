import React from "react";
import "./secondHeader.style.css";
import logo from './LOGO.png';
import Link from 'react-router-dom/Link'
import Button from 'react-bootstrap/Button'
function SecondHeader  (props) {
    return(
        <div className="logo-header">
            <Link to={'/'}><div>
                <img src={logo} alt="logo" className="logo-image" />
            </div></Link>
            <h1><Button>{props.title}</Button></h1>

        </div>
    );
};

export default SecondHeader;
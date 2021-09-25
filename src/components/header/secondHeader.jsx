import React from "react";
import "./secondHeader.style.css";
import logo from './LOGO.png';
import Link from 'react-router-dom/Link'
function SecondHeader  (props) {
    return(
        <div className="logo-header">
            <Link to={'/'}><div>
                <img src={logo} alt="logo" className="logo-image" />
            </div></Link>
            <h1>{props.title}</h1>

        </div>
    );
};

export default SecondHeader;
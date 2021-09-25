import React from 'react'
import  './header.css';
import logo from './LOGO.png';

const Heading = ()=>{

        return (
            <div className = "heading">
                <img src={logo} alt = ""/>
                <hr/>
                <p>A multiplayer Social Game  to play along with your friends in a private room</p>
            </div>
        )
    
}

export default Heading
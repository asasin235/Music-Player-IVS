import React  from 'react'
// import { Button } from 'react-bootstrap';
import  './playButton.css';
import { BsArrowRight } from "react-icons/bs";


import FooterImage from './footerImage.png';

// import 'bootstrap/dist/css/bootstrap.min.css';

const PlayBtn = ()=>{

    return (
        <div>
        <div className="playbtn">
        <div className="btn">
        <button href = "#">How to Play </button>

        </div>
        </div>
        
        <img className = "image" src = {FooterImage} alt = ""/>
        </div>
        
    );

}

export default PlayBtn
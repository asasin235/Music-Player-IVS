import React from "react";
import './participants.css'
const Participants = ({ title }) => {
  return (
    <div className='input-div'>
      <h3 className='title'>{title}</h3>
      <input type='number' name='participants' id='particip' />
    </div>
  );
};

export default Participants;

import React from "react";
import './TextArea.css'
const Textarea = ({ title }) => {
  return (
    <div className='input-div'>
      <h3 className='title'>{title}</h3>
      <textarea name='textarea'></textarea>
    </div>
  );
};

export default Textarea;

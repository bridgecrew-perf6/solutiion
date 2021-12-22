/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './TextArea.css';

export default function Input(props) {
    const [value, setValue] = useState('');

    const handleInputChange = (e) => {
                const target = e.target;
                const name = target.name;
                const value = target.value;
            
                console.log(name, value);
              } 

    return (
        <div className='input_section'>
                <label>{props.label}</label>
                <textarea
                type={props.type}
                name={props.name}
                value={props.value}
                placeholder={props.placeholder}
                onChange={handleInputChange}
                required
            />
        </div>
    )
}

/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Select.css';

export default function Select(props) {
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
            <select 
                name={props.name}
                value={props.value}
                onChange={handleInputChange}
            >
                {props.options.map((item, idx) => (
                    <option key={idx} value={item}>{item}</option> 
                ))}
            </select>
        </div>
    )
}

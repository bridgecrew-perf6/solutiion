/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
// import './Input.css';

export default function Input(props) {
    const [value, setValue] = useState('');

    const handleInputChange = (e) => {
                const target = e.target;
                const name = target.name;
                const value = target.value;
            
                console.log(name, value);
                setValue(value);
              } 

    return (
        <div className='input_section'>
            <label>{props.label}</label>
            <input
            type={props.type}
            name={props.name}
            value={props.value}
            pattern={props.pattern}
            maxLength={props.maxLength}
            placeholder={props.placeholder}
            onChange={handleInputChange}
            required
            />
            <span style={{ marginTop: '0.7em', display: 'inline'}}>{props.tag}</span>
            {/* : */}
            {/* <p>{stateData[props.name]}</p>} */}
        {/* </div> */}
        </div>
    )
}

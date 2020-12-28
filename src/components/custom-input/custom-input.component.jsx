import React from 'react'
import './custom-input.style.scss'

const CustomInput = ({ handleChange, handleFocus, placeholder, error, errorMsg, width, backgroundColor, display, position, ...otherProps }) => {

    return (
        <div className="custom-input" >
            <input
                onChange={handleChange}
                onFocus={handleFocus}
                placeholder={`${placeholder}...`}
                {...otherProps}
                style={{ width, backgroundColor, display, position }}
            />
            {error ? <p className="error">{errorMsg}</p> : ''}
        </div>
    );
};

export default CustomInput;

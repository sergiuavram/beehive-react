import React from 'react'
import './custom-input.style.scss'

const CustomInput = ({ handleChange, handleFocus, placeholder, error, errorMsg, ...otherProps }) => {

    return (
        <div className="custom-input">
            <input
                onChange={handleChange}
                onFocus={handleFocus}
                placeholder={`${placeholder}...`}
                {...otherProps}
            />
            {error ? <p className="error">{errorMsg}</p> : ''}
        </div>
    );
};

export default CustomInput;

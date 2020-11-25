import React from 'react';
import './custom-button.style.scss';


const CustomButton = ({ name, backgroundColor, color, fontSize, borderRadius, handleClick, padding, margin, link }) => {

    return (
        <div className="custom-button"
            onClick={handleClick}
            style={{
                backgroundColor,
                borderRadius,
                margin,
                color,
                fontSize,
            }}
        >
            <span style={{ padding }}>{name}</span>
        </div>
    );
};

export default CustomButton;

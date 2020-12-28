import React from 'react';
import './delete-button.style.scss';

import trashCan from '../../assets/images/trash can.png';

const DeleteButton = ({ style, handleClick }) => {

    return (
        <div className="delete-button" onClick={handleClick} >
            <img src={trashCan} alt="delete" style={{ ...style }} />
        </div>
    );
};

export default DeleteButton;
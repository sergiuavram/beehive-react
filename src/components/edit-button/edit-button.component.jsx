import React from 'react';
import './edit-button.style.scss';

import pencilEdit from '../../assets/images/pencil50.png';

const EditButton = ({ display, placeholder, style, handleInputDisplay, handleDisplayMenu, handleTaskEdited, handleUpdate, value }) => {
    const handleEditButton = () => {
        handleInputDisplay();
        if (handleDisplayMenu) { handleDisplayMenu(); }
        handleUpdate();
    }

    return (
        <div className="edit-button" >
            <img src={pencilEdit} alt="edit" style={{ ...style }} onClick={handleInputDisplay} />
            <div className="change-task" style={{ display: display ? 'block' : 'none' }} >
                <input type="text" placeholder={placeholder} value={value} onChange={handleTaskEdited} />
                <div className="change-button" onClick={handleEditButton} >Edit</div>
            </div>
        </div>
    );
};

export default EditButton;
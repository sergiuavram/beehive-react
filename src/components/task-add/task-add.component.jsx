import React from 'react';
import './task-add.style.scss';

const AddTask = ({ handleDisplay }) => {

    return (
        <div className="task-add" onClick={handleDisplay}>
            <b>+</b> Add another task
        </div>
    );
};

export default AddTask;

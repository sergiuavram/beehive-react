import React from 'react';
import './task-edit-menu.style.scss';

const TaskEditMenu = ({ display }) => {

    return (
        <div className="task-edit-menu" style={{ display: display ? 'inline-block' : 'none' }}  >
            Task Edit Menu
        </div>
    );
};

export default TaskEditMenu;

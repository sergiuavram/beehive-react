import React, { useState } from 'react';
import './task.style.scss';

import PencilEdit from '../../assets/images/pencil50.png';
import TaskEditMenu from '../task-edit-menu/task-edit-menu.component';

const Task = () => {
    const [display, setDisplay] = useState(false);

    const handleDisplay = () => {
        setDisplay(!display);
    }

    return (
        <div className="task">
            <TaskEditMenu display={display} />
            <p>Task zx\ sa xsa sda sda sdsasdsa s sds </p>
            <img src={PencilEdit} alt="" onClick={handleDisplay} />
        </div>
    );
};

export default Task;

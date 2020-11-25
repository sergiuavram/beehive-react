import React from 'react';
import './hive-list.style.scss';

import Task from '../task/task.component';
import TaskAdd from '../task-add/task-add.component';
import Spacer from '../spacer/spacer.component';


const HiveList = () => {

    return (
        <div className="hive-list">
            <div className="hive-list-wrapper">
                <h1 className='title'> To Do:</h1>
                <Task />
                <Task />
                <Task />
                <TaskAdd />
                <Spacer height='10px' />
            </div>
        </div>
    );
};

export default HiveList;

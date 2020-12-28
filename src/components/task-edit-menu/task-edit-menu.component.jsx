import React, { useState } from 'react';
import './task-edit-menu.style.scss';

import { connect } from 'react-redux';
import { deleteTask } from '../../redux/current-hive/current-hive.action';

import DeleteButton from '../delete-button/delete-button.component';
import EditButton from '../edit-button/edit-button.component';

const TaskEditMenu = ({ display, taskId, listId, deleteTask, user }) => {
    const [displayEdit, setDisplayEdit] = useState('none');

    const handleEditTask = () => {
        console.log('edit')
    }

    const handleDisplayEdit = () => {
        displayEdit === 'none' ? setDisplayEdit('block') : setDisplayEdit('none');
    }

    const handleDeleteTask = () => {
        deleteTask(user, { taskId, listId })
    }

    return (
        <div className="task-edit-menu" style={{ display: display ? 'grid' : 'none' }}  >
            <EditButton
                displayEdit={displayEdit}
                handleDisplayEdit={handleDisplayEdit}
                handleClick={handleEditTask}
                placeholder='modify task...'
                style={{ height: '20px', margin: '5px' }}
            />
            <DeleteButton handleClick={handleDeleteTask} style={{ height: '20px', margin: '5px' }} />
        </div>
    );
};

const mapStateToProps = ({ user }) => ({
    user,
})

const mapDispatchToProps = (dispatch) => ({
    deleteTask: (user, data) => dispatch(deleteTask(user, data))
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskEditMenu);

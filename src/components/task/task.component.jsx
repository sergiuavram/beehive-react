import React, { useState } from 'react';
import './task.style.scss';

import { connect } from 'react-redux';
import { deleteTask, updateTask } from '../../redux/current-hive/current-hive.action';

// import PencilEdit from '../../assets/images/pencil50.png';
// import TaskEditMenu from '../task-edit-menu/task-edit-menu.component';
import DeleteButton from '../delete-button/delete-button.component';
import EditButton from '../edit-button/edit-button.component';

const Task = ({ task, taskId, listId, deleteTask, user, updateTask }) => {
    let taskReturn;
    const [displayMenu, setDisplay] = useState(false);
    const [displayEditInput, setDisplayEditInput] = useState(false);
    const [taskUpdated, setTaskEdited] = useState(task);

    // display on this component
    const handleDisplay = () => {
        setDisplay(displayMenu => !displayMenu);
    }

    // delete this task
    const handleDeleteTask = () => {
        deleteTask(user, { taskId, listId });
    }

    // display on edit button component
    const handleInputDisplay = () => {
        setDisplayEditInput(displayEditInput => !displayEditInput);
        // setDisplay(!displayMenu);
    }

    // keep track of changes for the task
    const handleTaskEdited = (e) => {
        setTaskEdited(e.target.value)
    }

    const handleUpdate = () => {
        updateTask(user, { taskId, listId, taskUpdated })
    }

    // create task component
    if (task) {
        taskReturn =
            <div className="task">

                <div className="task-edit-menu" style={{ display: displayMenu ? 'grid' : 'none' }}>
                    <EditButton
                        style={{ height: '20px', margin: '5px' }}
                        display={displayEditInput}
                        handleInputDisplay={handleInputDisplay}
                        handleDisplayMenu={handleDisplay}
                        handleTaskEdited={handleTaskEdited}
                        value={taskUpdated}
                        handleUpdate={handleUpdate}
                    />
                    <DeleteButton style={{ height: '20px', margin: '5px' }} handleClick={handleDeleteTask} />
                </div>

                <p>{task} </p>

                <div className="task-menu" onClick={handleDisplay}>
                    <div className="task-dot"></div>
                    <div className="task-dot"></div>
                    <div className="task-dot"></div>
                </div>

            </div>
        // return nothing if the list is empty
    } else {
        taskReturn = null
    }


    return taskReturn
};

const mapStateToProps = ({ user }) => ({
    user,
})

const mapDispatchToProps = (dispatch) => ({
    deleteTask: (user, data) => dispatch(deleteTask(user, data)),
    updateTask: (user, data) => dispatch(updateTask(user, data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Task);

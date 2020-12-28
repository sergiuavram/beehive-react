import React, { useState } from 'react';
import './hive-list.style.scss';

import { connect } from 'react-redux';
import { createNewTask, deleteList, updateList } from '../../redux/current-hive/current-hive.action';

import Task from '../task/task.component';
import TaskAdd from '../task-add/task-add.component';
import Spacer from '../spacer/spacer.component';
import DeleteButton from '../delete-button/delete-button.component';
import EditButton from '../edit-button/edit-button.component';


const HiveList = ({ listName, tasks, listId, createNewTask, deleteList, updateList, user }) => {
    const [displayNewTask, setDisplayNewTask] = useState('none');
    const [newTask, setNewTask] = useState('');
    const [displayError, setDisplayError] = useState('none');
    const [errMsg, setErrMsg] = useState('');
    const [displayEditInput, setDisplayEditInput] = useState(false);
    const [listUpdated, setListUpdated] = useState(listName);


    const handleDisplayAddTask = () => {
        displayNewTask ? setDisplayNewTask('') : setDisplayNewTask('none');
    }

    const handleAddButton = () => {
        setNewTask('');
        setDisplayNewTask('none');
        createNewTask(user, { newTask: newTask.trim(), lId: listId, listName })
    }

    const handleInputNewTask = (e) => {
        setNewTask(e.target.value);
        if (!e.target.value.trim()) {
            setDisplayError('');
            setErrMsg("Task can't be empty!");
        } else {
            setDisplayError('none');
        }
    }

    const handleDeleteList = () => {
        // console.log('delete list')
        deleteList(user, listId)
    }

    // display on edit button component
    const handleInputDisplay = () => {
        setDisplayEditInput(!displayEditInput);
    }

    const handleTaskEdited = (e) => {
        setListUpdated(e.target.value)
    }

    const handleUpdate = () => {
        updateList(user, { listUpdated, listId })
    }


    return (
        <div className="hive-list">
            <div className="hive-list-wrapper">
                <div className="list-name">
                    <h1 className='title'> {listName} </h1>
                    <div className="list-menu">
                        <EditButton
                            display={displayEditInput}
                            handleInputDisplay={handleInputDisplay}
                            handleUpdate={handleUpdate}
                            style={{ height: '20px', padding: '2px' }}
                            value={listUpdated}
                            handleTaskEdited={handleTaskEdited}
                        />
                        <DeleteButton style={{ height: '20px', padding: '2px' }} handleClick={handleDeleteList} />
                    </div>
                </div>
                {Object.values(tasks).map((value) => (
                    <Task
                        key={value.taskId}  // task.task ==> text of the task
                        task={value.task}
                        taskId={value.taskId}
                        listId={listId}
                    />
                ))}
                <TaskAdd handleDisplay={handleDisplayAddTask} />
                <div className="new-task" style={{ display: displayNewTask }}>
                    <input type='text' onChange={(e) => handleInputNewTask(e)} value={newTask} />
                    <div className='add-task' onClick={handleAddButton} >Add Task</div>
                    <div className='add-task-error' style={{ display: displayError }} >{errMsg}</div>
                </div>
                <Spacer height='10px' />
            </div>
        </div>
    );
};

const mapStateToProps = ({ user }) => ({
    user,
});

const mapDispatchToProps = (dispatch) => ({
    createNewTask: (user, data) => dispatch(createNewTask(user, data)),
    deleteList: (user, data) => dispatch(deleteList(user, data)),
    updateList: (user, data) => dispatch(updateList(user, data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HiveList);

import { currentHiveTypes } from './current-hive.types';
import axios from '../../axios/axiosDefaultHive';

export const getHive = (user, hiveName) => async dispatch => {
    const response = await axios({
        url: '/get-hive',
        method: 'POST',
        headers: { 'Authorization': `Bearer ${user}` },
        data: { hiveName }
    })

    // console.log(response.data)

    const hive = {};
    // {
    //     // convert list that I receive from database mysql to an object. model bellow
    //     // hive={
    //     //     list1:{
    //     //         name:'list1',
    //     //         tasks:{
    //     //             t1:{
    //     //                 TaskId:'1',
    //     //                 Task:'do something...',
    //     //                 Status:2, //for now is a number
    //     //                 ListId:2
    //     //             }
    //     //              t2:{...}
    //     //         }
    //     //     },
    //     //     repeat...
    //     // }
    // }
    response.data.forEach(({ listName, task, taskStatus, listId, taskId, hiveId }) => {
        if (!hive[`l${listId}`]) {
            hive[`l${listId}`] = { name: listName, hiveId, tasks: {}, listId };
        }
        hive[`l${listId}`].tasks[`t${taskId}`] = { taskId, task, taskStatus }
    })

    // console.log(hive)

    dispatch({
        type: currentHiveTypes.GET_HIVE,
        payload: hive
    })
}

export const clearHive = () => async dispatch => {
    dispatch({
        type: currentHiveTypes.CLEAR_HIVE,
    })
}


export const getHiveId = (user, hiveName) => async dispatch => {
    const response = await axios({
        url: '/hive-id',
        method: 'POST',
        headers: { 'Authorization': `Bearer ${user}` },
        data: { hiveName }
    })

    dispatch({
        type: currentHiveTypes.GET_ID,
        payload: response.data.hiveId
    })
}


export const createNewList = (user, data) => async dispatch => {
    // console.log(data)
    const response = await axios({
        url: '/create-new-list',
        method: 'POST',
        headers: { 'Authorization': `Bearer ${user}` },
        data: { data }
    })

    // console.log(response.data)

    dispatch({
        type: currentHiveTypes.CREATE_NEW_LIST,
        payload: response.data
    })
}

export const deleteList = (user, listId) => async dispatch => {
    const response = await axios({
        url: '/delete-list',
        method: 'POST',
        headers: { 'Authorization': `Bearer ${user}` },
        data: { listId }
    })

    if (response.data.message === 'deleted') {
        dispatch({
            type: currentHiveTypes.DELETE_LIST,
            payload: listId
        })
    }
}

export const updateList = (user, { listUpdated, listId }) => async dispatch => {
    const response = await axios({
        url: '/update-list',
        method: 'POST',
        headers: { 'Authorization': `Bearer ${user}` },
        data: { listUpdated, listId }
    })

    if (response.data === 'updated') {

    }
    dispatch({
        type: currentHiveTypes.UPDATE_LIST,
        payload: { listUpdated, listId }
    })
}

export const createNewTask = (user, data) => async dispatch => {
    // console.log(data)
    const response = await axios({
        url: '/create-new-task',
        method: 'POST',
        headers: { 'Authorization': `Bearer ${user}` },
        data: { data }
    })

    // console.log(response.data)

    dispatch({
        type: currentHiveTypes.CREATE_NEW_TASK,
        payload: response.data
    })
}

export const deleteTask = (user, { taskId, listId }) => async dispatch => {
    const response = await axios({
        url: '/delete-task',
        method: 'POST',
        headers: { 'Authorization': `Bearer ${user}` },
        data: { taskId }
    })

    console.log(response.data.message === 'deleted')

    // if (response.data.message === 'deteled') {
    dispatch({
        type: currentHiveTypes.DELETE_TASK,
        payload: { taskId, listId }
    });
    // };
}

export const updateTask = (user, { taskUpdated, taskId, listId }) => async dispatch => {
    const response = await axios({
        url: '/update-task',
        method: 'POST',
        headers: { 'Authorization': `Bearer ${user}` },
        data: { taskUpdated, taskId }
    })

    if (response.data.message === 'updated') {
        dispatch({
            type: currentHiveTypes.UPDATE_TASK,
            payload: { taskUpdated, taskId, listId }
        });
    };
}

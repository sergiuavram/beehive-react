import { currentHiveTypes } from './current-hive.types';

const hivesReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case currentHiveTypes.GET_HIVE:
            // console.log('curretnHive:', payload)
            return { ...state, data: payload }
        case currentHiveTypes.CLEAR_HIVE:
            return {};
        case currentHiveTypes.GET_ID:
            return { ...state, hiveId: payload };
        case currentHiveTypes.CREATE_NEW_LIST:
            const { name, hiveId, listId } = payload;
            const newState = { ...state, data: { ...state.data, [`l${listId}`]: { name, hiveId, listId, tasks: {} } } };
            return { ...newState };
        case currentHiveTypes.CREATE_NEW_TASK: {
            const { newTask, lId, taskId } = payload;
            return {
                ...state,
                data: {
                    ...state.data, [`l${lId}`]: {
                        ...state.data[`l${lId}`],
                        tasks: { ...state.data[`l${lId}`].tasks, [`t${taskId}`]: { taskId, task: newTask, listId: lId, taskStatus: 1 } }
                    }
                }
            };
        }
        case currentHiveTypes.DELETE_TASK: {
            const { listId, taskId } = payload;
            const newState = { ...state, data: { ...state.data, [`l${listId}`]: { ...state.data[`l${listId}`], tasks: { ...state.data[`l${listId}`].tasks } } } }
            delete newState.data[`l${listId}`].tasks[`t${taskId}`]

            return newState
        }
        case currentHiveTypes.DELETE_LIST: {
            const listId = payload
            const newState = { ...state, data: { ...state.data } };
            delete newState.data[`l${listId}`]

            return newState
        }
        case currentHiveTypes.UPDATE_TASK: {
            const { taskUpdated, taskId, listId } = payload;
            return {
                ...state,
                data: {
                    ...state.data, [`l${listId}`]: {
                        ...state.data[`l${listId}`],
                        tasks: {
                            ...state.data[`l${listId}`].tasks,
                            [`t${taskId}`]: { ...state.data[`l${listId}`].tasks[`t${taskId}`], task: taskUpdated }
                        }
                    }
                }
            }
            // return state
        }
        case currentHiveTypes.UPDATE_LIST: {
            const { listUpdated, listId } = payload;
            return {
                ...state,
                data: {
                    ...state.data, [`l${listId}`]: {
                        ...state.data[`l${listId}`], name: listUpdated
                    }
                }
            }
        }
        default:
            return state
    }
}

export default hivesReducer;
import { hivesTypes } from './hives.type';
import axios from '../../axios/axiosDefaultHive';

export const createHive = (hiveName, user, setErrorCreateHive, redirect) => async dispatch => {
    // console.log('create hive')
    const response = await axios({
        url: '/create',
        method: 'POST',
        headers: { 'Authorization': `Bearer ${user}` },
        data: { hiveName }
    });


    if (response.data.error) {
        setErrorCreateHive(response.data.error);
    } else {
        redirect();
        dispatch({
            type: hivesTypes.CREATE_HIVE,
            payload: { hiveName }
        });
    }
}

export const getHives = (user) => async dispatch => {
    const response = await axios({
        url: '/get-hives',
        method: 'POST',
        headers: { 'Authorization': `Bearer ${user}` },
    })

    dispatch({
        type: hivesTypes.GET_HIVES,
        payload: response.data
    })
}

export const deleteHive = (user, data) => async dispatch => {
    // console.log(data)
    const response = await axios({
        url: '/delete-hive',
        method: 'POST',
        headers: { 'Authorization': `Bearer ${user}` },
        data: { data }
    });

    if (response.data.message === 'deleted') {
        dispatch({
            type: hivesTypes.DELETE_HIVE,
            payload: data.hiveName
        })
    }
}


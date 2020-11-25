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

export const getCurrentHive = (user, hiveName) => async dispatch => {
    // console.log('hives action:', user);
    // console.log('hives action:', hiveName);
    const response = await axios({
        url: '/get-hive',
        method: 'POST',
        headers: { 'Authorization': `Bearer ${user}` },
        data: { hiveName }
    })

    // console.log(response)
}
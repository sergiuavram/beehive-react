import axios from '../../axios/axiosDefaultAuth';
import { userTypes } from './user.type';

export const signUp = (data) => async dispatch => {
    const response = await axios.post('/signup', data.user);
    console.log(response)
    if (response.status === 200) {
        data.reset();
        dispatch({
            type: userTypes.SET_CURRENT_USER,
            payload: response.data.token
        })
    }
}

export const login = (data) => async dispatch => {
    const response = await axios.post('/login', data.user);
    if (response.status === 200) {
        data.reset();
        dispatch({
            type: userTypes.SET_CURRENT_USER,
            payload: response.data.token
        })
    }
}


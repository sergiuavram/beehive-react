import axios from '../../axios/axiosDefaultAuth';
import { userTypes } from './user.type';

export const signUp = (data) => async dispatch => {
    const response = await axios.post('/signup', data.user);
    console.log(response)
    if (response.status === 200) {
        dispatch({
            type: userTypes.SET_CURRENT_USER,
            payload: response.data.token
        })
        data.reset();
    }
}

export const login = (data) => async dispatch => {
    const response = await axios.post('/login', data.user);
    if (response.status === 200) {
        dispatch({
            type: userTypes.SET_CURRENT_USER,
            payload: response.data.token
        })
        data.reset();
    }
}

export const checkLocalStorage = () => dispatch => {
    const loggedInUser = localStorage.getItem('user');
    if (!(loggedInUser === 'null'))
        dispatch({
            type: userTypes.SET_CURRENT_USER,
            payload: loggedInUser
        })
}

export const logout = () => async dispatch => {
    console.log('out 2')
    dispatch({
        type: userTypes.LOGOUT_USER
    })
}



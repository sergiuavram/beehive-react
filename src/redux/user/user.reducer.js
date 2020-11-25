import { userTypes } from './user.type';
const INITIAL_STATE = null;

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userTypes.SET_CURRENT_USER:
            return action.payload || null;
        // case userTypes.LOGOUT_USER:
        //     return action.payload || false;
        default:
            return state;
    }
}

export default userReducer;
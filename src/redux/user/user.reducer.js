import { userTypes } from './user.type';
// const INITIAL_STATE = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFhYSIsImlhdCI6MTYwNjQ2MjU4OX0.uajkqERivx3XOHhlcChQP0W0imvAIubbBUl0ukAAoEw'; // u10
// const INITIAL_STATE = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InFxcSIsImlhdCI6MTYwNjk5NTczOX0.fwmPaZ945O_q87uoE_73VcjKVzBtP3kfuCjScccX6SA'; // u61
const INITIAL_STATE = null;

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userTypes.SET_CURRENT_USER:
            localStorage.setItem('user', action.payload)
            return action.payload;
        case userTypes.LOGOUT_USER:
            return null;
        default:
            return state;
    }
}

export default userReducer;
import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import hivesReducer from './hives/hives.reducer';

export default combineReducers({
    user: userReducer,
    hives: hivesReducer,
});
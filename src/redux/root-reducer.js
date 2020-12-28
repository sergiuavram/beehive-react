import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import hivesReducer from './hives/hives.reducer';
import currentHiveReducer from './current-hive/current-hive.reducer'

export default combineReducers({
    user: userReducer,
    hives: hivesReducer,
    currentHive: currentHiveReducer
});
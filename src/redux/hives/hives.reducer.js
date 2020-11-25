import { hivesTypes } from './hives.type';

const hivesReducer = (state = { hives: [] }, action) => {
    const { type, payload } = action;
    switch (type) {
        case hivesTypes.CREATE_HIVE:
            // console.log(action)
            return { hives: [...state.hives, payload] }
        case hivesTypes.GET_HIVES:
            // something with map to update just what wee need
            return state
        case hivesTypes.GET_HIVE:
            // something with map to update just what wee need
            return state
        default:
            return state
    }
}

export default hivesReducer;
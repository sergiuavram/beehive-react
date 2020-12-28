import { hivesTypes } from './hives.type';

const hivesReducer = (state = { hives: [], activeHive: null }, action) => {
    const { type, payload } = action;
    switch (type) {
        case hivesTypes.CREATE_HIVE:
            // console.log(action)
            return { hives: [...state.hives, payload] }
        case hivesTypes.GET_HIVES:
            // something with map to update just what wee need
            return { ...state, hives: [...payload] };
        case hivesTypes.DELETE_HIVE:
            const newHives = state.hives.filter((hive) => {
                if (hive.Name !== payload) {
                    return hive
                } else {
                    return null
                }
            })
            return { ...state, hives: newHives }
        default:
            return state
    }
}

export default hivesReducer;
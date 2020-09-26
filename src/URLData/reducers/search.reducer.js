import { FETCH_DOM_DATA_SUCCESS } from "../actions";

export default function reducer(state = {}, action) {
    if (action.type === FETCH_DOM_DATA_SUCCESS) {
        return action.payload;
    }

    return state;
}

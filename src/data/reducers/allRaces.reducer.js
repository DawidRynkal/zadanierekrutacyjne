import {
    RACES_GET,
    RACES_GET_REQUEST,
    RACES_GET_SUCCESS,
    RACES_GET_FAILURE,
    LOADING_STATES,
} from '../../data/constans';


const initialState = {
    loadingState: {},
    races: {},
    activeRaces: [],
}

function races(state = initialState, action) {
    const newLoadingState = { ...state.loadingState};
    switch(action.type) {
        case RACES_GET_REQUEST: 
        return {
            ...state,
            loadingState: {
                ...state.loadingState,
                [action.type]: LOADING_STATES.LOADING,
            }
        }
        case RACES_GET_SUCCESS: 
        delete newLoadingState.RACES_GET_REQUEST;
        return {
            ...state,
            races: action.payload,
            loadingState: newLoadingState,
        }
        case RACES_GET_FAILURE: 
        delete newLoadingState.RACES_GET_REQUEST;
        return {
            ...state,
            races: {},
            loadingState: newLoadingState,
        }

        default: 
        return state;
    }
}

export default races;
import {
    ALL_PARTICIPIANT_GET_REQUEST,
    ALL_PARTICIPIANT_GET_SUCCESS,
    ALL_PARTICIPIANT_GET_FAILURE,
    LOADING_STATES,
} from '../../data/constans';


const initialState = {
    loadingState: {},
    allParti: [],
}

function allParti(state = initialState, action) {
    const newLoadingState = { ...state.loadingState};
    switch(action.type) {
        case ALL_PARTICIPIANT_GET_REQUEST: 
        return {
            ...state,
            loadingState: {
                ...state.loadingState,
                [action.type]: LOADING_STATES.LOADING,
            }
        }
        case ALL_PARTICIPIANT_GET_SUCCESS: 
        delete newLoadingState.ALL_PARTICIPIANT_GET_REQUEST;
        return {
            ...state,
            allParti: action.payload,
            loadingState: newLoadingState,
        }
        case ALL_PARTICIPIANT_GET_FAILURE: 
        delete newLoadingState.ALL_PARTICIPIANT_GET_REQUEST;
        return {
            ...state,
            allParti: {},
            loadingState: newLoadingState,
        }

        default: 
        return state;
    }
}

export default allParti;
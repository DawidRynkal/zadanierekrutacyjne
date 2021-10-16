import {
    PARTICIPIANT_GET_REQUEST,
    PARTICIPIANT_GET_SUCCESS,
    PARTICIPIANT_GET_FAILURE,
    LOADING_STATES,
} from '../../data/constans';


const initialState = {
    loadingState: {},
    participiant: [],
}

function participiant(state = initialState, action) {
    const newLoadingState = { ...state.loadingState};
    switch(action.type) {
        case PARTICIPIANT_GET_REQUEST: 
        return {
            ...state,
            loadingState: {
                ...state.loadingState,
                [action.type]: LOADING_STATES.LOADING,
            }
        }
        case PARTICIPIANT_GET_SUCCESS: 
        delete newLoadingState.PARTICIPIANT_GET_REQUEST;
        return {
            ...state,
            participiant: action.payload,
            loadingState: newLoadingState,
        }
        case PARTICIPIANT_GET_FAILURE: 
        delete newLoadingState.PARTICIPIANT_GET_REQUEST;
        return {
            ...state,
            participiant: {},
            loadingState: newLoadingState,
        }

        default: 
        return state;
    }
}

export default participiant;
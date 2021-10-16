import {
    SINGLE_RACES_GET_REQUEST,
    SINGLE_RACES_GET_SUCCESS,
    SINGLE_RACES_GET_FAILURE,
    PARTICIPIANT_GET_REQUEST,
    PARTICIPIANT_GET_SUCCESS,
     PARTICIPIANT_GET_FAILURE,
    LOADING_STATES,
} from '../../data/constans';


const initialState = {
    loadingState: {},
    singleRace: [],
    //parti: [],
}

function singleRace(state = initialState, action) {
    const newLoadingState = { ...state.loadingState};
    switch(action.type) {
        case SINGLE_RACES_GET_REQUEST: 
        return {
            ...state,
            loadingState: {
                ...state.loadingState,
                [action.type]: LOADING_STATES.LOADING,
            }
        }
        case SINGLE_RACES_GET_SUCCESS: 
        delete newLoadingState.SINGLE_RACES_GET_REQUEST;
        return {
            ...state,
            singleRace: action.payload,
            loadingState: newLoadingState,
        }
        case SINGLE_RACES_GET_FAILURE: 
        delete newLoadingState.SINGLE_RACES_GET_REQUEST;
        return {
            ...state,
            singleRace: {},
            loadingState: newLoadingState,
        }
        // case PARTICIPIANT_GET_REQUEST: 
        // return {
        //     ...state,
        //     loadingState: {
        //         ...state.loadingState,
        //         [action.type]: LOADING_STATES.LOADING,
        //     }
        // }
        // case PARTICIPIANT_GET_SUCCESS: 
        // delete newLoadingState.PARTICIPIANT_GET_REQUEST;
        // return {
        //     ...state,
        //     parti: action.payload,
        //     loadingState: newLoadingState,
        // }
        // case PARTICIPIANT_GET_FAILURE: 
        // delete newLoadingState.PARTICIPIANT_GET_REQUEST;
        // return {
        //     ...state,
        //     parti: {},
        //     loadingState: newLoadingState,
        // }


        default: 
        return state;
    }
}

export default singleRace;
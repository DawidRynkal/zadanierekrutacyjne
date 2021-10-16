import {
    SINGLE_RACES_GET_REQUEST,
    SINGLE_RACES_GET_SUCCESS,
    SINGLE_RACES_GET_FAILURE,
    SET_FIRST_PLACE,
    SET_SECOND_PLACE,
    SET_THIRD_PLACE,
    LOADING_STATES,
} from '../../data/constans';


const initialState = {
    loadingState: {},
    singleRace: [],
    firstPlace: undefined,
    secondPlace: undefined,
    thirdPlace: undefined,
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
        case SET_FIRST_PLACE:
        return {
            ...state,
            firstPlace: action.payload,
        };
        case SET_SECOND_PLACE:
        return {
            ...state,
            secondPlace: action.payload,
        };
        case SET_THIRD_PLACE:
        return {
            ...state,
            thirdPlace: action.payload,
        };
        default: 
        return state;
    }
}

export default singleRace;
import {
    SINGLE_RACES_GET_REQUEST,
    SINGLE_RACES_GET_SUCCESS,
    SINGLE_RACES_GET_FAILURE,
} from '../constans';
import API from '../../data/fetch'

export const fetchSingleRace = ( id ) => async(dispatch) => {
    dispatch({
        type: SINGLE_RACES_GET_REQUEST
    })

    try {
        const response = await API.singleRace.fetchSingleRace({ id });
        const data = await response.json();

        dispatch({
            type: SINGLE_RACES_GET_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: SINGLE_RACES_GET_FAILURE,
        })
    }

    
}
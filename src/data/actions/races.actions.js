import {
    RACES_GET_REQUEST,
    RACES_GET_SUCCESS,
    RACES_GET_FAILURE,
} from '../constans';
import API from '../../data/fetch'

export const fetchRaces = () => async(dispatch) => {
    dispatch({
        type: RACES_GET_REQUEST
    })

    try {
        const response = await API.races.fetchRaces();
        const data = await response.json();

        dispatch({
            type: RACES_GET_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: RACES_GET_FAILURE,
        })
    }

    
}
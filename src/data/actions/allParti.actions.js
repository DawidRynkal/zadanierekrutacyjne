import {
    ALL_PARTICIPIANT_GET_REQUEST,
    ALL_PARTICIPIANT_GET_SUCCESS,
    ALL_PARTICIPIANT_GET_FAILURE,
} from '../constans';
import API from '../../data/fetch'

export const fetchAllParti = () => async(dispatch) => {
    dispatch({
        type: ALL_PARTICIPIANT_GET_REQUEST
    })

    try {
        const response = await API.allParti.fetchAllParti();
        const data = await response.json();

        dispatch({
            type: ALL_PARTICIPIANT_GET_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ALL_PARTICIPIANT_GET_FAILURE,
        })
    }

    
}
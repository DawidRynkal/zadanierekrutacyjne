import {
    PARTICIPIANT_GET_REQUEST,
    PARTICIPIANT_GET_SUCCESS,
    PARTICIPIANT_GET_FAILURE,
} from '../constans';
import API from '../../data/fetch'

export const fetchParticipiant = ( id ) => async(dispatch) => {
    dispatch({
        type: PARTICIPIANT_GET_REQUEST
    })

    try {
        const response = await API.participiant.fetchParticipiant({ id });
        const data = await response.json();

        dispatch({
            type: PARTICIPIANT_GET_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: PARTICIPIANT_GET_FAILURE,
        })
    }

    
}
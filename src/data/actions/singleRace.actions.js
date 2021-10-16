import {
    SINGLE_RACES_GET_REQUEST,
    SINGLE_RACES_GET_SUCCESS,
    SINGLE_RACES_GET_FAILURE,
    SET_FIRST_PLACE,
    SET_SECOND_PLACE,
    SET_THIRD_PLACE,
    SET_BET_AMOUNT,
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
};

export const setFirstPlace = (id) => async (dispatch) => {
    dispatch({
      type: SET_FIRST_PLACE,
      payload: id,
    });
  };
  
  export const setSecondPlace = (id) => async (dispatch) => {
    dispatch({
      type: SET_SECOND_PLACE,
      payload: id,
    });
  };

  export const setThirdPlace = (id) => async (dispatch) => {
    dispatch({
      type: SET_THIRD_PLACE,
      payload: id,
    });
  };

  export const setBetAmount = (id) => {
      return {
          type: SET_BET_AMOUNT,
          payload: id
      }
  }

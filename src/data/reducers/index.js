import { combineReducers } from 'redux';
import races from './allRaces.reducer'
import singleRace from './singleRace.reducer';

const rootReducer = combineReducers({
    races,
    singleRace,
})

export default rootReducer;
import { combineReducers } from 'redux';
import races from './allRaces.reducer'
import singleRace from './singleRace.reducer';
import participiant from './participiant.reducer';
import allParti from './allParti.reducer';

const rootReducer = combineReducers({
    races,
    singleRace,
    participiant,
    allParti
})

export default rootReducer;
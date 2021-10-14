import { combineReducers } from 'redux';
import races from './allRaces.reducer'

const rootReducer = combineReducers({
    races,
})

export default rootReducer;
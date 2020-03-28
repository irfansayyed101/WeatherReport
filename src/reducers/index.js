import { combineReducers } from 'redux';
import currentWeather from './currentWeather';

const rootReducer = combineReducers({
    currentWeather
});

export default rootReducer;
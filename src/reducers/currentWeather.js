import * as weatherAction from '../actions/weatherAction';
const initialState = {
    weatherdata: [],
    weatherchartdata:[],
    selectedweathercard:0,
    tempraturetype:'F',
    startIndex:0,
    endIndex:2
};

const currentWeather = (state = initialState, action ) => {
    switch(action.type){
        case weatherAction.WEATHER_LIST:
            return {
                ...state,
                weatherdata : action.payload
            };
        case weatherAction.WEATHER_CHART_LIST:
            return {
                ...state,
                weatherchartdata : action.payload
            };
        case weatherAction.WEATHER_CARD_ID:
            return {
                ...state,
                selectedweathercard : action.payload
            };
        case weatherAction.WEATHER_TEMPERATURE_TYPE:
            return {
                ...state,
                tempraturetype : action.payload
            };
            
        case weatherAction.NEXT_CARD:
            return {
                ...state,
                startIndex : state.startIndex + 1,
                endIndex : state.endIndex + 1
            };
        case weatherAction.PREVIOUS_CARD:
            return {
                ...state,
                startIndex : state.startIndex - 1,
                endIndex : state.endIndex - 1
            };
         default:
            return state;   
    }
}

export default currentWeather;
import * as reducer from '../reducers/currentWeather';
import * as weatherAction from '../actions/weatherAction';
import allActions from '../actions';
import configureStore from 'redux-mock-store';

describe('CurrentWeatherReducer ' , () => {
    const mockStore = configureStore();
    const reduxStore = mockStore();
   
    beforeEach(() => {
        reduxStore.clearActions();
      });

    const initialState = {
        weatherdata: [],
        weatherchartdata:[],
        selectedweathercard:0,
        tempraturetype:'F',
        startIndex:0,
        endIndex:2
    };
    const jsonList = [{
                "dt":1585407600,
                "main":{
                    "temp":14.34,
                    "feels_like":12.13,
                    "temp_min":12.6,
                    "temp_max":14.34,
                    "pressure":1014,
                    "sea_level":1014,
                    "grnd_level":953,
                    "humidity":53,
                    "temp_kf":1.74
                },
                "dt_txt":"2020-03-28 15:00:00"
            }];
 
    it('it should return initial state', ()=> {
        expect(reducer.currentWeather(initialState,{})).toEqual(initialState);
    });

    
    it('should dispatch savedata (WEATHER_LIST) action', () => {
            const expectedActions = [
                {
                    payload: jsonList,
                    type: weatherAction.WEATHER_LIST,
                },
            ];

            reduxStore.dispatch(allActions.weatherAction.saveData(jsonList));
            expect(reduxStore.getActions()).toEqual(expectedActions);
    });

    it('should dispatch next card (NEXT_CARD) action', () => {

            const expectedActions = [
                {
                    payload: 3,
                    type: weatherAction.NEXT_CARD,
                },
            ];

            reduxStore.dispatch(allActions.weatherAction.nextCard(3));
            expect(reduxStore.getActions()).toEqual(expectedActions);
    });

    it('should dispatch Previous card (PREVIOUS_CARD) action', () => {
        
            const expectedActions = [
                {
                    payload: 1,
                    type: weatherAction.PREVIOUS_CARD,
                },
            ];

            reduxStore.dispatch(allActions.weatherAction.previousCard(1));
            expect(reduxStore.getActions()).toEqual(expectedActions);
    });
    
})
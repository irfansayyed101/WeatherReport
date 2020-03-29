import allActions from '../actions';
import * as weatherAction from '../actions/weatherAction';

describe('actions', () => {
    it('should create an action save data ', () => {
      const jsonList = [
                            {
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
                        }
                    ]
      const expectedAction = {
        type: weatherAction.WEATHER_LIST,
        payload : jsonList
      }
      expect(allActions.weatherAction.saveData(jsonList)).toEqual(expectedAction)
    });

    it('should create an action update temperature type', () => {
        const expectedAction = {
            type: weatherAction.WEATHER_TEMPERATURE_TYPE,
            payload : 'C'
          }
          expect(allActions.weatherAction.currentTempratureType('C')).toEqual(expectedAction)
    });

    it('should create an action to show selected weather card', () => {
        const expectedAction = {
            type: weatherAction.WEATHER_CARD_ID,
            payload : 1
          }
          expect(allActions.weatherAction.selectedWeathercard(1)).toEqual(expectedAction)
    });

    it('should create an action to show next weather card', () => {
        const expectedAction = {
            type: weatherAction.NEXT_CARD,
            payload : 3
          }
          expect(allActions.weatherAction.nextCard(3)).toEqual(expectedAction)
    });
  })
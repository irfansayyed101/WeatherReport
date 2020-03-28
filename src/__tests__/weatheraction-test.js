import allActions from '../actions';
import * as weatherAction from '../actions/weatherAction';

describe('actions', () => {
    it('should create an action to add a todo', () => {
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
    })
  })
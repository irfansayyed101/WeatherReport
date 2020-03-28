    /* Action for saving the weatherlist data  */
const saveData = (weatherObj) => {
    return {
        type : 'WEATHER_LIST',
        payload : weatherObj
    }
  }
    /* Action for saving the weatherchart data  */
  const saveChartData = (weatherObj) => {
    return {
        type : 'WEATHER_CHART_LIST',
        payload : weatherObj
    }
  }

    /* Action for displaying the selected card ( day ) in bar chart  */
  const selectedWeathercard = (current) => {
      return{
          type:'WEATHER_CARD_ID',
          payload:current
      }
  }

        /* Action for showing the temperature is it Celcius or Fahrenheit  */
  const currentTempratureType = (type) =>{
      return {
          type : "WEATHER_TEMPERATURE_TYPE",
          payload:type
      }
  }

  const nextCard = (type) => {
      return {
          type : 'NEXT_CARD',
          payload: type
      }
  }

  const previousCard = (type) => {
      return {
          type : 'PREVIOUS_CARD',
          payload : type
      }
  }
  export default {
    saveData,
    currentTempratureType,
    saveChartData,
    selectedWeathercard,
    nextCard,
    previousCard
  }
import React, { useState,useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { Ring } from "react-awesome-spinners";
import allActions from '../actions';
import history from '../common/history';

const Loading = () => {
    const [loading, setLoading] = useState(true);
    const [weather, setWeather] = useState([]);
    const APPID = '75f972b80e26f14fe6c920aa6a85ad57';
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=${APPID}&cnt=40&units=metric`;

    const dispatch = useDispatch();
    
  const constructArr = (arr) => {
    let weatherListArr = [];
    arr.reduce(function (accumulator, obj) 
    {
            let dtArr = obj.dt_txt.split(' ');
            let accArr = accumulator.split(' ');
            if(dtArr[0] === accArr[0] || dtArr[1] === '00:00:00'){
                let arrLength = weatherListArr.length === 0 ? 0 : 1;
                if(arrLength === 0){
                    obj.Average = obj.main.temp;
                    weatherListArr.push(obj);
                } else {
                    let obj1 = weatherListArr[weatherListArr.length-1];
                    obj1.Average = obj1.Average < obj.main.temp ? obj.main.temp : obj1.Average;
                }
            } else{
                obj.Average = obj.main.temp;
                weatherListArr.push(obj);
                return accumulator = obj.dt_txt;
            }
         return accumulator; 
    }, arr[0].dt_txt); 
    return weatherListArr;
  }

  const constructWeatherchart = (arr) =>{
    let weatherListArr = [];
    arr.reduce(function (accumulator, obj) 
    {
            let dtArr = obj.dt_txt.split(' ');
            let accArr = accumulator.split(' ');
            if(dtArr[0] === accArr[0] || dtArr[1] === '00:00:00'){
                let arrNew = weatherListArr.length == 0 ? weatherListArr.push([]) : weatherListArr[weatherListArr.length-1];
                weatherListArr[weatherListArr.length-1].push(obj);
            } else{
                weatherListArr.push([]);
                weatherListArr[weatherListArr.length-1].push(obj);
                return accumulator = obj.dt_txt;
            }
         return accumulator; 
    }, arr[0].dt_txt);
    return weatherListArr;
  }

  /* Function to fetch the data */
  async function fetchUrl() {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setWeather(json.list);
      let finalArr = constructArr(json.list);
      dispatch(allActions.weatherAction.saveData(finalArr));
      let weatherchartArr = constructWeatherchart(json.list);
      dispatch(allActions.weatherAction.saveChartData(weatherchartArr));
      setLoading(false);
      history.push('/Weather');
    } catch(error){
      console.log('Error');
    }
  }

  useEffect(() => {
    fetchUrl()
    }, []);

    return (
        loading && <Ring />
    );
}

export default Loading;
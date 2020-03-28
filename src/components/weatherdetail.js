
import React from 'react';
import classes from "../components/css/weatherdetail.css";

const CtoF = tempC => (tempC * 9/5) + 32; 
const convertTemperature = (value,tempType)=> {
    if(tempType === 'F'){
        return CtoF(value);
    } else {
        return value;
    }
}
const WeatherDetail = (props) => {
    const tempType = props.tempType === 'C' ? 'ºc' : 'ºf';
    const dtConvert = (dt) => {
		var myDate = new Date(dt);
        var toDt = myDate.toDateString();
        return toDt; 
	};
return(	
    <div className={classes.App}  id={props.indexValue}>
        <div className={classes.forecastWrapper}>
            <div className='day'>
            <span>Temp:{parseFloat(convertTemperature(props.value.Average,props.tempType)).toFixed(2) + tempType}</span><br></br>
            <span>Date: {String(dtConvert(props.value.dt_txt))}</span><br></br>
            <span>Humidity: {String(props.value.main.humidity) + '%'}</span>
            </div>
        </div>
    </div>
    );
}

export default WeatherDetail;
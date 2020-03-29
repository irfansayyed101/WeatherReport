import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import {
  XYPlot,
  XAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  LabelSeries
} from 'react-vis';

const greenData = [{x: '', y: 10}, {x: '', y: 5}, {x: '', y: 15}];
let blueData = [];
const labelData = greenData.map((d, idx) => ({
  x: d.x,
  y: 0
}));

const CtoF = tempC => (tempC * 9/5) + 32; 
const convertTemperature = (value,tempType)=> {
    if(tempType === 'F'){
        return CtoF(value);
    } else {
        return value;
    }
}

const constructBarchratdata = (arr,current,type) => {
  
    blueData = [];
    arr[current] && arr[current].map((item,index) => {
        let obj = {};
        let val = item.main.temp;
        obj.x = parseFloat(convertTemperature(val,type)).toFixed(2) + ' ' + (type === 'C' ? 'ºc' : 'ºf');
        obj.y = parseFloat(convertTemperature(val,type)).toFixed(2);
        blueData.push(obj);
    });
}
const Weatherchart = (props)  => {
  const {useCanvas} = useState(false);
  const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
  const currentWeather = useSelector(state => state.currentWeather);
  const barchartarr = constructBarchratdata(currentWeather.weatherchartdata, 
                                            currentWeather.selectedweathercard, currentWeather.tempraturetype);
  return (
      <div>
        <XYPlot xType="ordinal" width={500} height={290} xDistance={120}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis style={{
              text: {stroke: 'none', fill: '#FFFFFF',fontSize:12}
            }}/>
          <BarSeries data={blueData} />
          <LabelSeries data={labelData} getLabel={d => d.x} />
        </XYPlot>
      </div>
    );
}

export default Weatherchart;
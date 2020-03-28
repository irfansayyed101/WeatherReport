import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import classes from "../components/css/weatherdetail.css";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import ContainedButtons from '../components/containedbuttons';
import Weatherchart from '../components/weatherchart';
import WeatherDetail from '../components/weatherdetail';
import TempratureType from '../components/tempraturetype';
import allActions from '../actions';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      margin:'7px'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      cursor: 'pointer',
    },
  }));

const Weather = (props) => {
 const dispatch = useDispatch();
 const classes = useStyles();
 const currentWeather = useSelector(state => state.currentWeather);
 const startIndex = useSelector(state => state.currentWeather.startIndex);
 const endIndex = useSelector(state => state.currentWeather.endIndex);
 const tempType = currentWeather.tempraturetype;
 const getWeatherchart = (key) => {
    dispatch(allActions.weatherAction.selectedWeathercard(key));
 }
    return (
        <div className={classes.root}>
          <Grid container spacing={1}>
              <Grid item xs={12}>
                  <TempratureType/> 
              </Grid>
              <Grid item xs={12}>
                <ContainedButtons/>
              </Grid>
                
                {
                    currentWeather.weatherdata.map((obj, index) => {
                    if(index >= startIndex && index <= endIndex)
                      {
                        return <Grid item xs={4} key={index} onClick={(key)=>getWeatherchart(index)}>
                            <Paper className={classes.paper} elevation={3} >
                              <WeatherDetail key={index} indexValue={index} value={obj} tempType={tempType}/>
                            </Paper>
                          </Grid>
                        }
                      }
                    )
                  }

              <Grid item xs={12}>
                <Weatherchart/>
              </Grid>
          </Grid>
        </div>
      );
}

export default Weather;
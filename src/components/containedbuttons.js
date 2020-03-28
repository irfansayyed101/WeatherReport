import React from 'react';
import Button from '@material-ui/core/Button';

import {useSelector, useDispatch} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import allActions from '../actions';

const useStylesButton = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const ContainedButtons = () => {
  const classes = useStylesButton();
  const dispatch = useDispatch();
  const startIndex = useSelector(state => state.currentWeather.startIndex);
  const endIndex = useSelector(state => state.currentWeather.endIndex);

  const previous = () => {
    dispatch(allActions.weatherAction.previousCard(startIndex - 1));
    dispatch(allActions.weatherAction.selectedWeathercard(startIndex -1 ));
  }
  const next = () => {
    dispatch(allActions.weatherAction.nextCard(endIndex + 1));
    dispatch(allActions.weatherAction.selectedWeathercard(startIndex + 1));
  }
  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={previous} disabled={startIndex === 0}>
        Previous
      </Button>
      <Button variant="contained" color="primary" onClick={next} disabled={endIndex === 5}>
        Next
    </Button>
    </div>
  );
}

export default ContainedButtons;
import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {useDispatch} from 'react-redux';
import allActions from '../actions';

const TemperatureTypeRadioButtonsGroup = ()=> {
  const [value, setValue] = React.useState('C');
  const dispatch = useDispatch();
  const handleChange = event => {
    dispatch(allActions.weatherAction.currentTempratureType(event.target.value));
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup row aria-label="temptype" name="temptype1" value={value} onChange={handleChange}>
        <FormControlLabel value="C" control={<Radio />} label="Celcius" />
        <FormControlLabel value="F" control={<Radio />} label="Fahrenheit" />
      </RadioGroup>
    </FormControl>
  );
}

export default TemperatureTypeRadioButtonsGroup;
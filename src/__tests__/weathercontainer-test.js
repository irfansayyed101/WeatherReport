import React from 'react';
import WeatherContainer from '../container/WeatherContainer';
import { mount,shallow } from 'enzyme';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import rootReducer from '../reducers';

describe('<WeatherContainer/> ', () => {
    it('renders 1 WeatherContainer components', () => {
        const store = createStore(
            rootReducer,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
          )
        const wrapper = shallow(
            <Provider store={store}>
                <WeatherContainer />
            </Provider>
        );
         expect(wrapper).toHaveLength(1);
    });
});
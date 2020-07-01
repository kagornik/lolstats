import React from 'react';
import Navigator from './components/navigator';
import {createStore, combineReducers, compose} from 'redux';
import {Provider} from 'react-redux';
import champions from './models/champions/champions';
import rotations from './models/rotation/rotations';
import ranks from './models/rank/ranks';
import ranksTFT from './models/rankTFT/ranksTFT';

const rootReducer = combineReducers({champions, rotations, ranks, ranksTFT});

const store = createStore(
  rootReducer,
  compose(window.devToolsExtension ? window.devToolsExtension() : (f) => f),
);

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;

import {createStore} from 'redux';

import reducers from '../reducers';
import middleware from '../middleware';

function initialState() {
  return {cards: []};
}

const store = createStore(reducers, initialState(), middleware);

export default store;

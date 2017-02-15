import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import KanbanBoardContainer from './KanbanBoardContainer.jsx';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
  <KanbanBoardContainer/>
</Provider>, document.getElementById('app'));

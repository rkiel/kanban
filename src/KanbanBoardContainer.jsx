import React, {Component, PropTypes} from 'react';
import 'whatwg-fetch';
import update from 'immutability-helper';

import KanbanBoard from './KanbanBoard.jsx';

class KanbanBoardContainer extends Component {

  render() {
    return (<KanbanBoard/>);
  }
}

KanbanBoardContainer.propTypes = {};

export default KanbanBoardContainer;

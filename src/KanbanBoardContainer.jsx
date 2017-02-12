import React, {Component, PropTypes} from 'react';
import 'whatwg-fetch';

import KanbanBoard from './KanbanBoard.jsx';

const API_URL = 'http://kanbanapi.pro-react.com';
const API_CARDS = API_URL + '/cards';

const API_HEADERS = {
  'Content-Type': 'application/json',
  'Authorization': 'Cause I Said So'
};

class KanbanBoardContainer extends Component {
  constructor() {
    super();
    this.state = {
      cards: []
    };
  }
  componentDidMount() {
    fetch(API_CARDS, {headers: API_HEADERS}).then(response => response.json()).then(json => this.setState({cards: json})).catch(error => console.log('error fetching and parsing data', error))
  }
  addTask(cardId, taskName) {
    console.log("addTask");
  }

  deleteTask(cardId, taskId, taskIndex) {
    console.log("deleteTask");
  }

  toggleTask(cardId, taskId, taskIndex) {
    console.log("toggleTask");
  }

  render() {
    return (<KanbanBoard cards={this.state.cards} taskCallbacks={{
      toggle: this.toggleTask.bind(this),
      delete: this.deleteTask.bind(this),
      add: this.addTask.bind(this)
    }}/>);
  }
}

KanbanBoardContainer.propTypes = {};

export default KanbanBoardContainer;

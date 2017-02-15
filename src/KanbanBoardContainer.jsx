import React, {Component, PropTypes} from 'react';
import 'whatwg-fetch';
import update from 'immutability-helper';

import KanbanBoard from './KanbanBoard.jsx';

const API_URL = 'http://kanbanapi.pro-react.com';
const API_CARDS = API_URL + '/cards';

const API_HEADERS = {
  'Content-Type': 'application/json',
  'Authorization': 'Cause I Said So'
};

class KanbanBoardContainer extends Component {

  deleteTask(cardId, taskId, taskIndex) {
    const cardIndex = this.state.cards.findIndex(card => card.id === cardId);
    const nextState = update(this.state.cards, {
      [cardIndex]: {
        tasks: {
          $splice: [
            [taskIndex, 1]
          ]
        }
      }
    });
    this.setState({cards: nextState});
    fetch(`${API_CARDS}/${cardId}/tasks/${taskId}`, {
      method: 'delete',
      headers: API_HEADERS
    });
  }

  toggleTask(cardId, taskId, taskIndex) {
    const cardIndex = this.state.cards.findIndex(card => card.id === cardId);
    let newDoneValue;
    const nextState = update(this.state.cards, {
      [cardIndex]: {
        tasks: {
          [taskIndex]: {
            done: {
              $apply: done => {
                newDoneValue = !done;
                return newDoneValue;
              }
            }
          }
        }
      }
    });
    this.setState({cards: nextState});
    fetch(`${API_CARDS}/${cardId}/tasks/${taskId}`, {
      method: 'put',
      headers: API_HEADERS,
      body: JSON.stringify({done: newDoneValue})
    });
  }

  render() {
    return (<KanbanBoard/>);
  }
}

KanbanBoardContainer.propTypes = {};

export default KanbanBoardContainer;

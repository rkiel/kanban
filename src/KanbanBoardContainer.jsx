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
    fetch(API_CARDS, {headers: API_HEADERS}).then(response => {
      console.log(response);
      return response.json();
    }).then(json => this.setState({cards: json}))
  }
  render() {
    return (<KanbanBoard cards={this.state.cards}/>);
  }
}

KanbanBoardContainer.propTypes = {};

export default KanbanBoardContainer;

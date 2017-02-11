import React, {Component} from 'react';

import List from './List.jsx';

class KanbanBoard extends Component {
  render() {
    const todos = this.props.cards.filter(card => card.status === 'todo');
    const inProgress = this.props.cards.filter(card => card.status === 'in-progress');
    const dones = this.props.cards.filter(card => card.status === 'done');

    return (
      <div className="app">
        <List id="todo" title="To Do" cards={todos}/>
        <List id="in-progress" title="In Progress" cards={inProgress}/>
        <List id="done" title="Done" cards={dones}/>
      </div>
    )
  }
}

export default KanbanBoard;

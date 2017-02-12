import React, {Component, PropTypes} from 'react';

import List from './List.jsx';

class KanbanBoard extends Component {
  render() {
    const todos = this.props.cards.filter(card => card.status === 'todo');
    const inProgress = this.props.cards.filter(card => card.status === 'in-progress');
    const dones = this.props.cards.filter(card => card.status === 'done');

    return (
      <div className="app">
        <List id="todo" title="To Do" cards={todos} taskCallbacks={this.props.taskCallbacks}/>
        <List id="in-progress" title="In Progress" cards={inProgress} taskCallbacks={this.props.taskCallbacks}/>
        <List id="done" title="Done" cards={dones} taskCallbacks={this.props.taskCallbacks}/>
      </div>
    )
  }
}

KanbanBoard.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  taskCallbacks: PropTypes.object.isRequired
};

export default KanbanBoard;

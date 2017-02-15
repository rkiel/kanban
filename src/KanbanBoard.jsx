import React, {Component, PropTypes} from 'react';

import {connect} from 'react-redux';

import List from './List.jsx';

import {loadAndAddCards} from './actions';

class KanbanBoard extends Component {
  componentDidMount() {
    this.props.loadAndAddCards();
  }
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

KanbanBoard.propTypes = {};

function mapStateToProps(state) {
  return {cards: state.cards};
}

function mapDispatchToProps(dispatch) {
  return {
    loadAndAddCards: () => dispatch(loadAndAddCards())
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(KanbanBoard);

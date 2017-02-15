import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {saveAndAddTask, deleteAndRemoveTask, toggleAndUpdateTask} from './actions';

class CheckList extends Component {
  checkInputKeyPress(evt) {
    if (evt.key === 'Enter') {
      this.props.addTask(this.props.cardId, evt.target.value);
      evt.target.value = '';
    }
  }
  render() {
    const tasks = this.props.tasks.map((task, taskIndex) => {
      return (
        <li key={task.id} className="checklist__list">
          <input type="checkbox" defaultChecked={task.done} onChange={this.props.toggleTask.bind(null, this.props.cardId, task.id, task.done, taskIndex)}/> {task.name}{' '}
          <a href="#" className="checklist__task--remove" onClick={this.props.deleteTask.bind(null, this.props.cardId, task.id, taskIndex)}/>
        </li>
      );
    });
    return (
      <div className="checklist">
        <ul>{tasks}</ul>
        <input type="text" className="checklist--add-task" placeholder="Type then hit enter to add a task" onKeyPress={this.checkInputKeyPress.bind(this)}/>
      </div>
    );
  }
}

CheckList.propTypes = {
  cardId: PropTypes.number.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    addTask: (cardId, value) => dispatch(saveAndAddTask(cardId, value)),
    deleteTask: (cardId, taskId, taskIndex) => dispatch(deleteAndRemoveTask(cardId, taskId, taskIndex)),
    toggleTask: (cardId, taskId, taskDone, taskIndex) => dispatch(toggleAndUpdateTask(cardId, taskId, !taskDone, taskIndex))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckList);

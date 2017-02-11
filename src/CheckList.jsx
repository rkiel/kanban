import React, {Component} from 'react';

class CheckList extends Component {
  render() {
    const tasks = this.props.tasks.map(task => {
      return (
        <li key={task.id} className="checklist__list">
          <input type="checkbox" defaultChecked={task.done}/> {task.name}
          <a href="#" className="checklist__task--remove"/>
        </li>
      );
    });
    return (
      <div className="checklist">
        <ul>{tasks}</ul>
        <input type="text" className="checklist--add-task" placeholder="Type then hit enter to add a task"/>
      </div>
    );
  }
}

export default CheckList;

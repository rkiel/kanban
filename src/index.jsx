import React from 'react';
import ReactDOM from 'react-dom';

import KanbanBoard from './KanbanBoard.jsx';

const cardsList = [
  {
    id: 1,
    title: 'Read the book',
    description: 'I should read the **whole** book',
    status: 'in-progress',
    color: '#BD8D31',
    tasks: []
  }, {
    id: 2,
    title: 'Write some code',
    description: 'Come along with the samples in the book. [github](https://github.com/pro-react)',
    status: 'todo',
    color: '#3A7E28',
    tasks: [
      {
        id: 1,
        name: 'ContactList example',
        done: true
      }, {
        id: 2,
        name: 'Kanban example',
        done: false
      }, {
        id: 1,
        name: 'My own experiments',
        done: false
      }
    ]
  }
]
ReactDOM.render(
  <KanbanBoard cards={cardsList}/>, document.getElementById('app'));

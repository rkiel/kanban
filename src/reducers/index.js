import {combineReducers} from 'redux';
import update from 'immutability-helper';

function initialState() {
  return [
    {
      id: 1,
      title: "foo",
      description: "bar",
      status: 'in-progress',
      color: "blue",
      tasks: []
    }
  ]
}

function cardsReducer(state = initialState(), action) {
  let cardIndex;
  switch (action.type) {
    case 'ADD_TASK':
      console.log("add task", action);
      cardIndex = state.findIndex(card => card.id === action.cardId);
      const newTask = {
        id: Date.now(),
        name: action.taskName,
        done: false
      };
      return update(state, {
        [cardIndex]: {
          tasks: {
            $push: [newTask]
          }
        }
      });
    case 'DELETE_TASK':
      console.log("delete task", action);
      cardIndex = state.findIndex(card => card.id === action.cardId);
      return update(state, {
        [cardIndex]: {
          tasks: {
            $splice: [
              [action.taskIndex, 1]
            ]
          }
        }
      });

    case 'TOGGLE_TASK':
      console.log("toggle task", action);
      cardIndex = state.findIndex(card => card.id === action.cardId);
      return update(state, {
        [cardIndex]: {
          tasks: {
            [action.taskIndex]: {
              done: {
                $apply: done => {
                  return !done;
                }
              }
            }
          }
        }
      });

    default:
      return state;
  }
}

const reducers = combineReducers({cards: cardsReducer});

export default reducers;

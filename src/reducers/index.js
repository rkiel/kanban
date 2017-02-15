import {combineReducers} from 'redux';
import update from 'immutability-helper';

function cardsReducer(state = [], action) {
  let cardIndex;
  console.log("TASK", action);

  switch (action.type) {
    case 'ADD_CARDS':
      return update(state, {$push: action.cards});

    case 'ADD_TASK':
      cardIndex = state.findIndex(card => card.id === action.cardId);
      return update(state, {
        [cardIndex]: {
          tasks: {
            $push: [action.newTask]
          }
        }
      });

    case 'DELETE_TASK':
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

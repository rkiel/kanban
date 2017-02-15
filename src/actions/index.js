import 'whatwg-fetch';

const API_URL = 'http://kanbanapi.pro-react.com';
const API_CARDS = API_URL + '/cards';

const API_HEADERS = {
  'Content-Type': 'application/json',
  'Authorization': 'Cause I Said So'
};

export function addTask(cardId, newTask) {
  return {type: 'ADD_TASK', cardId, newTask};
}

export function deleteTask(cardId, taskId, taskIndex) {
  return {type: 'DELETE_TASK', cardId, taskId, taskIndex};
}

export function toggleTask(cardId, taskId, taskDone, taskIndex) {
  return {type: 'TOGGLE_TASK', cardId, taskId, taskDone, taskIndex};
}

export function saveAndAddTask(cardId, taskName) {
  return function(dispatch) {
    const newTask = {
      name: taskName,
      done: false
    };

    const payload = {
      method: 'post',
      headers: API_HEADERS,
      body: JSON.stringify(newTask)
    };

    fetch(`${API_CARDS}/${cardId}/tasks`, payload).then(response => {
      return response.json();
    }).then(responseData => {
      newTask.id = responseData.id;
      dispatch(addTask(cardId, newTask));
    }).catch(e => {
      console.log("error", e);
    });
  };
}

export function addCards(cards) {
  return {type: 'ADD_CARDS', cards};
}

export function loadAndAddCards() {
  return function(dispatch) {
    fetch(API_CARDS, {headers: API_HEADERS}).then(response => {
      return response.json();
    }).then(json => {
      return dispatch(addCards(json));
    }).catch(error => {
      console.log('error fetching and parsing data', error);
    });
  };
}

export function deleteAndRemoveTask(cardId, taskId, taskIndex) {
  return function(dispatch) {
    dispatch(deleteTask(cardId, taskId, taskIndex));

    fetch(`${API_CARDS}/${cardId}/tasks/${taskId}`, {
      method: 'delete',
      headers: API_HEADERS
    }).catch(error => {
      console.log('error fetching and parsing data', error);
    });
  };
}

export function toggleAndUpdateTask(cardId, taskId, taskDone, taskIndex) {
  return function(dispatch) {
    dispatch(toggleTask(cardId, taskId, taskDone, taskIndex));
    fetch(`${API_CARDS}/${cardId}/tasks/${taskId}`, {
      method: 'put',
      headers: API_HEADERS,
      body: JSON.stringify({done: taskDone})
    });
  };
}

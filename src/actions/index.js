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

export function toggleTask(cardId, taskId, taskIndex) {
  return {type: 'TOGGLE_TASK', cardId, taskId, taskIndex};
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
      return response.json()
    }).then(json => dispatch(addCards(json))).catch(error => console.log('error fetching and parsing data', error))

  };
}

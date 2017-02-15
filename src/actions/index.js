export function addTask(cardId, taskName) {
  console.log("addTask", cardId, taskName);
  return {type: 'ADD_TASK', cardId, taskName};
}

export function deleteTask(cardId, taskId, taskIndex) {
  console.log("deleteTask", cardId, taskId, taskIndex);
  return {type: 'DELETE_TASK', cardId, taskId, taskIndex};
}

export function toggleTask(cardId, taskId, taskIndex) {
  console.log("toggleTask", cardId, taskId, taskIndex);
  return {type: 'TOGGLE_TASK', cardId, taskId, taskIndex};
}

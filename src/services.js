export function saveToLocal(name, data) {
  localStorage.setItem(name, JSON.stringify(data))
}

export function getFromLocal(name) {
  return JSON.parse(localStorage.getItem(name))
}

export function findIndexOfTodo(todo, todos) {
  return todos.findIndex(item => item.id === todo.id)
}

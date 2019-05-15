import React, { useState, useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import Header from './Header'
import Searchbar from './Searchbar'
import Todolist from './TodoList'
import Filter from './Filter'
import { saveToLocal, getFromLocal, findIndexOfTodo } from './services'

const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;

  }

  `

const Grid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 100px 70px 1fr 100px;
  grid-row-gap: 10px;
  grid-template-areas:
    'header'
    'searchbar'
    'todos'
    'filter';
`

function App() {
  const [todos, setTodos] = useState(getFromLocal('Todos') || [])
  const [searchInput, setSearchInput] = useState('')
  const [filter, setFilter] = useState('all')

  useEffect(() => saveToLocal('Todos', todos), [todos])

  function updateTitle(todo, title) {
    const index = findIndexOfTodo(todo, todos)
    const updatedTodo = { ...todos[index], title }
    updateTodo(updatedTodo, index)
  }

  function updateTodoStatus(todo) {
    const index = findIndexOfTodo(todo, todos)
    const updatedTodo = { ...todos[index], completed: !todos[index].completed }

    updateTodo(updatedTodo, index)
  }

  function updateTodo(updatedTodo, index) {
    const newTodos = [
      ...todos.slice(0, index),
      updatedTodo,
      ...todos.slice(index + 1)
    ]
    setTodos(newTodos)
  }

  function updateFilter(filter) {
    setFilter(filter)
  }

  function updateSearch(searchQuery) {
    setSearchInput(searchQuery)
  }

  function deleteTodo(todo) {
    const index = findIndexOfTodo(todo, todos)
    const newTodos = [...todos.slice(0, index), ...todos.slice(index + 1)]

    setTodos(newTodos)
  }

  function addTodo(todo) {
    const newTodos = [...todos, todo]

    setTodos(newTodos)
  }

  function filterTodos() {
    let filteredTodos

    if (filter === 'all') {
      filteredTodos = todos
    } else {
      const filterCompleted = filter === 'completed' ? true : false
      filteredTodos = todos.filter(todo => todo.completed === filterCompleted)
    }

    return filteredTodos.filter(todo =>
      todo.title.toLowerCase().includes(searchInput.toLowerCase())
    )
  }

  return (
    <Grid>
      <GlobalStyles />
      <Header />
      <Searchbar onInput={updateSearch} value={searchInput} addTodo={addTodo} />
      <Todolist
        todos={filterTodos()}
        updateTodoStatus={updateTodoStatus}
        updateTitle={updateTitle}
        deleteTodo={deleteTodo}
      />
      <Filter
        filters={['all', 'completed', 'open']}
        activeFilter={filter}
        updateFilter={updateFilter}
      />
    </Grid>
  )
}

export default App

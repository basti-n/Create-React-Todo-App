import React from 'react'
import styled from 'styled-components'
import uid from 'uid'

const StyledSearchbar = styled.div`
  grid-area: searchbar;
  padding: 0;
  display: flex;

  & form {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr minmax(50px, 200px);
    justify-content: center;
    align-items: center;
    padding: 0 24px;
  }

  & input {
    width: 60vw;
    height: 40px;
    padding-left: 15px;
    border: 1px solid grey;
  }
  & button {
    font-weight: bolder;
    background: #8bf0ba;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    height: 30px;
    padding: 10px;
    border-radius: 10px;
  }
`

export default function Searchbar({ onInput, value, addTodo }) {
  function createNewTodo(event) {
    event.preventDefault()
    const options = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }
    const newTodo = {
      title: event.target.todoInput.value,
      completed: false,
      created: new Date().toLocaleDateString('de-DE', options),
      id: uid()
    }
    onInput('')
    addTodo(newTodo)
  }

  return (
    <StyledSearchbar>
      <form onSubmit={createNewTodo}>
        <input
          type='text'
          name='todoInput'
          placeholder='search or add Todo'
          value={value}
          onChange={e => onInput(e.target.value)}
        />
        <button>+ Todo</button>
      </form>
    </StyledSearchbar>
  )
}

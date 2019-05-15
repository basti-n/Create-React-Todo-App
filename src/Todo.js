import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import TodoStatus from './TodoStatus'
import TodoDelete from './TodoDelete'

const StyledTodo = styled.section`
  padding: 10px 15px;
  position: relative;
  display: grid;
  border: 1px solid lightgrey;
  grid-template-columns: 1fr min-content;
  grid-template-areas:
    'title status'
    'description description';

  & > input {
    font-size: 24px;
    font-weight: 700;
  }

  & > h2 {
    grid-area: title;
    text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
  }
  & > p {
    grid-area: description;
  }
  & > div {
    grid-area: status;
  }
`

export default function Todo({
  todo,
  updateTodoStatus,
  deleteTodo,
  updateTitle
}) {
  const [isEditable, setIsEditable] = useState(false)

  const inputEl = useRef(null)

  function toggleEditMode() {
    setIsEditable(!isEditable)
  }

  useEffect(() => {
    inputEl.current && inputEl.current.focus()
  }, [isEditable])

  function onKeypressEnter(e) {
    e.key === 'Enter' && setIsEditable(!isEditable)
  }

  return (
    <StyledTodo completed={todo.completed}>
      {isEditable ? (
        <input
          ref={inputEl}
          type='text'
          value={todo.title}
          onChange={event => updateTitle(todo, event.target.value)}
          onBlur={() => setIsEditable(!isEditable)}
          onKeyDown={onKeypressEnter}
        />
      ) : (
        <h2
          onClick={toggleEditMode}
          onBlur={event => updateTitle(todo, event.target.textContent)}
        >
          {todo.title}
        </h2>
      )}

      <p>Erstellt am: {todo.created || 'unbekannt'}</p>
      <TodoStatus
        updateTodoStatus={updateTodoStatus}
        completed={todo.completed}
      />
      <TodoDelete deleteTodo={deleteTodo} />
    </StyledTodo>
  )
}

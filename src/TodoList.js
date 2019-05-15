import React from 'react'
import Todo from './Todo'
import styled from 'styled-components'

const StyledTodolist = styled.section`
  grid-area: todos;
  overflow-y: scroll;
`

export default function Todolist({
  todos,
  updateTodoStatus,
  deleteTodo,
  updateTitle
}) {
  return (
    <StyledTodolist>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          todo={todo}
          updateTitle={updateTitle}
          updateTodoStatus={() => updateTodoStatus(todo)}
          deleteTodo={() => deleteTodo(todo)}
        />
      ))}
    </StyledTodolist>
  )
}

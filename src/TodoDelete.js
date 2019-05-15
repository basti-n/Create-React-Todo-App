import React from 'react'
import styled from 'styled-components'

const Delete = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: 5px;
  right: 15px;
`
export default function TodoDelete({ deleteTodo }) {
  return (
    <Delete
      src='https://image.flaticon.com/icons/svg/216/216684.svg'
      alt='Delete Icon'
      onClick={deleteTodo}
    />
  )
}

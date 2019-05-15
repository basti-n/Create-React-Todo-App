import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  background: #8bf0ba;
  grid-area: header;
  color: black;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
`

export default function Header() {
  return (
    <StyledHeader>
      <h1>My Todo App</h1>
    </StyledHeader>
  )
}

import React from 'react'
import styled from 'styled-components'

const StyledFilter = styled.div`
  grid-area: filter;
  display: flex;
  background: lightgrey;
`

const StyledFilterTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => (props.active ? '1.7em' : '1.3em')};
  width: 100%;
  height: 100%;
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  background: ${props => (props.active ? '#8bf0ba' : '##95a5a6')};
`

export default function Filter({ filters, activeFilter, updateFilter }) {
  return (
    <StyledFilter>
      {filters.map(filter => (
        <StyledFilterTab
          key={filter}
          active={filter === activeFilter ? true : false}
          onClick={() => updateFilter(filter)}
        >
          {filter}
        </StyledFilterTab>
      ))}
    </StyledFilter>
  )
}

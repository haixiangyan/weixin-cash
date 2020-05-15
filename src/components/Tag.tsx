import * as React from 'react'
import styled from 'styled-components'

const StyledTag = styled.span`
  width: 1.5em;
  height: 1.5em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 4px;
  background: #F4F4F4;
  color: ${props => props.theme.$subText};
  font-size: ${props => props.theme.$smallTextSize} !important;
  border-radius: 4px;
`

const Tag: React.FC = (props) => {
  return (
    <StyledTag>{props.children}</StyledTag>
  )
}

export default Tag

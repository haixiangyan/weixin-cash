import * as React from 'react'
import styled from 'styled-components'

const VerticalDivider = styled.span`
  border-right: 1px solid #A0D8BB;
  margin: 0 16px;
`

const Divider: React.FC = () => {
  return (
    <VerticalDivider/>
  )
}

export default Divider

import * as React from 'react'
import styled from 'styled-components'

const StyledSummary = styled.div`
  color: ${props => props.theme.$success};
`

const Summary: React.FC = () => {
  return (
    <StyledSummary>
      记账页
    </StyledSummary>
  )
}

export default Summary

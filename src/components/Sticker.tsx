import * as React from 'react'
import styled from 'styled-components'

const StyledSticker = styled.div`
  position: absolute;
  bottom: 128px;
  right: 32px;
  background: white;
  padding: 12px;
  box-shadow: 0 2px 24px -6px ${props => props.theme.$normalText};
  z-index: 3;
  border-radius: 50%;
`

const Sticker: React.FC = (props) => {
  return (
    <StyledSticker>
      {props.children}
    </StyledSticker>
  )
}

export default Sticker

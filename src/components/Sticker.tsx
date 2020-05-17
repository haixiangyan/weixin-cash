import * as React from 'react'
import styled from 'styled-components'

const StyledSticker = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 128px;
  right: 32px;
  width: 50px;
  height: 50px;
  background: white;
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

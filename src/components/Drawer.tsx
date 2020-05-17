import * as React from 'react'
import styled from 'styled-components'

type TStyledMain = {
}

const Shadow = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  bottom: 0;
  z-index: 4;
  background: rgba(0, 0, 0, 0.5);
`

const Main = styled.div<TStyledMain>(() => ({
  position: 'absolute',
  width: '100%',
  bottom: 0,
  zIndex: 5,
  borderRadius: '8px 8px 0 0',
  background: 'white'
}))


const Drawer: React.FC = (props) => {
  return (
    <Shadow>
      <Main>
        {props.children}
      </Main>
    </Shadow>
  )
}

export default Drawer

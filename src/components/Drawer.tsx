import * as React from 'react'
import styled from 'styled-components'
import Icon from './Icon'

type TProps = {
  closeDrawer: () => void
  title?: string
}

const Shadow = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  bottom: 0;
  z-index: 4;
  background: rgba(0, 0, 0, 0.5);
`

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #eee;
  font-size: ${props => props.theme.$largeTextSize};
  background:  #FAFAFA;
`

const Main = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 5;
  border-radius: 8px 8px 0 0;
  background: white;
  overflow: hidden;
`

const Drawer: React.FC<TProps> = (props) => {
  const {title, closeDrawer} = props

  return (
    <Shadow onClick={closeDrawer}>
      <Main onClick={e => e.stopPropagation()}>
        <Header>
          <Icon onClick={closeDrawer} name="close" size={18}/>
          <span>{title}</span>
          <Icon name="close" color="transparent"/>
        </Header>

        {props.children}
      </Main>
    </Shadow>
  )
}

Drawer.defaultProps = {
  title: ''
}

export default Drawer

import * as React from 'react'
import styled from 'styled-components'
import Icon from './Icon'

type TProps = {
  show: boolean
  closeDrawer: () => void
  title?: string
}
type TShadow = {
  show: boolean
}
type TStyledMain = {
  show: boolean
}

const Shadow = styled.div<TShadow>(props => ({
  position: 'absolute',
  height: '100%',
  width: '100%',
  bottom: 0,
  zIndex: 4,
  background: 'rgba(0, 0, 0, 0.5)',
  display: props.show ? 'block' : 'none'
}))

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #eee;
  font-size: ${props => props.theme.$largeTextSize};
  background:  #FAFAFA;
`

const Main = styled.div<TStyledMain>(() => ({
  position: 'absolute',
  width: '100%',
  bottom: 0,
  zIndex: 5,
  borderRadius: '8px 8px 0 0',
  background: 'white',
  overflow: 'hidden'
}))

const Drawer: React.FC<TProps> = (props) => {
  const {show, title, closeDrawer} = props

  return (
    <Shadow show={show} onClick={closeDrawer}>
      <Main show={show} onClick={e => e.stopPropagation()}>
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

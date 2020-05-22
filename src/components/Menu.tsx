import * as React from 'react'
import Icon from './Icon'
import styled from 'styled-components'
import {Link, useLocation} from 'react-router-dom'
import theme from '../theme'

type TMenuItem = {
  selected: boolean
}

const StyledMenu = styled.div`
  padding: 12px 0;
  display: flex;
  background: white;
  box-shadow: 0px -2px 12px 0px rgba(192,196,204,.4);
  z-index: 2;
  a {
    text-decoration: none;
  }
  .selected {
    color: ${props => props.theme.$success}
  }
`

const MenuItem = styled(Link)<TMenuItem>`
  flex-grow: 1;
  color: ${props => props.theme.$normalText};
  font-size: ${props => props.theme.$normalTextSize};
  text-align: center;
  > div {
    margin-top: 4px;
    color: ${props => props.selected ? props.theme.$success : props.theme.$normalText};
    text-align: center;
  }
`

const Menu: React.FC = () => {
  const {pathname} = useLocation()

  return (
    <StyledMenu>
      <MenuItem to="/" selected={pathname === '/'}>
        {
          pathname === '/' ?
            <Icon name="solid-order" size={24} color={theme.$success}/> :
            <Icon name="order" size={24}/>
        }
        <div>明细</div>
      </MenuItem>
      <MenuItem to="/analysis" selected={pathname === '/analysis'}>
        {
          pathname === '/analysis' ?
            <Icon name="solid-chart" size={24} color={theme.$success}/> :
            <Icon name="chart" size={24}/>
        }
        <div>统计</div>
      </MenuItem>
      <MenuItem to="/settings" selected={pathname === '/settings'}>
        {
          pathname === '/settings' ?
            <Icon name="solid-settings" size={24} color={theme.$success}/> :
            <Icon name="settings" size={24}/>
        }
        <div>设置</div>
      </MenuItem>
    </StyledMenu>
  )
}

export default Menu

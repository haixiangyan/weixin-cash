import * as React from 'react'
import Icon from './Icon'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import {useState} from 'react'
import theme from '../theme'

type TMenu = 'home' | 'analysis' | 'settings'

const StyledMenu = styled.div`
  padding: 12px 0;
  display: flex;
  background: white;
  list-style: none;
  box-shadow: 0px -2px 12px 0px rgba(192,196,204,.4);
  z-index: 2;
  a {
    text-decoration: none;
  }
  .selected {
    color: ${props => props.theme.$success}
  }
`

const MenuItem = styled(NavLink)`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  color: ${props => props.theme.$normalText};
  font-size: ${props => props.theme.$normalTextSize};
  > span {
    margin-top: 4px;
  }
`

const Menu: React.FC = () => {
  const [selected, setSelected] = useState<TMenu>('home')

  return (
    <StyledMenu>
      <MenuItem activeClassName="selected" to="/" onClick={() => setSelected('home')}>
        {
          selected === 'home' ?
            <Icon name="solid-order" size={24} color={theme.$success}/> :
            <Icon name="order" size={24}/>
        }
        <span>明细</span>
      </MenuItem>
      <MenuItem activeClassName="selected" to="/analysis" onClick={() => setSelected('analysis')}>
        {
          selected === 'analysis' ?
            <Icon name="solid-chart" size={24} color={theme.$success}/> :
            <Icon name="chart" size={24}/>
        }
        <span>统计</span>
      </MenuItem>
      <MenuItem activeClassName="selected" to="/settings" onClick={() => setSelected('settings')}>
        {
          selected === 'settings' ?
            <Icon name="solid-settings" size={24} color={theme.$success}/> :
            <Icon name="settings" size={24}/>
        }
        <span>设置</span>
      </MenuItem>
    </StyledMenu>
  )
}

export default Menu

import * as React from 'react'
import Icon from './Icon'
import styled from 'styled-components'

const StyledMenu = styled.ul`
  padding: 12px 0;
  display: flex;
  background: white;
  list-style: none;
  box-shadow: 0px -2px 12px 0px rgba(192,196,204,.4);
  z-index: 2;
`

const MenuItem = styled.li`
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
  return (
    <StyledMenu>
      <MenuItem>
        <Icon name="order" size={24}/>
        <span>明细</span>
      </MenuItem>
      <MenuItem>
        <Icon name="chart" size={24}/>
        <span>统计</span>
      </MenuItem>
      <MenuItem>
        <Icon name="setting" size={24}/>
        <span>设置</span>
      </MenuItem>
    </StyledMenu>
  )
}

export default Menu

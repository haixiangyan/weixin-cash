import * as React from 'react'
import Icon from './Icon'
import styled from 'styled-components'
import {DEFAULT_EXPENSE_CATEGORIES, DEFAULT_INCOME_CATEGORIES} from '../lib/category'

type TProps = {
  value: number
  closeDrawer: () => void
  submit: () => void
}

type TCategoryItem = {
  selected: boolean
}

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #eee;
  font-size: ${props => props.theme.$largeTextSize};
  background:  #FAFAFA;
`

const Main = styled.section`
  max-height: 48vh;
  padding: 32px 16px;
  background:  #FAFAFA;
  overflow-y: auto;
  .selected {
    background: ${props => props.theme.$success};
    color: white;
  }
`

const Tag = styled.p`
  margin: 8px 0 8px 4px;
  color: ${props => props.theme.$subText};
`

const FilterSection = styled.section`
  display: flex;
  flex-wrap: wrap;
`

const CategoryItem = styled.div<TCategoryItem>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 33.33333%;
  height: 64px;
  border: 4px solid #FAFAFA;
  border-radius: 6px;
  font-size: 1.2em;
  font-weight: 300;
  cursor: pointer;
  background: ${props => props.selected ? props.theme.$success : 'white'};
  color: ${props => props.selected ? 'white' : props.theme.$normalText}
`

const CategoryFilter: React.FC<TProps> = (props) => {
  const {closeDrawer, value} = props

  return (
    <div>
      <Header>
        <Icon onClick={closeDrawer} name="cancel" size={18}/>
        <span>请选择类型</span>
        <Icon name="cancel" color="transparent"/>
      </Header>
      <Main>
        <CategoryItem selected={value === -1}>全部类型</CategoryItem>

        <Tag>支出</Tag>
        <FilterSection>
          {
            DEFAULT_EXPENSE_CATEGORIES.map(c => (
              <CategoryItem key={c.id}
                            selected={value === c.id}>
                {c.name}
              </CategoryItem>
            ))
          }
        </FilterSection>

        <Tag>收入</Tag>
        <FilterSection>
          {
            DEFAULT_INCOME_CATEGORIES.map(c => (
              <CategoryItem key={c.id}
                            selected={value === c.id}>
                {c.name}
              </CategoryItem>
            ))
          }
        </FilterSection>
      </Main>
    </div>
  )
}

export default CategoryFilter

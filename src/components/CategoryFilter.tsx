import * as React from 'react'
import styled from 'styled-components'
import {ALL_TYPE, DEFAULT_EXPENSE_CATEGORIES, DEFAULT_INCOME_CATEGORIES} from '../lib/category'
import {TRecordType} from '../hooks/useRecordList'
import theme from '../theme'

type TProps = {
  recordType: TRecordType
  value: string
  closeDrawer: () => void
  onSubmit: (id: string, type: TRecordType) => void
}

type TCategoryItem = {
  recordType: TRecordType
  selected: boolean
}

const BACKGROUND = {
  expense: theme.$success,
  income: theme.$warning
}

const StyledCategoryFilter = styled.section`
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
  padding: 16px;
  border: 4px solid #FAFAFA;
  border-radius: 6px;
  font-size: 1.1em;
  cursor: pointer;
  background: ${props => props.selected ? BACKGROUND[props.recordType] : 'white'};
  color: ${props => props.selected ? 'white' : props.theme.$normalText}
`

const CategoryFilter: React.FC<TProps> = (props) => {
  const {value, recordType, closeDrawer, onSubmit} = props

  const submit = (id: string, type: TRecordType) => {
    onSubmit(id, type)
    closeDrawer()
  }

  return (
    <StyledCategoryFilter>
      <CategoryItem selected={value === ALL_TYPE}
                    recordType="expense"
                    onClick={() => submit(ALL_TYPE, 'expense')}>
        全部类型
      </CategoryItem>

      <Tag>支出</Tag>
      <FilterSection>
        {
          DEFAULT_EXPENSE_CATEGORIES.map(c => (
            <CategoryItem key={c.id}
                          recordType="expense"
                          onClick={() => submit(c.id, 'expense')}
                          selected={recordType === 'expense' && value === c.id}>
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
                          recordType="income"
                          onClick={() => submit(c.id, 'income')}
                          selected={recordType === 'income' && value === c.id}>
              {c.name}
            </CategoryItem>
          ))
        }
      </FilterSection>
    </StyledCategoryFilter>
  )
}

export default CategoryFilter

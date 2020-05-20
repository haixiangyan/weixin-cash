import * as React from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import {TRecordType} from '../hooks/useRecordList'
import {CATEGORY_COLOR} from '../lib/category'

type TCategory = {
  id: number
  name: string
  iconName: string
}

type TProps = {
  category: TCategory
  recordType: TRecordType | 'none'
  size?: number
}

type TStyledCategory = {
  background: string
  fill: string
}

const StyledCategory = styled.span<TStyledCategory>(props =>({
  padding: 6,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: props.background,
  borderRadius: '50%',
  svg: {
    fill: props.fill,
  }
}))

const Category: React.FC<TProps> = (props) => {
  const {category, recordType, size} = props

  const color = CATEGORY_COLOR[recordType]

  return (
    <StyledCategory {...color}>
      <Icon name={category.iconName} size={size}/>
    </StyledCategory>
  )
}

Category.defaultProps = {
  size: 24
}

export default Category

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
  type: TRecordType | 'none'
  size?: number
}

type TStyledCategory = {
  background: string
  fill: string
  size: number
}

const StyledCategory = styled.span<TStyledCategory>(props =>({
  padding: 8,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: props.background,
  borderRadius: '50%',
  svg: {
    fill: props.fill,
    height: props.size,
    width: props.size
  }
}))

const Category: React.FC<TProps> = (props) => {
  const {category, type, size} = props

  const color = CATEGORY_COLOR[type]

  return (
    <StyledCategory {...color} size={size!}>
      <Icon name={category.iconName}/>
    </StyledCategory>
  )
}

Category.defaultProps = {
  size: 24
}

export default Category

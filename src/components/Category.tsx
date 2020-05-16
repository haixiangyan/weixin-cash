import * as React from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import {TRecordType} from './Record'
import {CATEGORY_COLOR} from '../lib/category'

type TCategory = {
  id: number
  name: string
  iconName: string
}

type TProps = {
  category: TCategory
  type: TRecordType | 'none'
}

type TStyledCategory = {
  background: string
  fill: string
}

const StyledCategory = styled.span<TStyledCategory>(props =>({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 46,
  width: 46,
  background: props.background,
  borderRadius: '50%',
  svg: {
    fill: props.fill,
    height: 26,
    width: 26
  }
}))

const Category: React.FC<TProps> = (props) => {
  const {category, type} = props

  const color = CATEGORY_COLOR[type]

  return (
    <StyledCategory {...color}>
      <Icon name={category.iconName}/>
    </StyledCategory>
  )
}

export default Category

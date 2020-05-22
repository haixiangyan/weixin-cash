import * as React from 'react'
import styled from 'styled-components'

type TDirection = 'vertical' | 'horizontal'

type TProps = {
  direction?: TDirection
  gap?: number
  color?: string
}

const VerticalDivider = styled.span<TProps>(props => ({
  borderRight: '1px solid',
  margin: `0 ${props.gap}px`,
  borderColor: props.color
}))

const HorizontalDivider = styled.div<TProps>(props => ({
  borderBottom: '1px solid',
  margin: `${props.gap}px 0`,
  borderColor: props.color
}))

const Divider: React.FC<TProps> = (props) => {
  const {direction} = props

  return (
    direction === 'horizontal' ?
      <HorizontalDivider {...props}/> :
      <VerticalDivider {...props}/>
  )
}

Divider.defaultProps = {
  direction: 'vertical',
  gap: 16,
  color: '#eee'
}

export default Divider

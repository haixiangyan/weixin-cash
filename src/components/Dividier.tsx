import * as React from 'react'
import styled from 'styled-components'

type TProps = {
  gap?: number
  color?: string
}

const VerticalDivider = styled.span<TProps>(props => ({
  borderRight: '1px solid',
  margin: `0 ${props.gap}px`,
  borderColor: props.color
}))

const Divider: React.FC<TProps> = (props) => {

  return (
    <VerticalDivider {...props}/>
  )
}

Divider.defaultProps = {
  gap: 16,
  color: '#eee'
}

export default Divider

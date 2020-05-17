import * as React from 'react'
import {SVGAttributes} from 'react'
import styled from 'styled-components'
import theme from '../theme'

type TProps = SVGAttributes<SVGElement> & {
  name: string
  color?: string
  size?: string
}

type TStyledIcon = {
  size: string
}

const StyledIcon = styled.svg<TStyledIcon>(props => ({
  width: props.size,
  height: props.size,
  fill: props.color
}))

const Icon: React.FC<TProps> = (props) => {
  const {name, color, size, ...attributes} = props

  return (
    <StyledIcon size={size!}
                color={color}
                className="icon"
                aria-hidden="true"
                {...attributes}>
      <use xlinkHref={`#icon-${name}`}/>
    </StyledIcon>
  )
}

Icon.defaultProps = {
  size: '1em',
  color: theme.$normalText
}

export default Icon

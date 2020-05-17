import * as React from 'react'
import {SVGAttributes} from 'react'
import styled from 'styled-components'

type TProps = SVGAttributes<SVGElement> & {
  name: string
  size?: string
}

type TStyledIcon = {
  size: string
}

const StyledIcon = styled.svg<TStyledIcon>(props => ({
  width: props.size,
  height: props.size
}))

const Icon: React.FC<TProps> = (props) => {
  const {name, size, ...attributes} = props

  return (
    <StyledIcon size={size!}
                className="icon"
                aria-hidden="true"
                {...attributes}>
      <use xlinkHref={`#icon-${name}`}/>
    </StyledIcon>
  )
}

Icon.defaultProps = {
  size: '1em'
}

export default Icon

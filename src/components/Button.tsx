import * as React from 'react'
import styled from 'styled-components'
import theme from '../theme'

type TProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  recordType?: 'success' | 'warning' | 'none'
}

type TStyledButton = {
  recordType: 'success' | 'warning' | 'none'
}

const BUTTON_COLOR = {
  success: {
    background: theme.$success,
    borderColor: theme.$success,
    color: 'white'
  },
  warning: {
    background: theme.$warning,
    borderColor: theme.$warning,
    color: 'white'
  },
  none: {
    background: '#F1F1F1',
    borderColor: '#F1F1F1',
    color: theme.$subText
  }
}

const StyledButton = styled.button<TStyledButton>(props => {
  const {background, borderColor, color} = BUTTON_COLOR[props.recordType!]

  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4px 12px',
    background,
    outline: 'none',
    borderRadius: '16px',
    marginRight: '8px',
    border: `1px solid ${borderColor}`,
    color
  }
})

const Button: React.FC<TProps> = (props) => {
  const {recordType, ...attributes} = props

  return (
    <StyledButton {...attributes} recordType={recordType!}>
      {props.children}
    </StyledButton>
  )
}

Button.defaultProps = {
  recordType: 'none'
}

export default Button

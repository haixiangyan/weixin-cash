import * as React from 'react'
import styled from 'styled-components'

const StyledNumberPad = styled.div`
  > button {
    float: left;
    width: 25%;
    height: 64px;
    border: none;
    background: white;
    font-size: 1.3em;
    outline: none;
    border-radius: 4px;
    &.zero {
      width: 50%;
    }
    &.OK {
      height: 192px;
      float: right;
      font-size: 1em;
      color: white;
      background: ${props => props.theme.$success};
    }
  }
`

const NumberPad: React.FC = () => {
  return (
    <StyledNumberPad>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>Del</button>

      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button className="OK">确定</button>

      <button>7</button>
      <button>8</button>
      <button>9</button>

      <button className="zero">0</button>
      <button>.</button>
    </StyledNumberPad>
  )
}

export default NumberPad

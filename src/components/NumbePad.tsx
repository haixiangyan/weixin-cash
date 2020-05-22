import * as React from 'react'
import styled from 'styled-components'
import {TRecordType} from '../hooks/useRecordList'

type TProps = {
  value: string
  recordType: TRecordType
  onChange: (newValue: string) => void
  onOK: () => void
}

type TStyledNumberPad = {
  recordType: TRecordType
  value: string
}

const StyledNumberPad = styled.div<TStyledNumberPad>`
  > button {
    float: left;
    width: 25%;
    height: 64px;
    background: white;
    font-size: 1.3em;
    outline: none;
    border-radius: 4px;
    border: 4px solid #FAFAFA;
    &.zero {
      width: 50%;
    }
    &.OK {
      height: 192px;
      float: right;
      font-size: 1em;
      color: white;
      opacity: ${props => props.value === '0' ? 0.6 : 1};
      background: ${({recordType, theme}) => recordType === 'expense' ? theme.$success : theme.$warning};
    }
  }
`

const updateAmount = (prevValue: string, text: string) => {
  const MAX_AMOUNT = 100000
  const MAX_DECIMAL_LENGTH = 2

  // 非法情况
  if (!/[\d.]/.test(text)) return prevValue

  if (prevValue.includes('.')) {
    // 如果 text 是 .
    if (text === '.') return prevValue

    // 如果是数字
    if (!isNaN(parseFloat(text))) {
      // 判断是否超出
      const decimal = prevValue.split('.')[1]

      return decimal.length >= MAX_DECIMAL_LENGTH ? prevValue : prevValue + text
    }

    return prevValue
  }

  if (prevValue === '0') {
    return text === '.' ? prevValue + text : text
  }

  const newValue = prevValue + text

  if (parseFloat(newValue) > MAX_AMOUNT) {
    alert(`输入金额不能超过${MAX_AMOUNT}`)
    return prevValue
  }

  return newValue
}

const NumberPad: React.FC<TProps> = (props) => {
  const {value, onOK, onChange, recordType} = props

  const onDel = () => {
    if (value === '0') return

    if (value.length === 1) return onChange('0')

    onChange(value.slice(0, -1))
  }

  const onClickPad = (e: React.MouseEvent<HTMLDivElement>) => {
    const text = (e.target as HTMLButtonElement).textContent
    // null
    if (!text) return

    // OK
    if (text === '确定') return onOK()

    // Del
    if (text === 'DEL') return onDel()

    // 其他
    const newValue = updateAmount(value, text)
    onChange(newValue)
  }

  return (
    <StyledNumberPad recordType={recordType}
                     value={value}
                     className="clearfix"
                     onClick={onClickPad}>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>DEL</button>

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

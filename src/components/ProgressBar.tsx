import * as React from 'react'
import theme from '../theme'
import styled from 'styled-components'

type TProps = {
  value: number
  height?: number
  width?: number
  color?: string
}

type TBar = {
  height: number
  width: number
}

type TProgress = {
  color: string
  progress: number
}

const StyledProgressBar = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

const Text = styled.span`
  margin-right: 4px;
  font-size: ${props => props.theme.$subText};
  color: ${props => props.theme.$subText};
`

const Bar = styled.div<TBar>`
  position: relative;
  height: ${props => props.height + 'px'};
  width: ${props => props.width + 'px'};
  background: #E5E5E5;
  border-radius: 16px;
`

const Progress = styled.div<TProgress>`
  position: absolute;
  left: 0;
  height: 100%;
  width: ${props => props.progress + '%'};
  border-radius: 16px;
  background: ${props => props.color};
`

const ProgressBar: React.FC<TProps> = (props) => {
  const {value, width, height, color} = props

  return (
    <StyledProgressBar>
      <Text>{(value * 100).toFixed(2)}%</Text>
      <Bar width={width!} height={height!}>
        <Progress progress={value * 100} color={color!}/>
      </Bar>
    </StyledProgressBar>
  )
}

ProgressBar.defaultProps = {
  value: 0.00,
  color: theme.$success,
  width: 200,
  height: 8
}

export default ProgressBar

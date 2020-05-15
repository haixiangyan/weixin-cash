import * as React from 'react'
import styled from 'styled-components'
import Icon from '../components/Icon'
import Divider from '../components/Dividier'

const StyledSummary = styled.div`
  color: ${props => props.theme.$white};
`

const Header = styled.header`
  padding: 0 14px;
  background: ${props => props.theme.$success};
  .title {
    text-align: center;
    font-size: ${props => props.theme.$largeTextSize};
  }
`

const TypeButton = styled.button`
  padding: 8px 16px;
  color: ${props => props.theme.$white};
  background: #53BC82;
  border: none;
  outline: none;
  border-radius: 4px;
`

const Summary: React.FC = () => {
  return (
    <StyledSummary>
      <Header>
        <p className="title">记账本</p>

        <section>
          <TypeButton>
            <span>全部类型</span>
            <Divider/>
            <Icon name="yingyong"/>
          </TypeButton>
        </section>

        <section>
          <button>2020年4月</button>
          <span>总支出￥xxx</span>
          <span>总收入￥yyy</span>
        </section>
      </Header>
    </StyledSummary>
  )
}

export default Summary

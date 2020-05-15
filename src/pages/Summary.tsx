import * as React from 'react'
import styled from 'styled-components'
import Icon from '../components/Icon'
import Divider from '../components/Dividier'
import Record from '../components/Record'

const Header = styled.header`
  padding: 60px 14px 8px;
  background: ${props => props.theme.$success};
  color: ${props => props.theme.$white};
  .title {
    text-align: center;
    font-size: ${props => props.theme.$largeTextSize};
  }
`

const TypeButton = styled.button`
  margin-top: 26px;
  padding: 8px 16px;
  color: ${props => props.theme.$white};
  background: #53BC82;
  border: none;
  outline: none;
  border-radius: 4px;
`

const MonthButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  color: ${props => props.theme.$white};
  border: none;
  outline: none;
  background: none;
`

const BriefSection = styled.section`
  margin-top: 8px;
  font-weight: 300;
  svg {
    margin-left: 8px;
    width: .6em;
    height: .6em;
    fill: #A0D8BB;
  }
`

const Summary: React.FC = () => {
  const totalIncome = 420
  const totalExpense = 300

  return (
    <div>
      <Header>
        <p className="title">记账本</p>

        <section>
          <TypeButton>
            <span>全部类型</span>
            <Divider/>
            <Icon name="application"/>
          </TypeButton>
        </section>

        <BriefSection>
          <MonthButton>
            <span>2020年4月</span>
            <Icon name="dropdown"/>
          </MonthButton>
          <span style={{marginRight: 10}}>总支出￥{totalExpense}</span>
          <span>总收入￥{totalIncome}</span>
        </BriefSection>
      </Header>

      <ul>
        <Record/>
      </ul>
    </div>
  )
}

export default Summary

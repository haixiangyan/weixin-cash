import * as React from 'react'
import Divider from '../../components/Dividier'
import theme from '../../theme'
import Icon from '../../components/Icon'
import styled from 'styled-components'
import {TMonthRecord} from '../../hooks/useRecordList'
import {Dayjs} from 'dayjs'
import {MONTH} from '../../lib/date'

type TProps = {
  showMonth: () => void
  month: Dayjs
  monthRecord?: TMonthRecord
}

const Section = styled.section`
  padding: 32px 0;
  text-align: center;
  background: white;
`

const MonthFilter = styled.button`
  padding: 8px 16px;
  background: #F7F7F7;
  border-radius: 4px;
  color: ${props => props.theme.$normalText}
`

const ExpenseTitle = styled.p`
  margin: 20px 0 4px;
  color: ${props => props.theme.$success};
`

const Expense = styled.p`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  span {
    font-weight: 500;
    font-size: 1.4em;
    color: ${props => props.theme.$success};
    &.money {
      font-size: 2.2em;
    }
  }
`

const Income = styled.p`
  color: ${props => props.theme.$subText}
`

const MonthFilterSection: React.FC<TProps> = (props) => {
  const {showMonth, month, monthRecord} = props

  return (
    <Section>
      <MonthFilter onClick={showMonth}>
        <span>{month.format(MONTH)}</span>
        <Divider gap={8} color={theme.$placeholder}/>
        <Icon color={theme.$normalText} name="drop-down"/>
      </MonthFilter>

      <ExpenseTitle>共支出</ExpenseTitle>

      <Expense>
        <span>￥</span>
        <span className="money">
          {monthRecord ? monthRecord.expenseTotal.toFixed(2) : '0.00'}
        </span>
      </Expense>

      <Income>
        共收入￥{monthRecord ? monthRecord.incomeTotal.toFixed(2) : '0.00'}
      </Income>
    </Section>
  )
}

export default MonthFilterSection

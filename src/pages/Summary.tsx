import * as React from 'react'
import styled from 'styled-components'
import Icon from '../components/Icon'
import Divider from '../components/Dividier'
import MonthRecord from '../components/MonthRecord'
import useRecordList from '../hooks/useRecordList'
import dayjs from 'dayjs'
import {MONTH} from '../lib/date'
import Sticker from '../components/Sticker'

const StyledSummary = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

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

const RecordList = styled.ul`
  padding: 8px;
  flex-grow: 1;
  overflow: auto;
`

const Summary: React.FC = () => {
  const {recordList} = useRecordList()

  const {incomeTotal, expenseTotal} = recordList[0]
  const curtMonth = dayjs().format(MONTH)

  return (
    <StyledSummary>
      <Header>
        <p className="title">记账本</p>

        <section>
          <TypeButton>
            <span>全部类型</span>
            <Divider color="#68C895"/>
            <Icon color="#edf5ed" name="application"/>
          </TypeButton>
        </section>

        <BriefSection>
          <MonthButton>
            <span>{curtMonth}</span>
            <Icon color="#A0D8BB" name="dropdown"/>
          </MonthButton>
          <span style={{marginRight: 12}}>
            总支出￥{expenseTotal.toFixed(2)}
          </span>
          <span>
            总收入￥{incomeTotal.toFixed(2)}
          </span>
        </BriefSection>
      </Header>

      <RecordList>
        {
          recordList && recordList.map(monthRecord => (
            <MonthRecord key={monthRecord.month} monthRecord={monthRecord}/>
          ))
        }
      </RecordList>

      <Sticker>
        <Icon name="pen"/>
      </Sticker>
    </StyledSummary>
  )
}

export default Summary

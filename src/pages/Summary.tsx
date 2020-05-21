import * as React from 'react'
import {useState} from 'react'
import styled from 'styled-components'
import Icon from '../components/Icon'
import Divider from '../components/Dividier'
import MonthRecord from '../components/MonthRecord'
import useRecordList from '../hooks/useRecordList'
import dayjs from 'dayjs'
import {MONTH} from '../lib/date'
import Sticker from '../components/Sticker'
import theme from '../theme'
import Drawer from '../components/Drawer'
import Money from '../components/Money'
import CategoryFilter from '../components/CategoryFilter'

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
  // Category 的 filter
  const [filter, setFilter] = useState(-1)
  const [showFilter, toggleFilter] = useState(false)
  const {fetchData, addRawRecord, filterRecordList} = useRecordList()
  const [showMoney, toggleMoney] = useState(false)

  const {incomeTotal, expenseTotal} = {incomeTotal: 100, expenseTotal: 200}
  const curtMonth = dayjs().format(MONTH)

  const closeMoney = () => {
    fetchData()
    toggleMoney(false)
  }

  const recordList = filterRecordList(filter)

  return (
    <StyledSummary>
      <Header>
        <p className="title">记账本</p>

        <section>
          <TypeButton onClick={() => toggleFilter(true)}>
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

      <Sticker onClick={() => toggleMoney(true)}>
        <Icon name="pen" size={22} color={theme.$success}/>
      </Sticker>

      {/*过滤 Category*/}
      <Drawer show={showFilter}
              onClickShadow={() => toggleFilter(false)}>
        <CategoryFilter value={filter}
                        closeDrawer={() => toggleFilter(false)}
                        onSubmit={(id) => setFilter(id)}/>
      </Drawer>

      {/*记账*/}
      <Drawer show={showMoney}
              onClickShadow={closeMoney}>
        <Money closeDrawer={closeMoney}
               onSubmit={(newRawRecord) => addRawRecord(newRawRecord)}/>
      </Drawer>
    </StyledSummary>
  )
}

export default Summary

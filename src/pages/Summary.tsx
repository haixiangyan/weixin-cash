import * as React from 'react'
import {useState} from 'react'
import styled from 'styled-components'
import Icon from '../components/Icon'
import Divider from '../components/Dividier'
import MonthRecord from '../components/MonthRecord'
import useRecordList from '../hooks/useRecordList'
import dayjs, {Dayjs} from 'dayjs'
import {MONTH} from '../lib/date'
import Sticker from '../components/Sticker'
import theme from '../theme'
import Drawer from '../components/Drawer'
import Money from '../components/Money'
import CategoryFilter from '../components/CategoryFilter'
import {ALL_CATEGORIES, ALL_TYPE} from '../lib/category'
import MonthPanel from '../components/MonthPanel'

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

const Empty = styled.div`
  padding-top: 24px;
  text-align: center;
  color: ${props => props.theme.$subText}
`

const Summary: React.FC = () => {
  const [showMonth, toggleMonth] = useState(true)
  const [showFilter, toggleFilter] = useState(false)
  const [showMoney, toggleMoney] = useState(false)

  const [month, setMonth] = useState(dayjs())
  const [filterId, setFilterId] = useState(ALL_TYPE)
  const {fetchData, addRawRecord, filterRecordList} = useRecordList()

  const recordList = filterRecordList(filterId)

  const filter = ALL_CATEGORIES.find(c => c.id === filterId)

  const {incomeTotal, expenseTotal} = {incomeTotal: 100, expenseTotal: 200}

  const closeMoney = () => {
    fetchData()
    toggleMoney(false)
  }

  return (
    <StyledSummary>
      <Header>
        <p className="title">记账本</p>

        <section>
          <TypeButton onClick={() => toggleFilter(true)}>
            <span>{filter ? filter.name : '全部类型'}</span>
            <Divider color="#68C895"/>
            <Icon color="#edf5ed" name="application"/>
          </TypeButton>
        </section>

        <BriefSection>
          <MonthButton onClick={() => toggleMonth(true)}>
            <span>{month.format(MONTH)}</span>
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

      {
        recordList.length !== 0 ?
          <RecordList>
            {
              recordList.map(monthRecord => (
                <MonthRecord key={monthRecord.month} monthRecord={monthRecord}/>
              ))
            }
          </RecordList>
          :
          <Empty>暂无数据</Empty>
      }

      <Sticker onClick={() => toggleMoney(true)}>
        <Icon name="pen" size={22} color={theme.$success}/>
      </Sticker>

      {/*选择月份*/}
      <Drawer show={showMonth}
              onClickShadow={() => toggleMonth(false)}>
        <MonthPanel value={month}
                    closeDrawer={() => toggleMonth(false)}
                    onSubmit={(newMonth: Dayjs) => setMonth(newMonth)}/>
      </Drawer>

      {/*过滤 Category*/}
      <Drawer show={showFilter}
              onClickShadow={() => toggleFilter(false)}>
        <CategoryFilter value={filterId}
                        closeDrawer={() => toggleFilter(false)}
                        onSubmit={(id) => setFilterId(id)}/>
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

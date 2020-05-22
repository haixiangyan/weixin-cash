import * as React from 'react'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import MonthFilterSection from './MonthFilterSection'
import Drawer from '../../components/Drawer'
import MonthPanel from '../../components/MonthPanel'
import dayjs, {Dayjs} from 'dayjs'
import {useState} from 'react'
import useRecordList from '../../hooks/useRecordList'
import {MONTH} from '../../lib/date'
import CategorySection from './CategorySection'
import Divider from '../../components/Dividier'
import DayAnalysis from './DayAnalysis'
import MonthAnalysis from './MonthAnalysis'

const StyledAnalysis = styled.div`
  flex-grow: 1;
`

const Main = styled.section`
  margin-top: 8px;
  background: white;
  padding: 24px;
`

const Analysis: React.FC = () => {
  const [showMonth, toggleMonth] = useState(false)
  const [month, setMonth] = useState(dayjs())

  const {getMonthRecord} = useRecordList()

  // 选中的 month record
  const selectedRecordList = getMonthRecord(month.format(MONTH))

  return (
    <Layout>
      <StyledAnalysis>
        <MonthFilterSection monthRecord={selectedRecordList}
                            month={month}
                            showMonth={() => toggleMonth(true)}/>
        <Main>
          <CategorySection monthRecord={selectedRecordList}/>

          <Divider direction="horizontal" gap={24}/>

          <DayAnalysis month={month}
                       monthRecord={selectedRecordList}
                       />

          <Divider direction="horizontal" gap={24}/>

          <MonthAnalysis getMonthRecord={getMonthRecord}/>
        </Main>
      </StyledAnalysis>


      {/*选择月份*/}
      <Drawer show={showMonth}
              title="请选择月份"
              closeDrawer={() => toggleMonth(false)}>
        <MonthPanel value={month}
                    closeDrawer={() => toggleMonth(false)}
                    onSubmit={(newMonth: Dayjs) => setMonth(newMonth)}/>
      </Drawer>
    </Layout>
  )
}

export default Analysis

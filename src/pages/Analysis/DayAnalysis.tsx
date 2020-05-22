import * as React from 'react'
import {useState} from 'react'
import ReactEcharts from 'echarts-for-react'
import styled from 'styled-components'
import Button from '../../components/Button'
import {parseMonthRecord, TMonthRecord, TRawRecord, TRecordType} from '../../hooks/useRecordList'
import dayjs, {Dayjs} from 'dayjs'
import {getDaysInMonth} from '../../lib/date'
import {barChart} from '../../lib/chart'

type TProps = {
  month: Dayjs
  monthRecord?: TMonthRecord
}

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > span {
    font-size: ${props => props.theme.$mainTextSize};
  }
`

const Main = styled.div`
  margin: 0 -24px;
`

const getYData = (days: number[], rawRecordList: TRawRecord[]) => {
  return days.map(d => {
    const record = rawRecordList.find(r => dayjs(r.date).get('date') === d)
    return record ? record.amount : 0.00
  })
}

const DayAnalysis: React.FC<TProps> = (props) => {
  const {month, monthRecord} = props

  const [type, setType] = useState<TRecordType>('expense')

  const rawRecordList = monthRecord ? parseMonthRecord(monthRecord).filter(r => r.type === type) : []

  // 每日对比
  const xDayData = getDaysInMonth(month)
  const yDayData = getYData(xDayData, rawRecordList)
  const dayChartOptions = barChart(xDayData, yDayData, type)

  // 每月对比

  return (
    <section>
      <Header>
        <span>每日对比</span>

        <span>
          <Button recordType={type === 'expense' ? 'success' : 'none'}
                  size="small"
                  onClick={() => setType('expense')}>
            支出
          </Button>
          <Button recordType={type === 'income' ? 'warning' : 'none'}
                  size="small"
                  onClick={() => setType('income')}>
            收入
          </Button>
        </span>
      </Header>

      <Main>
        <div>
          <ReactEcharts option={dayChartOptions}/>
        </div>
      </Main>
    </section>
  )
}

export default DayAnalysis

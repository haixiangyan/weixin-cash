import * as React from 'react'
import {parseMonthRecord, TMonthRecord, TRecordType} from '../../hooks/useRecordList'
import {getPrevMonths} from '../../components/MonthPanel'
import {Dayjs} from 'dayjs'
import {MONTH} from '../../lib/date'
import Button from '../../components/Button'
import {useState} from 'react'
import styled from 'styled-components'
import ReactEcharts from 'echarts-for-react'
import {barChart} from '../../lib/chart'

type TProps = {
  getMonthRecord: (month: string) => TMonthRecord | undefined
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

const getYData = (months: Dayjs[], getMonthRecord: Function) => {
  return months.map(m => {
    const monthRecord = getMonthRecord(m.format(MONTH))
    // 没有就为 0
    if (!monthRecord) return 0

    // 计算总数
    let total = 0
    parseMonthRecord(monthRecord).forEach(r => total += r.amount)

    return total
  })
}


const MonthAnalysis: React.FC<TProps> = (props) => {
  const {getMonthRecord} = props

  const [type, setType] = useState<TRecordType>('expense')

  // 每月对比
  const months = getPrevMonths()
  const xData = months.map(m => m.get('month'))
  const yData = getYData(months, getMonthRecord)

  const monthChartOptions = barChart(xData, yData, type)

  return (
    <div>
      <Header>
        <span>月度对比</span>

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
        <ReactEcharts option={monthChartOptions}/>
      </Main>
    </div>
  )
}

export default MonthAnalysis

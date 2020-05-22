import * as React from 'react'
import {useState} from 'react'
import ReactEcharts from 'echarts-for-react'
import styled from 'styled-components'
import Button from '../../components/Button'
import {parseMonthRecord, TMonthRecord, TRawRecord, TRecordType} from '../../hooks/useRecordList'
import dayjs, {Dayjs} from 'dayjs'
import {getDaysInMonth} from '../../lib/date'
import theme from '../../theme'

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
  overflow: auto;
  > div {
    width: 700px;
  }
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
  const xData = getDaysInMonth(month)
  const yData = getYData(xData, rawRecordList)

  const options = {
    tooltip: {
      show: true,
      trigger: 'item',
      axisPointer: {
        type: 'shadow',
        axis: 'auto',
      },
      padding: 5,
      textStyle: {
        color: '#eee'
      },
    },
    xAxis: {
      axisLabel: {
        formatter: '{value}\n日',
      },
      data: xData
    },
    yAxis: {
      show: false,
    },
    series: [
      {
        type: 'bar',
        name: type === 'expense' ? '支出' : '收入',
        data: yData,
        label: {
          show: true,
          position: 'top',
          color: theme.$success
        },
        itemStyle: {
          color: theme.$success
        },
      }
    ]
  }

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
          <ReactEcharts option={options} style={{height: 350}}/>
        </div>
      </Main>
    </section>
  )
}

export default DayAnalysis

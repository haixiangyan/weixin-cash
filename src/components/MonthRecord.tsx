import * as React from 'react'
import DayRecord from './DayRecord'
import {TMonthRecord} from '../hooks/useRecordList'

type TProps = TMonthRecord & {}

const MonthRecord: React.FC<TProps> = (props) => {
  const {month, recordList} = props

  return (
    <ul>
      {
        recordList && recordList.map(dayRecord => (
          <DayRecord key={dayRecord.day} {...dayRecord}/>
        ))
      }
    </ul>
  )
}

export default MonthRecord

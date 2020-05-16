import * as React from 'react'
import DayRecord from './DayRecord'
import {TMonthRecord} from '../hooks/useRecordList'
import styled from 'styled-components'

type TProps = TMonthRecord & {}

const RecordList = styled.ul`
  margin-bottom: 8px;
`

const MonthRecord: React.FC<TProps> = (props) => {
  const {month, recordList} = props

  return (
    <RecordList>
      {
        recordList && recordList.map(dayRecord => (
          <DayRecord key={dayRecord.day} {...dayRecord}/>
        ))
      }
    </RecordList>
  )
}

export default MonthRecord

import * as React from 'react'
import DayRecord from './DayRecord'
import {TMonthRecord} from '../hooks/useRecordList'
import styled from 'styled-components'
import Divider from './Dividier'

type TProps = TMonthRecord & {}

const Header = styled.div`
  padding: 8px 18px;
  span {
    font-size: ${props => props.theme.$normalTextSize};
    color: ${props => props.theme.$subText}
  }
`

const RecordList = styled.li``

const MonthRecord: React.FC<TProps> = (props) => {
  const {month, recordList} = props

  return (
    <RecordList>
      <Header>
        <span>{month}</span>
        <Divider gap={8}/>
        <span>总支出￥xxx</span>
        <span>总收入￥yyy</span>
      </Header>
      <ul>
        {
          recordList && recordList.map(dayRecord => (
            <DayRecord key={dayRecord.day} {...dayRecord}/>
          ))
        }
      </ul>
    </RecordList>
  )
}

export default MonthRecord

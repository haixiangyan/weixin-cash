import * as React from 'react'
import Category from './Category'
import Divider from './Dividier'
import {DEFAULT_CATEGORIES} from '../lib/category'
import styled from 'styled-components'
import {TRawRecord} from '../hooks/useRecordList'
import dayjs from 'dayjs'
import {TIME} from '../lib/date'
import {Link} from 'react-router-dom'

type TProps = {
  record: TRawRecord
}

const StyledEachRecord = styled(Link)`
  padding: 24px 18px;
  display: flex;
  color: ${props => props.theme.$normalText};
  text-decoration: none;
  .record-content {
    flex-grow: 1;
    padding: 0 16px;
    &-details {
      color: ${props => props.theme.$placeholder};
      > span {
        font-size: ${props => props.theme.$smallTextSize}
      }
    }
    &-amount {
      font-size: ${props => props.theme.$mainTextSize};
    }
  }
`

const EachRecord: React.FC<TProps> = (props) => {
  const {id, date, amount, categoryId, note, type} = props.record

  const category = DEFAULT_CATEGORIES.find(c => c.id === categoryId)
  const time = dayjs(date).format(TIME)

  return (
    <li>
      <StyledEachRecord to={`/record/${id}`}>
        <Category category={category!} type={type}/>
        <div className="record-content">
          <div>其他</div>
          <div className="record-content-details">
            <span>{time}</span>
            <Divider gap={8}/>
            <span>{note}</span>
          </div>
        </div>
        <div className="record-content-amount">
          {type === 'income' ? '+' : '-'}
          {amount}
        </div>
      </StyledEachRecord>
    </li>
  )
}

export default EachRecord

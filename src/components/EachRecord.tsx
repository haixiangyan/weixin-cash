import * as React from 'react'
import Category from './Category'
import Divider from './Dividier'
import {DEFAULT_CATEGORIES} from '../lib/category'
import styled from 'styled-components'
import {TRecord} from '../hooks/useRecordList'

type TProps = {
  record: TRecord
}

const StyledEachRecord = styled.li`
  padding: 24px 18px;
  display: flex;
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
  const {record} = props
  const category = DEFAULT_CATEGORIES.find(c => c.id === record.categoryId)

  return (
    <StyledEachRecord>
      <Category category={category!} type="expense"/>
      <div className="record-content">
        <div>其他</div>
        <div className="record-content-details">
          <span>01:00</span>
          <Divider gap={8}/>
          <span>同程旅行-退款</span>
        </div>
      </div>
      <div className="record-content-amount">
        -8.00
      </div>
    </StyledEachRecord>
  )
}

export default EachRecord

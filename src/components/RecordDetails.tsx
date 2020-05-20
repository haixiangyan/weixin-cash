import * as React from 'react'
import Category from './Category'
import dayjs from 'dayjs'
import {FULL_TIME} from '../lib/date'
import {TRawRecord} from '../hooks/useRecordList'
import {DEFAULT_EXPENSE_CATEGORIES} from '../lib/category'
import styled from 'styled-components'
import Divider from './Dividier'
import Icon from './Icon'

type TProps = {
  rawRecord: TRawRecord
}

const StyledRecordDetails = styled.div`
  padding: 16px;
  background: white;
  border-radius: 8px;
  text-align: center;
  h3 {
    margin: 16px 0;
    font-size: 2.4em;
    font-weight: normal;
    letter-spacing: 1px;
  }
`

const CategorySection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
`

const DetailsTable = styled.table`
  margin-bottom: 16px;
  text-align: left;
  border-spacing: 8px;
  td:first-child {
    color: ${props => props.theme.$subText};
    padding-right: 12px;
  }
`

const DeleteButton = styled.button`
  color: ${props => props.theme.$danger};
  svg {
    fill: ${props => props.theme.$danger}
  }
`

const ActionSection = styled.section`
  display: flex;
  padding: 16px 0 0;
  border-top: 1px solid #eee;
  > button {
    flex-grow: 1;
    background: none;
    border: none;
  }
`

const RecordDetails: React.FC<TProps> = (props) => {
  const {amount, type, date, note, categoryId} = props.rawRecord

  const category = DEFAULT_EXPENSE_CATEGORIES.find(c => c.id === categoryId)
  if (!category) return <div>页面出错</div>

  return (
    <StyledRecordDetails>
      <CategorySection>
        <Category category={category} recordType={type} size={14}/>
        <span style={{marginLeft: 8}}>{category.name}</span>
      </CategorySection>
      <h3>
        {type === 'expense' ? '-' : '+'}
        {amount}
      </h3>
      <DetailsTable>
        <tbody>
        <tr>
          <td>记录时间</td>
          <td>{dayjs(date).format(FULL_TIME)}</td>
        </tr>
        <tr>
          <td>备注</td>
          <td>{note}</td>
        </tr>
        </tbody>
      </DetailsTable>
      <ActionSection>
        <DeleteButton>
          <Icon name="trash"/>
          <span style={{marginLeft: 8}}>删除</span>
        </DeleteButton>
        <Divider gap={0}/>
        <button>
          <Icon name="edit"/>
          <span style={{marginLeft: 8}}>编辑</span>
        </button>
      </ActionSection>
    </StyledRecordDetails>
  )
}

export default RecordDetails

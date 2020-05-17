import * as React from 'react'
import Category from './Category'
import dayjs from 'dayjs'
import {FULL_TIME} from '../lib/date'
import {TRawRecord} from '../hooks/useRecordList'
import {DEFAULT_CATEGORIES} from '../lib/category'
import styled from 'styled-components'

type TProps = {
  rawRecord: TRawRecord
}

const StyledRecordDetails = styled.div`
  padding: 24px;
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

const RecordDetails: React.FC<TProps> = (props) => {
  const {amount, type, date, note, categoryId} = props.rawRecord

  const category = DEFAULT_CATEGORIES.find(c => c.id === categoryId)
  if (!category) return <div>页面出错</div>

  return (
    <StyledRecordDetails>
      <CategorySection>
        <Category category={category} type={type} size={8}/>
        <span style={{marginLeft: 8}}>{category.name}</span>
      </CategorySection>
      <h3>
        {type === 'expense' ? '-' : '+'}
        {amount}
      </h3>
      <table>
        <tbody>
        <tr>
          <td className="record-field-key">记录时间</td>
          <td>{dayjs(date).format(FULL_TIME)}</td>
        </tr>
        <tr>
          <td className="record-field-key">备注</td>
          <td>{note}</td>
        </tr>
        </tbody>
      </table>
      <footer>
        <button>删除</button>
        <button>编辑</button>
      </footer>
    </StyledRecordDetails>
  )
}

export default RecordDetails

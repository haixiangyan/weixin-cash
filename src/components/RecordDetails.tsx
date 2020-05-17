import * as React from 'react'
import Category from './Category'
import dayjs from 'dayjs'
import {FULL_TIME} from '../lib/date'
import {TRawRecord} from '../hooks/useRecordList'
import {DEFAULT_CATEGORIES} from '../lib/category'

type TProps = {
  rawRecord: TRawRecord
}

const RecordDetails: React.FC<TProps> = (props) => {
  const {amount, type, date, note, categoryId} = props.rawRecord

  const category = DEFAULT_CATEGORIES.find(c => c.id === categoryId)
  if (!category) return <div>页面出错</div>

  return (
    <div>
      <section>
        <Category category={category} type={type}/>
        <h3>
          {type === 'expense' ? '-' : '+'}
          {amount}
        </h3>
      </section>
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
    </div>
  )
}

export default RecordDetails

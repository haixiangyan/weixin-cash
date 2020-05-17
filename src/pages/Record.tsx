import * as React from 'react'
import {useParams, useHistory} from 'react-router-dom'
import Icon from '../components/Icon'
import Category from '../components/Category'
import useRecordList from '../hooks/useRecordList'
import {DEFAULT_CATEGORIES} from '../lib/category'
import dayjs from 'dayjs'
import {FULL_TIME} from '../lib/date'

type TParams = {
  id: string
}

const Record: React.FC = () => {
  const {id} = useParams<TParams>()
  const {goBack} = useHistory()
  const {rawRecordList} = useRecordList()

  const rawRecord = rawRecordList.find(r => r.id === id)
  if (!rawRecord) return <div>页面出错</div>
  const {amount, type, date, note} = rawRecord

  const category = DEFAULT_CATEGORIES.find(c => c.id === rawRecord!.categoryId)
  if (!category) return <div>页面出错</div>

  return (
    <div>
      <header>
        <Icon name="left" onClick={goBack}/>
      </header>

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
      </div>

      <footer>
        <button>删除</button>
        <button>编辑</button>
      </footer>
    </div>
  )
}

export default Record

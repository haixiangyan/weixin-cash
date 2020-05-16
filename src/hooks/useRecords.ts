import dayjs from 'dayjs'
import {useState} from 'react'

export type TRecordType = 'expense' | 'income'

const DEFAULT_RECORDS: TRecord[] = [
  {
    date: dayjs('2020-05-04').toISOString(),
    categoryId: 2,
    amount: 300,
    note: '吃黄焖鸡米饭',
    type: 'expense'
  },
  {
    date: dayjs('2020-05-04').toISOString(),
    categoryId: 3,
    amount: 400,
    note: '工资',
    type: 'income'
  }
]

type TRecord = {
  date: string | Date
  categoryId: number
  amount: number
  note: string
  type: TRecordType
}

const useRecords = () => {
  const [recordList] = useState<TRecord[]>(DEFAULT_RECORDS)

  const parseRecords = (records: TRecord[]) => {

  }

  return {recordList}
}

export default useRecords

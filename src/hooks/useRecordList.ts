import dayjs from 'dayjs'
import {useState} from 'react'
import {DAY, MONTH} from '../lib/date'

export type TRecordType = 'expense' | 'income'
export type TRecord = {
  date: string | Date
  categoryId: number
  amount: number
  note: string
  type: TRecordType
}
export type TDayRecord= {
  day: string
  recordList: TRecord[]
}
export type TMonthRecord = {
  month: string
  recordList: TDayRecord[]
}

export const DEFAULT_RECORDS: TRecord[] = [
  {
    date: dayjs('2020-06-04').toISOString(),
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
  },
  {
    date: dayjs('2020-05-03').toISOString(),
    categoryId: 4,
    amount: 200,
    note: '衣服',
    type: 'expense'
  },
  {
    date: dayjs('2020-05-03').toISOString(),
    categoryId: 1,
    amount: 500,
    note: '学费',
    type: 'expense'
  }
]

// 追加单个 Record
export const appendRecord = (prevRecordList: TMonthRecord[], rawRecord: TRecord) => {
  const month = dayjs(rawRecord.date).format(MONTH)
  const day = dayjs(rawRecord.date).format(DAY)
  // 找 month
  let monthRecord = prevRecordList.find((m: TMonthRecord) => m.month === month)
  if (!monthRecord) {
    monthRecord = {month, recordList: []}
    prevRecordList.push(monthRecord)
  }

  // 找 day
  let dayRecord = monthRecord.recordList.find((d: TDayRecord) => d.day === day)
  if (!dayRecord) {
    dayRecord = {day, recordList: []}
    monthRecord.recordList.push(dayRecord)
  }

  // 插入值
  dayRecord.recordList.push(rawRecord)
}

// 批量追加多个 Record
export const bulkAppendRecords = (prevRecordList: TMonthRecord[], rawRecordList: TRecord[]) => {
  let recordList: TMonthRecord[] = JSON.parse(JSON.stringify(prevRecordList))

  rawRecordList.forEach((rawRecord: TRecord) => {
    appendRecord(recordList, rawRecord)
  })

  return recordList
}

const useRecordList = () => {
  const [recordList] = useState<TMonthRecord[]>(bulkAppendRecords([], DEFAULT_RECORDS))

  return {recordList, appendRecord, bulkAppendRecords}
}

export default useRecordList

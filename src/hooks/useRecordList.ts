import dayjs from 'dayjs'
import {useState} from 'react'
import {DAY, MONTH} from '../lib/date'

export type TRecordType = 'expense' | 'income'
export type TRawRecord = {
  id: string
  date: string
  categoryId: number
  amount: number
  note: string
  type: TRecordType
}
export type TRecord = {
  incomeTotal: number
  expenseTotal: number
}
export type TDayRecord = TRecord & {
  day: string
  recordList: TRawRecord[]
}
export type TMonthRecord = TRecord & {
  month: string
  recordList: TDayRecord[]
}

export const RECORD_TYPE_MAPPER = {
  'expense': -1,
  'income': 1,
  'none': 0
}

export const DEFAULT_RECORDS: TRawRecord[] = [
  {
    id: '1',
    date: dayjs('2020-04-04').toISOString(),
    categoryId: 2,
    amount: 300,
    note: '吃黄焖鸡米饭',
    type: 'expense'
  },
  {
    id: '2',
    date: dayjs('2020-03-04').toISOString(),
    categoryId: 3,
    amount: 400,
    note: '工资',
    type: 'income'
  },
  {
    id: '3',
    date: dayjs('2020-03-03').toISOString(),
    categoryId: 4,
    amount: 200,
    note: '衣服',
    type: 'expense'
  },
  {
    id: '4',
    date: dayjs('2020-03-03').toISOString(),
    categoryId: 1,
    amount: 500,
    note: '学费',
    type: 'expense'
  }
]

// 追加单个 Record
export const appendRecord = (prevRecordList: TMonthRecord[], rawRecord: TRawRecord) => {
  const month = dayjs(rawRecord.date).format(MONTH)
  const day = dayjs(rawRecord.date).format(DAY)
  // 找 month
  let monthRecord = prevRecordList.find((m: TMonthRecord) => m.month === month)
  if (!monthRecord) {
    monthRecord = {month, incomeTotal: 0, expenseTotal: 0, recordList: []}
    prevRecordList.push(monthRecord)
  }

  // 找 day
  let dayRecord = monthRecord.recordList.find((d: TDayRecord) => d.day === day)
  if (!dayRecord) {
    dayRecord = {day, incomeTotal: 0, expenseTotal: 0, recordList: []}
    monthRecord.recordList.push(dayRecord)
  }

  // 插入值
  dayRecord.recordList.push(rawRecord)

  // 更新 total
  updateTotal(monthRecord, dayRecord, rawRecord)
}

const updateTotal = (monthRecord: TMonthRecord, dayRecord: TDayRecord, rawRecord: TRawRecord) => {
  const {amount, type} = rawRecord

  const diff = amount * RECORD_TYPE_MAPPER[type]

  if (type === 'expense') {
    dayRecord.expenseTotal += diff
    monthRecord.expenseTotal += diff
  } else {
    dayRecord.incomeTotal += diff
    monthRecord.incomeTotal += diff
  }
}

// 批量追加多个 Record
export const bulkAppendRecords = (prevRecordList: TMonthRecord[], rawRecordList: TRawRecord[]) => {
  let recordList: TMonthRecord[] = JSON.parse(JSON.stringify(prevRecordList))

  rawRecordList.forEach((rawRecord: TRawRecord) => {
    appendRecord(recordList, rawRecord)
  })

  return recordList
}

const useRecordList = () => {
  const [recordList] = useState<TMonthRecord[]>(bulkAppendRecords([], DEFAULT_RECORDS))

  const getMonthRecord = (month: string) => { // '2020年4月'
    return recordList.find(m => m.month === month)
  }

  return {recordList, appendRecord, bulkAppendRecords, getMonthRecord}
}

export default useRecordList

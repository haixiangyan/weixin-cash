import dayjs, {Dayjs} from 'dayjs'
import {useEffect, useState} from 'react'
import {DAY, MONTH} from '../lib/date'
import {ALL_TYPE} from '../lib/category'

export type TRecordType = 'expense' | 'income'
export type TRawRecord = {
  id: string
  date: string
  categoryId: string
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

export const DEFAULT_RECORDS: TRawRecord[] = [
  {
    id: '1',
    date: dayjs('2020-04-04').toISOString(),
    categoryId: '4',
    amount: 300,
    note: '吃黄焖鸡米饭',
    type: 'expense'
  },
  {
    id: '2',
    date: dayjs('2020-03-04').toISOString(),
    categoryId: '9',
    amount: 400,
    note: '工资',
    type: 'income'
  },
  {
    id: '3',
    date: dayjs('2020-03-03').toISOString(),
    categoryId: '1',
    amount: 200,
    note: '买衣服',
    type: 'expense'
  },
  {
    id: '4',
    date: dayjs('2020-03-03').toISOString(),
    categoryId: '5',
    amount: 500,
    note: '去巴哈马',
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

  if (type === 'expense') {
    dayRecord.expenseTotal += amount
    monthRecord.expenseTotal += amount
  } else {
    dayRecord.incomeTotal += amount
    monthRecord.incomeTotal += amount
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

export const parseMonthRecord = (monthRecord: TMonthRecord) => {
  let rawRecordList: TRawRecord[] = []
  monthRecord.recordList.forEach(m =>
    m.recordList.forEach((d =>
      rawRecordList.push(d))
    )
  )
  return rawRecordList
}

const useRecordList = () => {
  const ITEM_NAME = 'rawRecordList'

  const [rawRecordList, setRawRecordList] = useState<TRawRecord[]>([])
  const [recordList, setRecordList] = useState<TMonthRecord[]>([])

  // 获取 raw record list
  useEffect(() => fetchData(), [])

  const fetchData = () => {
    const rawString = window.localStorage.getItem(ITEM_NAME)

    const rawRecordList = !rawString ? DEFAULT_RECORDS : JSON.parse(rawString)

    setRawRecordList(rawRecordList)
    setRecordList(bulkAppendRecords([], rawRecordList))
  }

  const getMonthRecord = (month: string) => { // '2020年4月'
    return recordList.find(m => m.month === month)
  }

  const addRawRecord = (rawRecord: TRawRecord) => {
    const newRawRecordList = [rawRecord, ...rawRecordList]

    window.localStorage.setItem(ITEM_NAME, JSON.stringify(newRawRecordList))

    setRawRecordList(newRawRecordList)
    setRecordList(bulkAppendRecords([], newRawRecordList))
  }

  const filterRecordList = (categoryId: string, month: Dayjs) => {
    const filtered = rawRecordList.filter(r => {
      if (categoryId === ALL_TYPE) return true // 所有类型
      return r.categoryId === categoryId // 对应类型
    }).filter(r => {
      if (month.isSame(dayjs(), 'month')) return true // 当月
      return dayjs(r.date).isSame(month, 'month') // 对应月份
    })

    return bulkAppendRecords([], filtered)
  }

  const deleteRecord = (id: string) => {
    const newRawRecordList = rawRecordList.filter(r => r.id !== id)

    // 保存
    window.localStorage.setItem(ITEM_NAME, JSON.stringify(newRawRecordList))

    setRawRecordList(newRawRecordList)
    setRecordList(bulkAppendRecords([], newRawRecordList))
  }

  const editRecord = (rawRecord: TRawRecord) => {
    const copy: TRawRecord[] = JSON.parse(JSON.stringify(rawRecordList))
    let index = -1

    // 找到该 record
    copy.some((r, i) => {
      if (r.id === rawRecord.id) {
        index = i
        return true
      }
      return false
    })

    const newRawRecordList = [
      ...copy.slice(0, index),
      {...rawRecord},
      ...copy.slice(index + 1)
    ]

    // 保存
    window.localStorage.setItem(ITEM_NAME, JSON.stringify(newRawRecordList))

    setRawRecordList(newRawRecordList)
    setRecordList(bulkAppendRecords([], newRawRecordList))
  }

  return {
    rawRecordList,
    setRawRecordList,
    recordList,
    appendRecord,
    bulkAppendRecords,
    addRawRecord,
    getMonthRecord,
    fetchData,
    filterRecordList,
    deleteRecord,
    editRecord
  }
}

export default useRecordList

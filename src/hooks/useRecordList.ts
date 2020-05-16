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

export const parseRecordList = (rawRecordList: TRecord[]) => {
  let list: any = []

  rawRecordList.forEach((rawRecord: TRecord) => {
    const month = dayjs(rawRecord.date).format(MONTH)
    const day = dayjs(rawRecord.date).format(DAY)
    // 找 month
    let monthData = list.find((item: any) => item.month === month)
    if (!monthData) {
      monthData = {month, recordList: []}
      list.push(monthData)
    }

    // 找 day
    let dayData = monthData.recordList.find((item: any) => item.day === day)
    if (!dayData) {
      dayData = {day, recordList: []}
      monthData.recordList.push(dayData)
    }

    // 插入值
    dayData.recordList.push(rawRecord)
  })

  return list
}

const useRecordList = () => {
  const [recordList] = useState<TRecord[]>(parseRecordList(DEFAULT_RECORDS))

  return {recordList}
}

export default useRecordList

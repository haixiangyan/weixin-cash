import dayjs from 'dayjs'
import {bulkAppendRecords, TRawRecord} from '../hooks/useRecordList'

describe('useRecordList', () => {
  it('bulkAppendRecords', () => {
    const rawRecordList: TRawRecord[] = [
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

    const expectedRecordList = [
      {
        month: '2020年06月', recordList: [
          {day: '06月04日', recordList: [rawRecordList[0]]}
        ]
      },
      {
        month: '2020年05月', recordList: [
          {
            day: '05月04日',
            recordList: [rawRecordList[1]]
          },
          {
            day: '05月03日',
            recordList: [rawRecordList[2], rawRecordList[3]]
          }
        ]
      }
    ]

    const recordList = bulkAppendRecords([], rawRecordList)
    expect(recordList).toStrictEqual(expectedRecordList)
  })
})

export default {}

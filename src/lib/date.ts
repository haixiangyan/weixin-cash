import {Dayjs} from 'dayjs'

export const MONTH = 'YYYY年MM月'
export const DAY = 'MM月DD日'
export const TIME = 'hh:mm'
export const FULL_TIME = 'YYYY年MM月DD日 hh:mm'

export const getDaysInMonth = (now: Dayjs) => {
  const year = now.get('year')
  const month = now.get('month')

  const days = new Date(year, month + 1, 0).getDate()

  return [...Array(days)].map((_, i) => i + 1)
}

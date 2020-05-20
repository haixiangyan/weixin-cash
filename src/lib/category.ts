import theme from '../theme'

export const CATEGORY_COLOR = {
  none: {
    background: '#ECECEC',
    fill: '#C7C7C7'
  },
  expense: {
    background: theme.$success,
    fill: 'white'
  },
  income: {
    background: theme.$warning,
    fill: 'white'
  }
}

export const DEFAULT_INCOME_CATEGORIES = [
  {
    id: 1,
    name: '服饰美容',
    iconName: 'shirt'
  },
  {
    id: 2,
    name: '餐饮',
    iconName: 'rice'
  },
  {
    id: 3,
    name: '交通',
    iconName: 'bus'
  },
]

export const DEFAULT_EXPENSE_CATEGORIES = [
  {
    id: 1,
    name: '服饰美容',
    iconName: 'shirt'
  },
  {
    id: 2,
    name: '餐饮',
    iconName: 'rice'
  },
  {
    id: 3,
    name: '交通',
    iconName: 'bus'
  },
  {
    id: 4,
    name: '住房缴费',
    iconName: 'house'
  },
  {
    id: 5,
    name: '购物',
    iconName: 'shop-bag'
  },
  {
    id: 6,
    name: '生活服务',
    iconName: 'water-drop'
  },
  {
    id: 7,
    name: '学习',
    iconName: 'study'
  },
  {
    id: 8,
    name: '娱乐',
    iconName: 'microphone'
  },
  {
    id: 9,
    name: '运动',
    iconName: 'basketball'
  },
  {
    id: 10,
    name: '旅游',
    iconName: 'balloon'
  },
  {
    id: 11,
    name: '酒店',
    iconName: 'taxi'
  },
  {
    id: 12,
    name: '亲子',
    iconName: 'baby'
  },
  {
    id: 13,
    name: '宠物',
    iconName: 'footprint'
  },
  {
    id: 14,
    name: '医疗',
    iconName: 'pill'
  },
  {
    id: 15,
    name: '其他人情',
    iconName: 'smile'
  },
  {
    id: 16,
    name: '其他',
    iconName: 'rmb'
  },
]


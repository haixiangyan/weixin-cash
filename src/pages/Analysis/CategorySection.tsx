import * as React from 'react'
import {useState} from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import {parseMonthRecord, TMonthRecord, TRawRecord, TRecordType} from '../../hooks/useRecordList'
import {ALL_CATEGORIES} from '../../lib/category'
import Category, {TCategory} from '../../components/Category'
import ProgressBar from '../../components/ProgressBar'
import theme from '../../theme'

type TProps = {
  monthRecord?: TMonthRecord
}

type TClass = {
  amount: number
  category: TCategory
  ratio: number
}

const Section = styled.section`
  margin: 8px 0;
  padding: 24px;
  background: white;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > span {
    font-size: ${props => props.theme.$largeTextSize};
  }
`

const ClassList = styled.ul`
  margin-top: 32px;
  list-style: none;
`

const ClassItem = styled.li`
  display: flex;
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
  
  > span {
    display: inline-flex;
    align-items: center;
    &.ratio {
      padding-right: 16px;
      justify-content: flex-end;
      text-align: right;
      flex-grow: 1;
    }
  }
`

const Empty = styled.div`
  margin-top: 32px;
  text-align: center;
  color: ${props => props.theme.$subText};
`

const getRawRecordList = (monthRecord: TMonthRecord | undefined, type: TRecordType) => {
  if (!monthRecord) return []

  return parseMonthRecord(monthRecord).filter(r => r.type === type)
}

const classify = (rawRecordList: TRawRecord[]) => {
  let classified: { [key: string]: TClass } = {}
  let total = 0

  rawRecordList.forEach(r => {
    const {categoryId} = r

    if (!(categoryId in classified)) {
      classified[categoryId] = {
        amount: 0,
        category: ALL_CATEGORIES.find(c => c.id === categoryId)!,
        ratio: 0.0
      }
    }

    total += r.amount

    classified[categoryId].amount += r.amount
    classified[categoryId].ratio = classified[categoryId].amount / total
  })

  // 计算 ratio
  Object.values(classified).forEach(c => c.ratio = c.amount / total)

  return Object.values(classified).sort((a, b) => b.ratio - a.ratio)
}

const CategorySection: React.FC<TProps> = (props) => {
  const {monthRecord} = props

  const [type, setType] = useState<TRecordType>('expense')

  const rawRecordList = getRawRecordList(monthRecord, type)
  const classified = classify(rawRecordList)

  return (
    <Section>
      <Header>
        <span>收支构成</span>

        <span>
          <Button recordType={type === 'expense' ? 'success' : 'none'}
                  onClick={() => setType('expense')}>
            支出
          </Button>
          <Button recordType={type === 'income' ? 'warning' : 'none'}
                  onClick={() => setType('income')}>
            收入
          </Button>
        </span>
      </Header>

      {
        classified.length !== 0 ?
          <ClassList>
            {classified.map(({category, amount, ratio}) => (
              <ClassItem key={category.id}>
                <span className="category">
                  <Category category={category} recordType={type} size={14}/>
                  <span style={{marginLeft: 8}}>{category.name}</span>
                </span>
                <span className="ratio">
                  <ProgressBar color={type === 'expense' ? theme.$success : theme.$warning}
                               value={ratio}
                               width={110}
                               height={6}/>
                </span>
                <span className="amount">
                  ￥{amount.toFixed(2)}
                </span>
              </ClassItem>
            ))}
          </ClassList>
          :
          <Empty>暂无数据</Empty>
      }
    </Section>
  )
}

export default CategorySection

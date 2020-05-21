import * as React from 'react'
import {useState} from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import Category from './Category'
import {DEFAULT_EXPENSE_CATEGORIES, DEFAULT_INCOME_CATEGORIES} from '../lib/category'
import {TRawRecord, TRecordType} from '../hooks/useRecordList'
import Button from './Button'
import NumberPad from './NumbePad'

type TProps = {
  closeDrawer: () => void
  onSubmit: (newRawRecord: TRawRecord) => void
}

const Header = styled.header`
  padding: 16px;
`

const TypeSection = styled.section`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const AmountSection = styled.section`
  display: flex;
  width: 90%;
  margin: 0 auto;
  border-bottom: 1px solid #eee;
  > span {
    font-size: 2.5em;
  }
  > div {
    padding-left: 8px;
    flex-grow: 1;
    border: none;
    outline: none;
    height: 64px;
    font-size: 2em;
    line-height: 2em;
    text-align: right;
  }
`

const CategoryList = styled.ul`
  padding: 24px;
  display: flex;
  align-items: center;
  overflow-x: auto;
  list-style: none;
  &::-webkit-scrollbar {
    width: 0
  }
`

const CategoryItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 16px;
  &:last-child {
    margin-right: 0;
  }
`

const CategoryText = styled.span`
  font-size: .8em;
  margin-top: 8px;
  color: ${props => props.theme.$subText};
  word-break: keep-all;
`

const NoteSection = styled.section`
  padding: 0 24px 24px;
  > span {
    color: ${props => props.theme.$linkText};
    cursor: pointer;
  }
`

const NumberPadSection = styled.section`
  padding: 4px;
  background: #FAFAFA;
`

const Money: React.FC<TProps> = (props) => {
  const {closeDrawer, onSubmit} = props
  const [recordType, setRecordType] = useState<TRecordType>('expense')
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(DEFAULT_EXPENSE_CATEGORIES[0].id)
  const [amount, setAmount] = useState(0)
  const [amountString, setAmountString] = useState('0')

  const categories = recordType === 'expense' ? DEFAULT_EXPENSE_CATEGORIES : DEFAULT_INCOME_CATEGORIES

  const onChangeAmount = (newValue: string) => {
    setAmountString(newValue)
    setAmount(parseFloat(newValue))
  }

  const onOK = () => {
    if (amount === 0) return alert('金额不能为0')

    const newRawRecord = {
      amount,
      categoryId: selectedCategoryId,
      date: new Date().toISOString(),
      id: new Date().getTime().toString(),
      note: '',
      type: recordType
    }

    onSubmit(newRawRecord)

    closeDrawer()

    alert('已添加该记录')
  }

  return (
    <div>
      <Header>
        <Icon onClick={closeDrawer} name="cancel" size={18}/>
      </Header>
      <TypeSection>
        <div>
          <Button recordType={recordType === 'expense' ? 'success' : 'none'}
                  onClick={() => setRecordType('expense')}>
            支出
          </Button>
          <Button recordType={recordType === 'income' ? 'warning' : 'none'}
                  onClick={() => setRecordType('income')}>
            收入
          </Button>
        </div>
        <Button style={{marginRight: 0}}>
          <span style={{marginRight: 4}}>5月5号</span>
          <Icon name="dropdown" size={8}/>
        </Button>
      </TypeSection>
      <AmountSection>
        <span>￥</span>
        <div>{amountString}</div>
      </AmountSection>
      <CategoryList>
        {
          categories.map((category => (
            <CategoryItem key={category.id}
                          onClick={() => setSelectedCategoryId(category.id)}>
              <Category category={category}
                        recordType={selectedCategoryId === category.id ? recordType : 'none'}
                        size={20}/>
              <CategoryText>{category.name}</CategoryText>
            </CategoryItem>
          )))
        }
      </CategoryList>
      <NoteSection>
        <span>添加备注</span>
      </NoteSection>
      <NumberPadSection>
        <NumberPad value={amountString}
                   recordType={recordType}
                   onChange={onChangeAmount}
                   onOK={onOK}/>
      </NumberPadSection>
    </div>
  )
}

export default Money

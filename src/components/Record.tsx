import * as React from 'react'
import Divider from './Dividier'
import styled from 'styled-components'
import Tag from './Tag'
import Category from './Category'
import {DEFAULT_CATEGORIES} from '../lib/category'

export type TRecordType = 'expense' | 'income'

const StyledRecord = styled.li`
  border-radius: 8px;
  margin-bottom: 8px;
  background: white;
  color: ${props => props.theme.$mainText};
  overflow: hidden;
  &:last-child {
    margin-bottom: 0;
  }
`

const Header = styled.header`
  padding: 24px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FBFBFB;
  span {
    font-size: ${props => props.theme.$mainTextSize};
  }
`

const DateSection = styled.section``

const AmountSection = styled.section`
  display: flex;
  align-items: center;
  color: ${props => props.theme.$normalText};
  > span {
    font-size: ${props => props.theme.$normalTextSize};
  }
`

const Main = styled.section`
  padding: 24px 18px;
  display: flex;
  .record-content {
    flex-grow: 1;
    padding: 0 16px;
    &-details {
      color: ${props => props.theme.$placeholder};
      > span {
        font-size: ${props => props.theme.$smallTextSize}
      }
    }
    &-amount {
      font-size: ${props => props.theme.$mainTextSize};
    }
  }
`

const Record: React.FC = () => {
  const category = DEFAULT_CATEGORIES[2]

  return (
    <StyledRecord>
      <Header>
        <DateSection>
          <span style={{marginRight: 8}}>5月14日</span>
          <span>星期二</span>
        </DateSection>
        <AmountSection>
          <Tag>支</Tag>
          <span style={{marginRight: 16}}>359.00</span>
          <Tag>收</Tag>
          <span>888.00</span>
        </AmountSection>
      </Header>

      <Main>
        <Category category={category} type="expense"/>
        <div className="record-content">
          <div>其他</div>
          <div className="record-content-details">
            <span>01:00</span>
            <Divider gap={8}/>
            <span>同程旅行-退款</span>
          </div>
        </div>
        <div className="record-content-amount">
          -8.00
        </div>
      </Main>
    </StyledRecord>
  )
}

export default Record

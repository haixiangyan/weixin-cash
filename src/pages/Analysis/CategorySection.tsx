import * as React from 'react'
import {useState} from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import {TRecordType} from '../../hooks/useRecordList'

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

const CategoryList = styled.ul`
  margin-top: 24px;
  list-style: none;
`

const CategorySection: React.FC = () => {
  const [type, setType] = useState<TRecordType>('expense')

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

      <CategoryList>
        <li>hello</li>
      </CategoryList>
    </Section>
  )
}

export default CategorySection

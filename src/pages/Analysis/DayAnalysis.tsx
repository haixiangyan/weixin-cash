import * as React from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import {useState} from 'react'
import {TRecordType} from '../../hooks/useRecordList'

const Section = styled.section`
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > span {
    font-size: ${props => props.theme.$mainTextSize};
  }
`

const DayAnalysis: React.FC = () => {
  const [type, setType] = useState<TRecordType>('expense')

  return (
    <Section>
      <Header>
        <span>每日对比</span>

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
    </Section>
  )
}

export default DayAnalysis

import * as React from 'react'
import Divider from './Dividier'
import styled from 'styled-components'
import Tag from './Tag'

const StyledRecord = styled.li`
  border-radius: 8px;
  margin-bottom: 8px;
  background: white;
  &:last-child {
    margin-bottom: 0;
  }
  color: ${props => props.theme.$mainText};
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

const Record: React.FC = () => {
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

      <section>
        <div>ICON</div>
        <div>
          <div>其他</div>
          <div>
            <span>01:00</span>
            <Divider/>
            <span>同程旅行-退款</span>
          </div>
        </div>
        <div>
          -8.00
        </div>
      </section>
    </StyledRecord>
  )
}

export default Record

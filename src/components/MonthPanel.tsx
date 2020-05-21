import * as React from 'react'
import Icon from './Icon'
import styled from 'styled-components'
import dayjs from 'dayjs'

type TProps = {
  closeDrawer: () => void
}

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #eee;
  font-size: ${props => props.theme.$largeTextSize};
  background:  #FAFAFA;
`

const Main = styled.section`
  padding: 0 16px;
  background:  #FAFAFA;
`

const Year = styled.section`
  > p {
    padding: 16px 0;
    text-align: center;
    color: ${props => props.theme.$subText};
  }
`

const MonthList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  > li {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: 4px solid #FAFAFA;
    width: 25%;
    height: 64px;
    background: white;
    font-size: 1.1em;
    padding: 32px 16px;
  }
`

const getPrevMonths = () => {
  const DURATION = 5

  return [...Array(DURATION)].map((_, index) => dayjs().subtract(index, 'month'))
}

const MonthPanel: React.FC<TProps> = (props) => {
  const {closeDrawer} = props

  const thisYear = dayjs()
  const prevYear = dayjs().subtract(1, 'year')

  const prevMonths = getPrevMonths()
  const prevYearMonths = prevMonths.filter(m => m.isSame(prevYear, 'year'))
  const thisYearMonths = prevMonths.filter(m => m.isSame(thisYear, 'year'))

  return (
    <div>
      <Header>
        <Icon onClick={closeDrawer} name="cancel" size={18}/>
        <span>请选择月份</span>
        <Icon name="cancel" color="transparent"/>
      </Header>

      <Main>
        {/*今年的月份*/}
        {
          thisYearMonths &&
          <Year>
            <p>{thisYear.get('year')}</p>
            <MonthList>
              {thisYearMonths.map(m =>
                <li key={m.get('month')}>
                  {m.get('month') + 1}月
                </li>
              )}
            </MonthList>
          </Year>
        }

        {/*去年的月份*/}
        {
          prevYearMonths.length !== 0 &&
          <Year>
            <p>{prevYear.get('year')}</p>
            <MonthList>
              {prevYearMonths.map(m =>
                <li key={m.get('month')}>
                  {m.get('month') + 1}月
                </li>
              )}
            </MonthList>
          </Year>
        }
      </Main>
    </div>
  )
}

export default MonthPanel

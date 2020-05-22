import * as React from 'react'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import MonthFilterSection from './MonthFilterSection'
import Drawer from '../../components/Drawer'
import MonthPanel from '../../components/MonthPanel'
import dayjs, {Dayjs} from 'dayjs'
import {useState} from 'react'

const StyledAnalysis = styled.div`
  flex-grow: 1;
`

const Analysis: React.FC = () => {
  const [showMonth, toggleMonth] = useState(false)

  const [month, setMonth] = useState(dayjs())

  return (
    <Layout>
      <StyledAnalysis>
        <MonthFilterSection showMonth={() => toggleMonth(true)}/>
      </StyledAnalysis>


      {/*选择月份*/}
      <Drawer show={showMonth}
              title="请选择月份"
              closeDrawer={() => toggleMonth(false)}>
        <MonthPanel value={month}
                    closeDrawer={() => toggleMonth(false)}
                    onSubmit={(newMonth: Dayjs) => setMonth(newMonth)}/>
      </Drawer>
    </Layout>
  )
}

export default Analysis

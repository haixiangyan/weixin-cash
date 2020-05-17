import * as React from 'react'
import {useHistory, useParams} from 'react-router-dom'
import Icon from '../components/Icon'
import useRecordList from '../hooks/useRecordList'
import styled from 'styled-components'
import RecordDetails from '../components/RecordDetails'

type TParams = {
  id: string
}

const Header = styled.header`
  padding: 12px;
`

const Main = styled.section`
  padding: 0 12px;
`

const Details: React.FC = () => {
  const {goBack} = useHistory()
  const {id} = useParams<TParams>()

  const {rawRecordList} = useRecordList()

  const rawRecord = rawRecordList.find(r => r.id === id)
  if (!rawRecord) return <div>页面出错</div>

  return (
    <div>
      <Header>
        <Icon name="left" onClick={goBack} size="1.5em"/>
      </Header>

      <Main>
        <RecordDetails rawRecord={rawRecord}/>
      </Main>
    </div>
  )
}

export default Details

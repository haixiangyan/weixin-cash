import * as React from 'react'
import {useHistory, useParams} from 'react-router-dom'
import Icon from '../components/Icon'
import useRecordList, {TRawRecord} from '../hooks/useRecordList'
import styled from 'styled-components'
import RecordDetails from '../components/RecordDetails'
import Drawer from '../components/Drawer'
import Money from '../components/Money'
import {useState} from 'react'

type TParams = {
  id: string
}

const Header = styled.header`
  padding: 24px 12px;
`

const Main = styled.section`
  padding: 0 12px;
`

const Details: React.FC = () => {
  const {goBack, push} = useHistory()
  const {id} = useParams<TParams>()

  const {rawRecordList, deleteRecord, editRecord} = useRecordList()

  const [showMoney, toggleMoney] = useState(false)

  // 是否找到该 record
  const rawRecord = rawRecordList.find(r => r.id === id)
  if (!rawRecord) return <div>页面出错</div>

  const onDelete = (id: string) => {
    deleteRecord(id)

    push('/')

    alert('删除成功')
  }

  const onEdit = (rawRecord: TRawRecord) => {
    editRecord(rawRecord)

    alert('修改成功')
  }

  return (
    <div>
      <Header>
        <Icon name="left" onClick={goBack} size={24}/>
      </Header>

      <Main>
        <RecordDetails onDelete={onDelete}
                       onEdit={() => toggleMoney(true)}
                       rawRecord={rawRecord}/>
      </Main>

      {/*记账*/}
      <Drawer show={showMoney}
              closeDrawer={() => toggleMoney(false)}>
        <Money closeDrawer={() => toggleMoney(false)}
               value={rawRecord}
               onSubmit={onEdit}/>
      </Drawer>
    </div>
  )
}

export default Details

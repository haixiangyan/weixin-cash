import * as React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Icon from '../components/Icon'

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background: white;
  border-bottom: 1px solid #eee;
  > span {
    margin-left: 8px;
  }
  :active {
    background: #D6D6D6;
  }
`

const Settings: React.FC = () => {
  return (
    <Layout>
      <Main>
        <Item style={{marginBottom: 8}}>
          <Icon name="qrcode"/>
          <span>把记账本推荐给朋友</span>
        </Item>

        <Item>
          <Icon name="github"/>
          <span>点个Star支持一下</span>
        </Item>

        <Item>
          <Icon name="message"/>
          <span>联系我</span>
        </Item>
      </Main>
    </Layout>
  )
}

export default Settings

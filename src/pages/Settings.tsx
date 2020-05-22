import * as React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Icon from '../components/Icon'
import Drawer from '../components/Drawer'
import {useState} from 'react'

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

const QrCode = styled.div`
  padding: 32px;
  text-align: center;
  > p {
    font-size: ${props => props.theme.$largeTextSize};
  }
  > img {
    margin-top: 24px;
    width: 200px;
  }
`

const Settings: React.FC = () => {
  const [qrcode, toggleQrcode] = useState(false)

  const github = 'https://github.com/Haixiang6123/weixin-cash'

  return (
    <Layout>
      <Main>
        <Item style={{marginBottom: 8}} onClick={() => toggleQrcode(true)}>
          <Icon name="qrcode"/>
          <span>把记账本推荐给朋友</span>
        </Item>

        <Item onClick={() => window.open(github, '_blank')}>
          <Icon name="github"/>
          <span>点个Star支持一下</span>
        </Item>

        <Item>
          <Icon name="message"/>
          <span>联系我</span>
        </Item>
      </Main>

      <Drawer show={qrcode} closeDrawer={() => toggleQrcode(false)}>
        <QrCode>
          <p>扫一下面二维码以分享该记账本</p>
          <img src={require('../assets/img/qrcode.png')} alt=""/>
        </QrCode>
      </Drawer>
    </Layout>
  )
}

export default Settings

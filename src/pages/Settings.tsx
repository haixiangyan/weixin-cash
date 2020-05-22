import * as React from 'react'
import {useState} from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Icon from '../components/Icon'
import Drawer from '../components/Drawer'

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`

const Item = styled.div`
  padding-left: 16px;
  display: flex;
  align-items: center;
  background: white;
  > span {
    padding: 16px 0;
    margin-left: 16px;
    font-size: 1.2em;
    flex-grow: 1;
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

const Contact = styled.div`
  padding: 24px;
  text-align: center;
  span, a {
    font-size: ${props => props.theme.$largeTextSize};
  }
`

const Settings: React.FC = () => {
  const [showQrCode, toggleQrcode] = useState(false)
  const [showContact, toggleContact] = useState(false)

  const github = 'https://github.com/Haixiang6123/weixin-cash'

  return (
    <Layout>
      <Main>
        <Item style={{marginBottom: 8}} onClick={() => toggleQrcode(true)}>
          <Icon size={22} name="qrcode" color="#ff9800"/>
          <span>把记账本推荐给朋友</span>
        </Item>

        <Item onClick={() => window.open(github, '_blank')}>
          <Icon size={22} name="github" color="black"/>
          <span style={{borderBottom: '1px solid #eee'}}>点个Star支持一下</span>
        </Item>

        <Item onClick={() => toggleContact(true)}>
          <Icon size={22} name="message" color="#03a9f4"/>
          <span>联系我</span>
        </Item>
      </Main>

      {
        showQrCode &&
        <Drawer closeDrawer={() => toggleQrcode(false)}>
          <QrCode>
            <p>扫一下面二维码以分享该记账本</p>
            <img src={require('../assets/img/qrcode.png')} alt="网站二维码"/>
          </QrCode>
        </Drawer>
      }

      {
        showContact &&
        <Drawer closeDrawer={() => toggleContact(false)}>
          <Contact>
            <span style={{marginRight: 8}}>我的邮箱：</span>
            <a href="mailto:haixiang6123@gmail.com" target="_blank" rel="noopener noreferrer">
              haixiang6123@gmail.com
            </a>
          </Contact>
        </Drawer>
      }
    </Layout>
  )
}

export default Settings

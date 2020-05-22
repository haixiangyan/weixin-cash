import * as React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'

const Main = styled.div`
  flex-grow: 1;
`

const Settings: React.FC = () => {
  return (
    <Layout>
      <Main>设置</Main>
    </Layout>
  )
}

export default Settings

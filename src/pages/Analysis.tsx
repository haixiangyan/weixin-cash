import * as React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'

const Main = styled.div`
  flex-grow: 1;
`

const Analysis: React.FC = () => {
  return (
    <Layout>
      <Main>图表</Main>
    </Layout>
  )
}

export default Analysis

import React, {useEffect, useState} from 'react'
import styled, {ThemeProvider} from 'styled-components'
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Summary from './pages/Summary'
import Details from './pages/Details'
import theme from './theme'
import Analysis from './pages/Analysis/Analysis'
import Settings from './pages/Settings'

type TStyledApp = {
  height: number
}

const StyledApp = styled.div<TStyledApp>`
  position: relative;
  max-width: 480px;
  margin: 0 auto;
  background: #EDEDED;
  height: ${props => props.height + 'px'}
`

const App: React.FC = () => {
  const [height, setHeight] = useState(window.innerHeight)

  const onResize = () => {
    setHeight(window.innerHeight * 0.01)
  }

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return window.removeEventListener('resize', onResize)
  })

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <StyledApp height={height}>
          <Switch>
            <Route exact path="/">
              <Summary/>
            </Route>
            <Route path="/analysis">
              <Analysis/>
            </Route>
            <Route path="/settings">
              <Settings/>
            </Route>
            <Route path="/record/:id">
              <Details/>
            </Route>
          </Switch>
        </StyledApp>
      </Router>
    </ThemeProvider>
  );
}

export default App;

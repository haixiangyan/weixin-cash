import React from 'react';
import styled, {ThemeProvider} from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Summary from './pages/Summary'
import Details from './pages/Details'
import theme from './theme'
import Analysis from './pages/Analysis'
import Settings from './pages/Settings'

const StyledApp = styled.div`
  position: relative;
  max-width: 480px;
  margin: 0 auto;
  background: #EDEDED;
  height: 100vh;
`

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <StyledApp>
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

import React from 'react';
import styled, {ThemeProvider} from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Summary from './pages/Summary'
import theme from './theme'

const StyledApp = styled.div`
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
            <Route path="/eee">
              <div>hello</div>
            </Route>
          </Switch>
        </StyledApp>
      </Router>
    </ThemeProvider>
  );
}

export default App;

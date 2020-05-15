import React from 'react';
import styled, {ThemeProvider} from 'styled-components'
import Summary from './pages/Summary'
import theme from './theme/ThemeContext'

const StyledApp = styled.div`
  max-width: 540px;
  margin: 0 auto;
  background: #EDEDED;
  height: 100vh;
`

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <Summary/>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;

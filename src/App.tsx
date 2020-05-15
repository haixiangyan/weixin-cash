import React from 'react';
import styled from 'styled-components'
import Summary from './pages/Summary'

const StyledApp = styled.div`
  max-width: 540px;
  margin: 0 auto;
  background: #EDEDED;
  height: 100vh;
`

const App: React.FC = () => {
  return (
    <StyledApp>
      <Summary/>
    </StyledApp>
  );
}

export default App;

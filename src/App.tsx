import React from 'react';
import { Box } from './utils/Box';
import { GlobalStyle } from './global-styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Box as="main">
        <p>cra-skochdev-template-ts is working</p>
      </Box>
    </>
  );
}

export default App;

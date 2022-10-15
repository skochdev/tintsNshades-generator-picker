import React from 'react';
import { Box } from '../../utils/Box';
import { GlobalStyle } from '../../global-styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Box as="main">
        <Box
          as="p"
          bg={{ xs: 'blue', sm: 'tomato', md: 'green', lg: 'pink' }}
          fontSize={{ xs: 'xs', sm: 'm', md: 'l', lg: 'xl' }}
          textAlign="center"
          width="100%"
          p={{ xs: 2, sm: 4, md: 5, lg: 6 }}
          m="50px auto">
          It's alive!
        </Box>
      </Box>
    </>
  );
}

export default App;

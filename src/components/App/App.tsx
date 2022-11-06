import React, { SyntheticEvent, useState } from 'react';
import { Box } from '../../utils/Box';
import { GlobalStyle } from '../../global-styles/GlobalStyle';

import Values from 'values.js';
import SingleColor from '../SingleColor/SingleColor';
import styled from 'styled-components/macro';

function App() {
  const [color, setColor] = useState('#FF0000');
  const [error, setError] = useState(false);
  const [colorValues, setColorValues] = useState(() =>
    new Values('#68d934').all(10)
  );

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      setError(false);
      let colors = new Values(color).all(20);
      setColorValues(colors as []);
    } catch (error) {
      console.log('Wrong color', error);
      setError(true);
    }
  };

  const handleChange = (e: SyntheticEvent) => {
    setColor((e.target as HTMLInputElement).value);
  };

  return (
    <>
      <GlobalStyle />
      <Box as="main">
        <Box
          as="section"
          width="100%"
          p={{ xs: 1, sm: 2, md: 4, lg: 6 }}
          m="50px auto">
          <h1>Generate shades and tints</h1>
          <form onSubmit={handleSubmit}>
            <label>
              <input
                type="text"
                value={color}
                onChange={handleChange}
                placeholder="Paste a hex color, like #fff"
                className={`${error ? 'error' : null}`}
              />
            </label>
            <button type="submit">Generate</button>
          </form>
        </Box>

        <Box
          as="section"
          width="100%"
          p={{ xs: 1, sm: 2, md: 4, lg: 6 }}
          m="50px auto">
          <StyledWrapper>
            {colorValues.map((color, index) => {
              console.log(color);
              return (
                <li key={index}>
                  <SingleColor color={color} index={index} />
                </li>
              );
            })}
          </StyledWrapper>
        </Box>
      </Box>
    </>
  );
}

export default App;

const StyledWrapper = styled.ul`
  display: flex;
  flex-flow: wrap;
  justify-content: left;
  li {
    flex: 0 1 33.3333%;
  }
`;

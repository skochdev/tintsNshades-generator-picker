import styled from 'styled-components/macro';

export const Color = styled.div`
  min-width: 200px;
  height: 200px;
  position: relative;
`;

export const Alert = styled.div`
  text-align: center;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  color: #2a2a2a;
  background-color: #fff;
  border-radius: 100vw;
  padding: 5px 10px;
`;
/*

 background-color: ${({ color }) => {
    console.log(`${typeof color}`);
    `rgb(${color})`;
  }};*/

import * as S from './SingleColor.styled';
import React, { useEffect, useState } from 'react';

interface IProps {
  color: {
    weight: number;
    hex: string;
  };
  index: number;
}

const SingleColor = ({ color: { weight, hex } }: IProps) => {
  const [alert, setAlert] = useState(false);
  const hexFormatted = `#${hex}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 900);

    return () => clearTimeout(timeout);
  }, [alert]);

  const handleClick = () => {
    setAlert(true);
    window.navigator.clipboard.writeText(hexFormatted);
  };

  return (
    <article>
      <S.Color onClick={handleClick} style={{ backgroundColor: `#${hex}` }}>
        {alert && <S.Alert>Copied to clipboard</S.Alert>}
        <p>{hexFormatted}</p>
        <p>{weight}%</p>
      </S.Color>
    </article>
  );
};

export default SingleColor;

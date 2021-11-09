import React, { useState } from 'react';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';

const Spinner = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState('#76FA76');

  const override = css`
  display: block;
  position: absolute;
  top: 250px;
  left: 130px;
  border-color: #76FA76;
`;
  return (
    <ClipLoader color={color} loading={loading} css={override} size={100} />
  );
};

export default Spinner;

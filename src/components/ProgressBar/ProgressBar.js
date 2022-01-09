/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const cssVarsBySize = {
  small: {
    '--wrapper-height': '8px',
    '--wrapper-border-radius': '4px',
    '--wrapper-padding': 0,
  },
  medium: {
    '--wrapper-height': '12px',
    '--wrapper-border-radius': '4px',
    '--wrapper-padding': 0,
  },
  large: {
    '--wrapper-height': '24px',
    '--wrapper-border-radius': '8px',
    '--wrapper-padding': '4px',
  },
};

const Wrapper = styled.div`
  height: var(--wrapper-height);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--wrapper-border-radius);
  padding: var(--wrapper-padding);
`;

// This container component exists to round the progress bar fill
// at the left / 0% end and "as-needed" on the right end
// only as it approaches 100%.
const ProgressFillContainer = styled.div`
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  width: ${(props) => props.value}%;
  height: 100%;
  background-color: ${COLORS.primary};
`;

const ProgressBar = ({ value, size }) => {
  if (!(size in cssVarsBySize)) {
    throw new Error(`Invalid size: ${size}`);
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={cssVarsBySize[size]}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <ProgressFillContainer>
        <ProgressFill value={value} />
      </ProgressFillContainer>
    </Wrapper>
  );
};

export default ProgressBar;

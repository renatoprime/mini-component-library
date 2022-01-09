import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const iconParamsByInputSize = {
  small: {
    size: 16,
    strokeWidth: 1,
  },
  large: {
    size: 24,
    strokeWidth: 2,
  },
};

const cssVarsByInputSize = {
  small: {
    '--input-height': '24px',
    '--underline-thickness': '1px',
    '--font-size': `${14 / 16}rem`,
    '--input-left-padding': `${iconParamsByInputSize.small.size + 8}px`,
  },
  large: {
    '--input-height': '36px',
    '--underline-thickness': '2px',
    '--font-size': `${18 / 16}rem`,
    '--input-left-padding': `${iconParamsByInputSize.large.size + 12}px`,
  },
};

const Wrapper = styled.div`
  position: relative;
  width: ${(props) => props.width}px;
  height: var(--input-height);
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }

  /* This pseudo-element serves as the underline for the input. */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: var(--underline-thickness);
    background-color: ${COLORS.black};
    border-radius: 4px;
  }
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  color: inherit;
  top: 0;
  bottom: 0;
  margin: auto 0;
  pointer-events: none;
`;

const StyledInput = styled.input`
  border: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-weight: 700;
  color: inherit;
  background-color: transparent;
  font-size: var(--font-size);
  padding-left: var(--input-left-padding);

  &:focus {
    outline-offset: 2px;
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  if (!(size in cssVarsByInputSize)) {
    throw new Error(`Invalid size: ${size}`);
  }

  const iconParams = iconParamsByInputSize[size];
  const cssVars = cssVarsByInputSize[size];

  return (
    <Wrapper style={cssVars} width={width} size={size}>
      <StyledIcon
        id={icon}
        aria-hidden
        strokeWidth={iconParams.strokeWidth}
        size={iconParams.size}
      />
      <label>
        <StyledInput placeholder={placeholder} size={size} />
        <VisuallyHidden as="span">{label}</VisuallyHidden>
      </label>
    </Wrapper>
  );
};

export default IconInput;
